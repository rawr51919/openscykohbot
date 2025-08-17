const { PermissionsBitField, ChannelType } = require("discord.js");
const tools = require("discord.js-tools");

module.exports = {
  name: "purge",
  description: "Delete messages in DMs, group DMs, or server channels. Requires MANAGE_MESSAGES in guilds.",

  async execute(message) {
    try {
      const args = message.content.trim().split(/\s+/).slice(1);
      const amountArg = args[0];

      const intRegex = /^\d+$/;
      const amount = parseInt(amountArg, 10);
      const chanType = message.channel.type;
      const isDM = chanType === ChannelType.DM;
      const isGroupDM = chanType === ChannelType.GroupDM;

      const hasManage =
        message.member?.permissions.has(PermissionsBitField.Flags.ManageMessages) ||
        message.guild?.members.me.permissions.has(PermissionsBitField.Flags.ManageMessages);

      // Help
      if (amountArg === "help") {
        return message.channel.send(
          "Help for `&purge`:\n" +
          "Specify the number of messages to delete.\n" +
          "Example in guild: `&purge 150`\n" +
          "Example in DMs or group DMs (deletes bot messages only): `@OpenScykohBot purge 150`"
        );
      }

      // Invalid amount
      if (!amountArg || !intRegex.test(amountArg) || amount <= 0) {
        if (!isDM && !isGroupDM && hasManage) {
          await message.delete().catch(() => {});
          return message.channel.send("Please provide a valid number of messages to delete.")
            .then(msg => setTimeout(() => msg.delete().catch(() => {}), 3000));
        } else {
          return message.reply("You must provide a valid number of messages to delete.");
        }
      }

      // Helper to delete messages in batches of 100
      async function deleteInBatches(messages) {
        for (let i = 0; i < messages.length; i += 100) {
          const batch = messages.slice(i, i + 100);
          await Promise.all(batch.map(msg => msg.delete().catch(() => {})));
        }
      }

      // DMs or Group DMs: only delete bot messages
      if (isDM || isGroupDM) {
        let remaining = amount;
        let deletedCount = 0;

        while (remaining > 0) {
          const fetchLimit = remaining > 100 ? 100 : remaining;
          const messages = await message.channel.messages.fetch({ limit: fetchLimit });
          const botMessages = messages.filter(m => m.author.id === message.client.user.id).array();

          if (!botMessages.length) break;

          await deleteInBatches(botMessages);
          deletedCount += botMessages.length;
          remaining -= botMessages.length;

          if (botMessages.length < fetchLimit) break; // No more messages
        }

        return message.channel.send(
          `Successfully deleted ${deletedCount} message${deletedCount === 1 ? "" : "s"} of mine.`
        ).then(msg => setTimeout(() => msg.delete().catch(() => {}), 3000));
      }

      // Guild channel deletion
      if (!hasManage) {
        return message.reply(
          "Either you, the bot, or both are missing the MANAGE_MESSAGES permission."
        ).then(msg => setTimeout(() => msg.delete().catch(() => {}), 3000));
      }

      // Fetch in batches of 100 for guilds and use discord.js-tools
      let remaining = amount;
      while (remaining > 0) {
        const batchAmount = remaining > 100 ? 100 : remaining;
        tools.purge(message, message.client, batchAmount, { individualDelete: true });
        remaining -= batchAmount;
      }

      return message.channel.send(
        `Successfully deleted ${amount} message${amount === 1 ? "" : "s"}.`
      ).then(msg => setTimeout(() => msg.delete().catch(() => {}), 3000));

    } catch (err) {
      console.error(err);
      await message.channel.send("⚠️ An error occurred while purging messages.");
    }
  },
};

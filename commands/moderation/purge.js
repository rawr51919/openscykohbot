const { PermissionsBitField, ChannelType } = require("discord.js");
const tools = require("discord.js-tools");

module.exports = {
  name: "purge",
  description: "Delete messages in DMs, group DMs, or server channels. Requires MANAGE_MESSAGES in guilds.",

  async execute(message) {
    const args = message.content.trim().split(/\s+/).slice(1);
    const amountArg = args[0];
    const amount = parseInt(amountArg, 10);
    const chanType = message.channel.type;
    const isDM = chanType === ChannelType.DM;
    const isGroupDM = chanType === ChannelType.GroupDM;

    const hasManage =
      message.member?.permissions.has(PermissionsBitField.Flags.ManageMessages) ||
      message.guild?.members.me.permissions.has(PermissionsBitField.Flags.ManageMessages);

    const tempReply = async (content) => {
      const msg = await message.channel.send(content);
      setTimeout(() => msg.delete().catch(() => {}), 3000);
    };

    const deleteMessages = async (messages) => {
      for (let i = 0; i < messages.length; i += 100) {
        const batch = messages.slice(i, i + 100);
        await Promise.all(batch.map(m => m.delete().catch(() => {})));
      }
    };

    // Help command
    if (amountArg === "help") {
      return message.channel.send(
        "Help for `&purge`:\n" +
        "Specify the number of messages to delete.\n" +
        "Example in guild: `&purge 150`\n" +
        "Example in DMs or group DMs (deletes bot messages only): `@OpenScykohBot purge 150`"
      );
    }

    // Validate amount
    if (!amountArg || isNaN(amount) || amount <= 0) {
      if (!isDM && !isGroupDM && hasManage) {
        await message.delete().catch(() => {});
        return tempReply("Please provide a valid number of messages to delete.");
      }
      return message.reply("You must provide a valid number of messages to delete.");
    }

    // DM / Group DM purge
    const purgeDMs = async () => {
      let remaining = amount;
      let deletedCount = 0;

      while (remaining > 0) {
        const fetchLimit = Math.min(remaining, 100);
        const messages = await message.channel.messages.fetch({ limit: fetchLimit });
        const botMessages = messages.filter(m => m.author.id === message.client.user.id).array();
        if (!botMessages.length) break;

        await deleteMessages(botMessages);
        deletedCount += botMessages.length;
        remaining -= botMessages.length;
        if (botMessages.length < fetchLimit) break;
      }

      return tempReply(
        `Successfully deleted ${deletedCount} message${deletedCount === 1 ? "" : "s"} of mine.`
      );
    };

    // Guild purge
    const purgeGuild = async () => {
      if (!hasManage) {
        return tempReply(
          "Either you, the bot, or both are missing the MANAGE_MESSAGES permission."
        );
      }

      let remaining = amount;
      while (remaining > 0) {
        const batchAmount = Math.min(remaining, 100);
        await tools.purge(message, message.client, batchAmount, { individualDelete: true });
        remaining -= batchAmount;
      }

      return tempReply(`Successfully deleted ${amount} message${amount === 1 ? "" : "s"}.`);
    };

    // Run the appropriate purge inside try/catch with await
    try {
      if (isDM || isGroupDM) {
        await purgeDMs();
      } else {
        await purgeGuild();
      }
    } catch (err) {
      console.error(err);
      await message.channel.send("⚠️ An error occurred while purging messages.");
    }
  },
};

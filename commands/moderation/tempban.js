const { PermissionsBitField, ChannelType } = require("discord.js");

module.exports = {
  name: "tempban",
  description: "Temporarily ban a user for a specific time (ms). Requires BAN_MEMBERS permission.",
  guildOnly: true,

  async execute(message) {
    if ([ChannelType.DM, ChannelType.GroupDM].includes(message.channel.type)) {
      return message.channel.send("This command can only be used in servers.");
    }

    const args = message.content.trim().split(/\s+/).slice(1);
    const banMember = message.mentions.members.first();
    const timeMs = parseInt(args[1], 10);

    // Permission check
    const authorPerms = message.member.permissions.has(PermissionsBitField.Flags.BanMembers);
    const botPerms = message.guild.members.me.permissions.has(PermissionsBitField.Flags.BanMembers);
    if (!authorPerms || !botPerms) {
      return message.channel.send("Both you and the bot must have BAN_MEMBERS permission.");
    }

    // Argument validation
    if (!banMember) return message.channel.send("Please specify a user to ban.");
    if (!timeMs || isNaN(timeMs) || timeMs <= 0) {
      return message.channel.send("Please specify a valid ban duration in milliseconds.");
    }

    await message.channel.send(
      `Are you sure you want to ban **${banMember.user.tag}** for **${timeMs} ms**? Type \`accept\` within 5 seconds to confirm.`
    );

    try {
      await message.channel.awaitMessages({
        filter: response => response.author.id === message.author.id && response.content.toLowerCase() === "accept",
        max: 1,
        time: 5000,
        errors: ["time"],
      });

      // Ban the member
      await banMember.ban({ reason: `Temp ban by ${message.author.tag}` });

      // DM the user
      try {
        await banMember.send(`You have been banned from **${message.guild.name}** for ${timeMs} milliseconds.`);
      } catch {
        // Don't do anything
      }

      await message.channel.send(`${banMember.user.tag} has been temporarily banned.`);

      // Schedule unban
      setTimeout(async () => {
        try {
          await message.guild.members.unban(banMember.id);
          try {
            await banMember.send(`You have been unbanned from **${message.guild.name}** after ${timeMs} milliseconds.`);
          } catch {
            // Don't do anything
          }
          await message.author.send(`${banMember.user.tag} has been unbanned as scheduled.`);
        } catch (err) {
          console.error("Failed to unban member:", err);
        }
      }, timeMs);

    } catch {
      await message.channel.send("Ban canceled. You didn't type `accept` in time.");
    }
  },
};

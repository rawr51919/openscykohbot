const { stripIndents } = require("common-tags");
const { ChannelType } = require("discord.js");

module.exports = {
  name: "user",
  description: "Shows information about a user.",

  async execute(message, args) {
    const chan = message.channel;
    let targetUser;

    // Case 1: Mention
    if (message.mentions.users.size > 0) {
      targetUser = message.mentions.users.first();
    }
    // Case 2: ID or username in args
    else if (args.length > 0) {
      const search = args.join(" ").toLowerCase();
      targetUser =
        message.client.users.cache.get(search) ||
        message.guild?.members.cache.find(
          m =>
            m.user.username.toLowerCase() === search ||
            m.displayName.toLowerCase() === search
        )?.user;
    }
    // Case 3: Default to author
    if (!targetUser) {
      targetUser = message.author;
    }

    // --- Guild Text Channel ---
    if (chan.type === ChannelType.GuildText && message.guild) {
      const member = await message.guild.members.fetch(targetUser.id).catch(() => null);
      const presence = targetUser.presence || member?.presence;

      const reply = stripIndents`
        👤 User info for **${targetUser.tag}** ${targetUser.bot ? "(BOT)" : "(USER)"} in **${message.guild.name}**:
        🆔 User ID: **${targetUser.id}**
        🔗 Profile: ${targetUser}
        📡 Status: **${presence?.status?.toUpperCase() || "UNKNOWN"}**
        🎭 Nickname: **${member?.displayName || "None"}**
        📅 Account Created: **${targetUser.createdAt.toUTCString()}**
        📅 Joined Server: **${member?.joinedAt?.toUTCString() || "N/A"}**
        🖼️ Avatar: ${targetUser.displayAvatarURL({ size: 2048, dynamic: true })}
      `;
      return message.channel.send(reply);
    }

    // --- Direct Message ---
    else if (chan.type === ChannelType.DM) {
      const presence = targetUser.presence;

      const reply = stripIndents`
        👤 User info for **${targetUser.tag}**:
        🆔 User ID: **${targetUser.id}**
        🔗 Profile: ${targetUser}
        📡 Status: **${presence?.status?.toUpperCase() || "UNKNOWN"}**
        👤 Username: **${targetUser.username}**
        📅 Account Created: **${targetUser.createdAt.toUTCString()}**
        🖼️ Avatar: ${targetUser.displayAvatarURL({ size: 2048, dynamic: true })}
      `;
      return message.channel.send(reply);
    }

    // --- Group DM ---
    else if (chan.type === ChannelType.GroupDM) {
      const reply = stripIndents`
        👤 User info for **${targetUser.tag}**:
        🆔 User ID: **${targetUser.id}**
        🔗 Profile: ${targetUser}
        📡 Status: **${targetUser.presence?.status?.toUpperCase() || "UNKNOWN"}**
        📅 Account Created: **${targetUser.createdAt.toUTCString()}**
        🖼️ Avatar: ${targetUser.displayAvatarURL({ size: 2048, dynamic: true })}
      `;
      return message.channel.send(reply);
    }
  },
};

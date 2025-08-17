const { stripIndents } = require("common-tags");
const { ChannelType, PresenceUpdateStatus, ActivityType } = require("discord.js");

module.exports = {
  name: "server",
  description: "Shows info about the current server.",
  async execute(message) {
    const chan = message.channel;

    if (chan.type === ChannelType.DM) {
      return message.reply("❌ You can't use this command in a DM.");
    }

    else if (chan.type === ChannelType.GuildText && message.guild) {
      const verLevel = {
        0: "0 (Unrestricted)",
        1: "1 (Email Verification)",
        2: "2 (On Discord for >5 minutes)",
        3: "3 (On server for >10 minutes)",
        4: "4 (Phone Verification)",
      };

      // Count channel types
      const textChannels = message.guild.channels.cache.filter(ch => ch.type === ChannelType.GuildText);
      const voiceChannels = message.guild.channels.cache.filter(ch => ch.type === ChannelType.GuildVoice);
      const categoryChannels = message.guild.channels.cache.filter(ch => ch.type === ChannelType.GuildCategory);

      // Fetch members for accurate presence info
      await message.guild.members.fetch();

      const stats = { online: 0, idle: 0, dnd: 0, offline: 0, streaming: 0, bot: 0 };

      message.guild.members.cache.forEach(member => {
        const presence = member.presence;
        if (presence) {
          if (presence.status === PresenceUpdateStatus.Online) stats.online++;
          if (presence.status === PresenceUpdateStatus.Idle) stats.idle++;
          if (presence.status === PresenceUpdateStatus.Dnd) stats.dnd++;
          if (presence.status === PresenceUpdateStatus.Offline) stats.offline++;

          if (presence.activities.some(a => a.type === ActivityType.Streaming)) {
            stats.streaming++;
          }
        } else {
          stats.offline++;
        }

        if (member.user.bot) stats.bot++;
      });

      const reply = stripIndents`
        📊 Server info for **${message.guild.name}**:
        🆔 Server ID: **${message.guild.id}**
        👥 Members: **${message.guild.memberCount}**
        ✅ Online: **${stats.online}**
        🌙 Idle: **${stats.idle}**
        ⛔ DnD: **${stats.dnd}**
        🕶️ Offline: **${stats.offline}**
        🎥 Streaming: **${stats.streaming}**
        🤖 Bots: **${stats.bot}**
        👑 Owner ID: **${message.guild.ownerId}**
        💬 Text Channels: **${textChannels.size}**
        🔊 Voice Channels: **${voiceChannels.size}**
        📂 Categories: **${categoryChannels.size}**
        📺 Total Channels: **${message.guild.channels.cache.size}**
        🎭 Roles: **${message.guild.roles.cache.size}**
        📅 Created On: **${message.guild.createdAt.toUTCString()}**
        🔒 Verification Level: **${verLevel[message.guild.verificationLevel]}**
        🌍 Region/Locale: **${message.guild.preferredLocale}**
        🖼️ Server Icon: ${message.guild.iconURL() || "None"}
      `;
      await message.channel.send(reply);
    }

    else if (chan.type === ChannelType.GroupDM) {
      // Group DM info
      const icon = chan.iconURL();
      const reply = stripIndents`
        👥 Group DM info for **${chan.name || "Group DM"}**:
        🆔 ID: **${chan.id}**
        👤 Members: **${chan.recipients?.size || "N/A"}**
        📅 Created On: **${chan.createdAt || "Unknown"}**
        🖼️ Icon: ${icon || "None"}
      `;
      await message.channel.send(reply);
    }
  },
};

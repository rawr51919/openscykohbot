const { ChannelType } = require("discord.js");

module.exports = {
  name: "groupdmpfp",
  description: "Shows the icon of the group DM you're currently in (note: limited by Discord API).",
  async execute(message, args) {
    // dummy code
    args?.valueOf();

    // actual code
    const chan = message.channel;

    if (chan.type !== ChannelType.GroupDM) {
      return message.channel.send("❌ Please use this command inside a group DM.");
    }

    const icon = chan.iconURL();
    if (icon) {
      return message.reply(`${chan.name || "This group DM"}'s icon is: ${icon}`);
    } else {
      return message.reply("ℹ️ This group DM doesn't have an icon.");
    }
  },
};

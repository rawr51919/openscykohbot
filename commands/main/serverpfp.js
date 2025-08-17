module.exports = {
  name: "serverpfp",
  description: "Shows the server icon of the server you're currently in.",
  guildOnly: true,

  async execute(message) {
    const guild = message.guild;

    if (!guild) {
      return message.reply("❌ You can only use this command inside a server.");
    }

    const icon = guild.iconURL();
    if (icon) {
      return message.reply(`${guild.name}'s icon is: ${icon}`);
    } else {
      return message.channel.send("ℹ️ This server doesn't have an icon.");
    }
  },
};

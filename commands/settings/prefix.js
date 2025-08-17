class ChangePrefix {
  constructor(options = {}) {
    this.name = "changeprefix";
    this.description = "Change the bot's command prefix for this server. Admin-only.";
    this.allowedUsers = options.allowedUsers || ["324661689972686849"];
    this.defaultPrefix = options.defaultPrefix || "&";

    // In-memory storage
    this.guildPrefixes = {};
  }

  async execute(message) {
    if (!this.allowedUsers.includes(message.author.id)) {
      return message.reply("You don't have permission to use this command.");
    }

    if (!message.guild) {
      return message.channel.send("This command can only be used in servers.");
    }

    const args = message.content.split(/ +/).slice(1);
    const newPrefix = args[0];

    if (!newPrefix || newPrefix.length > 5) {
      return message.channel.send("Please provide a valid prefix (1-5 characters).");
    }

    // Update in-memory prefix
    this.guildPrefixes[message.guild.id] = newPrefix;
    message.guild.commandPrefix = newPrefix;

    message.channel.send(`Command prefix for this server set to \`${newPrefix}\``);
  }

  getPrefix(guildId) {
    return this.guildPrefixes[guildId] || this.defaultPrefix;
  }
}

module.exports = ChangePrefix;

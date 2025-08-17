class ChangeOnlineStatus {
  constructor(client) {
    this.client = client;
    this.name = "onlinestatus";
    this.description = "Change the bot's online status. Only a select few can use this command.";
  }

  async execute(message) {
    const allowedUserId = "324661689972686849";
    const args = message.content.split(/ +/).slice(1); // remove command itself
    const statusArg = args[0]?.toLowerCase();

    if (!statusArg) {
      return message.channel.send("You must specify a status: online, away/idle, invisible/offline, or dnd.");
    }

    if (message.author.id !== allowedUserId) {
      return message.reply("You don't have permission to use this command.");
    }

    const statusMap = {
      online: "online",
      idle: "idle",
      away: "idle",
      dnd: "dnd",
      invisible: "invisible",
      offline: "invisible",
    };

    const displayMap = {
      online: "Online",
      idle: "Away/Idle",
      dnd: "Do Not Disturb",
      invisible: "Invisible/Offline",
    };

    const newStatus = statusMap[statusArg];

    if (!newStatus) {
      return message.channel.send("You must specify either online, away/idle, invisible/offline, or dnd (Do Not Disturb).");
    }

    try {
      await this.client.user.setStatus(newStatus);
      await message.channel.send(`My online status is now: **${displayMap[newStatus]}**.`);
    } catch (err) {
      console.error(err);
      message.channel.send(`Error setting status: ${err.message}`);
    }
  }
}

module.exports = ChangeOnlineStatus;

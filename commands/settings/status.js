const ACTIVITY_TYPES = {
  playing: 0,
  streaming: 1,
  listening: 2,
  watching: 3,
  competing: 5, // Added Competing
};

const STATUS_LABELS = {
  online: "Online",
  dnd: "Do Not Disturb",
  idle: "Away/Idle",
  invisible: "Invisible/Offline",
};

class ChangeOverallStatus {
  constructor(client) {
    this.client = client;
    this.name = "status";
    this.description =
      "Change the bot's overall status. Only a select few are allowed to use this command.";
  }

  async execute(message) {
    const allowedUserId = "324661689972686849";
    if (message.author.id !== allowedUserId) {
      return message.reply("you don't have permission to use this command.");
    }

    const args = message.content.split(/ +/).slice(1);
    const statusArg = args[0]?.toLowerCase();
    const activityArg = args[1]?.toLowerCase();
    const activityText = args.slice(2).join(" ");

    if (!statusArg || !activityArg) {
      return message.reply(
        "You must provide both the online status and activity.\n" +
          "Use `&onlinestatus` or `&activity` if you want to change only one."
      );
    }

    const validStatuses = ["online", "dnd", "idle", "away", "invisible", "offline"];
    const mappedStatus = {
      online: "online",
      dnd: "dnd",
      idle: "idle",
      away: "idle",
      invisible: "invisible",
      offline: "invisible",
    };

    if (!validStatuses.includes(statusArg)) {
      return message.reply(
        "Invalid online status. Choose from: online, away/idle, invisible/offline, or dnd."
      );
    }

    const validActivities = Object.keys(ACTIVITY_TYPES).concat(["remove"]);
    if (!validActivities.includes(activityArg)) {
      return message.reply(
        "Invalid activity type. Choose from: playing, streaming, listening, watching, competing, or remove."
      );
    }

    // Set online status
    const finalStatus = mappedStatus[statusArg];
    await this.client.user.setStatus(finalStatus);

    // Set activity
    if (activityArg === "remove") {
      await this.client.user.setPresence({ activities: [] });
      return message.channel.send(
        `My online status is now: **${STATUS_LABELS[finalStatus]}** and I have no activity.`
      );
    }

    if (!activityText) {
      return message.reply(`You must provide activity text for type **${activityArg}**.`);
    }

    await this.client.user.setPresence({
      activities: [
        {
          name: activityText,
          type: ACTIVITY_TYPES[activityArg],
        },
      ],
    });

    message.channel.send(
      `My online status is now: **${STATUS_LABELS[finalStatus]}** and my activity is: **${activityArg.charAt(0).toUpperCase() + activityArg.slice(1)}** ${activityText}.`
    );
  }
}

module.exports = ChangeOverallStatus;

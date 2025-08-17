const { ActivityType } = require("discord.js");

const ACTIVITY_TYPES = {
  playing: ActivityType.Playing,
  streaming: ActivityType.Streaming,
  listening: ActivityType.Listening,
  watching: ActivityType.Watching,
  competing: ActivityType.Competing,
};

class ChangeActivity {
  constructor(client) {
    this.client = client;
    this.name = "activity";
    this.description = "Change the bot's Rich Presence status. Only a select few can use this.";
  }

  async execute(message) {
    const allowedUserId = "324661689972686849";

    if (message.author.id !== allowedUserId) {
      return message.reply("You don't have permission to use this command.");
    }

    const args = message.content.split(/ +/).slice(1); // remove command itself
    const action = args[0]?.toLowerCase();
    const activityText = args.slice(1).join(" ");

    if (action === "remove") {
      await this.client.user.setPresence({ activities: [], status: "online" });
      return message.channel.send("I now have no status.");
    }

    if (!Object.hasOwn(ACTIVITY_TYPES, action)) {
      return message.channel.send(
        "You must specify `playing`, `watching`, `listening`, `streaming`, or `competing`.\n" +
        "You can also specify `remove` to clear the current status."
      );
    }

    if (!activityText) {
      return message.channel.send(`What am I supposed to be ${action}?`);
    }

    await this.client.user.setPresence({
      activities: [{ name: activityText, type: ACTIVITY_TYPES[action] }],
      status: "online",
    });

    const labels = {
      playing: "Playing",
      streaming: "Streaming",
      listening: "Listening to",
      watching: "Watching",
      competing: "Competing in",
    };

    await message.channel.send(`My status is now: **${labels[action]}** ${activityText}.`);
  }
}

module.exports = ChangeActivity;

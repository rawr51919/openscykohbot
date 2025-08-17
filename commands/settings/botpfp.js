const fetch = require("node-fetch");

class ChangePFP {
  constructor(client) {
    this.client = client;
    this.name = "botpfp";
    this.description = "Change the bot's PFP. Only a select few can use this command.";
  }

  async execute(message) {
    const allowedUserId = "324661689972686849";
    const args = message.content.split(/ +/).slice(1); // remove command itself
    const url = args[0];

    if (!url) {
      return message.channel.send("You need to provide an image URL.");
    }

    if (message.author.id !== allowedUserId) {
      return message.reply("You don't have permission to use this command.");
    }

    try {
      // Check if URL is reachable and returns an image
      const res = await fetch(url, { method: "HEAD" });
      const contentType = res.headers.get("content-type");

      if (!res.ok || !contentType?.startsWith("image")) {
        return message.channel.send("You need a valid image URL to use as an avatar/profile picture.");
      }

      // Set the bot avatar
      await this.client.user.setAvatar(url);
      await message.channel.send("The bot's avatar/profile picture has been successfully changed.");
    } catch (err) {
      console.error(err);
      message.channel.send(`Error changing avatar: ${err.message}`);
    }
  }
}

module.exports = ChangePFP;

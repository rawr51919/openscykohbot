module.exports = {
  name: "userid",
  description: "Find a Discord user by their ID.",

  async execute(message) {
    const PREFIX = "!userid";
    const args = message.content.slice(PREFIX.length).trim().split(/\s+/);
    const userId = args[0];

    if (!userId) {
      await message.channel.send(
        "This command will allow you to see who has what user ID.\n" +
        "Example: `!userid 324661689972686849`\n" +
        "To find User IDs, enable Developer Mode in Discord's user settings, then right-click any user and click `Copy ID`."
      );
      return;
    }

    // Valid ID regex (17-19 digits)
    const idRegex = /^\d{17,19}$/;
    if (!idRegex.test(userId)) {
      await message.reply("You provided an invalid user ID. Please try again with a valid one.");
      return;
    }

    try {
      const user = await message.client.users.fetch(userId);
      if (user) {
        await message.channel.send(`Found user: <@${user.id}> (${user.tag}).`);
      } else {
        await message.reply("User not found in this bot's cache or guilds.");
      }
    } catch (err) {
      await message.reply("User not found or invalid ID. " + err.message);
    }
  },
};

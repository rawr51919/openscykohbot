module.exports = {
  name: "reeee",
  description: "Make the bot REEEE dynamically, with optional length.",

  async execute(message) {
    // Parse optional length argument
    const PREFIX = message.guild.commandPrefix || "&" + module.exports.name;
    const args = message.content.slice(PREFIX.length).trim().split(/\s+/);
    let length = parseInt(args[0], 10);

    if (isNaN(length) || length <= 0) {
      length = 15; // default length if no valid number provided
    }

    // Generate REEE string
    let reee = "R" + "E".repeat(length);

    // Discord message limit is 2000 characters
    const CHUNK_SIZE = 2000;

    for (let i = 0; i < reee.length; i += CHUNK_SIZE) {
      const chunk = reee.slice(i, i + CHUNK_SIZE);
      await message.channel.send(chunk);
    }
  },
};

module.exports = {
  name: "reverse",
  description: "Reverses any text you input into this command.",

  async execute(message) {
    // Determine the dynamic prefix slice
    const PREFIX = message.guild.commandPrefix || "&" + module.exports.name;
    const args = message.content.slice(PREFIX.length).trim();

    if (!args) {
      await message.channel.send("Please provide some text to reverse!");
      return;
    }

    // Reverse the string
    const reversed = args.split("").reverse().join("");

    // Discord message limit is 2000 characters
    const CHUNK_SIZE = 2000;
    for (let i = 0; i < reversed.length; i += CHUNK_SIZE) {
      const chunk = reversed.slice(i, i + CHUNK_SIZE);
      await message.channel.send(chunk);
    }
  },
};

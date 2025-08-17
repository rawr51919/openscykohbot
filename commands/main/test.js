module.exports = {
  name: "test",
  description: "Check to see if OpenScykohBot is online and responding.",
  async execute(message) {
    await message.channel.send("✅ I'm online and responding!");
  },
};

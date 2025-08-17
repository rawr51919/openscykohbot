module.exports = {
  name: "say",
  description: "Make the bot sass at you if you try to control it.",

  async execute(message) {
    const OWNER_ID = "324661689972686849";
    const PREFIX = message.guild.commandPrefix || "&" + module.exports.name;

    if (message.author.id !== OWNER_ID) {
      await message.channel.send("You can't control me!");
      return;
    }

    const text = message.content.slice(PREFIX.length).trim();
    if (!text) {
      await message.channel.send("You didn't give me anything to say!");
      return;
    }

    await message.channel.send(text);
  },
};

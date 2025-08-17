const { Random, MersenneTwister19937 } = require("random-js");
const random = new Random(MersenneTwister19937.autoSeed());

module.exports = {
  name: "ship",
  description: "Ship whatever you want with whatever you want.",

  async execute(message) {
    const PREFIX = message.guild.commandPrefix || "&" + module.exports.name;
    const args = message.content.slice(PREFIX.length).trim().split(",");

    if (!args[0]) {
      await message.channel.send(
        "I can't ship literally nothing with literally nothing!\nUsage: `!ship person1, person2`"
      );
      return;
    }

    if (!args[1]) {
      await message.channel.send(
        `I can't ship ${args[0].trim()} with literally nothing!\nUsage: \`!ship person1, person2\``
      );
      return;
    }

    const person1 = args[0].trim();
    const person2 = args[1].trim();
    const chance = random.integer(0, 100);

    let ratingEmoji = "";
    let ratingText = "";

    if (chance === 0) {
      ratingText = "No match";
      ratingEmoji = "💔";
    } else if (chance <= 15) {
      ratingText = "Terrible...";
      ratingEmoji = "😢";
    } else if (chance <= 30) {
      ratingText = "Bad...";
      ratingEmoji = "☹️";
    } else if (chance <= 40) {
      ratingText = "Meh";
      ratingEmoji = "😐";
    } else if (chance <= 50) {
      ratingText = "Alright?";
      ratingEmoji = "😕";
    } else if (chance <= 65) {
      ratingText = "Good";
      ratingEmoji = "🙂";
    } else if (chance === 69) {
      ratingText = "HOT";
      ratingEmoji = "😏";
    } else if (chance <= 75) {
      ratingText = "Amazing!";
      ratingEmoji = "😘";
    } else if (chance <= 99) {
      ratingText = "Outstanding!";
      ratingEmoji = "😍";
    } else if (chance === 100) {
      ratingText = "**I SHIP IT!**";
      ratingEmoji = "🚢";
    }

    const finalPercent = random.integer(0, 100);
    await message.channel.send(`${person1} x ${person2}\n**${finalPercent}%** ${ratingText} ${ratingEmoji}`);
  },
};

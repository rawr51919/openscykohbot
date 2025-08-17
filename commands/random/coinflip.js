const { Random } = require("random-js");
const random = new Random();

module.exports = {
  name: "coinflip",
  description: "Flip a coin with OpenScykohBot.",
  aliases: ["flipcoin", "cf"],

  async execute(message) {
    const result = random.bool() ? "heads" : "tails";
    await message.channel.send(`${message.author} flipped a coin and got ${result}!`);
  }
};

const { Random } = require("random-js");
const random = new Random();

const eightballQuotes = [
  "Dude, really? The obvious answer is... erm... what was my line again?",
  "Um, yeah?",
  "No way, dude!",
  "Yes.",
  "Maybe you should ask again.",
  "Most likely not...",
  "Maybe...",
  "Heck yea, dude!",
  "WAHEY! Of course!",
  "What a load of buttcrud!",
  "Crud, no!",
  "I would say no.",
  "Well... I wouldn't say yes... but...",
  "Most likely.",
  "I would prefer to say yes.",
  "Why, no.",
  "That's pretty obvious, dude.",
  "Well, if you t-- *shuts down*",
  "*cough* Erm, y-yeah?",
  "Hold on, I'm thinking! :thinking:",
  "*puts pineapple on a pizza* Hah!",
  "No."
];

module.exports = {
  name: "8ball",
  description: "Turns the bot into a magic 8-ball.",
  aliases: ["eightball"],

  async execute(message) {
    const choice = eightballQuotes[random.integer(0, eightballQuotes.length - 1)];
    await message.channel.send(choice);
  }
};

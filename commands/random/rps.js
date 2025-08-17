const { Random } = require("random-js");
const random = new Random();

module.exports = {
  name: "rps",
  description: "Play Rock, Paper, Scissors (plus Tornado & Hurricane) with the bot.",

  async execute(message) {
    const PREFIX = "!rps";
    const args = message.content.slice(PREFIX.length).trim().split(/\s+/);
    const choice = args[0]?.toLowerCase();

    const validChoices = ["rock", "paper", "scissors", "tornado", "hurricane"];
    if (!choice || !validChoices.includes(choice)) {
      await message.channel.send(
        "You need to specify Rock, Paper, Scissors, Tornado, or Hurricane.\n" +
        "Example: `!rps rock`"
      );
      return;
    }

    // Special cases for Tornado/Hurricane
    if (choice === "tornado") {
      await message.channel.send(":dash: I choose hurricane!");
      return;
    }
    if (choice === "hurricane") {
      await message.channel.send(":cloud_tornado: I choose tornado!");
      return;
    }

    // Rock, Paper, Scissors logic
    const outcomes = ["rock", "paper", "scissors"];
    const botChoice = outcomes[random.integer(0, outcomes.length - 1)];

    let resultMessage = `I choose ${botChoice}. `;
    if (choice === botChoice) {
      resultMessage += "It's a tie!";
    } else if (
      (choice === "rock" && botChoice === "scissors") ||
      (choice === "paper" && botChoice === "rock") ||
      (choice === "scissors" && botChoice === "paper")
    ) {
      resultMessage += "You win!";
    } else {
      resultMessage += "I win!";
    }

    // Emoji mapping
    const emojiMap = {
      rock: ":fist::skin-tone-1:",
      paper: ":hand_splayed::skin-tone-1:",
      scissors: ":v::skin-tone-1:",
    };

    await message.channel.send(`${emojiMap[botChoice]} ${resultMessage}`);
  },
};

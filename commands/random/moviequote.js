const { Random } = require("random-js");
const random = new Random();

module.exports = {
  name: "moviequote",
  description: "Displays a random movie quote.",

  async execute(message) {
    const images = [
      "🎬", // optional placeholder image/icon
    ];

    const quotes = [
      "No, Luke... I am your father.",
      "Reach for the sky!",
      "The Force is strong with this one.",
      "I'll be back!",
      // add more quotes as desired
    ];

    // Pick a random image and quote
    const image = images[random.integer(0, images.length - 1)];
    const quote = quotes[random.integer(0, quotes.length - 1)];

    // Combine into a single message
    const fullMessage = `${image}\n${quote}`;

    // Split into 2000-character chunks to avoid Discord limits
    const CHUNK_SIZE = 2000;
    for (let i = 0; i < fullMessage.length; i += CHUNK_SIZE) {
      await message.channel.send(fullMessage.slice(i, i + CHUNK_SIZE));
    }
  },
};

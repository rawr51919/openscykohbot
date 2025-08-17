const { Random } = require("random-js");
const random = new Random();

module.exports = {
  name: "crusade",
  description: "Start a crusade.",

  async execute(message) {
    const images = [
      "No images yet.",
    ];

    const quotes = [
      "DEUS VULT",
      "WE MUST BRING THE HOLY LAND TO... wherever this is.",
      // additional quotes can be added here
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

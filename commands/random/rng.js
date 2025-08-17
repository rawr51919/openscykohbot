const { Random } = require("random-js");

module.exports = {
  name: "rng",
  description: "Generates random numbers using a selected RNG engine.",

  async execute(message) {
    // Parse arguments
    const PREFIX = message.guild.commandPrefix || "&" + module.exports.name;
    const args = message.content.slice(PREFIX.length).trim().split(/\s+/);
    const engineArg = args[0]?.toLowerCase() || "nm";
    const numbers = Math.min(parseInt(args[1], 10) || 1, Number.MAX_SAFE_INTEGER);
    const rangeBegin = parseInt(args[2], 10) || 1;
    const rangeEnd = parseInt(args[3], 10) || 6;

    // Show help if requested
    if (engineArg === "help") {
      await message.channel.send(
        `**Help for rng**:
			Specify the engine and range.
			Example: \`!rng nm 2 0 10\` generates 2 numbers between 0 and 10 using the NativeMath engine.

			**Engines**:
			- \`nm\` NativeMath (Math.random())
			- \`mt\` MersenneTwister19937
			- \`nc\` NodeCrypto
			- \`bc\` BrowserCrypto`
      );
      return;
    }

    // Initialize selected RNG engine
    let random;
    switch (engineArg) {
    case "mt":
      random = new Random(Random.MersenneTwister19937.autoSeed());
      break;
    case "nc":
      random = new Random(Random.nodeCrypto);
      break;
    case "bc":
      random = new Random(Random.browserCrypto);
      break;
    case "nm":
    default:
      random = new Random();
    }

    // Generate numbers
    const numberArray = [];
    let total = 0;

    for (let i = 0; i < numbers; i++) {
      const value = rangeBegin === 1 ? random.die(rangeEnd) : random.integer(rangeBegin, rangeEnd);
      numberArray.push(value);
      total += value;
    }

    // Prepare output
    const output = numberArray
      .map((num, idx) => `Number #${idx + 1}: ${num}`)
      .join("\n") + (numbers > 1 ? `\nTotal sum: ${total}` : "");

    // Send output in chunks of 2000 characters
    const CHUNK_SIZE = 2000;
    for (let i = 0; i < output.length; i += CHUNK_SIZE) {
      const chunk = output.slice(i, i + CHUNK_SIZE);
      await message.channel.send(chunk);
    }
  },
};

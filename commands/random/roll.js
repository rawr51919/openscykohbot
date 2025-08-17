const { Random } = require("random-js");

module.exports = {
  name: "roll",
  description:
    "Roll dice using various RNG engines, with custom sides and number of dice.",

  async execute(message) {
    // Parse arguments
    const PREFIX = message.guild.commandPrefix || "&" + module.exports.name;
    const args = message.content.slice(PREFIX.length).trim().split(/\s+/);
    const engineArg = args[0]?.toLowerCase() || "nm";
    const diceCount = Math.min(parseInt(args[1], 10) || 1, Number.MAX_SAFE_INTEGER);
    const sideBegin = parseInt(args[2], 10) || 1;
    const sideEnd = parseInt(args[3], 10) || 6;

    // Show help if requested
    if (engineArg === "help") {
      await message.channel.send(
        `**Help for roll**:
			Specify the engine, number of dice, and side range.
			Example: \`!roll nm 2 1 20\` rolls 2 dice with 1-20 sides using NativeMath.

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

    // Generate dice rolls
    const rolls = [];
    let total = 0;

    for (let i = 0; i < diceCount; i++) {
      const roll = sideBegin === 1
        ? random.die(sideEnd)
        : random.integer(sideBegin, sideEnd);
      rolls.push(roll);
      total += roll;
    }

    // Prepare output
    let output = rolls.map((r, idx) => `Die #${idx + 1}: ${r}`).join("\n");
    if (diceCount > 1) output += `\nTotal sum: ${total}`;

    // Send in chunks if too long
    const CHUNK_SIZE = 2000;
    for (let i = 0; i < output.length; i += CHUNK_SIZE) {
      await message.channel.send(output.slice(i, i + CHUNK_SIZE));
    }
  },
};

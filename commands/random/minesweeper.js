const Minesweeper = require("discord.js-minesweeper");

// In-memory cooldowns: { guildId: { userId: timestamp } }
const cooldowns = new Map();
const DEFAULT_COOLDOWN = 5000; // default cooldown in ms

module.exports = {
  name: "minesweeper",
  description: "Generate a Minesweeper board.",
  args: [
    { key: "rows", prompt: "How many rows?", type: "integer", min: 1, max: 12 },
    { key: "columns", prompt: "How many columns?", type: "integer", min: 1, max: 12 },
    { key: "mines", prompt: "How many mines?", type: "integer", min: 1 },
    { key: "emote", prompt: "Emoji for mines?", type: "string" },
    { key: "spacesArg", prompt: "Separate pieces with spaces? (yes/no)", type: "string" },
  ],
  defaultSettings: {
    rows: 5,
    columns: 5,
    mines: 5,
    emote: "💣",
    spaces: true,
    cooldown: DEFAULT_COOLDOWN,
  },

  async execute(message, { rows, columns, mines, emote, spacesArg }, serverSettings = {}) {
    const guildId = message.guild?.id || "dm";
    const userId = message.author.id;
    const cooldownTime = serverSettings.minesweeperCooldown ?? DEFAULT_COOLDOWN;

    // Initialize guild cooldown map
    if (!cooldowns.has(guildId)) cooldowns.set(guildId, new Map());
    const userCooldowns = cooldowns.get(guildId);

    // Check cooldown
    const lastUsed = userCooldowns.get(userId) || 0;
    const now = Date.now();
    if (now - lastUsed < cooldownTime) {
      const remaining = Math.ceil((cooldownTime - (now - lastUsed)) / 1000);
      return message.channel.send(
        `Please wait ${remaining} more second${remaining === 1 ? "" : "s"} before generating another Minesweeper board.`
      );
    }
    userCooldowns.set(userId, now);

    // Determine spaces setting
    const defaultSpaces = serverSettings.minesweeperSpaces ?? true;
    let spaces;
    if (spacesArg === "no") {
      spaces = false;
    } else if (spacesArg === "yes") {
      spaces = true;
    } else {
      spaces = defaultSpaces;
    }

    try {
      const minesweeper = new Minesweeper({ rows, columns, mines, emote, spaces });
      const board = minesweeper.start();
      if (board) {
        await message.channel.send(board);
      } else {
        await message.channel.send("You provided invalid data. Please try again.");
      }
    } catch (err) {
      console.error(err);
      await message.channel.send("An error occurred while generating the Minesweeper board.");
    }
  },
};

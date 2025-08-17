const { PermissionsBitField } = require("discord.js");

// All font tables
const FONT_TABLES = {
  fullwidth: {
    a: "ａ", b: "ｂ", c: "ｃ", d: "ｄ", e: "ｅ", f: "ｆ", g: "ｇ", h: "ｈ",
    i: "ｉ", j: "ｊ", k: "ｋ", l: "ｌ", m: "ｍ", n: "ｎ", o: "ｏ", p: "ｐ",
    q: "ｑ", r: "ｒ", s: "ｓ", t: "ｔ", u: "ｕ", v: "ｖ", w: "ｗ", x: "ｘ",
    y: "ｙ", z: "ｚ", A: "Ａ", B: "Ｂ", C: "Ｃ", D: "Ｄ", E: "Ｅ", F: "Ｆ",
    G: "Ｇ", H: "Ｈ", I: "Ｉ", J: "Ｊ", K: "Ｋ", L: "Ｌ", M: "Ｍ", N: "Ｎ",
    O: "Ｏ", P: "Ｐ", Q: "Ｑ", R: "Ｒ", S: "Ｓ", T: "Ｔ", U: "Ｕ", V: "Ｖ",
    W: "Ｗ", X: "Ｘ", Y: "Ｙ", Z: "Ｚ", 0: "０", 1: "１", 2: "２", 3: "３",
    4: "４", 5: "５", 6: "６", 7: "７", 8: "８", 9: "９", "!": "！", "@": "＠",
    "#": "＃", "$": "＄", "%": "％", "^": "＾", "&": "＆", "*": "＊", "(": "（",
    ")": "）", "'": "’", "\"": "”", "-": "－", "_": "＿", "+": "＋", "=": "＝",
    ";": "；", ":": "：", "[": "［", "]": "］", "{": "｛", "}": "｝", "|": "｜",
    "<": "＜", ">": "＞", "?": "？", "/": "／", "\\": "＼", ".": "．", ",": "，",
    "`": "‘", "~": "～", " ": "　"
  },
  chinese: {
    a: "卂", b: "乃", c: "匚", d: "刀", e: "乇", f: "下", g: "厶", h: "卄",
    i: "工", j: "丁", k: "长", l: "乚", m: "从", n: "𠘨", o: "口", p: "尸",
    q: "㔿", r: "尺", s: "丂", t: "丅", u: "凵", v: "リ", w: "山", x: "乂",
    y: "丫", z: "乙", A: "卂", B: "乃", C: "匚", D: "刀", E: "乇", F: "下",
    G: "厶", H: "卄", I: "工", J: "丁", K: "长", L: "乚", M: "从", N: "𠘨",
    O: "口", P: "尸", Q: "㔿", R: "尺", S: "丂", T: "丅", U: "凵", V: "リ",
    W: "山", X: "乂", Y: "丫", Z: "乙", 0: "〇", 1: "〡", 2: "己", 3: "ろ",
    4: "나", 5: "ら", 6: "万", 7: "フ", 8: "日", 9: "㔿", "!": "！", "(": "「",
    ")": "」", ";": "；", ":": "：", "<": "く", ">": "＞", "?": "？", ".": "。",
    ",": "、", " ": "　", "-": "一", "+": "十", "*": "六", "=": "二"
  },
  script: {
    a: "𝒶", b: "𝒷", c: "𝒸", d: "𝒹", e: "𝑒", f: "𝒻", g: "𝑔", h: "𝒽",
    i: "𝒾", j: "𝒿", k: "𝓀", l: "𝓁", m: "𝓂", n: "𝓃", o: "𝑜", p: "𝓅",
    q: "𝓆", r: "𝓇", s: "𝓈", t: "𝓉", u: "𝓊", v: "𝓋", w: "𝓌", x: "𝓍",
    y: "𝓎", z: "𝓏", A: "𝒜", B: "𝐵", C: "𝒞", D: "𝒟", E: "𝐸", F: "𝐹",
    G: "𝒢", H: "𝐻", I: "𝐼", J: "𝒥", K: "𝒦", L: "𝐿", M: "𝑀", N: "𝒩",
    O: "𝒪", P: "𝒫", Q: "𝒬", R: "𝑅", S: "𝒮", T: "𝒯", U: "𝒰", V: "𝒱",
    W: "𝒲", X: "𝒳", Y: "𝒴", Z: "𝒵", 0: "0", 1: "1", 2: "2", 3: "3",
    4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", "\"": "”", ",": ",",
    ".": ".", "!": "!", "?": "?", " ": " "
  },
  blocks1: {
    a: "🇦 ", b: "🇧 ", c: "🇨 ", d: "🇩 ", e: "🇪 ", f: "🇫 ", g: "🇬 ", h: "🇭 ",
    i: "ℹ ", j: "🇯 ", k: "🇰 ", l: "🇱 ", m: "🇲 ", n: "🇳 ", o: "🇴 ", p: "🇵 ",
    q: "🇶 ", r: "🇷 ", s: "🇸 ", t: "🇹 ", u: "🇺 ", v: "🇻 ", w: "🇼 ", x: "🇽 ",
    y: "🇾 ", z: "🇿 ", A: "🇦 ", B: "🇧 ", C: "🇨 ", D: "🇩 ", E: "🇪 ", F: "🇫 ",
    G: "🇬 ", H: "🇭 ", I: "🇮 ", J: "🇯 ", K: "🇰 ", L: "🇱 ", M: "🇲 ", N: "🇳 ",
    O: "🇴 ", P: "🇵 ", Q: "🇶 ", R: "🇷 ", S: "🇸 ", T: "🇹 ", U: "🇺 ", V: "🇻 ",
    W: "🇼 ", X: "🇽 ", Y: "🇾 ", Z: "🇿 ", 0: ":zero: ", 1: ":one: ", 2: ":two: ",
    3: ":three: ", 4: ":four: ", 5: ":five: ", 6: ":six: ", 7: ":seven: ",
    8: ":eight: ", 9: ":nine: ", "*": ":asterisk: ", "#": ":hash: ", "!": ":exclamation: ",
    "?": ":question: ", " ": "　"
  },
  blocks2: {
    a: "🇦 ", b: "🇧 ", c: "🇨 ", d: "🇩 ", e: "🇪 ", f: "🇫 ", g: "🇬 ", h: "🇭 ",
    i: "ℹ ", j: "🇯 ", k: "🇰 ", l: "🇱 ", m: "🇲 ", n: "🇳 ", o: "🇴 ", p: "🇵 ",
    q: "🇶 ", r: "🇷 ", s: "🇸 ", t: "🇹 ", u: "🇺 ", v: "🇻 ", w: "🇼 ", x: "🇽 ",
    y: "🇾 ", z: "🇿 ", A: "🇦 ", B: "🇧 ", C: "🇨 ", D: "🇩 ", E: "🇪 ", F: "🇫 ",
    G: "🇬 ", H: "🇭 ", I: "🇮 ", J: "🇯 ", K: "🇰 ", L: "🇱 ", M: "🇲 ", N: "🇳 ",
    O: "🇴 ", P: "🇵 ", Q: "🇶 ", R: "🇷 ", S: "🇸 ", T: "🇹 ", U: "🇺 ", V: "🇻 ",
    W: "🇼 ", X: "🇽 ", Y: "🇾 ", Z: "🇿 ", 0: ":zero: ", 1: ":one: ", 2: ":two: ",
    3: ":three: ", 4: ":four: ", 5: ":five: ", 6: ":six: ", 7: ":seven: ",
    8: ":eight: ", 9: ":nine: ", "*": ":asterisk: ", "#": ":hash: ", "!": ":grey_exclamation: ",
    "?": ":grey_question: ", " ": "　"
  },
  mirror: {
    a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ", f: "ɟ", g: "ƃ", h: "ɥ", i: "ı",
    j: "ɾ", k: "ʞ", l: "l", m: "ɯ", n: "u", o: "o", p: "d", q: "b", r: "ɹ",
    s: "s", t: "ʇ", u: "n", v: "ʌ", w: "ʍ", x: "x", y: "ʎ", z: "z",
    A: "ꓯ", B: "ꓭ", C: "ꓛ", D: "ꓷ", E: "Ǝ", F: "ꓞ", G: "ꓨ", H: "H",
    I: "I", J: "ſ", K: "ꓘ", L: "ꓶ", M: "W", N: "N", O: "O", P: "ꓒ",
    Q: "Ὸ", R: "ꓤ", S: "S", T: "ꓕ", U: "ꓵ", V: "ꓥ", W: "M", X: "X",
    Y: "⅄", Z: "Z", 0: "0", 1: "Ɩ", 2: "Շ", 3: "Ɛ", 4: "h", 5: "૬",
    6: "9", 7: "L", 8: "8", 9: "6", "*": "ₓ", "#": "#", "!": "¡", "?": "¿",
    " ": " "
  }
};

// Helper to map text
function convertText(text, table) {
  return Array.from(text).map(c => table[c] || c).join("");
}

// Store cooldowns and per-server config
const cooldowns = new Map(); // Map<guildId, Map<userId, timestamp>>
const serverConfig = new Map(); // Map<guildId, { cooldownMs }>

// Default cooldown
const DEFAULT_COOLDOWN_MS = 5000;

module.exports = {
  name: "font",
  description: "Make OpenScykohBot output what you say in any font you specify.",

  async execute(message) {
    if (message.author.bot) return;

    const guildId = message.guild?.id || "dm";
    if (!cooldowns.has(guildId)) cooldowns.set(guildId, new Map());
    const guildCooldowns = cooldowns.get(guildId);

    // Get server cooldown, fallback to default
    const serverSettings = serverConfig.get(guildId) || { cooldownMs: DEFAULT_COOLDOWN_MS };
    const cooldownMs = serverSettings.cooldownMs;

    const isAdmin = message.member?.permissions.has(PermissionsBitField.Flags.Administrator);
    const now = Date.now();
    const userCooldown = guildCooldowns.get(message.author.id) || 0;

    if (!isAdmin && now < userCooldown) {
      return message.channel.send(
        `Please wait ${Math.ceil((userCooldown - now) / 1000)}s before using this command again.`
      );
    }

    const args = message.content.trim().split(/\s+/).slice(1);

    // Admin command to change cooldown
    if (args[0] === "setcooldown") {
      if (!isAdmin) return message.channel.send("Only admins can set the cooldown.");
      const newCooldown = parseInt(args[1], 10);
      if (!newCooldown || newCooldown < 0) return message.channel.send("Please specify a valid cooldown in ms.");
      serverConfig.set(guildId, { cooldownMs: newCooldown });
      return message.channel.send(`Server cooldown set to ${newCooldown} ms.`);
    }

    const font = args[0];
    const text = args.slice(1).join(" ");

    if (!font || !text) {
      return message.channel.send(
        `:capital_abcd: **Help for \`&font\`**
		Usage: \`&font <fullwidth; chinese; script; blocks1; blocks2; mirror> <text>\`
		Examples:
		\`&font fullwidth hi\` → ｈｉ
		\`&font script hi\` → 𝒽𝒾
		Admins can change server cooldown: \`&font setcooldown <ms>\``
      );
    }

    if (!(font in FONT_TABLES)) {
      return message.channel.send(`Unknown font "${font}". Use help to see available fonts.`);
    }

    // Set cooldown for user if not admin
    if (!isAdmin) guildCooldowns.set(message.author.id, now + cooldownMs);

    let converted = convertText(text, FONT_TABLES[font]);
    if (font === "mirror") converted = converted.split("").reverse().join("");

    // Send in 2000-character chunks
    const CHUNK_SIZE = 2000;
    for (let i = 0; i < converted.length; i += CHUNK_SIZE) {
      await message.channel.send(converted.slice(i, i + CHUNK_SIZE));
    }

    // Cleanup old cooldowns
    if (!isAdmin) {
      setTimeout(() => guildCooldowns.delete(message.author.id), cooldownMs);
    }
  },
};

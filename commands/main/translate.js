const gtranslate = require("@vitalets/google-translate-api");
const etranslate = require("moji-translate");

// ---- Language arrays ----
const glangs = {
  auto: "Automatic",
  af: "Afrikaans",
  sq: "Albanian",
  am: "Amharic",
  ar: "Arabic",
  hy: "Armenian",
  az: "Azerbaijani",
  eu: "Basque",
  be: "Belarusian",
  bn: "Bengali",
  bs: "Bosnian",
  bg: "Bulgarian",
  ca: "Catalan",
  ceb: "Cebuano",
  ny: "Chichewa",
  zh: "Chinese",
  "zh-cn": "Chinese (Simplified)",
  "zh-tw": "Chinese (Traditional)",
  co: "Corsican",
  hr: "Croatian",
  cs: "Czech",
  da: "Danish",
  nl: "Dutch",
  en: "English",
  eo: "Esperanto",
  et: "Estonian",
  tl: "Filipino",
  fi: "Finnish",
  fr: "French",
  fy: "Frisian",
  gl: "Galician",
  ka: "Georgian",
  de: "German",
  el: "Greek",
  gu: "Gujarati",
  ht: "Haitian Creole",
  ha: "Hausa",
  haw: "Hawaiian",
  iw: "Hebrew",
  he: "Hebrew",
  hi: "Hindi",
  hmn: "Hmong",
  hu: "Hungarian",
  is: "Icelandic",
  ig: "Igbo",
  id: "Indonesian",
  ga: "Irish",
  it: "Italian",
  ja: "Japanese",
  jw: "Javanese",
  kn: "Kannada",
  kk: "Kazakh",
  km: "Khmer",
  ko: "Korean",
  ku: "Kurdish (Kurmanji)",
  ky: "Kyrgyz",
  lo: "Lao",
  la: "Latin",
  lv: "Latvian",
  lt: "Lithuanian",
  lb: "Luxembourgish",
  mk: "Macedonian",
  mg: "Malagasy",
  ms: "Malay",
  ml: "Malayalam",
  mt: "Maltese",
  mi: "Maori",
  mr: "Marathi",
  mn: "Mongolian",
  my: "Myanmar (Burmese)",
  ne: "Nepali",
  no: "Norwegian",
  ps: "Pashto",
  fa: "Persian",
  pl: "Polish",
  pt: "Portuguese",
  pa: "Punjabi",
  ro: "Romanian",
  ru: "Russian",
  sm: "Samoan",
  gd: "Scots Gaelic",
  sr: "Serbian",
  st: "Sesotho",
  sn: "Shona",
  sd: "Sindhi",
  si: "Sinhala",
  sk: "Slovak",
  sl: "Slovenian",
  so: "Somali",
  es: "Spanish",
  su: "Sundanese",
  sw: "Swahili",
  sv: "Swedish",
  tg: "Tajik",
  ta: "Tamil",
  te: "Telugu",
  th: "Thai",
  tr: "Turkish",
  uk: "Ukrainian",
  ur: "Urdu",
  uz: "Uzbek",
  vi: "Vietnamese",
  cy: "Welsh",
  xh: "Xhosa",
  yi: "Yiddish",
  yo: "Yoruba",
  zu: "Zulu",
};

// ---- Regex helpers ----
const gKeys = Object.keys(glangs).join("|");
const gManual = new RegExp(`^(${gKeys})-(${gKeys})$`);
const gAuto = new RegExp(`^(${gKeys})$`);

// ---- Helper functions ----
async function googleTranslate(text, langArg) {
  let from, to;

  if (gManual.test(langArg)) {
    [, from, to] = gManual.exec(langArg);
  } else if (gAuto.test(langArg)) {
    [, to] = gAuto.exec(langArg);
    from = "auto";
  } else throw new Error("Invalid Google language codes");

  const res = await gtranslate(text, { from, to });
  const srcLang = glangs[res.from.language.iso] || res.from.language.iso;

  const baseMsg =
    from === "auto"
      ? `Detected **${srcLang}** as the source language.\n${res.text}`
      : `Translating from **${glangs[from]}** to **${glangs[to]}**:\n${res.text}`;

  if (res.from.text.didYouMean && !res.from.text.autoCorrected) {
    return `Did you mean \`${res.from.text.value}\`?\n${baseMsg}`;
  } else if (res.from.text.autoCorrected) {
    return `Text auto-corrected to \`${res.from.text.value}\`.\n${baseMsg}`;
  }
  return baseMsg;
}

function emojiTranslate(text, justEmoji = false) {
  return etranslate.translate(text, justEmoji);
}

// ---- Command ----
module.exports = {
  name: "translate",
  aliases: ["t"],
  description: "Translate text using Google or Emoji translation engines.",

  async execute(message) {
    try {
      const args = message.content.trim().split(/\s+/);
      const engine = args[1]?.toLowerCase();
      const langArg = args[2];
      const text = args.slice(3).join(" ");

      if (!engine || !langArg || !text) {
        return message.channel.send(
          "Usage: `&translate <engine> <lang> <text>`\nEngines: `google`, `emoji`, `justemoji`"
        );
      }

      let output;

      if (engine === "google") {
        output = await googleTranslate(text, langArg);
      } else if (engine === "emoji") {
        output = "📝 Translating to emoji:\n" + emojiTranslate(text, false);
      } else if (engine === "justemoji") {
        output = "📝 Translating to emoji:\n" + emojiTranslate(text, true);
      } else {
        throw new Error("Unknown engine");
      }

      await message.channel.send(output);
    } catch (err) {
      console.error(err);
      await message.channel.send(`⚠️ Translation error: ${err.message}`);
    }
  },
};

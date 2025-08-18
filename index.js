require("dotenv").config();
const { Client, GatewayIntentBits, Partials, DiscordAPIError } = require("discord.js");
const Random = require("random-js");
const random = new Random.Random();

const bot = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions
  ],
  partials: [Partials.Message, Partials.Channel, Partials.Reaction],
});

// ---------------------------
// Emoji error handler
// ---------------------------
function handleEmojiError(err) {
  if (err instanceof DiscordAPIError && err.code === 10014) {
    console.warn("Can't find emoji in guild or cache.");
  } else {
    console.error(err);
  }
}

// ---------------------------
// Ready event
// ---------------------------
bot.once("ready", () => {
  console.log("OpenScykohBot is ready to crud.");
  bot.user.setStatus("online");
  bot.user.setPresence({
    activities: [
      { name: "Scykoh... wait...", type: 3 }
    ]
  });
});

// ---------------------------
// Handle reactions
// ---------------------------
function handleReactions(msg, message) {
  const reactMap = [
    { trigger: "amirite", reacts: ["🇳", "🇴"], delay: [0, 1000] },
    { trigger: "rip", reacts: ["⚰"] },
    { trigger: "wh", reacts: ["scyWh:548503602113544193"] },
  ];

  for (const r of reactMap) {
    if (msg.includes(r.trigger)) {
      r.reacts.forEach((emoji, i) =>
        setTimeout(() => message.react(emoji).catch(handleEmojiError), r.delay?.[i] || 0)
      );
    }
  }

  if (message.author.id === "159985870458322944") {
    ["🇸", "🇭", "🇺", "🇹", "🆙"].forEach((emoji, i) =>
      setTimeout(() => message.react(emoji).catch(handleEmojiError), i * 1000)
    );
  }
}

// ---------------------------
// Message handler
// ---------------------------
bot.on("messageCreate", (message) => {
  const msg = message.content.toLowerCase();
  if (message.author.bot) return;

  // Predefined talks
  const predefinedTalks = {
    sad: {
      triggers: ["bad openscykohbot", "bad <@468615764643938314>"],
      messages: ["It's all my fault.", "It's not my fault! It's random!", ";(", "Sorry :(", "That kinda hurt my feelings...", "no u"]
    },
    happy: {
      triggers: ["good openscykohbot", "good <@468615764643938314>"],
      messages: ["I'm always bad.", "I'm always bad. That's what bots do.", "Bots aren't good. Especially me.", "Okay, never heard that one before. People are usually spamming \"bad openscykohbot\"...", "Uhh... okay?", ":)", ";)"]
    }
  };

  for (const group of Object.values(predefinedTalks)) {
    if (group.triggers.includes(msg)) {
      message.channel.send(group.messages[random.integer(0, group.messages.length - 1)]);
    }
  }

  // Predefined responses
  const responses = {
    "how's it going, openscykohbot?": "It's not easy being a bot... ~~listening to your demands~~",
    "<@468615764643938314> go away": "NEVAR!!",
    "<@468615764643938314>, go away": "NEVAR!!",
    "<@468615764643938314> go away.": "NEVAR!!",
    "<@468615764643938314>, go away.": "NEVAR!!",
    "<@468615764643938314> go away!": "NEVAR!!",
    "<@468615764643938314>, go away!": "NEVAR!!",
  };

  const greetings = [
    "hello, <@468615764643938314>",
    "hello <@468615764643938314>",
    "hello, <@468615764643938314>.",
    "hello <@468615764643938314>.",
    "hi, <@468615764643938314>",
    "hi <@468615764643938314>",
    "hi, <@468615764643938314>.",
    "hi <@468615764643938314>."
  ];

  if (responses[msg]) {
    message.channel.send(responses[msg]);
  } else if (greetings.includes(msg)) {
    message.channel.send("Hi, <@" + message.author.id + ">.");
  }

  // Foul bot responses
  const foulTriggers = [
    "<@468615764643938314> speak to me, foul bot!",
    "<@468615764643938314>, speak to me, foul bot!"
  ];

  if (foulTriggers.includes(msg)) {
    if (message.author.id === "246865356482805760") {
      const crusadermsgs = ["Greetings, Sir Crusader.", "Hast thou found me irritating?", "Dost thou want to fight?"];
      message.channel.send(crusadermsgs[random.integer(0, crusadermsgs.length - 1)]);
    } else {
      message.channel.send("No. I don't speak to the likes of you.");
    }
  }

  // Reactions
  handleReactions(msg, message);
});

// ---------------------------
// Login
// ---------------------------
bot.login(process.env.DISCORD_TOKEN);

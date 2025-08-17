const Random = require("random-js");
const random = new Random();

// In-memory cooldowns: { guildId: { userId: timestamp } }
const cooldowns = new Map();

// Default cooldown in milliseconds (admins can configure per server)
const DEFAULT_COOLDOWN = 5000;

module.exports = {
  name: "hug",
  description: "Give someone a hug <3",
  options: [
    {
      name: "member",
      description: "Who should I hug?",
      type: 6, // USER type
      required: true,
    },
  ],

  async execute(message, args, serverSettings = {}) {
    const guildId = message.guild?.id || "dm";
    const userId = message.author.id;

    // Get server cooldown setting or use default
    const cooldownTime = serverSettings.hugCooldown ?? DEFAULT_COOLDOWN;

    // Initialize guild cooldown map if missing
    if (!cooldowns.has(guildId)) cooldowns.set(guildId, new Map());

    const userCooldowns = cooldowns.get(guildId);

    // Check cooldown
    const lastUsed = userCooldowns.get(userId) || 0;
    const now = Date.now();
    if (now - lastUsed < cooldownTime) {
      const remaining = Math.ceil((cooldownTime - (now - lastUsed)) / 1000);
      return message.channel.send(
        `Please wait ${remaining} more second${remaining === 1 ? "" : "s"} before sending another hug.`
      );
    }

    // Update last used timestamp
    userCooldowns.set(userId, now);

    // Get the member to hug
    const hugMember = args?.member || message.mentions.members?.first();
    if (!hugMember) {
      return message.channel.send("Please mention a user to hug.");
    }

    // Hug GIF URLs
    const urls = [
      "https://media0.giphy.com/media/8tpiC1JAYVMFq/giphy.gif",
      "https://media0.giphy.com/media/16bJmyPvRbCDu/giphy.gif",
      "https://media3.giphy.com/media/lXiRKBj0SAA0EWvbG/giphy.gif",
      "https://m.popkey.co/df102c/gr9RJ.gif",
      "https://media1.tenor.com/images/79d425d4c76ac4cf5b422f764453bfee/tenor.gif?itemid=5026053",
      "https://media1.tenor.com/images/42922e87b3ec288b11f59ba7f3cc6393/tenor.gif?itemid=5634630",
      "https://media2.giphy.com/media/yidUzriaAGJbsxt58k/giphy.gif",
      "https://media1.giphy.com/media/fyx8vjZc2ZvoY/giphy.gif",
      "https://media3.giphy.com/media/INUsrrxQW4et2/giphy.gif",
      "https://media0.giphy.com/media/xT0xemCvkpWyJlOG2Y/giphy.gif",
    ];

    const hugGif = urls[random.integer(0, urls.length - 1)];

    const text = `Hugs for everyone~\n**${message.author.username}** gave **${hugMember.user.username}** a hug!\n${hugGif}`;

    return message.channel.send(text);
  },
};

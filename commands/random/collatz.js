const { ChannelType } = require("discord.js");

module.exports = {
  name: "collatz",
  description: "Applies the Collatz conjecture to a positive integer. Supports servers, DMs, and group DMs.",

  async execute(message) {
    const args = message.content.trim().split(/\s+/).slice(1);
    const num = parseInt(args[0], 10);

    if (!num || num <= 0) {
      return message.reply("Please provide a valid positive integer.");
    }

    let current = num;
    let buffer = "";
    const isDM = message.channel.type === ChannelType.DM || message.channel.type === ChannelType.GroupDM;

    const MAX_MESSAGE_LENGTH = 1900; // safe margin for 2000 limit
    const MAX_BATCHES = isDM ? Infinity : 50; // unlimited in DMs, limited in guild channels
    let batchesSent = 0;

    const sendBuffer = async () => {
      if (buffer) {
        await message.channel.send(buffer.trim());
        buffer = "";
        batchesSent++;
      }
    };

    while (current !== 1) {
      const str = current + " ";
      if (buffer.length + str.length > MAX_MESSAGE_LENGTH) {
        await sendBuffer();
        if (batchesSent >= MAX_BATCHES && !isDM) {
          await message.channel.send("⚠️ Output truncated to prevent flooding.");
          return;
        }
      }
      buffer += str;
      current = current % 2 === 0 ? current / 2 : current * 3 + 1;
    }

    // Append final 1
    if (buffer.length + 2 > MAX_MESSAGE_LENGTH) await sendBuffer();
    buffer += "1";
    await sendBuffer();
  },
};

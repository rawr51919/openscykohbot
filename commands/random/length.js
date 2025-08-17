module.exports = {
  name: "length",
  description: "Computes the length of whatever you specify.",

  async execute(message, args) {
    // If args are empty, split content (for prefix commands in guilds)
    if (!args || args.length === 0) {
      if (message.channel.type !== "dm") {
        const prefix = message.guild.commandPrefix || "&";
        args = message.content.slice(prefix.length).trim().split(/ +/).slice(1);
      }
    }

    if (!args || args.length === 0) {
      return message.reply(
        "You need to specify a string to get the length of. Example: `&length <string>`"
      );
    }

    let totalLength = 0;
    const individualLengths = args.map((arg) => {
      totalLength += arg.length;
      return `${arg} contains ${arg.length} character${arg.length === 1 ? "" : "s"}.`;
    });

    // Combine individual messages and total length
    const combinedMessage = individualLengths.join("\n") + `\n\nThe combined length of those strings is ${totalLength} character${totalLength === 1 ? "" : "s"}.`;

    // Split into chunks if over 2000 characters
    const CHUNK_SIZE = 2000;
    for (let i = 0; i < combinedMessage.length; i += CHUNK_SIZE) {
      await message.channel.send(combinedMessage.slice(i, i + CHUNK_SIZE));
    }
  },
};

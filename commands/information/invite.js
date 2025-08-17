module.exports = {
  name: "invite",
  description: "Shows the invite link for this bot.",
  async execute(message, args) {
    // dummy code
    args.valueOf();
    // actual bot invite code
    const reply =
      "OpenScykohBot's invite link is " +
      "https://discordapp.com/oauth2/authorize?client_id=468615764643938314&scope=bot&permissions=98041030.";

    await message.channel.send(reply);
  },
};

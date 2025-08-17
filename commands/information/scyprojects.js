module.exports = {
  name: "scyprojects",
  description: "The official ScyProjects server.",
  async execute(message, args) {
    // dummy code
    args.valueOf();
    // actual server invite code
    await message.channel.send("https://discord.gg/5uh8aS7");
  },
};

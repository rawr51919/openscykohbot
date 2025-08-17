const discord = require("discord.js");
const tools = require("discord.js-tools");
const gm = require("gm");
const { version: botVersion } = require("../../package");

module.exports = {
  name: "info",
  description: "Shows who created this bot and details about the bot's libraries and versions.",
  async execute(message, args) {
    // dummy code
    args?.valueOf();
    // actual info code
    const reply =
      "OpenScykohBot was created by <@324661689972686849>\n" +
      "The bot's GitHub repository can be found here: https://github.com/rawr51919/openscykohbot\n" +
      `This bot's version is **${botVersion}** and it runs on discord.js **${discord.version}**.\n` +
      `This bot uses discord.js-tools **${tools.version}**, gm **${gm.version}**, and others.\n` +
      "This bot is in the public domain.";

    await message.channel.send(reply);
  },
};

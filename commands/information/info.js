exports.version = require('../../package').version
const discord = require('discord.js')
const commando = require('discord.js-commando')
const tools = require('discord.js-tools')
const gm = require('gm')
class Info extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'info',
            group: 'information',
            memberName: 'info',
            description: "Shows who created this bot and the bot's GitHub repository, as well as details about the versions of the libraries the bot's currently running.",
        })
    }
    async run(message) {
        message.channel.send("OpenScykohBot was created by <@324661689972686849>\nThe bot's GitHub repository can be found here: https://github.com/coltongit/openscykohbot\nThis bot's version is **"+exports.version+"** and it runs on discord.js **"+discord.version+"** and discord.js-commando **"+commando.version+"**.\nThis bot uses discord.js-tools **"+tools.version+"**, gm **"+gm.version+"**, and others.\nThis bot is in the public domain.")
    }
}
module.exports=Info
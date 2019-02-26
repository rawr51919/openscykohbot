const discord = require('discord.js')
const commando = require('discord.js-commando')
class Info extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'info',
            group: 'information',
            memberName: 'info',
            description: "Shows who created this bot and the bot's GitHub repository.",
        })
    }
    async run(message) {
        message.channel.send("OpenScykohBot was created by <@324661689972686849>\nThe bot's GitHub repository can be found here: https://github.com/coltongit/openscykohbot\nThis bot runs on discord.js **"+discord.version+"** and discord.js-commando **"+commando.version+"**.\nThis bot is in the public domain.")
    }
}
module.exports=Info
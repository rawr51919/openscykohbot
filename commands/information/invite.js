const commando = require('discord.js-commando')
class BotInvite extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'invite',
            group: 'information',
            memberName: 'invite',
            description: 'Shows the invite link for this bot.',
        })
    }
    async run(message) {
        message.channel.send("OpenScykohBot's invite link is https://discordapp.com/oauth2/authorize?client_id=468615764643938314&scope=bot&permissions=98041030.")
    }
}
module.exports=BotInvite
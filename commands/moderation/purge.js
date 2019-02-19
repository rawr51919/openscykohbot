const commando = require('discord.js-commando')
const tools = require('discord.js-tools')
const bot = require('../../index')
class PurgeMessages extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'purge',
			group: 'moderation',
			memberName: 'purge',
			description: 'Allows OpenScykohBot to purge messages. That is, if both you and the bot have mod permissions.',
		});
    }
    async run(message,args){
        let params = message.content.split(/ +/).slice(1)
        var amount=parseInt(params[0])
        if(!params[0]){
            message.channel.send("You need to specify the amount of messages to delete!\nExample: `&purge 10`")
            return
        }else if (params[0]){
            tools.purge(message, bot, amount)
            message.channel.send('Successfully deleted '+params[0]+' messages.')
            return
        }else{
            message.reply('you do not have permission to use this command. Either you, the bot, or both are missing the MANAGE_MESSAGES permission.')
        }
    }
}
module.exports=PurgeMessages
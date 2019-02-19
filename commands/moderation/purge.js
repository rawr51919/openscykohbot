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
        let params
        if (message.guild.commandPrefix==null || message.guild.commandPrefix==undefined){
            params = message.content.split(/ +/).slice(bot.commandPrefix.length)
        }else{
            params = message.content.split(/ +/).slice(message.guild.commandPrefix.length)
        }
        var amount=parseInt(params[0])
        if(!params[0]){
            message.channel.send("You need to specify the amount of messages to delete!\nExample: `&purge 10`")
            return
        }else if (params[0]){
            tools.purge(message, bot, amount)
            if (amount=="1"){
                message.channel.send('Successfully deleted '+params[0]+' message.')
                setTimeout(function(){tools.purge(message, bot, 1)}, 5000)
                return
            }else{
                message.channel.send('Successfully deleted '+params[0]+' messages.')
                setTimeout(function(){tools.purge(message, bot, 1)}, 5000)
                return
            }
        }else{
            message.reply('you do not have permission to use this command. Either you, the bot, or both are missing the MANAGE_MESSAGES permission.')
        }
    }
}
module.exports=PurgeMessages
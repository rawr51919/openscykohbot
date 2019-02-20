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
        args = message.content.split(/ +/).slice(message.guild.commandPrefix.length)
        var amount=parseInt(args[0])
        if(!args[0]){
            message.channel.send("You need to specify the amount of messages to delete!\nExample: `&purge 10`")
            return
        }else if (args[0]){
            tools.purge(message, this.client, amount)
            if (amount=="1"){
                message.channel.send('Successfully deleted '+args[0]+' message.')
                setTimeout(function(){tools.purge(message, bot, 1)}, 5000)
                return
            }else{
                message.channel.send('Successfully deleted '+args[0]+' messages.')
                setTimeout(function(){tools.purge(message, bot, 1)}, 5000)
                return
            }
        }else{
            message.reply('you do not have permission to use this command. Either you, the bot, or both are missing the MANAGE_MESSAGES permission.')
        }
    }
}
module.exports=PurgeMessages
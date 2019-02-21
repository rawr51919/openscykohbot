const commando = require('discord.js-commando')
const tools = require('discord.js-tools')
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
        if (message.channel.type!=='dm'){
            args = message.content.split(/ +/).slice(message.guild.commandPrefix.length)
        }
        if(!args[0]){
            message.channel.send("You need to specify the amount of messages to delete!\nExample: `&purge 10`")
            return
        }else if (args[0]){
            tools.purge(message, this.client, parseInt(args[0]))
            if (parseInt(args[0])=="1"){
                message.channel.send('Successfully deleted '+args[0]+' message.').then(message => message.delete(5000))
                return
            }else{
                message.channel.send('Successfully deleted '+args[0]+' messages.').then(message => message.delete(5000))
                return
            }
        }else{
            message.reply('you do not have permission to use this command. Either you, the bot, or both are missing the MANAGE_MESSAGES permission.')
        }
    }
}
module.exports=PurgeMessages
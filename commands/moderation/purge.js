const commando = require('discord.js-commando')
const tools = require('discord.js-tools')
class PurgeMessages extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'purge',
			group: 'moderation',
			memberName: 'purge',
			description: 'Allows OpenScykohBot to purge messages. That is, if both you and the bot have mod permissions.',
		})
    }
    async run(message,args){
        if (message.channel.type!=='dm'){
            args = message.content.split(/ +/).slice(message.guild.commandPrefix.length)
        }
        if(!args){
            message.channel.send("You need to specify the amount of messages to delete!\nExample: `&purge 10`\nExample in DMs (this will only delete the bot's messages, not your own): `@OpenScykohBot purge 10`")
            return
        }else if (args && message.channel.type!=='dm'){
            tools.purge(message, this.client, parseInt(args))
            if (args==1){
                message.channel.send('Successfully deleted '+args+' message.').then(message => message.delete(3000))
                return
            }else{
                message.channel.send('Successfully deleted '+args+' messages.').then(message => message.delete(3000))
                return
            }
        }else if (args && message.channel.type==='dm'){
            if (args>100){
                message.channel.send("I can only delete up to 100 of my DM messages at a time.\nLower the message amount and try again, as you're gonna probably overload both me and the API.\nNo one wants that, do we?")
            }else{
                await message.channel.fetchMessages({limit: 100}).then(messages => {
                    messages.filter(message => message.author.id === this.client.user.id).first(parseInt(args)).map(message => message.delete())
                })
            }
            if (args==1){
                message.channel.send('Successfully deleted '+args+' message of mine.').then(message => message.delete(3000))
                return
            }else{
                message.channel.send('Successfully deleted '+args+' messages of mine.').then(message => message.delete(3000))
                return
            }
        }else{
            message.reply('you do not have permission to use this command. Either you, the bot, or both are missing the MANAGE_MESSAGES permission.')
        }
    }
}
module.exports=PurgeMessages
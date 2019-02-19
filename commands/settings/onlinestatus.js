const commando = require('discord.js-commando')
class ChangeOnlineStatus extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'onlinestatus',
			group: 'settings',
			memberName: 'onlinestatus',
			description: 'Change the bot\'s online status. Only a select few are allowed to use this command.',
		});
    }
    async run(message,args){
        let params
        if (message.guild.commandPrefix==null || message.guild.commandPrefix==undefined){
            params = message.content.split(/ +/).slice(this.bot.commandPrefix.length)
        }else{
            params = message.content.split(/ +/).slice(message.guild.commandPrefix.length)
        }
        if (message.author.id !== '324661689972686849'){
            message.reply(`you don\'t have permission to use this command.`)
            return
        }
        if (params[0].toLowerCase()=='dnd'){
            this.bot.user.setStatus('dnd')
            message.channel.send("My online status is now: **Do Not Disturb**.")
        }else if (params[0].toLowerCase()=='away' || params[0].toLowerCase()=='idle'){
            this.bot.user.setStatus('idle')
            message.channel.send("My online status is now: **Away/Idle**.")
        }else if (params[0].toLowerCase()=='invisible' || params[0].toLowerCase()=='offline'){
            this.bot.user.setStatus('invisible')
            message.channel.send("My online status is now: **Invisible/Offline**.")
        }else if (params[0].toLowerCase()=='online'){
            this.bot.user.setStatus('online')
            message.channel.send("My online status is now: **Online**.")
        }else{
                message.channel.send(`You must specify either online, away/idle, invisible, or dnd (do not disturb).`)
                return
        }
    }
}
module.exports=ChangeOnlineStatus
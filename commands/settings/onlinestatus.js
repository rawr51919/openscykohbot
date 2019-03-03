const commando=require('discord.js-commando')
class ChangeOnlineStatus extends commando.Command {
	constructor(client){
		super(client,{
			name: 'onlinestatus',
			group: 'settings',
			memberName: 'onlinestatus',
			description: "Change the bot's online status. Only a select few are allowed to use this command.",
		})
    }
    async run(message,args){
        if(message.channel.type!=='dm'){
            args=message.content.split(/ +/).slice(message.guild.commandPrefix.length)
        }
        if(message.author.id!=='324661689972686849'){
            message.reply("you don't have permission to use this command.")
            return
        }
        if(args[0].toLowerCase()=='dnd'||args.toLowerCase()=='donotdisturb'){
            this.client.user.setStatus('dnd')
            message.channel.send("My online status is now: **Do Not Disturb**.")
        }else if(args[0].toLowerCase()=='away'||args[0].toLowerCase()=='idle'){
            this.client.user.setStatus('idle')
            message.channel.send("My online status is now: **Away/Idle**.")
        }else if(args[0].toLowerCase()=='invisible'||args[0].toLowerCase()=='offline'){
            this.client.user.setStatus('invisible')
            message.channel.send("My online status is now: **Invisible/Offline**.")
        }else if(args[0].toLowerCase()=='online'){
            this.client.user.setStatus('online')
            message.channel.send("My online status is now: **Online**.")
        }else{
            message.channel.send(`You must specify either online, away/idle, invisible, or dnd (do not disturb).`)
            return
        }
    }
}
module.exports=ChangeOnlineStatus
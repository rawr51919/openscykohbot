const commando = require('discord.js-commando')
class ChangePFP extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'pfp',
			group: 'settings',
			memberName: 'pfp',
			description: 'Change the bot\'s PFP. Only a select few are allowed to use this command.',
		});
    }
    async run (message,args){
        let params
        if (message.guild.commandPrefix==null || message.guild.commandPrefix==undefined){
            params = message.content.split(/ +/).slice(this.bot.commandPrefix.length)
        }else{
            params = message.content.split(/ +/).slice(message.guild.commandPrefix.length)
        }
        if (message.author.id !== '324661689972686849'){
            message.reply(`you don\'t have permission to use this command.`)
        }
        if (params[0]){
                this.bot.user.setAvatar(params[0])
                return
        }else{
                message.channel.send("You need a valid image URL to use as an avatar/profile picture.")
                return
        }
    }
}
module.exports=ChangePFP
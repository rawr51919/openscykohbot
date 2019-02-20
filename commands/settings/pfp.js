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
        
        args = message.content.split(/ +/).slice(message.guild.commandPrefix.length)
        if (message.author.id !== '324661689972686849'){
            message.reply(`you don\'t have permission to use this command.`)
        }
        if (args[0]){
                this.client.setAvatar(args[0])
                return
        }else{
                message.channel.send("You need a valid image URL to use as an avatar/profile picture.")
                return
        }
    }
}
module.exports=ChangePFP
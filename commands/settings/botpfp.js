const commando = require('discord.js-commando')
class ChangePFP extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'botpfp',
			group: 'settings',
			memberName: 'botpfp',
			description: 'Change the bot\'s PFP. Only a select few are allowed to use this command.',
		});
    }
    async run (message,args){
        if (message.channel.type!=='dm'){
            args = message.content.split(/ +/).slice(message.guild.commandPrefix.length)
        }
        if (message.author.id !== '324661689972686849'){
            message.reply(`you don\'t have permission to use this command.`)
        }
        if (args[0]){
                this.client.user.setAvatar(args[0])
                message.reply('The bot\'s avatar/profile picture has been successfully changed.')
                return
        }else{
                message.reply("you need a valid image URL to use as an avatar/profile picture.")
                return
        }
    }
}
module.exports=ChangePFP
const commando = require('discord.js-commando')
class UserIDs extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'userid',
			group: 'random',
			memberName: 'userid',
			description: 'Make the bot find the user ID you specify in this command.',
		});
    }
    async run(message,args){
        
        args = message.content.split(/ +/).slice(message.guild.commandPrefix.length)
        let id
        if (/^$/.test(args[0])){
            message.channel.send('This command will allow you to see who has what user ID.\nExample: `&userid 324661689972686849`\nTo find User IDs, you must enable Developer Mode in Discord\'s user settings, then right click any user and click `Copy ID`.')
            return
        }else if (/^#?[\d]{19}$/i.test(args[0])){
            id = /^#?([\d]{19})$/i.exec(args[0])[1].toLowerCase()
            if (this.client.fetchUser(id)){
                message.channel.send('Found user: <@'+id+'>.')
                return
            }else{
                message.channel.send('There is no user associated with this user ID.')
                return
            }
        }else if (/^#?[\d]{18}$/i.test(args[0])){
            id = /^#?([\d]{18})$/i.exec(args[0])[1].toLowerCase()
            if (this.client.fetchUser(id)){
                message.channel.send('Found user: <@'+id+'>.')
                return
            }else{
                message.channel.send('There is no user associated with this user ID.')
                return
            }
        }else if (/^#?[\d]{17}$/i.test(args[0])){
            id = /^#?([\d]{17})$/i.exec(args[0])[1].toLowerCase()
            if (this.client.fetchUser(id)){
                message.channel.send('Found user: <@'+id+'>.')
                return
            }else{
                message.channel.send('There is no user associated with this user ID.')
                return
            }
        }else{
            message.reply('you provided an invalid User ID (or you provided something else). Please try again with a valid User ID.')
            return
        }
    }
}
module.exports=UserIDs
const commando = require('discord.js-commando')
class ChangeActivity extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'activity',
			group: 'settings',
			memberName: 'activity',
			description: 'Change the bot\'s Rich Presence status. Only a select few are allowed to use this command.',
		});
    }
    async run(message,args){
        let params
        if (message.guild.commandPrefix==null || message.guild.commandPrefix==undefined){
            params = message.content.split(/ +/).slice(this.client.commandPrefix.length)
        }else{
            params = message.content.split(/ +/).slice(message.guild.commandPrefix.length)
        }
        if (message.author.id !== '324661689972686849'){
            message.reply(`you don\'t have permission to use this command.`)
            return
        }
        if (params[0].toLowerCase()=='remove'){
            this.client.user.setPresence({
                game:null
                })
            message.channel.send("I now have no status.")
            return
        }else if (params[0].toLowerCase()=='playing' && params[1]){
            this.client.user.setPresence({
                game:
                    {
                        name:message.content.substr(18),
                        type:0
                    }
                })
            message.channel.send("My status is now: \"**Playing** "+message.content.substr(18)+"\".")
        }else if (params[0].toLowerCase()=='streaming' && params[1]){
            this.client.user.setPresence({
                game:
                    {
                        name:message.content.substr(20),
                        type:1
                    }
                })
            message.channel.send("My status is now: \"**Streaming** "+message.content.substr(20)+"\".")
        }else if (params[0].toLowerCase()=='listening' && params[1]){
            this.client.user.setPresence({
                game:
                    {
                        name:message.content.substr(20),
                        type:2
                    }
                })
            message.channel.send("My status is now: \"**Listening to** "+message.content.substr(20)+"\".")
        }else if (params[0].toLowerCase()=='watching' && params[1]){
            this.client.user.setPresence({
                game:
                    {
                        name:message.content.substr(19),
                        type:3
                    }
                })
            message.channel.send("My status is now: \"**Watching** "+message.content.substr(19)+"\".")
        }else if (params[0].toLowerCase()=='playing' && !params[1]){
            message.channel.send("What am I supposed to be playing?")
            return
        }else if (params[0].toLowerCase()=='streaming' && !params[1]){
            message.channel.send("What am I supposed to be streaming?")
            return
        }else if (params[0].toLowerCase()=='listening' && !params[1]){
            message.channel.send("What am I supposed to be listening to?")
            return
        }else if (params[0].toLowerCase()=='watching' && !params[1]){
            message.channel.send("What am I supposed to be watching?")
            return
        }else{
            message.channel.send('You must specify either playing, watching, listening to, or streaming.\n If this bot already has a status, you can also specify `remove` to remove the status from this bot.')
            return
        }
    }
}
module.exports=ChangeActivity
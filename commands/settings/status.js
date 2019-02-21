const commando = require('discord.js-commando')
class ChangeOverallStatus extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'status',
			group: 'settings',
			memberName: 'status',
			description: 'Change the bot\'s overall status. Only a select few are allowed to use this command.',
		});
    }
    async run(message,args){
        if (message.channel.type!=='dm'){
            args = message.content.split(/ +/).slice(message.guild.commandPrefix.length)
        }
        if (message.author.id !== '324661689972686849'){
            message.reply(`you don\'t have permission to use this command.`)
            return
        }
        if ((!args[0] && !args[1] && !args[2]) || (args[0]!='reset' && !args[1] && !args[2])){
            message.reply('you must set both the online status and the activity of this bot, not one or the other.\nIf you want to set either or, use either `&activity` for just the status or `&onlinestatus` for just the online status.')
        }else if ((args[0].toLowerCase()=='online' && args[1].toLowerCase()=='playing' && args[2] && !args[3]) || (args[0].toLowerCase()=='playing' && args[1].toLowerCase()=='online' && args[2])){
            this.client.user.setStatus('online')
            this.client.user.setPresence({
                game:
                    {
                        name:message.content.substr(21),
                        type:0
                    }
                })
            message.channel.send("My online status is now: **Online** and my status is now: **Playing** "+message.content.substr(21)+"\".")
        }else if ((args[0].toLowerCase()=='dnd' && args[1].toLowerCase()=='playing' && args[2]) || (args[0].toLowerCase()=='playing' && args[1].toLowerCase()=='dnd' && args[2])){
            this.client.user.setStatus('dnd')
            this.client.user.setPresence({
                game:
                    {
                        name:message.content.substr(18),
                        type:0
                    }
                })
            message.channel.send("My online status is now: **Do Not Disturb** and my status is now: **Playing** "+message.content.substr(18)+"\".")
        }else if ((args[0].toLowerCase()=='away' && args[1].toLowerCase()=='playing' && args[2]) || (args[0].toLowerCase()=='playing' && args[1].toLowerCase()=='away' && args[2]) || (args[0].toLowerCase()=='idle' && args[1].toLowerCase()=='playing' && args[2]) || (args[0].toLowerCase()=='playing' && args[1].toLowerCase()=='idle' && args[2])){
            this.client.user.setStatus('idle')
            this.client.user.setPresence({
                game:
                    {
                        name:message.content.substr(19),
                        type:0
                    }
                })
            message.channel.send("My online status is now: **Away/Idle** and my status is now: **Playing** "+message.content.substr(19)+"\".")
        }else if ((args[0].toLowerCase()=='online' && args[1].toLowerCase()=='streaming' && args[2]) || (args[0].toLowerCase()=='streaming' && args[1].toLowerCase()=='online' && args[2])){
            this.client.user.setStatus('online')
            this.client.user.setPresence({
                game:
                    {
                        name:message.content.substr(23),
                        type:1
                    }
                })
            message.channel.send("My online status is now: **Online** and my status is now: **Streaming** "+message.content.substr(23)+"\".")
        }else if ((args[0].toLowerCase()=='dnd' && args[1].toLowerCase()=='streaming' && args[2]) || (args[0].toLowerCase()=='streaming' && args[1].toLowerCase()=='dnd' && args[2])){
            this.client.user.setStatus('dnd')
            this.client.user.setPresence({
                game:
                    {
                        name:message.content.substr(20),
                        type:1
                    }
                })
            message.channel.send("My online status is now: **Do Not Disturb** and my status is now: **Streaming** "+message.content.substr(20)+"\".")
        }else if ((args[0].toLowerCase()=='away' && args[1].toLowerCase()=='streaming' && args[2]) || (args[0].toLowerCase()=='streaming' && args[1].toLowerCase()=='away' && args[2]) || (args[0].toLowerCase()=='idle' && args[1].toLowerCase()=='streaming' && args[2]) || (args[0].toLowerCase()=='streaming' && args[1].toLowerCase()=='idle' && args[2])){
            this.client.user.setStatus('idle')
            this.client.user.setPresence({
                game:
                    {
                        name:message.content.substr(21),
                        type:1
                    }
                })
            message.channel.send("My online status is now: **Away/Idle** and my status is now: **Streaming** "+message.content.substr(21)+"\".")
        }else if ((args[0].toLowerCase()=='online' && args[1].toLowerCase()=='listening' && args[2]) || (args[0].toLowerCase()=='listening' && args[1].toLowerCase()=='online' && args[2])){
            this.client.user.setStatus('online')
            this.client.user.setPresence({
                game:
                    {
                        name:message.content.substr(25),
                        type:2
                    }
                })
            message.channel.send("My online status is now: **Online** and my status is now: **Listening to** "+message.content.substr(25)+"\".")
        }else if ((args[0].toLowerCase()=='dnd' && args[1].toLowerCase()=='listening' && args[2]) || (args[0].toLowerCase()=='listening' && args[1].toLowerCase()=='dnd' && args[2])){
            this.client.user.setStatus('dnd')
            this.client.user.setPresence({
                game:
                    {
                        name:message.content.substr(22),
                        type:2
                    }
                })
            message.channel.send("My online status is now: **Do Not Disturb** and my status is now: **Listening to** "+message.content.substr(22)+"\".")
        }else if ((args[0].toLowerCase()=='away' && args[1].toLowerCase()=='listening' && args[2]) || (args[0].toLowerCase()=='listening' && args[1].toLowerCase()=='away' && args[2]) || (args[0].toLowerCase()=='idle' && args[1].toLowerCase()=='listening' && args[2]) || (args[0].toLowerCase()=='listening' && args[1].toLowerCase()=='idle' && args[2])){
            this.client.user.setStatus('idle')
            this.client.user.setPresence({
                game:
                    {
                        name:message.content.substr(23),
                        type:2
                    }
                })
            message.channel.send("My online status is now: **Away/Idle** and my status is now: **Listening to** "+message.content.substr(23)+"\".")
        }else if ((args[0].toLowerCase()=='online' && args[1].toLowerCase()=='watching' && args[2]) || (args[0].toLowerCase()=='watching' && args[1].toLowerCase()=='online' && args[2])){
            this.client.user.setStatus('online')
            this.client.user.setPresence({
                game:
                    {
                        name:message.content.substr(22),
                        type:3
                    }
                })
            message.channel.send("My online status is now: **Online** and my status is now: **Watching** "+message.content.substr(22)+"\".")
        }else if ((args[0].toLowerCase()=='dnd' && args[1].toLowerCase()=='watching' && args[2]) || (args[0].toLowerCase()=='watching' && args[1].toLowerCase()=='dnd' && args[2])){
            this.client.user.setStatus('dnd')
            this.client.user.setPresence({
                game:
                    {
                        name:message.content.substr(19),
                        type:3
                    }
                })
            message.channel.send("My online status is now: **Do Not Disturb** and my status is now: **Watching** "+message.content.substr(19)+"\".")
        }else if ((args[0].toLowerCase()=='away' && args[1].toLowerCase()=='watching' && args[2]) || (args[0].toLowerCase()=='watching' && args[1].toLowerCase()=='away' && args[2]) || (args[0].toLowerCase()=='idle' && args[1].toLowerCase()=='watching' && args[2]) || (args[0].toLowerCase()=='watching' && args[1].toLowerCase()=='idle' && args[2])){
            this.client.user.setStatus('idle')
            this.client.user.setPresence({
                game:
                    {
                        name:message.content.substr(20),
                        type:3
                    }
                })
            message.channel.send("My online status is now: **Away/Idle** and my status is now: **Watching** "+message.content.substr(20)+"\".")
        }else if(args[0].toLowerCase()=='reset'){
            this.client.user.setStatus('online')
	        this.client.user.setPresence({
		        game:
  			        {
                        name:'Scykoh... wait...',
    		            type:3
  			        }
            })
            message.channel.send("My status was reset.\nIf my status was like this already when you used this command, it won't change.")
        }
    }
}
module.exports=ChangeOverallStatus
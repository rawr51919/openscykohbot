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
        if ((!params[0] && !params[1] && !params[2]) || (params[0]!='reset' && !params[1] && !params[2])){
            message.reply('you must set both the online status and the activity of this bot, not one or the other.\nIf you want to set either or, use either `&activity` for just the status or `&onlinestatus` for just the online status.')
        }else if ((params[0].toLowerCase()=='online' && params[1].toLowerCase()=='playing' && params[2] && !params[3]) || (params[0].toLowerCase()=='playing' && params[1].toLowerCase()=='online' && params[2])){
            this.client.user.setStatus('online')
            this.client.user.setPresence({
                game:
                    {
                        name:message.content.substr(21),
                        type:0
                    }
                })
            message.channel.send("My online status is now: **Online** and my status is now: **Playing** "+message.content.substr(21)+"\".")
        }else if ((params[0].toLowerCase()=='dnd' && params[1].toLowerCase()=='playing' && params[2]) || (params[0].toLowerCase()=='playing' && params[1].toLowerCase()=='dnd' && params[2])){
            this.client.user.setStatus('dnd')
            this.client.user.setPresence({
                game:
                    {
                        name:message.content.substr(18),
                        type:0
                    }
                })
            message.channel.send("My online status is now: **Do Not Disturb** and my status is now: **Playing** "+message.content.substr(18)+"\".")
        }else if ((params[0].toLowerCase()=='away' && params[1].toLowerCase()=='playing' && params[2]) || (params[0].toLowerCase()=='playing' && params[1].toLowerCase()=='away' && params[2]) || (params[0].toLowerCase()=='idle' && params[1].toLowerCase()=='playing' && params[2]) || (params[0].toLowerCase()=='playing' && params[1].toLowerCase()=='idle' && params[2])){
            this.client.user.setStatus('idle')
            this.client.user.setPresence({
                game:
                    {
                        name:message.content.substr(19),
                        type:0
                    }
                })
            message.channel.send("My online status is now: **Away/Idle** and my status is now: **Playing** "+message.content.substr(19)+"\".")
        }else if ((params[0].toLowerCase()=='online' && params[1].toLowerCase()=='streaming' && params[2]) || (params[0].toLowerCase()=='streaming' && params[1].toLowerCase()=='online' && params[2])){
            this.client.user.setStatus('online')
            this.client.user.setPresence({
                game:
                    {
                        name:message.content.substr(23),
                        type:1
                    }
                })
            message.channel.send("My online status is now: **Online** and my status is now: **Streaming** "+message.content.substr(23)+"\".")
        }else if ((params[0].toLowerCase()=='dnd' && params[1].toLowerCase()=='streaming' && params[2]) || (params[0].toLowerCase()=='streaming' && params[1].toLowerCase()=='dnd' && params[2])){
            this.client.user.setStatus('dnd')
            this.client.user.setPresence({
                game:
                    {
                        name:message.content.substr(20),
                        type:1
                    }
                })
            message.channel.send("My online status is now: **Do Not Disturb** and my status is now: **Streaming** "+message.content.substr(20)+"\".")
        }else if ((params[0].toLowerCase()=='away' && params[1].toLowerCase()=='streaming' && params[2]) || (params[0].toLowerCase()=='streaming' && params[1].toLowerCase()=='away' && params[2]) || (params[0].toLowerCase()=='idle' && params[1].toLowerCase()=='streaming' && params[2]) || (params[0].toLowerCase()=='streaming' && params[1].toLowerCase()=='idle' && params[2])){
            this.client.user.setStatus('idle')
            this.client.user.setPresence({
                game:
                    {
                        name:message.content.substr(21),
                        type:1
                    }
                })
            message.channel.send("My online status is now: **Away/Idle** and my status is now: **Streaming** "+message.content.substr(21)+"\".")
        }else if ((params[0].toLowerCase()=='online' && params[1].toLowerCase()=='listening' && params[2]) || (params[0].toLowerCase()=='listening' && params[1].toLowerCase()=='online' && params[2])){
            this.client.user.setStatus('online')
            this.client.user.setPresence({
                game:
                    {
                        name:message.content.substr(25),
                        type:2
                    }
                })
            message.channel.send("My online status is now: **Online** and my status is now: **Listening to** "+message.content.substr(25)+"\".")
        }else if ((params[0].toLowerCase()=='dnd' && params[1].toLowerCase()=='listening' && params[2]) || (params[0].toLowerCase()=='listening' && params[1].toLowerCase()=='dnd' && params[2])){
            this.client.user.setStatus('dnd')
            this.client.user.setPresence({
                game:
                    {
                        name:message.content.substr(22),
                        type:2
                    }
                })
            message.channel.send("My online status is now: **Do Not Disturb** and my status is now: **Listening to** "+message.content.substr(22)+"\".")
        }else if ((params[0].toLowerCase()=='away' && params[1].toLowerCase()=='listening' && params[2]) || (params[0].toLowerCase()=='listening' && params[1].toLowerCase()=='away' && params[2]) || (params[0].toLowerCase()=='idle' && params[1].toLowerCase()=='listening' && params[2]) || (params[0].toLowerCase()=='listening' && params[1].toLowerCase()=='idle' && params[2])){
            this.client.user.setStatus('idle')
            this.client.user.setPresence({
                game:
                    {
                        name:message.content.substr(23),
                        type:2
                    }
                })
            message.channel.send("My online status is now: **Away/Idle** and my status is now: **Listening to** "+message.content.substr(23)+"\".")
        }else if ((params[0].toLowerCase()=='online' && params[1].toLowerCase()=='watching' && params[2]) || (params[0].toLowerCase()=='watching' && params[1].toLowerCase()=='online' && params[2])){
            this.client.user.setStatus('online')
            this.client.user.setPresence({
                game:
                    {
                        name:message.content.substr(22),
                        type:3
                    }
                })
            message.channel.send("My online status is now: **Online** and my status is now: **Watching** "+message.content.substr(22)+"\".")
        }else if ((params[0].toLowerCase()=='dnd' && params[1].toLowerCase()=='watching' && params[2]) || (params[0].toLowerCase()=='watching' && params[1].toLowerCase()=='dnd' && params[2])){
            this.client.user.setStatus('dnd')
            this.client.user.setPresence({
                game:
                    {
                        name:message.content.substr(19),
                        type:3
                    }
                })
            message.channel.send("My online status is now: **Do Not Disturb** and my status is now: **Watching** "+message.content.substr(19)+"\".")
        }else if ((params[0].toLowerCase()=='away' && params[1].toLowerCase()=='watching' && params[2]) || (params[0].toLowerCase()=='watching' && params[1].toLowerCase()=='away' && params[2]) || (params[0].toLowerCase()=='idle' && params[1].toLowerCase()=='watching' && params[2]) || (params[0].toLowerCase()=='watching' && params[1].toLowerCase()=='idle' && params[2])){
            this.client.user.setStatus('idle')
            this.client.user.setPresence({
                game:
                    {
                        name:message.content.substr(20),
                        type:3
                    }
                })
            message.channel.send("My online status is now: **Away/Idle** and my status is now: **Watching** "+message.content.substr(20)+"\".")
        }else if(params[0].toLowerCase()=='reset'){
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
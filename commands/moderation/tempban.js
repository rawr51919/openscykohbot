const commando = require('discord.js-commando')
class TempBanUsers extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'tempban',
			group: 'moderation',
			memberName: 'tempban',
			description: 'Allows OpenScykohBot to ban users for a specific time period. That is, if both you and the bot have mod permissions.',
		});
    }
    async run(message,args){
		var user = message.author
		var member = message.guild.member(user)
		let banmember = message.mentions.members.first()
        let params
        if (message.guild.commandPrefix==null || message.guild.commandPrefix==undefined){
            params = message.content.split(/ +/).slice(bot.commandPrefix.length)
        }else{
            params = message.content.split(/ +/).slice(message.guild.commandPrefix.length)
        }
        if(message.member.has('BAN_MEMBERS')){
            if(!message.guild.member(client.user).has('BAN_MEMBERS')){
                member.channel.send('Command error. Both you and the bot must have the BAN_MEMBERS permission.')
            }
            if(!member){
                member.channel.send('Command error. Either this user doesn\'t exist or you didn\'t specify one when you typed the command.')
            }
            let time=params[1]
            if(!time){
                member.channel.send('Command error. You didn\'t specify how long to ban the specified user.')
            }
            message.channel.send('Are you sure you want to ban the user '+params[0]+'for '+params[1]+' milliseconds? You must type `accept` within 5 seconds to do so.')
            .then(() => {
            message.channel.awaitMessages(response => response.content === 'accept', {
                max: 1,
                time: 5000,
                errors: ['time'],
                })
                .then((collected) => {
                    banmember.ban()
                        .then(console.log)
                    message.channel.send(params[0]+' has successfully been banned for '+params[1]+' milliseconds. You will receive a DM when the ban ends.')
                })
                .catch(()=> {
                    message.channel.send('Command error. You didn\'t accept the command in time.')
                    return
                });
            })
            .setTimeout(()=> {
                message.guild.unban(banmember)
                message.author.send('The user '+split[0]+' has been unbanned after '+split[1]+' milliseconds, just like you specified.')
            }, time);
        }else{
            member.channel.send('Command error. Both you and the bot must have the BAN_MEMBERS permission.')
        }
    }
}
module.exports=TempBanUsers
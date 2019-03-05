const commando=require('discord.js-commando')
class TempBanUsers extends commando.Command{
	constructor(client){
		super(client,{
			name: 'tempban',
			group: 'moderation',
			memberName: 'tempban',
            description: 'Allows OpenScykohBot to ban users for a specific time period. That is, if both you and the bot have mod permissions.',
            guildOnly: true
		})
    }
    async run(message,args){
        if(message.channel.type!=='dm')
            args=message.content.split(/ +/).slice(message.guild.commandPrefix.length)
        let banmember=message.mentions.members.first()
        if(message.member.has('BAN_MEMBERS')&&message.guild.me.has('BAN_MEMBERS')){
            if(!banmember){
                message.channel.send("Command error. Either this user doesn't exist or you didn't specify one when you typed the command.")
            }
            if(!args[1]){
                message.channel.send("Command error. You didn't specify how long to ban the specified user.")
            }
            message.channel.send('Are you sure you want to ban the user '+args[0]+'for '+args[1]+' milliseconds? You must type `accept` within 5 seconds to do so.')
            .then(()=>{
            message.channel.awaitMessages(response=>response.content==='accept',{
                max: 1,
                time: 5000,
                errors: ['args[1]'],
                })
                .then((collected)=>{
                    banmember.ban()
                        .then(console.log)
                    banmember.send('You have been banned from '+message.guild+' for '+args[1]+' milliseconds. You will receive a DM when the ban ends.')
                    message.channel.send(args[0]+' has successfully been banned for '+args[1]+' milliseconds. You both will receive a DM when the ban ends.')
                })
                .catch(()=>{
                    message.channel.send("Command error. You didn't accept the command in time.")
                    return
                })
            })
            .setTimeout(()=>{
                message.guild.unban(banmember)
                banmember.send(split[1]+' milliseconds have passed, so you have been unbanned from '+message.guild+'.')
                message.author.send('The user '+split[0]+' has been unbanned after '+split[1]+' milliseconds, just like you specified.')
            }, time)
        }else{
            member.channel.send('Command error. Both you and the bot must have the BAN_MEMBERS permission.')
        }
    }
}
module.exports=TempBanUsers
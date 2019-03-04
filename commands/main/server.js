const commando=require('discord.js-commando')
const{stripIndents}=require('common-tags')
class ServerInfo extends commando.Command{
	constructor(client){
		super(client,{
			name: 'server',
			group: 'main',
			memberName: 'server',
            description: 'Shows info about the current server.'
		})
    }
    async run(message){
        if(message.channel.type=='dm'){
            message.reply("You can't use this command in a DM.")
        }else if(message.channel.type=='text'){
            const verLevel={
                0: "0 (Unrestricted)",
                1: "1 (Email Verification)",
                2: "2 (On Discord for >5 minutes)",
                3: "3 (On server for >10 minutes)",
                4: "4 (Phone Verification)"
            }
            var textChannels=message.guild.channels.filter(channels=>channels.type=='text')
            var voiceChannels=message.guild.channels.filter(channels=>channels.type=='voice')
            var categoryChannels=message.guild.channels.filter(channels=>channels.type=='category')
            message.guild.fetchMembers()
            const stats={
                online:0,
                idle:0,
                offline:0,
                dnd:0,
                streaming:0,
                bot:0
            }
            message.guild.members.forEach(member=>{
                stats[member.presence.status]++
                if(member.presence.game && member.presence.game.streaming)stats.streaming++
                if(member.user.bot)stats.bot++
            })
            message.say(stripIndents`
            Server info for **${message.guild.name}**:
            Server ID: **${message.guild.id}**
            Server Population: **${message.guild.memberCount}**
            Current Server Online User Population: **${stats.online}**
            Current Server Do Not Disturb (DND) User Population: **${stats.dnd}**
            Current Server Idle/Away User Population: **${stats.idle}**
            Current Server Invisible/Offline User Population: **${stats.offline}**
            Current Server Streaming User Population: **${stats.streaming}**
            Current Server Bot Population: **${stats.bot}**
            Server Owner: **${message.guild.owner}**
            Server Owner ID: **${message.guild.owner.id}**
            Text Channel Amount: **${textChannels.size}**
            Voice Channel Amount: **${voiceChannels.size}**
            Category Channel Amount: **${categoryChannels.size}**
            Total Channel Amount: **${message.guild.channels.size}**
            Role Amount: **${message.guild.roles.size}**
            Server Created On: **${message.guild.createdAt}**
            Verification Level: **${verLevel[message.guild.verificationLevel]}**
            Server Region: **${message.guild.region}**
            Server Avatar: ${message.guild.iconURL}
            `)
        }else if(message.channel.type=='group'){
            message.say(stripIndents`
            Group DM info for **${channel.name}**:
            Group DM ID: **${channel.id}**
            Group DM Population: **"${channel.memberCount}"**
            Group DM Owner: **"${channel.owner}**
            Group DM Owner ID: **"${channel.owner.id}**
            Group DM Created On: **${channel.createdAt}**
            Group DM Avatar: ${channel.iconURL}
            `)
        }
    }
}
module.exports=ServerInfo
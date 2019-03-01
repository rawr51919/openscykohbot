const commando = require('discord.js-commando')
const {stripIndents} = require('common-tags')
class UserInfo extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'user',
            group: 'main',
            memberName: 'user',
            description: "Check a particular Discord user's stats.",
            args: [
                {
                    key: "member",
                    prompt: "Who should I choose?",
                    type: "member",
                    default: ""
                }
            ]
        })
    }
    async run(message,args){
        if (message.channel.type=='text' && message.channel.type=='group'){
            const member = (!args.member) ? message.member : args.member
            return message.say(stripIndents`
            User info for **${member.user.tag}** ${member.user.bot ? "(BOT)" : "(USER)"} in ${message.guild.name}:
            User ID: ${member.id}
            User Profile: ${member}
            Current Status: ${member.user.presence.status.toUpperCase()}
            Server Nickname: ${member.displayName}
            Account Created On: ${member.user.createdAt}
            Account Joined Server On: ${member.joinedAt}
            Account's Last Message ID: ${member.message.id}
            Account Avatar: ${member.user.displayAvatarURL.replace("?size=2048","")}
            `)
        }else if ((message.channel.type=='dm')){
            const member = (!args.member) ? message.author : args.member
            message.say(stripIndents`
            User info for **${member.tag}**:
            User ID: ${member.id}
            User Profile: ${member}
            User Name: ${member.username}
            Account Created On: ${member.createdAt}
            Account's Last Message ID: ${member.message.id}
            Account Avatar: ${member.displayAvatarURL.replace("?size=2048","")}
            `)
        }
    }
}
module.exports=UserInfo
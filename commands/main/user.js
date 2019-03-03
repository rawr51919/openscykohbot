const commando=require('discord.js-commando')
const {stripIndents}=require('common-tags')
class UserInfo extends commando.Command {
    constructor(client){
        super(client,{
            name: 'user',
            group: 'main',
            memberName: 'user',
            description: "Check a particular Discord user's stats.",
            args: [
                {
                    key: "user",
                    prompt: "Who should I choose?",
                    type: "user",
                    default: ""
                },
            ]
        })
    }
    async run(message,args){
        const user=(!args.user) ? message.author : args.user
        if (message.channel.type=='text'||message.channel.type=='group'){
            return message.say(stripIndents`
            User info for **${user.tag}** ${user.bot ? "(BOT)" : "(USER)"} in **${message.guild.name}**:
            User ID: **${user.id}**
            User Profile: ${user}
            Current Status: **${user.presence.status.toUpperCase()}**
            Server Nickname: **${message.guild.members.get(user.id).displayName}**
            Account Created On: **${user.createdAt}**
            Account Joined Server On: **${message.guild.members.get(user.id).joinedAt}**
            Account's Last Server Message ID: **${user.lastMessageID}**
            Account Avatar: ${user.displayAvatarURL.replace("?size=2048","")}
            `)
        }else if (message.channel.type=='dm'){
            message.say(stripIndents`
            User info for **${user.tag}**:
            User ID: **${user.id}**
            User Profile: ${user}
            Current Status: **${user.presence.status.toUpperCase()}**
            User Name: **${user.username}**
            Account Created On: **${user.createdAt}**
            Account's Last DM Message ID: **${user.lastMessageID}**
            Account Avatar: ${user.displayAvatarURL.replace("?size=2048","")}
            `)
        }
    }
}
module.exports=UserInfo
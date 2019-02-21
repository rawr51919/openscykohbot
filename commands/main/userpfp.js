const commando = require('discord.js-commando')
class UserPFP extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'userpfp',
            group: 'main',
            memberName: 'userpfp',
            description: 'Allows OpenScykohBot to show the avatar of either you or anyone you choose.',
            args: [
                {
                    key: 'member',
                    prompt: 'What member should I ping?',
                    type: 'member',
                    default: ""
                },
            ]
        });
    }
    async run(message,args) {
        if(!args.member || args.member.user==message.author){
            return message.reply('your avatar is: '+message.author.displayAvatarURL.replace('?size=2048', ''))
        }else if (args.member.user==args.member.user.username || args.member.user==args.member.user.id){
            return message.reply(args.member.user.username+'\'s avatar is: '+args.member.user.displayAvatarURL.replace('?size=2048', ''))
        }else if (args.member.user==args.member.user.mentions.first() || args.member.user=='<@'+args.member.user.id+'>'){
            return message.reply(args.member.user.mentions.first()+'\'s avatar is: '+args.member.user.displayAvatarURL.replace('?size=2048', ''))
        }
    }
}
module.exports=UserPFP
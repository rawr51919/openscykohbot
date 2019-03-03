const commando=require('discord.js-commando')
class UserPFP extends commando.Command {
    constructor(client){
        super(client,{
            name: 'userpfp',
            group: 'main',
            memberName: 'userpfp',
            description: 'Allows OpenScykohBot to show the avatar of either you or anyone you choose.',
            args: [
                {
                    key: "member",
                    prompt: "Who should I choose?",
                    type: "member"
                }
            ]
        })
    }
    async run(message,args){
        if(!args.member||args.member.user==message.author){
            return message.reply("your avatar is: "+message.author.displayAvatarURL.replace("?size=2048", ""))
        }else if (args.member.user==this.client.user){
            return message.reply("my avatar is: "+this.client.user.displayAvatarURL.replace("?size=2048", ""))
        }else{
            return message.reply(args.member.user.username+"'s avatar is: "+args.member.user.displayAvatarURL.replace("?size=2048", ""))
        }
    }
}
module.exports=UserPFP
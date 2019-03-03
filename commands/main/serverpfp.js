const commando=require('discord.js-commando')
class ServerPFP extends commando.Command {
    constructor(client){
        super(client,{
            name: 'serverpfp',
            group: 'main',
            memberName: 'serverpfp',
            description: "Allows OpenScykohBot to show the server icon of the server you're currently in.",
            guildOnly: true
        })
    }
    async run(message){
        if(message.guild.iconURL!=null){
            return message.reply(message.guild.name+"'s icon is: "+message.guild.iconURL)
        }else{
            return message.channel.send("This server doesn't have an icon.")
        }
    }
}
module.exports=ServerPFP
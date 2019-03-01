const commando = require('discord.js-commando')
class GroupDMPFP extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'groupdmpfp',
            group: 'main',
            memberName: 'groupdmpfp',
            description: "Allows OpenScykohBot to show the icon of the group DM you're currently in. (Note that this command doesn't have functionality yet due to Discord not supporting it)."
        })
    }
    async run(message) {
        if (message.channel.type=="dm" || message.channel.type=="text"){
            return message.channel.send("Please use this command inside of a group DM.")
        }
        if (channel.iconURL!=null){
            return message.reply(channel.name+"'s icon is: "+channel.iconURL)
        }else{
            return message.reply("This group DM doesn't have an icon.")
        }
    }
}
module.exports=GroupDMPFP
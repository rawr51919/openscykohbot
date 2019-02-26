const commando = require('discord.js-commando')
class StringLength extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'length',
            group: 'random',
            memberName: 'length',
            description: 'Computes the length of whatever you specify.',
        })
    }
    async run(message,args){
        if (message.channel.type!=='dm')
            args = message.content.split(/ +/).slice(message.guild.commandPrefix.length)
        var arglength=0
        if (!args[0]){
            message.reply('You need to specify a string to get the length of. Example: `&length <string>`')
        }else if (args[0] && args.length==1 && args[0].length==1){
            message.channel.send(args[0]+' contains '+args[0].length+' character.')
        }else if (args[0] && args.length==1 && args[0].length>1){
            message.channel.send(args[0]+' contains '+args[0].length+' characters.')
        }else if (args.length>=2){
            for (var i=0;i<=args.length-1;i++){
                if (args[i].length==1){
                    message.channel.send(args[i]+' contains '+args[i].length+' character.')
                }else{
                    message.channel.send(args[i]+' contains '+args[i].length+' characters.')
                }
                arglength=arglength+args[i].length
            }
            message.channel.send('The combined length of those strings is '+arglength+' characters.')
        }
    }
}
module.exports=StringLength
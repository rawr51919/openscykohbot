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
                if (args[0] && args.length==1){
                    message.channel.send(args[0]+' contains '+args[0].length+' characters.')
                }else if (args.length>=2){
                    for (var i=0;i<=args.length;i++){
                        message.channel.send(args[i]+' contains '+args[i].length+' characters.')
                    }
                    message.channel.send('The combined length of those strings is '+args.length+' characters.')
                }
        }
}
module.exports=StringLength
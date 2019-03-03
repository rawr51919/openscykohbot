const commando=require('discord.js-commando')
class ReverseStrings extends commando.Command {
	constructor(client){
		super(client,{
			name: 'reverse',
			group: 'random',
			memberName: 'reverse',
			description: 'Reverses any text you input into this command.',
		})
    }
    async run (message){
        message.channel.send(String(message.content.substr(9)).split("").reverse().join(""))
    }
}
module.exports=ReverseStrings
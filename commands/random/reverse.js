const commando = require('discord.js-commando')
class ReverseStrings extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'reverse',
			group: 'random',
			memberName: 'reverse',
			description: 'Reverses any text you input into this command.',
		})
    }
    async run (message){
        function reverseString(string){
            return string.split("").reverse().join("")
        }
        message.channel.send(reverseString(message.content.substr(9)))
    }
}
module.exports=ReverseStrings
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
    async run (message,args){
        function reverseString(string){
            if (string==="")
                return ""
            else if (string.length===1)
                return string
            else
                return reverseString(string.substr(1))+string.charAt(0)
        }
        message.channel.send(reverseString(message.content.substr(9)))
    }
}
module.exports=ReverseStrings
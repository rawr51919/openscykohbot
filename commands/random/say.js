const commando = require('discord.js-commando')
const random = new Random()
class Say extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'say',
			group: 'random',
			memberName: 'say',
			description: 'Make the bot sass at you for trying to have it say what you wish.',
		});
    }
    async run(message,args){
        if (random.integer(0,100)>=0 && random.integer(0,100)<=50){
            message.channel.send('You can\'t control me!')
        } else {
            message.channel.send(message.content.substr(5))
        }
    }
}
module.exports=Say
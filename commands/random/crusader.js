const commando = require('discord.js-commando')
const Random = require('random-js')
const random = new Random.Random()
class Crusader extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'crusade',
			group: 'random',
			memberName: 'crusade',
			description: 'Start a crusade.',
		})
    }
    async run(message,args){
		const images = [
            'No images yet.',
      ]
      const quotes = [
            'DEUS VULT',
            'WE MUST BRING THE HOLY LAND TO... wherever this is.',
        ]
        let crusadeImage=images[random.integer(0,images.length-1)]
        let crusadeQuote=quotes[random.integer(0,quotes.length-1)]
        message.channel.send(crusadeImage)
        message.channel.send(crusadeQuote)
    }
}
module.exports=Crusader
const commando = require('discord.js-commando')
class PKMNMeanings extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'pkmnmeaning',
			group: 'random',
			memberName: 'pkmnmeaning',
			description: 'Shows the meaning behind a Pokémon name. Still under construction.',
		})
	}
	async run(message,args) {
		switch (args) {
			case '1':
				message.channel.send('**Bulbasaur**:\n*n* bulb - a type of plant\n*n* -saur - Greek suffix meaning ‘lizard’')
				break
			case '2':
				message.channel.send('**Ivysaur**:\n*n* ivy - a plant\n*n* -saur - Greek suffix meaning ‘lizard’')
				break
			case '3':
				message.channel.send('**Venusaur**:\n*n* venus - from the *Venus* flytrap, a meat-eating plant\n*n* -saur - Greek suffix meaning ‘lizard’')
				break
			case '4':
				message.channel.send('**Charmander**:\n*v* char - to burn or singe\n*n* salamander - lizard-like amphibian')
				break
			case '5':
				message.channel.send('**Charmeleon**:\n*v* char - to burn or singe\n*n* chameleon - a color-changing, tree-dwelling lizard')
				break
			case '6':
				message.channel.send('**Charizard**:\n*v* char - to burn or singe\n*n* lizard - a long-bodied, long-tailed, short-legged reptile')
				break
			case '7':
				message.channel.send('**Squirtle**:\n*V* squirt - to rapidly eject water\n*n* turtle - a large marine reptile with a bony shell')
				break
			case '8':
				message.channel.send('**Wartortle**:\n*n* war - engage in armed conflict\n*n* tortoise - a large land reptile with a bony shell\n*n* turtle - a large marine reptile with a bony shell')
				break
			case '9':
				message.channel.send('**Blastoise**:\n*n* blast - a strong gust of wind or air\n*n* tortoise - a large land reptile with a bony shell')
				break
			default:
                message.channel.send('Please specify a valid Pokémon ID. Usage: `&pkmnmeaning <ID>`')
				break
		}
	}
}
module.exports=PKMNMeanings
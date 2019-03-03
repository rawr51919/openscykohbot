const commando = require('discord.js-commando')
const Random = require('random-js')
const random = new Random.Random()
class Rate extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'rate',
			group: 'random',
			memberName: 'rate',
			description: 'Allow the bot to rate anything and anyone you like.',
		})
    }
    async run(message){
        switch (message.content.substr(6).toLowerCase()){
            case 'bob ross':
            message.channel.send(":thinking: Huh... I'd give "+message.content.substr(6)+" a 20/10.")
            break
            case 'maro':
            message.channel.send(":thinking: Huh... I'd give "+message.content.substr(6)+" a maro/luggy.")
            break
            case 'lubigi':
            message.channel.send(":thinking: Huh... I'd give "+message.content.substr(6)+" a luggy/maro.")
            break
            case 'ethan':
            case 'technoblade':
            case 'techno':
            case 'mr. chubbs':
            message.channel.send(":thinking: Huh... I'd give "+message.content.substr(6)+" a 10/10.")
            break
            case 'memes':
            message.channel.send(":thinking: Huh... I'd give "+message.content.substr(6)+" a dank/🅱.")
            break
            case 'robbie rotten':
            message.channel.send(":thinking: Huh... I'd give "+message.content.substr(6)+" a 100000/69.")
            break
            case 'dr. meme crysis':
            message.channel.send(":thinking: Huh... I'd give "+message.content.substr(6)+" a 4/20.")
            break
            case 'scykohbot':
            message.channel.send("My predecessor? I'd give "+message.content.substr(6)+" a 10/10.")
            break
            case 'openscykohbot':
            case 'yourself':
            case 'you':
            message.channel.send("Me? I'd give myself a 0/10.")
            break
            case '<@287406575193423882>':
            case 'madi':
            message.channel.send(":thinking: Huh... I'd give "+message.content.substr(6)+" a 10/10. Madi created my predecessor, gosh dangit!")
            break
            case 'matt':
            message.channel.send(":thinking: Huh... I'd give "+message.content.substr(6)+" a 10/10. Matt... er... Madi created my predecessor, gosh dangit!")
            break
            case '<@279379019130994688>':
            message.channel.send(":thinking: Huh... I'd give "+message.content.substr(6)+" a floof/more floof.")
            break
            case 'john cena':
            message.channel.send(":thinking: Huh... I'd give "+message.content.substr(6)+" a 11/10.")
            break
            case '666':
            message.channel.send(":thinking: Huh... I'd give "+message.content.substr(6)+" a 6/6/6.")
            break
            case '🅱':
            message.channel.send('Keep your :b:s to yourself, kiddo.')
            break
            case 'skype':
            message.channel.send('O')
            break
            case 'snek':
            message.channel.send('eek')
            break
            case 'ur mum':
            message.channel.send(":thinking: Huh... I'd give "+message.content.substr(6)+" a 0/10.")
            break
            case 'scykoh':
            message.channel.send("He's cool, man. I'd give him a 10/10.")
            break
            case 'cleby':
            message.channel.send("She's cool, man. I'd give her a 10/10.")
            break
            case 'pooh':
            case 'rita':
            case 'vesta':
            case 'tuix':
            case 'knox':
            case 'poliswag':
            case 'vaporeon':
            message.channel.send("It's cool, man. I'd give it a 10/10.")
            break
            case 'myself':
            case 'me':
            message.channel.send(":thinking: Huh... I'd give you a "+random.integer(0,10)+"/10.")
            break
            case 'jolteon':
            message.channel.send("It's real cool, man. I'd give it a 11/10.")
            break
            case 'iceon':
            case 'glaceon':
            message.channel.send("It's cool, man. I'd give it a 9/10.")
            break
            case 'oras':
            case 'or':
            case 'as':
            case 'or/as':
            case 'omega ruby':
            case 'alpha sapphire':
            case 'omega ruby/alpha sapphire':
            case 'pokemon or':
            case 'pokemon as':
            case 'pokemon or/as':
            case 'pokemon omega ruby':
            case 'pokemon alpha sapphire':
            case 'pokemon omega ruby/alpha sapphire':
            case 'pokémon or':
            case 'pokémon as':
            case 'pokémon or/as':
            case 'pokémon omega ruby':
            case 'pokémon alpha sapphire':
            case 'pokémon omega ruby/alpha sapphire':
            message.channel.send("I'd give it a 7.8/10. Too much water, gosh dangit.")
            break
            case 'dab':
            message.channel.send("I'd give it a 6/dead meme.")
            break
            case '@everyone':
            case '<@468615764643938314>':
            message.channel.send('OW! A PING!')
            break
            case 'glaciion':
            message.channel.send(":thinking: Huh... I'd give "+message.content.substr(6)+" a 10/10. Glaciion created my predecessor, gosh dangit!")
            break
            case 'ajit pai':
            message.channel.send("I'd give "+message.content.substr(6)+" a 0/10. Gosh dangit, let us be free!")
            break
            case 'donald trump':
            message.channel.send("I'd give "+message.content.substr(6)+" a 0/10. Gosh dangit, be a gentleman and let the Mexicans in!")
            break
            case '':
            case ' ':
            message.channel.send('What am I supposed to rate, man? Gosh dangit.')
            break
            default:
            message.channel.send(":thinking: Huh... I'd give "+message.content.substr(6)+" a "+random.integer(0,10)+"/10.")
            break
        }
    }
}
module.exports=Rate
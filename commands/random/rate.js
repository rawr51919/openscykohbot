const commando = require('discord.js-commando')
const random = new Random()
class Rate extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'rate',
			group: 'random',
			memberName: 'rate',
			description: 'Allow the bot to rate anything and anyone you like.',
		});
    }
    async run(message,args){
        switch (message.content.substr(6).toLowerCase()){
            case 'bob ross':
            message.channel.send(':thinking: Huh... I\'d give '+message.content.substr(6)+' a 20/10.')
            break
            case 'maro':
            message.channel.send(':thinking: Huh... I\'d give '+message.content.substr(6)+' a maro/lubigi.')
            break
            case 'lubigi':
            message.channel.send(':thinking: Huh... I\'d give '+message.content.substr(6)+' a lubigi/maro.')
            break
            case 'ethan':
            message.channel.send(':thinking: Huh... I\'d give '+message.content.substr(6)+' a 10/10.')
            break
            case 'memes':
            message.channel.send(':thinking: Huh... I\'d give '+message.content.substr(6)+' a dank/🅱.')
            break
            case 'technoblade':
            message.channel.send(':thinking: Huh... I\'d give '+message.content.substr(6)+' a 10/10.')
            break
            case 'techno':
            message.channel.send(':thinking: Huh... I\'d give '+message.content.substr(6)+' a 10/10.')
            break
            case 'robbie rotten':
            message.channel.send(':thinking: Huh... I\'d give '+message.content.substr(6)+' a 100000/69.')
            break
            case 'dr. meme crysis':
            message.channel.send(':thinking: Huh... I\'d give '+message.content.substr(6)+' a 4/20.')
            break
            case 'scykohbot':
            message.channel.send('My predecessor? I\'d give '+message.content.substr(6)+' a 10/10.')
            break
            case 'openscykohbot':
            message.channel.send('Me? I\'d give myself a 0/10.')
            break
            case 'yourself':
            message.channel.send('Me? I\'d give myself a 0/10.')
            break
            case 'you':
            message.channel.send('Me? I\'d give myself a 0/10.')
            break
            case 'mr. chubbs':
            message.channel.send(':thinking: Huh... I\'d give '+message.content.substr(6)+' a 10/10.')
            break
            case '<@287406575193423882>':
            message.channel.send(':thinking: Huh... I\'d give '+message.content.substr(6)+' a 10/10. Madi created my predecessor, gosh dangit!')
            break
            case 'madi':
            message.channel.send(':thinking: Huh... I\'d give '+message.content.substr(6)+' a 10/10. Madi created my predecessor, gosh dangit!')
            break
            case 'matt':
            message.channel.send(':thinking: Huh... I\'d give '+message.content.substr(6)+' a 10/10. Matt... er... Madi created my predecessor, gosh dangit!')
            break
            case '<@279379019130994688>':
            message.channel.send(':thinking: Huh... I\'d give '+message.content.substr(6)+' a floof/more floof.')
            break
            case 'john cena':
            message.channel.send(':thinking: Huh... I\'d give '+message.content.substr(6)+' a 11/10.')
            break
            case '666':
            message.channel.send(':thinking: Huh... I\'d give '+message.content.substr(6)+' a 6/6/6.')
            break
            case '🅱':
            message.channel.send('Keep your :b:\'s to yourself, kiddo.')
            break
            case 'skype':
            message.channel.send('O')
            break
            case 'snek':
            message.channel.send('eek')
            break
            case 'ur mum':
            message.channel.send(':thinking: Huh... I\'d give '+message.content.substr(6)+' a 0/10.')
            break
            case 'scykoh':
            message.channel.send('He\'s cool, man. I\'d give him a 10/10.')
            break
            case 'cleby':
            message.channel.send('She\'s cool, man. I\'d give her a 10/10.')
            break
            case 'pooh':
            message.channel.send('It\'s cool, man. I\'d give it a 10/10.')
            break
            case 'rita':
            message.channel.send('It\'s cool, man. I\'d give it a 10/10.')
            break
            case 'vesta':
            message.channel.send('It\'s cool, man. I\'d give it a 10/10.')
            break
            case 'tuix':
            message.channel.send('It\'s cool, man. I\'d give it a 10/10.')
            break
            case 'knox':
            message.channel.send('It\'s cool, man. I\'d give it a 10/10.')
            break
            case 'poliswag':
            message.channel.send('It\'s cool, man. I\'d give it a 10/10.')
            break
            case 'myself':
            message.channel.send(':thinking: Huh... I\'d give you a' +random.integer(0,10)+'/10.')
            break
            case 'me':
            message.channel.send(':thinking: Huh... I\'d give you a' +random.integer(0,10)+'/10.')
            break
            case 'vaporeon':
            message.channel.send('It\'s cool, man. I\'d give it a 10/10.')
            break
            case 'jolteon':
            message.channel.send('It\'s real cool, man. I\'d give it a 11/10.')
            break
            case 'iceon':
            message.channel.send('It\'s cool, man. I\'d give it a 9/10.')
            break
            case 'glaceon':
            message.channel.send('It\'s cool, man. I\'d give it a 9/10.')
            break
            case 'oras':
            message.channel.send('I\'d give it a 7.8/10. Too much water, gosh dangit.')
            break
            case 'or':
            message.channel.send('I\'d give it a 7.8/10. Too much water, gosh dangit.')
            break
            case 'as':
            message.channel.send('I\'d give it a 7.8/10. Too much water, gosh dangit.')
            break
            case 'omega ruby':
            message.channel.send('I\'d give it a 7.8/10. Too much water, gosh dangit.')
            break
            case 'alpha sapphire':
            message.channel.send('I\'d give it a 7.8/10. Too much water, gosh dangit.')
            break
            case 'pokemon or':
            message.channel.send('I\'d give it a 7.8/10. Too much water, gosh dangit.')
            break
            case 'pokemon as':
            message.channel.send('I\'d give it a 7.8/10. Too much water, gosh dangit.')
            break
            case 'pokemon omega ruby':
            message.channel.send('I\'d give it a 7.8/10. Too much water, gosh dangit.')
            break
            case 'pokemon alpha sapphire':
            message.channel.send('I\'d give it a 7.8/10. Too much water, gosh dangit.')
            break
            case 'pokémon or':
            message.channel.send('I\'d give it a 7.8/10. Too much water, gosh dangit.')
            break
            case 'pokémon as':
            message.channel.send('I\'d give it a 7.8/10. Too much water, gosh dangit.')
            break
            case 'pokémon omega ruby':
            message.channel.send('I\'d give it a 7.8/10. Too much water, gosh dangit.')
            break
            case 'pokémon alpha sapphire':
            message.channel.send('I\'d give it a 7.8/10. Too much water, gosh dangit.')
            break
            case 'dab':
            message.channel.send('I\'d give it a 6/dead meme.')
            break
            case '@everyone':
            message.channel.send('OW! A PING!')
            break
            case '<@468615764643938314>':
            message.channel.send('OW! A PING!')
            break
            case 'glaciion':
            message.channel.send(':thinking: Huh... I\'d give '+message.content.substr(6)+' a 10/10. Glaciion created my predecessor, gosh dangit!')
            break
            case 'ajit pai':
            message.channel.send('I\'d give '+message.content.substr(6)+' a 0/10. Gosh dangit, let us be free!')
            break
            case 'donald trump':
            message.channel.send('I\'d give '+message.content.substr(6)+' a 0/10. Gosh dangit, be a gentleman and let the Mexicans in!')
            break
            case '':
            message.channel.send('What am I supposed to rate, man? Gosh dangit.')
            break
            case ' ':
            message.channel.send('What am I supposed to rate, man? Gosh dangit.')
            break
            default:
            message.channel.send(':thinking: Huh... I\'d give '+message.content.substr(6)+' a '+random.integer(0,10)+'/10.')
            break
        }
    }
}
module.exports=Rate
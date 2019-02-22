const commando = require('discord.js-commando')
const Random = require('random-js')
const random = new Random.Random()
class RockPaperScissors extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'rps',
			group: 'random',
			memberName: 'rps',
			description: 'Play a game of Rock, Paper, Scissors with OpenScykohBot.',
		})
	}

	async run(message,args) {
        if (message.channel.type!=='dm'){
            args = message.content.split(/ +/).slice(message.guild.commandPrefix.length)
        }
        let choice = random.integer(0,5)
		if(!args[0]) {
			message.channel.send("You need to specify if you're playing Rock, Paper, Scissors, Tornado, or Hurricane.\nExample: `&rps rock`")
			return
		}
		if(args[0].toLowerCase() == 'rock') {
			if(choice == 0) {
				message.channel.send(":fist::skin-tone-1: - I choose rock. It's a tie.")
			} else if(choice == 1) {
				message.channel.send(":hand_splayed::skin-tone-1: - I choose paper. I win!")
			} else if(choice == 2) {
				message.channel.send(":v::skin-tone-1: - I choose scissors. You win!")
			} else if(choice == 3) {
				message.channel.send(":hand_splayed::skin-tone-1: - I choose paper. I win!")
			} else if(choice == 4) {
				message.channel.send(":fist::skin-tone-1: - I choose rock. It's a tie.")
			} 
		} else if(args[0].toLowerCase() == 'paper') {
			if(choice == 0) {
				message.channel.send(":fist::skin-tone-1: - I choose rock. You win!")
			} else if(choice == 1) {
				message.channel.send(":hand_splayed::skin-tone-1: - I choose paper. It's a tie.")
			} else if(choice == 2) {
				message.channel.send(":v::skin-tone-1: - I choose scissors. I win!")
			} else if(choice == 3) {
				message.channel.send(":hand_splayed::skin-tone-1: - I choose paper. It's a tie.")
			} else if(choice == 4) {
				message.channel.send(":v::skin-tone-1: - I choose scissors. I win!")
			}
		} else if(params[0].toLowerCase() == 'scissors') {
			if(choice == 0) {
				message.channel.send(":fist::skin-tone-1: - I choose rock. I win!")
			} else if(choice == 1) {
				message.channel.send(":hand_splayed::skin-tone-1: - I choose paper. You win!")
			} else if(choice == 2) {
				message.channel.send(":v::skin-tone-1: - I choose scissors. It's a tie.")
			} else if(choice == 3) {
				message.channel.send(":v::skin-tone-1: - I choose scissors. It's a tie.")
			} else if(choice == 4) {
				message.channel.send(":fist::skin-tone-1: - I choose rock. I win!")
			}
		} else if(args[0].toLowerCase() == 'tornado') {
			message.channel.send(":dash: - I choose hurricane!")
			return
		} else if(args[0].toLowerCase() == 'hurricane') {
			message.channel.send(":cloud_tornado: - I choose tornado!")
			return
		} else {
			message.channel.send("You need to specify if you're playing Rock, Paper, Scissors, Tornado, or Hurricane.\nExample: `&rps rock`")
			return
		}
    }
}
module.exports=RockPaperScissors
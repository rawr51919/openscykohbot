const commando = require('discord.js-commando')
const random = new Random()
class EightBall extends commando.Command {
	constructor(client) {
		super(client, {
			name: '8ball',
			group: 'random',
			memberName: '8ball',
			description: 'Turns the bot into a magic 8-ball.',
		});
    }
    async run(message,args){
        const eightballquotes = [
          'Dude, really? The obvious answer is... erm... what was my line again?',
          'Um, yeah?',
          'No way, dude!',
          'Yes.',
          'Maybe you should ask again.',
          'Most likely not...',
          'Maybe...',
          'Heck yea, dude!',
          'WAHEY! Of course!',
          'What a load of buttcrud!',
          'Crud, no!',
          'I would say no.',
          "Well... I wouldn't say yes... but...",
          "Most likely.",
          "I would prefer to say yes.",
          "Why, no.",
          'That\'s pretty obvious, dude.',
          'Well, if you t-- *shuts down*',
          '*cough* Erm, y-yeah?',
          'Hold on, I\'m thinking! :thinking:',
          '*puts pineapple on a pizza* Hah!',
          'No.'
        ]
        let chosen8BallQuote=eightballquotes[random.integer(0,eightballquotes.length-1)]
        message.channel.send(chosen8BallQuote)
    }
}
module.exports=EightBall
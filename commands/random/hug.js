const commando = require('discord.js-commando')
const Random = require('random-js')
var random = new Random.Random()
class Hugs extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'hug',
			group: 'random',
			memberName: 'hug',
            description: 'Give someone a hug <3',
            args: [
                {
                    key: "member",
                    prompt: "Who should I choose?",
                    type: "member"
                }
            ]
		});
    }
    async run(message,args){
        const urls = [
			'https://media0.giphy.com/media/8tpiC1JAYVMFq/giphy.gif',
			'https://media0.giphy.com/media/16bJmyPvRbCDu/giphy.gif',
			'https://media3.giphy.com/media/lXiRKBj0SAA0EWvbG/giphy.gif',
			'https://m.popkey.co/df102c/gr9RJ.gif',
			'https://media1.tenor.com/images/79d425d4c76ac4cf5b422f764453bfee/tenor.gif?itemid=5026053',
			'https://media1.tenor.com/images/42922e87b3ec288b11f59ba7f3cc6393/tenor.gif?itemid=5634630',
			'https://media2.giphy.com/media/yidUzriaAGJbsxt58k/giphy.gif',
			'https://media1.giphy.com/media/fyx8vjZc2ZvoY/giphy.gif',
			'https://media3.giphy.com/media/INUsrrxQW4et2/giphy.gif',
			'https://media0.giphy.com/media/xT0xemCvkpWyJlOG2Y/giphy.gif',
        ]
        message.channel.send('Hugs for everyone~\n**'+message.author.username+'** gave **'+args.member.user.username+'** a hug!\n'+urls[random.integer(0,urls.length-1)])
    }
}
module.exports=Hugs
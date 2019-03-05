const commando=require('discord.js-commando')
const Random=require('random-js')
const random=new Random.Random(Random.nodeCrypto)
class CoinFlip extends commando.Command{
	constructor(client){
		super(client,{
			name: 'coinflip',
			group: 'random',
			memberName: 'coinflip',
			description: 'Flip a coin with OpenScykohBot.',
		})
  	}
  async run(message){
		const coinstates={
			1:'heads',
			2:'tails'
		}
		message.channel.send(message.author+" flipped a coin and got "+coinstates[random.die(2)]+"!")
  	}
}
module.exports=CoinFlip
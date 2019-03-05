const commando=require('discord.js-commando')
class REE extends commando.Command{
	constructor(client){
		super(client,{
				name: 'reeee',
				group: 'random',
				memberName: 'reeee',
				description: 'Make the bot reeee.',
			})
		}
    async run(message){
			message.channel.send('REEEEEEEEEEEEEEEEE')
    }
}
module.exports=REE
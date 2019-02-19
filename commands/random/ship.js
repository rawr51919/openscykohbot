const commando = require('discord.js-commando')
var random = require('random-js')()
class Ships extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'ship',
			group: 'random',
			memberName: 'ship',
			description: 'Ship whatever you want with whatever you want.',
		});
    }
    async run(message,args){
		let params = message.content.split(",")
            if (params[0]==this.client.commandPrefix+'ship' || params[0]==message.guild.commandPrefix+'ship'){
                message.channel.send('I can\'t ship literally nothing with literally nothing!\nUsage: `&ship person1, person2`')
                return
            }
            if (!params[1]){
                message.channel.send('I can\'t ship '+params[0].substr(6)+' with literally nothing!\nUsage: `&ship person1, person2`')
                return
            }
        var rating = random.integer(0,100)
            if (rating===0){
            message.channel.send(params[0].substr(6)+' x'+params[1]+'\n**'+rating+'%** No match. :broken_heart:')
            }else if (rating>=1 && rating<=15){
            message.channel.send(params[0].substr(6)+' x'+params[1]+'\n**'+rating+'%** Terrible... :cry:')
            }else if (rating>=16 && rating<=30){
            message.channel.send(params[0].substr(6)+' x'+params[1]+'\n**'+rating+'%** Bad... :slight_frown:')
            }else if (rating>=31 && rating<=40){
            message.channel.send(params[0].substr(6)+' x'+params[1]+'\n**'+rating+'%** Meh. :neutral_face:')
            }else if (rating>=41 && rating<=50){
            message.channel.send(params[0].substr(6)+' x'+params[1]+'\n**'+rating+'%** Alright? :confused:')
            }else if (rating>=51 && rating<=65){
            message.channel.send(params[0].substr(6)+' x'+params[1]+'\n**'+rating+'%** Good. :slight_smile:')
            }else if (rating==69){
            message.channel.send(params[0].substr(6)+' x'+params[1]+'\n**'+rating+'%** HOT. :smirk:')
            }else if (rating>=66 && rating<=75){
            message.channel.send(params[0].substr(6)+' x'+params[1]+'\n**'+rating+'%** Amazing! :kissing_heart:')
            }else if (rating>=76 && rating<=99){
            message.channel.send(params[0].substr(6)+' x'+params[1]+'\n**'+rating+'%** Outstanding! :heart_eyes:')
            }else if (rating==100){
            message.channel.send(params[0].substr(6)+' x'+params[1]+'\n**'+rating+'%** **I SHIP IT!** :ship:')
            }
    }
}
module.exports=Ships
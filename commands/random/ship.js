const commando=require('discord.js-commando')
const Random=require('random-js')
const random=new Random.Random()
class Ships extends commando.Command{
	constructor(client){
		super(client,{
			name: 'ship',
			group: 'random',
			memberName: 'ship',
			description: 'Ship whatever you want with whatever you want.',
		})
    }
    async run(message,args){
		 args=message.content.split(",")
            if(args[0]==message.guild.commandPrefix+'ship'){
                message.channel.send("I can't ship literally nothing with literally nothing!\nUsage: `&ship person1, person2`")
                return
            }
            if(!args[1]){
                message.channel.send("I can't ship "+args[0].substr(6)+" with literally nothing!\nUsage: `&ship person1, person2`")
                return
            }
            if(rating===0){
            message.channel.send(args[0].substr(6)+' x'+args[1]+'\n**'+random.integer(0,100)+'%** No match. :broken_heart:')
            }else if(rating>=1&&rating<=15){
            message.channel.send(args[0].substr(6)+' x'+args[1]+'\n**'+random.integer(0,100)+'%** Terrible... :cry:')
            }else if(rating>=16&&rating<=30){
            message.channel.send(args[0].substr(6)+' x'+args[1]+'\n**'+random.integer(0,100)+'%** Bad... :slight_frown:')
            }else if(rating>=31&&rating<=40){
            message.channel.send(args[0].substr(6)+' x'+args[1]+'\n**'+random.integer(0,100)+'%** Meh. :neutral_face:')
            }else if(rating>=41&&rating<=50){
            message.channel.send(args[0].substr(6)+' x'+args[1]+'\n**'+random.integer(0,100)+'%** Alright? :confused:')
            }else if(rating>=51&&rating<=65){
            message.channel.send(args[0].substr(6)+' x'+args[1]+'\n**'+random.integer(0,100)+'%** Good. :slight_smile:')
            }else if(rating==69){
            message.channel.send(args[0].substr(6)+' x'+args[1]+'\n**'+random.integer(0,100)+'%** HOT. :smirk:')
            }else if(rating>=66&&rating<=75){
            message.channel.send(args[0].substr(6)+' x'+args[1]+'\n**'+random.integer(0,100)+'%** Amazing! :kissing_heart:')
            }else if(rating>=76&&rating<=99){
            message.channel.send(args[0].substr(6)+' x'+args[1]+'\n**'+random.integer(0,100)+'%** Outstanding! :heart_eyes:')
            }else if(rating==100){
            message.channel.send(args[0].substr(6)+' x'+args[1]+'\n**'+random.integer(0,100)+'%** **I SHIP IT!** :ship:')
            }
    }
}
module.exports=Ships
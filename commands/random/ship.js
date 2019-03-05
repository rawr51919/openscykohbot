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
            if(random.integer(0,100)===0){
            message.channel.send(args[0].substr(6)+' x'+args[1]+'\n**'+random.integer(0,100)+'%** No match. :broken_heart:')
            }else if(random.integer(0,100)>=1&&random.integer(0,100)<=15){
            message.channel.send(args[0].substr(6)+' x'+args[1]+'\n**'+random.integer(0,100)+'%** Terrible... :cry:')
            }else if(random.integer(0,100)>=16&&random.integer(0,100)<=30){
            message.channel.send(args[0].substr(6)+' x'+args[1]+'\n**'+random.integer(0,100)+'%** Bad... :slight_frown:')
            }else if(random.integer(0,100)>=31&&random.integer(0,100)<=40){
            message.channel.send(args[0].substr(6)+' x'+args[1]+'\n**'+random.integer(0,100)+'%** Meh. :neutral_face:')
            }else if(random.integer(0,100)>=41&&random.integer(0,100)<=50){
            message.channel.send(args[0].substr(6)+' x'+args[1]+'\n**'+random.integer(0,100)+'%** Alright? :confused:')
            }else if(random.integer(0,100)>=51&&random.integer(0,100)<=65){
            message.channel.send(args[0].substr(6)+' x'+args[1]+'\n**'+random.integer(0,100)+'%** Good. :slight_smile:')
            }else if(random.integer(0,100)==69){
            message.channel.send(args[0].substr(6)+' x'+args[1]+'\n**'+random.integer(0,100)+'%** HOT. :smirk:')
            }else if(random.integer(0,100)>=66&&random.integer(0,100)<=75){
            message.channel.send(args[0].substr(6)+' x'+args[1]+'\n**'+random.integer(0,100)+'%** Amazing! :kissing_heart:')
            }else if(random.integer(0,100)>=76&&random.integer(0,100)<=99){
            message.channel.send(args[0].substr(6)+' x'+args[1]+'\n**'+random.integer(0,100)+'%** Outstanding! :heart_eyes:')
            }else if(random.integer(0,100)==100){
            message.channel.send(args[0].substr(6)+' x'+args[1]+'\n**'+random.integer(0,100)+'%** **I SHIP IT!** :ship:')
            }
    }
}
module.exports=Ships
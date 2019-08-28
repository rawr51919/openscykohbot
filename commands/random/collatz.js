const commando=require('discord.js-commando')
class Collatz extends commando.Command{
    constructor(client){
        super(client,{
            name: 'collatz',
            group: 'random',
            memberName: 'collatz',
            description: "Employs the Collatz conjecture on whatever positive number you specify. Would not recommend using on most servers, as this will likely flood them out.",
        })
	}
	async run(message,args){
		if(message.channel.type!=='dm')
            args=message.content.split(/ +/).slice(message.guild.commandPrefix.length)
		let numbers=[parseFloat(args[0])]
		if((numbers[0]<0||numbers[0]%1!=0)&&message.channel.type!='dm'){
			message.reply('please provide a valid positive number.')
			return
		}else if((numbers[0]<0||numbers[0]%1!=0)&&message.channel.type=='dm'){
			message.reply('Please provide a valid positive number.')
			return
		}
		while(numbers[numbers.length-1]!=1){
			numbers.push(numbers[numbers.length-1]%2==0?numbers[numbers.length-1]/2:numbers[numbers.length-1]*3+1)
		}
		let messages=['']
		for(let i=0;i<numbers.length;i++){
			if(messages[messages.length-1].length+numbers[i].toString().length<2000){
				messages[messages.length-1]+=numbers[i]+' '
			}else{
				messages.push(numbers[i]+' ')
			}
		}
		for(let i of messages){
			message.channel.send(i)
		}
	}
}
module.exports=Collatz
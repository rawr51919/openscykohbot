const commando = require('discord.js-commando')
const Random = require('random-js')
const random = new Random.Random(Random.nodeCrypto)
class NCRNG extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'ncrng',
            group: 'random',
            memberName: 'ncrng',
            description: "Allows for the require('crypto').randomBytes() RNG library to generate a random number or up to 9007199254740992 numbers between 0 and 9007199254740992.",
        })
    }
    async run(message,args) {
        let number=args.split(/ +/)
        let numbers=/^[0-9]+$/
        if (!numbers.test(number[0]) || !numbers.test(number[1]) || (!numbers.test(number[2]) && number[2])){
            message.channel.send('Syntax error. You must specify numbers in this command.')
        }
        if (number.length>=4){
            message.channel.send('Syntax error. You can only specify a maximum of 3 parameters.')
        }
        if (number[0]>=1000000 || number[1]>=1000000 || number[2]>=1000000 || (number[0]>=1000000 && number[1]>=1000000) || (number[0]>=1000000 && number[1]>=1000000 && number[2]>=1000000)){
            message.reply('unfortunately for you, computers have a limited amount of memory, so unless you want me to run out, stop sending ludicrous numbers. Thanks.')
        }
        if (message.content.match(message.guild.commandPrefix+'ncrng')){
            message.reply('please specify numbers to generate between.\nUsage: `&ncrng number1 number2` for one number and `&ncrng number1 number2 number3` for up to 9007199254740992 numbers up to 9007199254740992.')
        }else if (message.content.match(message.guild.commandPrefix+'ncrng'+/^ ([0-9]*) ([0-9]*)+\b/) && !number[2]){
            if (number[0]>9007199254740992 || number[1]>9007199254740992 || (number[0]>9007199254740992 && number[1]>9007199254740992)){
                message.reply('you\'ve reached the maximum limit of this RNG engine. Please use a lower number(s).')
            }else{
                message.reply('your generated number is '+random.integer(number[0],number[1])+'.')
            }
        }else if (message.content.match(message.guild.commandPrefix+'ncrng'+/^ ([0-9]*) ([0-9]*) ([0-9]*)+\b/)){
            var numberarray=[]
            var numbertotal=0
            for (var i=1;i<=number[0];i++){
                rollnumbers.push(random.integer(number[1],number[2]))
                message.reply('your generated number #'+i+' is '+numberarray[i-1]+'.')
                numbertotal=numbertotal+numberarray[i-1]
            }
            message.reply('the sum of the generated numbers is '+numbertotal+'.')
        }
    }
}
module.exports=NCRNG
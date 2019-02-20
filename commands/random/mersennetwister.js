const commando = require('discord.js-commando')
const Random = require('random-js')
var random = new Random(Random.engines.mt19937().autoSeed())
class MTRNG extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'mtrng',
            group: 'random',
            memberName: 'mtrng',
            description: 'Allows for the Mersenne Twister RNG algorithm to generate a random number or up to 9007199254740992 random numbers between 0 and 4294967295.',
        });
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
        if ((message.content.match(this.client.commandPrefix+/^mtrng$/)) || (message.content.match(message.guild.commandPrefix+/^mtrng$/))){
            message.reply('please specify numbers to generate between.\nUsage: `&mtrng number1 number2` for one number and `&mtrng number1 number2 number3` for up to 9007199254740992 numbers up to 4294967295.')
        }else if ((message.content.match(this.client.commandPrefix+/^mtrng ([0-9]*) ([0-9]*)+\b/) && !number[2]) || (message.content.match(message.guild.commandPrefix+/^mtrng ([0-9]*) ([0-9]*)+\b/) && !number[2])){
            if (number[0]>9007199254740992 || number[1]>4294967295 || number[2]>4294967295 || (number[1]>4294967295 && number[2]>4294967295) || (number[0]>9007199254740992 && number[1]>4294967295 && number[2]>4294967295)){
                message.reply('you\'ve reached the maximum limit of this RNG engine. Please use a lower number(s).')
            }else{
                message.reply('your generated number is '+random.integer(number[0],number[1])+'.')
            }
        }else if ((message.content.match(this.client.commandPrefix+/^mtrng ([0-9]*) ([0-9]*) ([0-9]*)+\b/)) || (message.content.match(message.guild.commandPrefix+/^mtrng ([0-9]*) ([0-9]*) ([0-9]*)+\b/))){
            var numberarray=[]
            var numbertotal=0
            if (number[0]>9007199254740992 || number[1]>9007199254740992 || number[2]>9007199254740992 || (number[1]>9007199254740992 && number[2]>9007199254740992) || (number[0]>9007199254740992 && number[1]>9007199254740992 && number[2]>9007199254740992)){
                message.reply('you\'ve reached the maximum limit of this RNG engine. Please use a lower number(s).')
            }else{
                for (var i=1;i<=number[0];i++){
                    rollnumbers.push(random.integer(number[1],number[2]))
                    message.reply('your generated number #'+i+' is '+numberarray[i-1]+'.')
                    numbertotal=numbertotal+numberarray[i-1]
                }
                message.reply('the sum of the generated numbers is '+numbertotal+'.')
            }
        }
    }
}
module.exports=MTRNG
const commando = require('discord.js-commando')
const Random = require('random-js')
var random = new Random.Random()
class RNG extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'rng',
            group: 'random',
            memberName: 'rng',
            description: 'Allows for whatever RNG algorithm you specify to generate a random number or up to 9007199254740992 random numbers between 0 and 4294967295.',
        })
    }
    async run(message,args) {
        let numbers=/^\d+$/
        if (message.channel.type!=='dm'){
            args = message.content.split(/ +/).slice(message.guild.commandPrefix.length)
        }
        switch (args[0]){
            case 'nm':
                random = new Random.Random()
                break
            case 'bc':
                random = new Random.Random(Random.browserCrypto)
                break
            case 'nc':
                random = new Random.Random(Random.nodeCrypto)
                break
            case 'mt':
                random = new Random.Random(Random.MersenneTwister19937.autoSeed())
                break
        }
        if (!numbers.test(args[1]) || !numbers.test(args[2]) || (!numbers.test(args[3]) && args[3])){
            message.channel.send('Syntax error. You must specify numbers in this command.')
        }
        if (args.length>=5){
            message.channel.send('Syntax error. You can only specify a maximum of 4 parameters.')
        }
        if (args[1]>=1000000 || args[2]>=1000000 || args[3]>=1000000 || (args[1]>=1000000 && args[2]>=1000000) || (args[1]>=1000000 && args[3]>=1000000) || (args[2]>=1000000 && args[3]>=1000000) || (args[1]>=1000000 && args[2]>=1000000 && args[3]>=1000000)){
            message.reply('unfortunately for you, computers have a limited amount of memory, so unless you want me to run out, stop sending ludicrous numbers. Thanks.')
        }
        if ((args[0]=='nm' || args[0]=='bc' || args[0]=='nc' || args[0]=='mt') && (args.length==1 || !numbers.test(args.slice(1)))){
            message.reply('please specify numbers to generate between.\nUsage: `&rng engine number1 number2` for one number and `&rng engine number1 number2 number3` for up to 9007199254740992 numbers.')
        }else if (args[0]=='nm' || args[0]=='bc' || args[0]=='nc' || args[0]=='mt' && (args.length==3 && numbers.test(args.slice(1)))){
            if (args[1]>9007199254740992 || args[2]>4294967295 || (args[1]>9007199254740992 && args[2]>4294967295)){
                message.reply("you've reached the maximum limit of this command. Please use a lower number(s).")
            }else{
                if (args[1]==1){
                    message.reply('your generated number is '+random.die(args[2])+'.')
                }else{
                    message.reply('your generated number is '+random.integer(args[1],args[2])+'.')
                }
            }
        }else if ((args[0]=='nm' || args[0]=='bc' || args[0]=='nc' || args[0]=='mt') && (args.length==4 && numbers.test(args.slice(1)))){
            var numberarray
            var numbertotal
            if (args[1]>9007199254740992 || args[2]>4294967295 || args[3]>4294967295 || (args[1]>9007199254740992 && args[2]>4294967295) || (args[2]>4294967295 && args[3]>4294967295) || (args[1]>9007199254740992 && args[3]>4294967295) || (args[1]>9007199254740992 && args[2]>4294967295 && args[3]>4294967295)){
                message.reply("you've reached the maximum limit of this command. Please use a lower number(s).")
            }else{
                for (var i=1;i<=args[1];i++){
                    if (args[2]==1){
                        numberarray.push(random.die(args[3]))
                    }else{
                        numberarray.push(random.integer(args[2],args[3]))
                    }
                    message.reply('your generated number #'+i+' is '+numberarray[i-1]+'.')
                    numbertotal=numbertotal+numberarray[i-1]
                }
                message.reply('the sum of the generated numbers is '+numbertotal+'.')
            }
        }
    }
}
module.exports=RNG
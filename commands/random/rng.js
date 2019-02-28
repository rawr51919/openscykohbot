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
    async run(message,args){
        let numbers=/^\d+$/
        if (message.channel.type!='dm')
            args = message.content.split(/ +/).slice(message.guild.commandPrefix.length)
        switch (args[0]){
            case 'nm' || (!args[0]):
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
            case 'help':
                message.channel.send("Help for **&rng**:\nSpecify the engine you want to use and the numbers to generate between.\nExample: `&rng nm 0, 10` would generate 2 numbers between 0 and 10 and show the result in the channel you sent the command in.\nThe engines used are:\nNativeMath, which has `Math.random()` under the hood and is accessible via using `nm` as the first argument.\nBrowserCrypto, which has `crypto.getRandomValues()` under the hood and is accessible via using `bc` as the first argument.\nNodeCrypto, which has `crypto.RandomBytes()` under the hood and is accessible via using `nc` as the first argument.\nMersenneTwister19937, which has a variant of the Mersenne Twister under the hood and is accessible via using `mt` as the first argument.")
                break
        }
        switch (args){
            case args.length==2 && args[0]!='help' && numbers.test(args.slice(1)) && message.channel.type!='dm':
                message.reply('your generated number is '+random.die(args[1])+'.')
                break
            case args.length==2 && args[0]!='help' && numbers.test(args.slice(1)) && message.channel.type=='dm':
                message.reply('Your generated number is '+random.die(args[1])+'.')
                break
            case args.length==3 && args[0]!='help' && numbers.test(args.slice(1)) && message.channel.type!='dm':
                if (args[1]!=1){
                    message.reply('your generated number is '+random.integer(args[1],args[2])+'.')
                }else{
                    message.reply('your generated number is '+random.die(args[2])+'.')
                }
                break
            case args.length==3 && args[0]!='help' && numbers.test(args.slice(1)) && message.channel.type=='dm':
                if (args[1]!=1){
                    message.reply('Your generated number is '+random.integer(args[1],args[2])+'.')
                }else{
                    message.reply('Your generated number is '+random.die(args[2])+'.')
                }
                break
            case args.length==4 && args[0]!='help' && numbers.test(args.slice(1)) && message.channel.type!='dm':
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
                break
            case args.length==4 && args[0]!='help' && numbers.test(args.slice(1)) && message.channel.type=='dm':
                for (var i=1;i<=args[1];i++){
                    if (args[2]==1){
                        numberarray.push(random.die(args[3]))
                    }else{
                        numberarray.push(random.integer(args[2],args[3]))
                    }
                    message.reply('Your generated number #'+i+' is '+numberarray[i-1]+'.')
                    numbertotal=numbertotal+numberarray[i-1]
                }
                message.reply('The sum of the generated numbers is '+numbertotal+'.')
                break
        }
    }
}
module.exports=RNG
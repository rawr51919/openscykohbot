const commando=require('discord.js-commando')
const Random=require('random-js')
var random
class RNG extends commando.Command {
    constructor(client){
        super(client,{
            name: 'rng',
            group: 'random',
            memberName: 'rng',
            description: 'Allows for whatever RNG algorithm you specify to generate a random number or up to 9007199254740992 random numbers between 0 and 4294967295.',
            args: [
                {
                  key: 'engine',
                  prompt: 'What engine do you want to use? `nm`, `mt`, `nc`, and `bc` are your options.',
                  type: 'string',
                  mt: random=new Random.Random(Random.MersenneTwister19937.autoSeed()),
                  nc: random=new Random.Random(Random.nodeCrypto),
                  bc: random=new Random.Random(Random.browserCrypto),
                  nm: random=new Random.Random(),
                },
                {
                  key: 'numbers',
                  prompt: 'How many numbers?',
                  type: 'integer',
                  min: 1,
                  max: 9007199254740992
                },
                {
                  key: 'rangebegin',
                  prompt: 'What number should the number range begin at?',
                  type: 'integer',
                  min: 0,
                  max: 4294967295
                },
                {
                  key: 'rangeend',
                  prompt: 'What number should the number range end at?',
                  type: 'integer',
                  min: 0,
                  max: 4294967295
                },
            ]
        })
    }
    async run(message,args){
        var numberarray=[]
        var numbertotal=0
        if(args.engine=='help'){
            message.channel.send("Help for **&rng**:\nSpecify the engine you want to use and the numbers to generate between.\nExample: `Example: `&rng, 2, 0, 10` at the prompts would generate 2 numbers between 0 and 10 and show the result in the channel you sent the command in.\nThe engines used are:\nNativeMath, which has `Math.random()` under the hood and is accessible via using `nm` as the first argument.\nBrowserCrypto, which has `crypto.getRandomValues()` under the hood and is accessible via using `bc` as the first argument.\nNodeCrypto, which has `crypto.RandomBytes()` under the hood and is accessible via using `nc` as the first argument.\nMersenneTwister19937, which has a variant of the Mersenne Twister under the hood and is accessible via using `mt` as the first argument.")
            return
        }
        if(args.numbers==1&&args.rangebegin==1&&message.channel.type!='dm'){
            message.reply("your generated number is "+random.die(args.rangeend)+".")
        }else if(args.numbers==1&&args.rangebegin==1&&message.channel.type=='dm'){
            message.reply("Your generated number is "+random.die(args.rangeend)+".")
        }else if(args.numbers==1&&args.rangebegin!=1&&message.channel.type!='dm'){
            message.reply("your generated number is "+random.integer(args.rangebegin,args.rangeend)+".")
        }else if(args.numbers==1&&args.rangebegin!=1&&message.channel.type=='dm'){
            message.reply("Your generated number is "+random.integer(args.rangebegin,args.rangeeend)+".")
        }else if(args.numbers>1&&message.channel.type!='dm'){
            for (var i=1;i<=args.numbers;i++){
                if(args.rangebegin==1){
                    numberarray.push(random.die(args.rangeend))
                }else{
                    numberarray.push(random.integer(args.rangebegin,args.rangeend))
                }
                message.reply('your generated number #'+i+' is '+numberarray[i-1]+'.')
                numbertotal=numbertotal+numberarray[i-1]
            }
            message.reply('the sum of the generated numbers is '+numbertotal+'.')
        }else if(args.numbers>1&&message.channel.type=='dm'){
            for (var i=1;i<=args.numbers;i++){
                if(args.rangebegin==1){
                    numberarray.push(random.die(args.rangeend))
                }else{
                    numberarray.push(random.integer(args.rangebegin,args.rangeend))
                }
                message.reply('Your generated number #'+i+' is '+numberarray[i-1]+'.')
                numbertotal=numbertotal+numberarray[i-1]
            }
            message.reply('The sum of the generated numbers is '+numbertotal+'.')
        }
    }
}
module.exports=RNG
const commando=require('discord.js-commando')
const Random=require('random-js')
var random
class DiceRoll extends commando.Command{
    constructor(client){
        super(client,{
            name: 'roll',
            group: 'random',
            memberName: 'roll',
            description: 'Allows for whatever RNG algorithm you specify to roll a die or up to 9007199254740992 dice with between 0 and 4294967295 sides.',
            args: [
                {
                  key: 'engine',
                  prompt: 'What engine do you want to use? `nm`, `mt`, `nc`, and `bc` are your options.\nSpecify `help` to get help with using this command.',
                  type: 'string',
                  mt: random=new Random.Random(Random.MersenneTwister19937.autoSeed()),
                  nc: random=new Random.Random(Random.nodeCrypto),
                  bc: random=new Random.Random(Random.browserCrypto),
                  nm: random=new Random.Random(),
                },
                {
                  key: 'dice',
                  prompt: 'How many dice?',
                  type: 'integer',
                  min: 1,
                  max: 9007199254740992,
                  default: ""
                },
                {
                  key: 'sidebegin',
                  prompt: 'What number should the sides begin at?',
                  type: 'integer',
                  min: 0,
                  max: 4294967295,
                  default: ""
                },
                {
                  key: 'sideend',
                  prompt: 'What number should the sides end at?',
                  type: 'integer',
                  min: 0,
                  max: 4294967295,
                  default: ""
                },
            ]
        })
    }
    async run(message,args){
        var numberarray=[]
        var numbertotal=0
        if (args.engine=='help'){
            message.channel.send("Help for **&roll**:\nSpecify the engine you want to use and the numbers to roll between.\nExample: `&roll nm 1 0 10` at the prompts would roll an 11-sided die with all sides labelled as between 0 and 10 with the `nativeMath` engine rolling the die and would show the result in the channel you sent the command in.\nThe engines used are:\nNativeMath, which has `Math.random()` under the hood and is accessible via using `nm` as the first argument.\nBrowserCrypto, which has `crypto.getRandomValues()` under the hood and is accessible via using `bc` as the first argument.\nNodeCrypto, which has `crypto.RandomBytes()` under the hood and is accessible via using `nc` as the first argument.\nMersenneTwister19937, which has a variant of the Mersenne Twister under the hood and is accessible via using `mt` as the first argument.")
            return
        }
        if(args.dice==1&&args.sidebegin==1&&message.channel.type!='dm'){
            message.reply("you rolled a "+random.die(args.sideend)+".")
        }else if(args.dice==1&&args.sidebegin==1&&message.channel.type=='dm'){
            message.reply("You rolled a "+random.die(args.sideend)+".")
        }else if(args.dice==1&&args.sidebegin!=1&&message.channel.type!='dm'){
            message.reply("you rolled a "+random.integer(args.sidebegin,args.sideend)+".")
        }else if(args.dice==1&&args.sidebegin!=1&&message.channel.type=='dm'){
            message.reply("You rolled a "+random.integer(args.sidebegin,args.sideend)+".")
        }else if(args.dice>1&&message.channel.type!='dm'){
            for (var i=1;i<=args.dice;i++){
                if(args.sidebegin==1){
                    numberarray.push(random.die(args.sideend))
                }else{
                    numberarray.push(random.integer(args.sidebegin,args.sideend))
                }
                message.reply('your die #'+i+' rolled a '+numberarray[i-1]+'.')
                numbertotal=numbertotal+numberarray[i-1]
            }
            message.reply('the sum of the rolls is '+numbertotal+'.')
        }else if(args.dice>1&&message.channel.type=='dm'){
            for (var i=1;i<=args.dice;i++){
                if(args.sidebegin==1){
                    numberarray.push(random.die(args.sideend))
                }else{
                    numberarray.push(random.integer(args.sidebegin,args.sideend))
                }
                message.reply('Your die #'+i+' rolled a '+numberarray[i-1]+'.')
                numbertotal=numbertotal+numberarray[i-1]
            }
            message.reply('The sum of the rolls is '+numbertotal+'.')
        }
    }
}
module.exports=DiceRoll
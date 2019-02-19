const commando = require('discord.js-commando')
var random = require('random-js')()
class DiceRoll extends commando.Command {
    constructor(client) {
        super (client, {
            name: 'roll',
            group: 'random',
            memberName: 'roll',
            description: 'Roll up to 9007199254740992 dice with up to 9007199254740992 sides to get numbers for whatever you need.',
        });
    }
    async run(message, args){
        let roll=args.split(/ +/)
        let numbers=/^[0-9]+$/
        if (!numbers.test(roll[0]) || !numbers.test(roll[1]) || !numbers.test(roll[2])){
            message.channel.send('Syntax error. You must specify numbers in this command.')
        }
        if (roll.length>=4){
            message.channel.send('Syntax error. You can only specify a maximum of 3 parameters.')
        }
        if (roll[0]>=1000000 || roll[1]>=1000000 || roll[2]>=1000000 || (roll[0]>=1000000 && roll[1]>=1000000) || (roll[0]>=1000000 && roll[1]>=1000000 && roll[2]>=1000000)){
            message.reply('unfortunately for you, computers have a limited amount of memory, so unless you want me to run out, stop sending ludicrous numbers. Thanks.')
        }else if (roll[0]>9007199254740992 || roll[1]>9007199254740992 || roll[2]>9007199254740992 || (roll[1]>9007199254740992 && roll[2]>9007199254740992) || (roll[0]>9007199254740992 && roll[1]>9007199254740992 && roll[2]>9007199254740992)){
            message.reply('you\'ve reached the maximum limit of this command. Please use a lower number(s).')
        }
        if (message.content.match(/^&roll$/)){
            message.reply('you rolled a '+random.integer(1,6)+'.')
        }else if (message.content.match(/^&roll [0-9]+\b/) && !roll[1]){
                message.reply('you rolled a '+random.integer(1,roll[0])+'.')
        }else if (message.content.match(/^&roll ([0-9]*) ([0-9]*)+\b/) && !roll[2]){
                message.reply('you rolled a '+random.integer(roll[0],roll[1])+'.')
        }else if (message.content.match(/^&roll ([0-9]*) ([0-9]*) ([0-9]*)+\b/)){
                var rollnumbers=[]
                var rolltotal=0
                for (var i=1;i<=roll[0];i++){
                    rollnumbers.push(random.integer(roll[1],roll[2]))
                    message.reply('your die #'+i+' rolled a '+rollnumbers[i-1]+'.')
                    rolltotal=rolltotal+rollnumbers[i-1]
                }
                message.reply('the sum of the dice rolls is '+rolltotal+'.')
        }
    }
}
module.exports=DiceRoll
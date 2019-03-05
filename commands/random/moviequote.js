const commando=require('discord.js-commando')
const Random=require('random-js')
const random=new Random.Random()
class MovieQuotes extends commando.Command{
    constructor(client){
        super(client,{
            name: 'moviequote',
            group: 'random',
            memberName: 'moviequote',
            description: 'Displays a random movie quote.',
        })
    }
    async run(message){
        const quotes=[
            'No, Luke... I am your father.',
            'Reach for the sky!',
            'The Force is strong with this one.',
            "I'll be back!",
        ]
        message.channel.send(quotes[random.integer(0,quotes.length-1)])
    }
}
module.exports=MovieQuotes

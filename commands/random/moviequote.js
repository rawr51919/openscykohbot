const commando = require('discord.js-commando')
var random = require('random-js')()
class MovieQuotes extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'moviequote',
            group: 'random',
            memberName: 'moviequote',
            description: 'Displays a random movie quote.',
        });
    }
    async run(message, args) {
        const quotes = [
            'No, Luke... I am your father.',
            'Reach for the sky!',
            'The Force is strong with this one.',
            'I\'ll be back!',
        ]
        let chosenQuote=quotes[random.integer(0,quotes.length)]
        message.channel.send(chosenQuote)
    }
}
module.exports=MovieQuotes

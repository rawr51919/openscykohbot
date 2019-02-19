const commando = require('discord.js-commando')
class Test extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'test',
            group: 'main',
            memberName: 'test',
            description: 'Check to see if OpenScykohBot\'s online and responding.',
        });
    }
    async run(message, args) {
        message.channel.send("I'm online.")
    }
}
module.exports=Test
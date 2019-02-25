const commando = require('discord.js-commando')
class ScyProjects extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'scyprojects',
            group: 'information',
            memberName: 'scyprojects',
            description: 'The official ScyProjects server.',
        })
    }
    async run(message) {
        message.channel.send("https://discord.gg/5uh8aS7")
    }
}
module.exports=ScyProjects
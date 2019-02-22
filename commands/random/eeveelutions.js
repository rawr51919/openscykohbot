const commando = require('discord.js-commando')
class Eeveelutions extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'eeveelutions',
            group: 'random',
            memberName: 'eeveelutions',
            description: 'Lists the current Eeveelutions and how to evolve your Eevee into any one of them.',
        })
    }
    async run(message,args) {
        message.channel.send("**Eeveelutions**:\nFlareon: Evolve with Fire Stone\nJolteon: Evolve with Thunder Stone\nVaporeon: Evolve with Water Stone\nEspeon: Level up with 220 or greater happiness during the day\nUmbreon: Level up with 220 or greater happiness during the night\nLeafeon: Evolve near the Mossy Rock\nGlaceon: Evolve near the Icy Rock\nSylveon: Level up knowing a Fairy-type move and have 2 affection hearts on the Eevee")
    }
}
module.exports=Eeveelutions
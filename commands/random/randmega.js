const commando = require('discord.js-commando')
const random = new Random()
class RandomMegaPokémon extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'randmega',
            group: 'random',
            memberName: 'randmega',
            description: 'Displays a random Mega Pokémon.',
        });
    }
    async run(message,args) {
        const megas = [
            'Venusaur-Mega',
            'Charizard-Mega-X',
            'Charizard-Mega-Y',
            'Blastoise-Mega',
            'Beedrill-Mega',
            'Pidgeot-Mega',
            'Alakazam-Mega',
            'Slowbro-Mega',
            'Gengar-Mega',
            'Kangaskhan-Mega',
            'Pinsir-Mega',
            'Gyarados-Mega',
            'Aerodactyl-Mega',
            'Mewtwo-Mega-X',
            'Mewtwo-Mega-Y',
            'Ampharos-Mega',
            'Steelix-Mega',
            'Scizor-Mega',
            'Heracross-Mega',
            'Houndoom-Mega',
            'Tyranitar-Mega',
            'Sceptile-Mega',
            'Blaziken-Mega',
            'Swampert-Mega',
            'Gardevoir-Mega',
            'Sableye-Mega',
            'Mawile-Mega',
            'Aggron-Mega',
            'Medicham-Mega',
            'Manectric-Mega',
            'Sharpedo-Mega',
            'Camerupt-Mega',
            'Altaria-Mega',
            'Banette-Mega',
            'Absol-Mega',
            'Glalie-Mega',
            'Salamence-Mega',
            'Metagross-Mega',
            'Latias-Mega',
            'Latios-Mega',
            'Rayquaza-Mega',
            'Lopunny-Mega',
            'Garchomp-Mega',
            'Lucario-Mega',
            'Abomasnow-Mega',
            'Gallade-Mega',
            'Audino-Mega',
            'Diancie-Mega',
        ]
        let chosenMega=megas[random.integer(0,megas.length-1)]
        message.channel.send('You got '+chosenMega+'!')
    }
}
module.exports=RandomMegaPokémon
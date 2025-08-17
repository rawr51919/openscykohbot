module.exports = {
  name: "eeveelutions",
  description: "Lists the current Eeveelutions and how to evolve your Eevee into any one of them.",

  async execute(message) {
    const eeveelutionsText = `
	**Eeveelutions**:
	Flareon: Evolve with Fire Stone
	Jolteon: Evolve with Thunder Stone
	Vaporeon: Evolve with Water Stone
	Espeon: Level up with 220 or greater happiness during the day
	Umbreon: Level up with 220 or greater happiness during the night
	Leafeon: Evolve near the Mossy Rock
	Glaceon: Evolve near the Icy Rock
	Sylveon: Level up knowing a Fairy-type move and having 2 or more affection hearts on the Eevee
    `.trim();

    // Discord message limit chunking
    const CHUNK_SIZE = 2000;
    for (let i = 0; i < eeveelutionsText.length; i += CHUNK_SIZE) {
      await message.channel.send(eeveelutionsText.slice(i, i + CHUNK_SIZE));
    }
  },
};

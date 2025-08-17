const { Random } = require("random-js");
const fetch = require("node-fetch");

const random = new Random();

module.exports = {
  name: "randmega",
  description: "Displays a random Mega Pokémon.",

  async execute(message) {
    try {
      // Fetch all Pokémon species (limit high to get everything)
      const speciesRes = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=9999");
      const speciesData = await speciesRes.json();

      // Filter Pokémon whose names include 'mega'
      const megaPokemonList = speciesData.results
        .map(p => p.name)
        .filter(name => name.toLowerCase().includes("mega"))
        .map(name =>
          // Format nicely, e.g., "charizard-mega-x" -> "Charizard-Mega-X"
          name
            .split("-")
            .map(part => part.charAt(0).toUpperCase() + part.slice(1))
            .join("-")
        );

      if (megaPokemonList.length === 0) {
        message.channel.send("❌ Could not find any Mega Pokémon.");
        return;
      }

      const chosen = megaPokemonList[random.integer(0, megaPokemonList.length - 1)];
      message.channel.send(`You got **${chosen}**!`);
    } catch (err) {
      console.error(err);
      message.channel.send(`❌ Error fetching Mega Pokémon: ${err.message}`);
    }
  },
};

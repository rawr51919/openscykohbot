const { Random } = require("random-js");
const fetch = require("node-fetch");

const random = new Random();

module.exports = {
  name: "randpoke",
  description: "Displays a random Pokémon.",

  async execute(message) {
    try {
      // Fetch all Pokémon (limit high to cover all current Pokémon)
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=9999");
      const data = await res.json();

      if (!data.results || data.results.length === 0) {
        message.channel.send("❌ Could not fetch Pokémon list.");
        return;
      }

      // Capitalize names for display
      const allPokemon = data.results.map(p =>
        p.name
          .split("-")
          .map(part => part.charAt(0).toUpperCase() + part.slice(1))
          .join("-")
      );

      const chosen = allPokemon[random.integer(0, allPokemon.length - 1)];
      message.channel.send(`You got **${chosen}**!`);
    } catch (err) {
      console.error(err);
      message.channel.send(`❌ Error fetching Pokémon: ${err.message}`);
    }
  },
};

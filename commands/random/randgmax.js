const { Random } = require("random-js");
const fetch = require("node-fetch");

const random = new Random();

module.exports = {
  name: "randgmax",
  description: "Displays a random Gigantamax Pokémon.",

  async execute(message) {
    try {
      // Fetch all Pokémon (limit high to cover all current Pokémon)
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=9999");
      const data = await res.json();

      if (!data.results || data.results.length === 0) {
        message.channel.send("❌ Could not fetch Pokémon list.");
        return;
      }

      // Filter for Gigantamax Pokémon (names containing '-gmax')
      const gmaxPokemon = data.results
        .map(p => p.name)
        .filter(name => name.toLowerCase().includes("-gmax"))
        .map(name => {
          const parts = name.split("-");
          // Replace "gmax" with "Gigantamax"
          const lastPart = parts.pop();
          if (lastPart.toLowerCase() === "gmax") parts.push("Gigantamax");
          // Capitalize the rest
          return parts
            .map(part => part.charAt(0).toUpperCase() + part.slice(1))
            .join("-");
        });

      if (gmaxPokemon.length === 0) {
        message.channel.send("❌ Could not find any Gigantamax Pokémon.");
        return;
      }

      const chosen = gmaxPokemon[random.integer(0, gmaxPokemon.length - 1)];
      message.channel.send(`You got **${chosen}**!`);
    } catch (err) {
      console.error(err);
      message.channel.send(`❌ Error fetching Gigantamax Pokémon: ${err.message}`);
    }
  },
};

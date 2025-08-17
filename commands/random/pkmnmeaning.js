const { Random } = require("random-js");
const random = new Random();
const fetch = require("node-fetch");

// Map of Pokémon ID to custom meanings
const pkmnMeanings = {
  1: "*n* bulb - a type of plant\n*n* -saur - Greek suffix meaning ‘lizard’",
  2: "*n* ivy - a plant\n*n* -saur - Greek suffix meaning ‘lizard’",
  3: "*n* venus - from the *Venus* flytrap, a meat-eating plant\n*n* -saur - Greek suffix meaning ‘lizard’",
  4: "*v* char - to burn or singe\n*n* salamander - lizard-like amphibian",
  5: "*v* char - to burn or singe\n*n* chameleon - a color-changing, tree-dwelling lizard",
  6: "*v* char - to burn or singe\n*n* lizard - a long-bodied, long-tailed, short-legged reptile",
  7: "*v* squirt - to rapidly eject water\n*n* turtle - a large marine reptile with a bony shell",
  8: "*v* war - engage in armed conflict\n*n* tortoise - a large land reptile with a bony shell\n*n* turtle - a large marine reptile with a bony shell",
  9: "*n* blast - a strong gust of wind or air\n*n* tortoise - a large land reptile with a bony shell",
  10: "*n* caterpillar - a butterfly or moth larva\n*n* pie - a baked dish of fruit",
};

module.exports = {
  name: "pkmnmeaning",
  description: "Shows the meaning behind a Pokémon name.",

  async execute(message) {
    const args = message.content.split(/\s+/);
    const id = parseInt(args[1], 10);

    if (isNaN(id)) {
      await message.channel.send("❌ Please specify a valid Pokémon ID. Usage: `&pkmnmeaning <ID>`");
      return;
    }

    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (!res.ok) throw new Error("Pokémon not found");
      const data = await res.json();

      const pokemonName = data.name.charAt(0).toUpperCase() + data.name.slice(1);
      const meaningText = pkmnMeanings[id] || "Meaning not defined yet for this Pokémon.";

      const images = ["🎴"]; // optional placeholder image/icon
      const image = images[random.integer(0, images.length - 1)];

      const fullMessage = `${image}\n**${pokemonName}**:\n${meaningText}`;

      // Split into 2000-character chunks to avoid Discord limits
      const CHUNK_SIZE = 2000;
      for (let i = 0; i < fullMessage.length; i += CHUNK_SIZE) {
        await message.channel.send(fullMessage.slice(i, i + CHUNK_SIZE));
      }
    } catch (err) {
      await message.channel.send(`❌ Error fetching Pokémon info: ${err.message}`);
    }
  },
};

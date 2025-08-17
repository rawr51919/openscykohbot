const { EmbedBuilder } = require("discord.js");
const weather = require("weather-js");

module.exports = {
  name: "weather",
  description: "Check the weather for your location.",
  async execute(message) {
    const query = message.content.slice(message.content.indexOf(" ") + 1).trim();
    if (!query) {
      await message.channel.send(
        "Please provide a location. Example: `!weather London, UK`"
      );
      return;
    }

    try {
      const results = await new Promise((resolve, reject) => {
        weather.find({ search: query, degreeType: "F" }, (err, result) => {
          if (err) reject(err instanceof Error ? err : new Error(String(err)));
          else resolve(result);
        });
      });

      if (!results || results.length === 0) {
        await message.channel.send("Please enter a valid location.");
        return;
      }

      const current = results[0].current;
      const location = results[0].location;

      // Determine wind direction emoji
      const windDirMap = {
        North: "⬆️",
        East: "➡️",
        South: "⬇️",
        West: "⬅️",
        Northeast: "↗️",
        Northwest: "↖️",
        Southeast: "↘️",
        Southwest: "↙️",
      };
      const windDirection = current.winddisplay.split(" ")[2] || "Unknown";
      const windSpeed = current.winddisplay.replace(windDirection, "").trim();
      const windEmoji = windDirMap[windDirection] || "";

      // Determine weather emoji
      const weatherMap = {
        "Light Snow": "🌨️",
        Clear: "☀️",
        Rain: "🌧️",
        "Mostly Clear": "🌤️",
        Sunny: "☀️",
        "Mostly Sunny": "🌤️",
        "Partly Sunny": "⛅",
        "Mostly Cloudy": "🌥️",
        Cloudy: "☁️",
        Snow: "🌨️",
        Smoke: "💨",
        Haze: "🌫️",
        Fair: "⛅",
      };
      const weatherEmoji = weatherMap[current.skytext] || "";

      const fahrenheit = parseInt(current.temperature, 10);
      const celsius = Math.round((fahrenheit - 32) / 1.8);

      const embed = new EmbedBuilder()
        .setTitle(`Weather for ${current.observationpoint}`)
        .addFields(
          { name: "🌡️ Temperature", value: `${fahrenheit}°F / ${celsius}°C`, inline: true },
          { name: "💨 Wind", value: `${windSpeed} ${windEmoji} (${windDirection})`, inline: true },
          { name: "🌦️ Conditions", value: `${weatherEmoji} ${current.skytext}`, inline: true },
          { name: "💧 Humidity", value: `${current.humidity}%`, inline: true },
          { name: "🕒 Timezone", value: `UTC${location.timezone}`, inline: true }
        )
        .setColor("Random");

      await message.channel.send({ embeds: [embed] });
    } catch (err) {
      console.error(err);
      await message.channel.send(`❌ Error fetching weather: ${err.message}`);
    }
  },
};

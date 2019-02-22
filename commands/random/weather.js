const commando = require('discord.js-commando')
var weather = require('weather-js')
class Weather extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'weather',
			group: 'random',
			memberName: 'weather',
			description: 'Have OpenScykohBot check the weather for your area.',
		})
    }
    async run(message,args){
        weather.find({search: message.content.substr(9), degreeType: 'F'}, function(err, result) {
            if(err) console.log(err)
            if (result === undefined || result.length === 0) {
              message.channel.send('Please enter a valid location.')
              return
            }
            let emoji=""
            let weather=""
            let windops=result[0].current.winddisplay.split(/ +/).slice(0)
            let winddirection=windops[2]
            let windspeed=result[0].current.winddisplay.slice(0,-winddirection.length-1)
            if (winddirection == "North"){
                    windspeed=result[0].current.winddisplay.slice(0,-6)
                    emoji = ":arrow_up:"
            }else if (winddirection == "East"){
                    windspeed=result[0].current.winddisplay.slice(0,-5)
                    emoji = ":arrow_right:"
            }else if (winddirection == "South"){
                    windspeed=result[0].current.winddisplay.slice(0,-6)
                    emoji = ":arrow_down:"
            }else if (winddirection == "West"){
                    windspeed=result[0].current.winddisplay.slice(0,-5)
                    emoji = ":arrow_left:"
            }else if (winddirection == "Northeast"){
                    windspeed=result[0].current.winddisplay.slice(0,-9)
                    emoji = ":arrow_upper_right:"
            }else if (winddirection == "Northwest"){
                    windspeed=result[0].current.winddisplay.slice(0,-9)
                    emoji = ":arrow_upper_left:"
            }else if (winddirection == "Southeast"){
                    windspeed=result[0].current.winddisplay.slice(0,-9)
                    emoji = ":arrow_lower_right:"
            }else if (winddirection == "Southwest"){
                    windspeed=result[0].current.winddisplay.slice(0,-9)
                    emoji = ":arrow_lower_left:"
            }
            if (result[0].current.skytext == "Light Snow"){
                    weather = ""
            }else if (result[0].current.skytext == "Clear"){
                    weather = ":sunny:"
            }else if (result[0].current.skytext == "Rain"){
                    weather = ":cloud_rain:"
            }else if (result[0].current.skytext == "Mostly Clear"){
                    weather = ""
            }else if (result[0].current.skytext == "Sunny"){
                    weather = ":sunny:"
            }else if (result[0].current.skytext == "Mostly Sunny"){
                    weather = ":white_sun_small_cloud:"
            }else if (result[0].current.skytext == "Partly Sunny"){
                    weather = ":partly_sunny:"
            }else if (result[0].current.skytext == "Mostly Cloudy"){
                    weather = ":white_sun_cloud:"
            }else if (result[0].current.skytext == "Cloudy"){
                    weather = ":cloud:"
            }else if (result[0].current.skytext == "Snow"){
                    weather = ":cloud_snow:"
            }else if (result[0].current.skytext == "Smoke"){
                    weather = ""
            }else if (result[0].current.skytext == "Haze"){
                    weather = ""
            }else if (result[0].current.skytext == "Fair"){
                    weather = ":partly_sunny:"
            }
            var fahrenheit=parseInt(result[0].current.temperature)
            var celsius=Math.round((fahrenheit-32)/1.8)
            message.channel.send(`Weather for **${result[0].current.observationpoint}**:`)
            message.channel.send(`:thermometer: __Temperature:__ **${result[0].current.temperature}**°F / **`+celsius+`**°C\n:dash: __Wind Speed:__ **`+windspeed+`**\n`+emoji+` __Wind Direction:__ **`+winddirection+`**\n`+weather+` __Weather:__ **${result[0].current.skytext}**\n:sweat_drops: __Humidity:__ **${result[0].current.humidity}%**\n:clock3: __Timezone:__ UTC${result[0].location.timezone}`)
        })
        return
    }
}
module.exports=Weather
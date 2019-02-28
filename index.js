const commando = require('discord.js-commando')
const Random = require('random-js')
const random = new Random.Random()
const bot = new commando.Client({
    commandPrefix: '&',
    unknownCommandResponse: false,
    owner: ['324661689972686849'],
})
//Change our bot's status and write to the console to show that OpenScykohBot's working
bot.on('ready',()=>{
	console.log('OpenScykohBot is ready to crud.')
    bot.user.setStatus('online')
	bot.user.setPresence({
		game:
  			{
                name:'Scykoh... wait...',
    		    type:3
  			}
    })
})
bot.on('message',(message)=>{// to be cleaned up and/or added to in a future update
	if (message.content.toLowerCase() == "bad openscykohbot" || message.content.toLowerCase()=="bad <@468615764643938314>") {
	    const sadtalk = [
	        "It's all my fault.",
	        "It's not my fault! It's random!",
	        ';(',
	        'Sorry :(',
	        'That kinda hurt my feelings...',
	        'no u'
	    ]
	    message.channel.send(sadtalk[random.integer(0,sadtalk.length-1)])
	}
	if (message.content.toLowerCase() == "good openscykohbot" || message.content.toLowerCase()=="good <@468615764643938314>") {
	    const happytalk = [
	        "I'm always bad.",
	        "I'm always bad. That's what bots do.",
	        "Bots aren't good. Especially me.",
	        'Okay, never heard that one before. People are usually spamming "bad openscykohbot"...',
			'Uhh... okay?',
			':)',
			';)'
	    ]
	    message.channel.send(happytalk[random.integer(0,happytalk.length-1)])
    }
    const responses = {
        "how's it going, openscykohbot?": "It's not easy being a bot... ~~listening to your demands~~",
        "<@468615764643938314> go away": "NEVAR!!",
        "<@468615764643938314>, go away": "NEVAR!!",
        "<@468615764643938314> go away.": "NEVAR!!",
        "<@468615764643938314>, go away.": "NEVAR!!",
        "<@468615764643938314> go away!": "NEVAR!!",
        "<@468615764643938314>, go away!": "NEVAR!!",
        "hello, <@468615764643938314>": "Hi, <@"+message.author.id+">.",
        "hello <@468615764643938314>": "Hi, <@"+message.author.id+">.",
        "hello, <@468615764643938314>.": "Hi, <@"+message.author.id+">.",
        "hello <@468615764643938314>.": "Hi, <@"+message.author.id+">.",
        "hi, <@468615764643938314>": "Hi, <@"+message.author.id+">.",
        "hi <@468615764643938314>": "Hi, <@"+message.author.id+">.",
        "hi, <@468615764643938314>.": "Hi, <@"+message.author.id+">.",
        "hi <@468615764643938314>.": "Hi, <@"+message.author.id+">.",
    }
    if (responses[message.content.toLowerCase()]){
        message.channel.send(responses[message.content.toLowerCase()])
    }
	if ((message.content.toLowerCase() == "<@468615764643938314> speak to me, foul bot!" && message.author.id != "246865356482805760") || (message.content.toLowerCase() == "<@468615764643938314>, speak to me, foul bot!" && message.author.id != "246865356482805760")){
	    message.channel.send("No. I don't speak to the likes of you.")
    }else if ((message.content.toLowerCase() == "<@468615764643938314> speak to me, foul bot!" && message.author.id == "246865356482805760") || (message.content.toLowerCase() == "<@468615764643938314>, speak to me, foul bot!" && message.author.id == "246865356482805760")){
	    const crusadermsgs = [
            'Greetings, Sir Crusader.',
            'Hast thou found me irritating?',
            'Dost thou want to fight?'
        ]
	    message.channel.send(crusadermsgs[random.integer(0,crusadermsgs.length-1)])
    }
	if (message.content.includes("amirite")){
		message.react("🇳")
		setTimeout(function(){message.react("🇴")}, 1000)
    }
    //if (message.content.includes("rip")){
    //	message.react("⚰")
	//}
	//if (message.content.includes("wh")){
	//	message.react("<:scyWh:548503602113544193>")
	//}
    if (message.author.id=='159985870458322944'){
		message.react("🇸")
		setTimeout(function(){message.react("🇭")}, 1000)
		setTimeout(function(){message.react("🇺")}, 1000)
		setTimeout(function(){message.react("🇹")}, 1000)
		setTimeout(function(){message.react("🆙")}, 1000)
    }
})
// loads all the commands
bot.registry.registerDefaults()
bot.registry.registerGroup('random', 'Random')
bot.registry.registerGroup('main', 'Main')
bot.registry.registerGroup('moderation', 'Moderation')
bot.registry.registerGroup('information', 'Information')
bot.registry.registerGroup('settings', 'Settings')
bot.registry.registerCommandsIn(__dirname+"/commands")
// logs into the bot using this bot token
bot.login('')
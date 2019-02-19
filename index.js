const commando = require('discord.js-commando')
var random = require('random-js')()
const bot = new commando.Client({
    commandPrefix: '&',
    unknownCommandResponse: false,
    owner: ['324661689972686849'],
});
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
});
bot.on('message',(message)=>{// to be cleaned up and/or added to in a future update (commands will also eventually be removed from here)
    if (message.content.startsWith(bot.commandPrefix+'activity') || (message.guild !== null && message.content.startsWith((message.guild.commandPrefix+'activity')))){
        let params
        if (message.guild.commandPrefix==null || message.guild.commandPrefix==undefined){
            params = message.content.split(/ +/).slice(bot.commandPrefix.length)
        }else{
            params = message.content.split(/ +/).slice(message.guild.commandPrefix.length)
        }
        if (message.author.id !== '324661689972686849'){
            message.reply(`you don\'t have permission to use this command.`)
            return
        }
        if (params[0].toLowerCase()=='remove'){
            bot.user.setPresence({
                game:null
                })
            message.channel.send("I now have no status.")
            return
        }else if (params[0].toLowerCase()=='playing' && params[1]){
            bot.user.setPresence({
                game:
                    {
                        name:message.content.substr(18),
                        type:0
                    }
                })
            message.channel.send("My status is now: \"**Playing** "+message.content.substr(18)+"\".")
        }else if (params[0].toLowerCase()=='streaming' && params[1]){
            bot.user.setPresence({
                game:
                    {
                        name:message.content.substr(20),
                        type:1
                    }
                })
            message.channel.send("My status is now: \"**Streaming** "+message.content.substr(20)+"\".")
        }else if (params[0].toLowerCase()=='listening' && params[1]){
            bot.user.setPresence({
                game:
                    {
                        name:message.content.substr(20),
                        type:2
                    }
                })
            message.channel.send("My status is now: \"**Listening to** "+message.content.substr(20)+"\".")
        }else if (params[0].toLowerCase()=='watching' && params[1]){
            bot.user.setPresence({
                game:
                    {
                        name:message.content.substr(19),
                        type:3
                    }
                })
            message.channel.send("My status is now: \"**Watching** "+message.content.substr(19)+"\".")
        }else if (params[0].toLowerCase()=='playing' && !params[1]){
            message.channel.send("What am I supposed to be playing?")
            return
        }else if (params[0].toLowerCase()=='streaming' && !params[1]){
            message.channel.send("What am I supposed to be streaming?")
            return
        }else if (params[0].toLowerCase()=='listening' && !params[1]){
            message.channel.send("What am I supposed to be listening to?")
            return
        }else if (params[0].toLowerCase()=='watching' && !params[1]){
            message.channel.send("What am I supposed to be watching?")
            return
        }else{
            message.channel.send('You must specify either playing, watching, listening to, or streaming.\n If this bot already has a status, you can also specify `remove` to remove the status from this bot.')
            return
        }
    }
    if (message.content.startsWith(bot.commandPrefix+'onlinestatus') || (message.guild !== null && message.content.startsWith((message.guild.commandPrefix+'onlinestatus')))){
        let params
        if (message.guild.commandPrefix==null || message.guild.commandPrefix==undefined){
            params = message.content.split(/ +/).slice(bot.commandPrefix.length)
        }else{
            params = message.content.split(/ +/).slice(message.guild.commandPrefix.length)
        }
        if (message.author.id !== '324661689972686849'){
            message.reply(`you don\'t have permission to use this command.`)
            return
        }
        if (params[0].toLowerCase()=='dnd'){
            bot.user.setStatus('dnd')
            message.channel.send("My online status is now: **Do Not Disturb**.")
        }else if (params[0].toLowerCase()=='away' || params[0].toLowerCase()=='idle'){
            bot.user.setStatus('idle')
            message.channel.send("My online status is now: **Away/Idle**.")
        }else if (params[0].toLowerCase()=='invisible' || params[0].toLowerCase()=='offline'){
            bot.user.setStatus('invisible')
            message.channel.send("My online status is now: **Invisible/Offline**.")
        }else if (params[0].toLowerCase()=='online'){
            bot.user.setStatus('online')
            message.channel.send("My online status is now: **Online**.")
        }else{
                message.channel.send(`You must specify either online, away/idle, invisible, or dnd (do not disturb).`)
                return
        }
    }
    if (message.content.startsWith(bot.commandPrefix+'status') || (message.guild !== null && message.content.startsWith((message.guild.commandPrefix+'status')))){// this command could use some serious cleanup, but it works
        let params
        if (message.guild.commandPrefix==null || message.guild.commandPrefix==undefined){
            params = message.content.split(/ +/).slice(bot.commandPrefix.length)
        }else{
            params = message.content.split(/ +/).slice(message.guild.commandPrefix.length)
        }
        if (message.author.id !== '324661689972686849'){
            message.reply(`you don\'t have permission to use this command.`)
            return
        }
        if ((!params[0] && !params[1] && !params[2]) || (params[0]!='reset' && !params[1] && !params[2])){
            message.reply('you must set both the online status and the activity of this bot, not one or the other.\nIf you want to set either or, use either `&activity` for just the status or `&onlinestatus` for just the online status.')
        }else if ((params[0].toLowerCase()=='online' && params[1].toLowerCase()=='playing' && params[2] && !params[3]) || (params[0].toLowerCase()=='playing' && params[1].toLowerCase()=='online' && params[2])){
            bot.user.setStatus('online')
            bot.user.setPresence({
                game:
                    {
                        name:message.content.substr(21),
                        type:0
                    }
                })
            message.channel.send("My online status is now: **Online** and my status is now: **Playing** "+message.content.substr(21)+"\".")
        }else if ((params[0].toLowerCase()=='dnd' && params[1].toLowerCase()=='playing' && params[2]) || (params[0].toLowerCase()=='playing' && params[1].toLowerCase()=='dnd' && params[2])){
            bot.user.setStatus('dnd')
            bot.user.setPresence({
                game:
                    {
                        name:message.content.substr(18),
                        type:0
                    }
                })
            message.channel.send("My online status is now: **Do Not Disturb** and my status is now: **Playing** "+message.content.substr(18)+"\".")
        }else if ((params[0].toLowerCase()=='away' && params[1].toLowerCase()=='playing' && params[2]) || (params[0].toLowerCase()=='playing' && params[1].toLowerCase()=='away' && params[2]) || (params[0].toLowerCase()=='idle' && params[1].toLowerCase()=='playing' && params[2]) || (params[0].toLowerCase()=='playing' && params[1].toLowerCase()=='idle' && params[2])){
            bot.user.setStatus('idle')
            bot.user.setPresence({
                game:
                    {
                        name:message.content.substr(19),
                        type:0
                    }
                })
            message.channel.send("My online status is now: **Away/Idle** and my status is now: **Playing** "+message.content.substr(19)+"\".")
        }else if ((params[0].toLowerCase()=='online' && params[1].toLowerCase()=='streaming' && params[2]) || (params[0].toLowerCase()=='streaming' && params[1].toLowerCase()=='online' && params[2])){
            bot.user.setStatus('online')
            bot.user.setPresence({
                game:
                    {
                        name:message.content.substr(23),
                        type:1
                    }
                })
            message.channel.send("My online status is now: **Online** and my status is now: **Streaming** "+message.content.substr(23)+"\".")
        }else if ((params[0].toLowerCase()=='dnd' && params[1].toLowerCase()=='streaming' && params[2]) || (params[0].toLowerCase()=='streaming' && params[1].toLowerCase()=='dnd' && params[2])){
            bot.user.setStatus('dnd')
            bot.user.setPresence({
                game:
                    {
                        name:message.content.substr(20),
                        type:1
                    }
                })
            message.channel.send("My online status is now: **Do Not Disturb** and my status is now: **Streaming** "+message.content.substr(20)+"\".")
        }else if ((params[0].toLowerCase()=='away' && params[1].toLowerCase()=='streaming' && params[2]) || (params[0].toLowerCase()=='streaming' && params[1].toLowerCase()=='away' && params[2]) || (params[0].toLowerCase()=='idle' && params[1].toLowerCase()=='streaming' && params[2]) || (params[0].toLowerCase()=='streaming' && params[1].toLowerCase()=='idle' && params[2])){
            bot.user.setStatus('idle')
            bot.user.setPresence({
                game:
                    {
                        name:message.content.substr(21),
                        type:1
                    }
                })
            message.channel.send("My online status is now: **Away/Idle** and my status is now: **Streaming** "+message.content.substr(21)+"\".")
        }else if ((params[0].toLowerCase()=='online' && params[1].toLowerCase()=='listening' && params[2]) || (params[0].toLowerCase()=='listening' && params[1].toLowerCase()=='online' && params[2])){
            bot.user.setStatus('online')
            bot.user.setPresence({
                game:
                    {
                        name:message.content.substr(25),
                        type:2
                    }
                })
            message.channel.send("My online status is now: **Online** and my status is now: **Listening to** "+message.content.substr(25)+"\".")
        }else if ((params[0].toLowerCase()=='dnd' && params[1].toLowerCase()=='listening' && params[2]) || (params[0].toLowerCase()=='listening' && params[1].toLowerCase()=='dnd' && params[2])){
            bot.user.setStatus('dnd')
            bot.user.setPresence({
                game:
                    {
                        name:message.content.substr(22),
                        type:2
                    }
                })
            message.channel.send("My online status is now: **Do Not Disturb** and my status is now: **Listening to** "+message.content.substr(22)+"\".")
        }else if ((params[0].toLowerCase()=='away' && params[1].toLowerCase()=='listening' && params[2]) || (params[0].toLowerCase()=='listening' && params[1].toLowerCase()=='away' && params[2]) || (params[0].toLowerCase()=='idle' && params[1].toLowerCase()=='listening' && params[2]) || (params[0].toLowerCase()=='listening' && params[1].toLowerCase()=='idle' && params[2])){
            bot.user.setStatus('idle')
            bot.user.setPresence({
                game:
                    {
                        name:message.content.substr(23),
                        type:2
                    }
                })
            message.channel.send("My online status is now: **Away/Idle** and my status is now: **Listening to** "+message.content.substr(23)+"\".")
        }else if ((params[0].toLowerCase()=='online' && params[1].toLowerCase()=='watching' && params[2]) || (params[0].toLowerCase()=='watching' && params[1].toLowerCase()=='online' && params[2])){
            bot.user.setStatus('online')
            bot.user.setPresence({
                game:
                    {
                        name:message.content.substr(22),
                        type:3
                    }
                })
            message.channel.send("My online status is now: **Online** and my status is now: **Watching** "+message.content.substr(22)+"\".")
        }else if ((params[0].toLowerCase()=='dnd' && params[1].toLowerCase()=='watching' && params[2]) || (params[0].toLowerCase()=='watching' && params[1].toLowerCase()=='dnd' && params[2])){
            bot.user.setStatus('dnd')
            bot.user.setPresence({
                game:
                    {
                        name:message.content.substr(19),
                        type:3
                    }
                })
            message.channel.send("My online status is now: **Do Not Disturb** and my status is now: **Watching** "+message.content.substr(19)+"\".")
        }else if ((params[0].toLowerCase()=='away' && params[1].toLowerCase()=='watching' && params[2]) || (params[0].toLowerCase()=='watching' && params[1].toLowerCase()=='away' && params[2]) || (params[0].toLowerCase()=='idle' && params[1].toLowerCase()=='watching' && params[2]) || (params[0].toLowerCase()=='watching' && params[1].toLowerCase()=='idle' && params[2])){
            bot.user.setStatus('idle')
            bot.user.setPresence({
                game:
                    {
                        name:message.content.substr(20),
                        type:3
                    }
                })
            message.channel.send("My online status is now: **Away/Idle** and my status is now: **Watching** "+message.content.substr(20)+"\".")
        }else if(params[0].toLowerCase()=='reset'){
            bot.user.setStatus('online')
	        bot.user.setPresence({
		        game:
  			        {
                        name:'Scykoh... wait...',
    		            type:3
  			        }
            })
            message.channel.send("My status was reset.\nIf my status was like this already when you used this command, it won't change.")
        }
    }
    if (message.content.startsWith(bot.commandPrefix+'pfp') || (message.guild !== null && message.content.startsWith((message.guild.commandPrefix+'pfp')))){
        let params
        if (message.guild.commandPrefix==null || message.guild.commandPrefix==undefined){
            params = message.content.split(/ +/).slice(bot.commandPrefix.length)
        }else{
            params = message.content.split(/ +/).slice(message.guild.commandPrefix.length)
        }
        if (message.author.id !== '324661689972686849'){
            message.reply(`you don\'t have permission to use this command.`)
        }
        if (params[0]){
                bot.user.setAvatar(params[0])
                return
        }else{
                message.channel.send("You need a valid image URL to use as an avatar/profile picture.")
                return
        }
    }
    if (message.content.startsWith(bot.commandPrefix+'userid') || (message.guild !== null && message.content.startsWith((message.guild.commandPrefix+'userid')))){
        let params
        if (message.guild.commandPrefix==null || message.guild.commandPrefix==undefined){
            params = message.content.split(/ +/).slice(bot.commandPrefix.length)
        }else{
            params = message.content.split(/ +/).slice(message.guild.commandPrefix.length)
        }
        let id
        if (/^$/.test(params[0])){
            message.channel.send('This command will allow you to see who has what user ID.\nExample: `&userid 324661689972686849`\nTo find User IDs, you must enable Developer Mode in Discord\'s user settings, then right click any user and click `Copy ID`.')
            return
        }else if (/^#?[\d]{19}$/i.test(params[0])){
            id = /^#?([\d]{19})$/i.exec(params[0])[1].toLowerCase()
            bot.fetchUser(id)
            message.channel.send('Found user: <@'+id+'>.')
            return
        }else if (/^#?[\d]{18}$/i.test(params[0])){
            id = /^#?([\d]{18})$/i.exec(params[0])[1].toLowerCase()
            bot.fetchUser(id)
            message.channel.send('Found user: <@'+id+'>.')
            return
        }else if (/^#?[\d]{17}$/i.test(params[0])){
            id = /^#?([\d]{17})$/i.exec(params[0])[1].toLowerCase()
            bot.fetchUser(id)
            message.channel.send('Found user: <@'+id+'>.')
            return
        }else{
            message.reply('you provided an invalid User ID (or you provided something else). Please try again with a valid User ID.')
        }
    }
	if (message.content.toLowerCase() == "bad openscykohbot" || message.content.toLowerCase()=="bad <@468615764643938314>") {
	    const sadtalk = [
	        'It\'s all my fault.',
	        'It\'s not my fault! It\'s random!',
	        ';(',
	        'Sorry :(',
	        'That kinda hurt my feelings...',
	        'no u'
	    ]
	    let chosenSadTalk = sadtalk[random.integer(0,sadtalk.length)]
	    message.channel.send(chosenSadTalk)
	}
	if (message.content.toLowerCase() == "good openscykohbot" || message.content.toLowerCase()=="good <@468615764643938314>") {
	    const happytalk = [
	        'I\'m always bad.',
	        'I\'m always bad. That\'s what bots do.',
	        'Bots aren\'t good. Especially me.',
	        'Okay, never heard that one before. People are usually spamming "bad openscykohbot"...',
	        'Uhh... okay?'
	    ]
	    let chosenHappyTalk = happytalk[random.integer(0,happytalk.length)]
	    message.channel.send(chosenHappyTalk)
    }
    const responses = {
        "how's it going, openscykohbot?": "It's not easy being a bot... ~~listening to your demands~~",
        "<@468615764643938314> go away": "NEVAR!!",
        "<@468615764643938314>, go away": "NEVAR!!",
        "<@468615764643938314> go away.": "NEVAR!!",
        "<@468615764643938314>, go away.": "NEVAR!!",
        "hello, <@468615764643938314>": "Hi, <@"+message.author.id+">.",
        "hello <@468615764643938314>": "Hi, <@"+message.author.id+">.",
        "hello, <@468615764643938314>.": "Hi, <@"+message.author.id+">.",
        "hello <@468615764643938314>.": "Hi, <@"+message.author.id+">.",
    }
    if (responses[message.content.toLowerCase()]){
        message.channel.send(responses[message.content.toLowerCase()])
    }
	if ((message.content.toLowerCase() == "<@468615764643938314> speak to me, foul bot!" && message.author.id != "246865356482805760") || (message.content.toLowerCase() == "<@468615764643938314>, speak to me, foul bot!" && message.author.id != "246865356482805760")){
	    message.channel.send("No. I don't speak to the likes of you.")
    }else if ((message.content.toLowerCase() == "<@468615764643938314> speak to me, foul bot!" && message.author.id == "246865356482805760") || (message.content.toLowerCase() == "<@468615764643938314>, speak to me, foul bot!" && message.author.id == "246865356482805760")){
	    const crusadermsgs = [
            'Greetings, Sir Crusader',
            'Hast thou found me irritating?',
            'Dost thou want to fight?'
        ]
	    let chosenCrusaderMsg = crusadermsgs[random.integer(0,crusadermsgs.length)]
	    message.channel.send(chosenCrusaderMsg)
    }
	if (message.content.includes("amirite")){
		message.react("🇳")
		setTimeout(function(){message.react("🇴")}, 1000)
    }
    //if (message.content.includes("rip")){
    //    message.react(":coffin:")
    //}
    if (message.author=='159985870458322944'){
		message.react("🇸")
		setTimeout(function(){message.react("🇭")}, 1000)
		setTimeout(function(){message.react("🇺")}, 1000)
		setTimeout(function(){message.react("🇹")}, 1000)
		setTimeout(function(){message.react(":up:")}, 1000)
    }
});
// loads all the commands
bot.registry.registerDefaults()
bot.registry.registerGroup('random', 'Random')
bot.registry.registerGroup('main', 'Main')
bot.registry.registerGroup('moderation', 'Moderation')
bot.registry.registerGroup('information', 'Information')
bot.registry.registerCommandsIn(__dirname+"/commands")
// logs into the bot using this bot token
bot.login('')
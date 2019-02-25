const commando = require('discord.js-commando')
const Random = require('random-js')
const random = new Random.Random()
class Knuccles extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'knuccles',
			group: 'random',
			memberName: 'knuccles',
			description: 'BRING ON THE KNUCCLES!',
		})
  }
  async run(message){
		const images = [
          'https://i.imgur.com/RqNFJZ2.png\nImage originally requested by: an unknown user',
          'https://i.imgur.com/OmieAYp.png\nImage originally requested by: an unknown user',
          'https://i.imgur.com/h0Adtaq.png\nImage originally requested by: `グレイシイア#5279`',
          'https://i.imgur.com/IGziE0X.png\nImage originally requested by: `グレイシイア#5279`',
          'https://i.imgur.com/Pc7E3mP.png\nImage originally requested by: an unknown user',
          'https://i.imgur.com/dR4PeWQ.png\nImage originally requested by: an unknown user',
          'https://i.imgur.com/NVZKOxa.png\nImage originally requested by: an unknown user',
          'https://i.imgur.com/hBCU4RZ.png\nImage originally requested by: an unknown user',
          'https://i.imgur.com/7WK3NAq.jpg\nImage originally requested by: `Fear#1143`',
          'https://i.imgur.com/2RPmjI3.png\nImage originally requested by: an unknown user',
          'https://i.imgur.com/OmieAYp.png\nImage originally requested by: an unknown user',
          'https://i.imgur.com/LsmDrKE.png\nImage originally requested by: an unknown user',
          'https://i.imgur.com/42OLMFp.png\nImage originally requested by: an unknown user',
          'https://i.imgur.com/xUua6rR.png\nImage originally requested by: `グレイシイア#5279`',
          'https://i.imgur.com/UQ3iBab.png\nImage originally requested by: `Memepert#8449`',
          'https://i.imgur.com/50x95tZ.png\nImage originally requested by: `Mr. Chubbs#3989`',
          'https://i.imgur.com/YrrC1AC.png\nImage originally requested by: an unknown user',
          'https://i.imgur.com/CJqO5Ut.png\nImage originally requested by: an unknown user',
          'https://i.imgur.com/GIEbA8S.png\nImage originally requested by: `Mr. Chubbs#3989`',
          'https://i.imgur.com/6rjd6N2.png\nImage originally requested by: an unknown user',
          'https://i.imgur.com/DtSd5Xq.png\nImage not originally requested by `Fear#1143`, but by: an unknown user',
          'https://i.imgur.com/ZsctD9L.png\nImage originally requested by: `coltonrawr#5011`',
          'https://www.shitpostbot.com/img/sourceimages/hot-dog-knuckles-the-echidna-582b7879885ff.png\nImage originally requested by: `coltonrawr#5011`',
          'https://ih1.redbubble.net/image.346054961.4490/poster,220x200,ffffff-pad,220x200,ffffff.jpg\nImage originally requested by: `coltonrawr#5011`',
          'http://image.blingee.com/images15/content/output/000/000/000/3a2/191866454_1230862.gif\nImage originally requested by: `coltonrawr#5011`',
          'https://i.imgur.com/bjsUemL.jpg\nImage originally requested by: `coltonrawr#5011`',
          'https://i.imgur.com/zKCCsrn.png\nImage originally requested by: `coltonrawr#5011`',
          'https://www.toysonfire.ca/i/4084_95a8780/pop-games-sonic-the-hedgehog-vinyl-figure-knuckles-08-retired-4084.jpg\nImage originally requested by: `coltonrawr#5011`',
          'http://image.blingee.com/images17/content/output/000/000/000/5b1/485845422_2072734.gif\nImage originally requested by: `coltonrawr#5011`',
          'https://cdn.discordapp.com/attachments/367856978812207105/399302032600727554/20180106203924_1.jpg\nImage originally requested by: `JoshuaTheAxew#8369`',
          'https://cdn.discordapp.com/attachments/367856978812207105/399302672345464840/20180106204548_1.jpg\nImage originally requested by: `JoshuaTheAxew#8369`',
          'https://cdn.discordapp.com/attachments/367856978812207105/399303853465534464/20180106205013_1.jpg\nImage originally requested by: `JoshuaTheAxew#8369`',
          'https://cdn.discordapp.com/attachments/367856978812207105/399318485974515712/20180106214323_1.jpg\nImage originally requested by: `JoshuaTheAxew#8369`',
          'https://cdn.discordapp.com/attachments/367856978812207105/399320837997461514/20180106215548_1.jpg\nImage originally requested by: `JoshuaTheAxew#8369`',
          'https://i.imgur.com/Te5exF9.png\nImage originally requested by: `Diana#7001`',
          'https://cdn.discordapp.com/attachments/385623588943953923/405112307451166742/KnucklesMania.png\nImage originally requested by: `JoshuaTheAxew#8369`',
          'https://cdn.discordapp.com/attachments/392774760733605889/405517467360952322/image.jpg\nImage originally requested by: `Dr. Meme Crysader ™#3572`',
          'https://cdn.discordapp.com/attachments/385623588943953923/411586051459645450/KnuckallicMadchuckleJoshuaTheAxew.png\nImage originally requested by: `JoshuaTheAxew#8369`',
          'https://cdn.discordapp.com/attachments/392774760733605889/413394302157455360/SonicSaysKNUCKLESSneakyZorua.png\nImage originally requested by: `Sneaky Zorua#8408`',
          'https://i.redd.it/4od07sv184a01.jpg\nImage originally requested by: `coltonrawr#5011`',
          'https://66.media.tumblr.com/a615392ed1e74b3655d6687ace9624b2/tumblr_nl7lpxYHVD1r1mcgyo1_1280.png\nImage originally requested by: `coltonrawr#5011',
      ]
      const quotes = [
        'KNUCKLES AND KNUCKLES AND KNUCKLES: INCLUDING: KNUCKLES - INTRODUCING: KNUCKLES - STARRING: KNUCKLES - EXTRA KNUCKLES BY: KNUCKLES: THE MOVIE: THE GAME: THE KNUCKLES',
        'Knuckles is love. Knuckles is life. We all have knuckles. 68 of them. Almost 69.',
        'This command needs more love. SPREAD THE KNUCCLES!',
        'Did Knuckles ever crack *his* knuckles?',
        'Remember when this command used to be used a lot in the original ScykohBot?',
        "GIMME MOAR OF THE KNUCKLES OR I'LL PUNCH KNUCKLES IN WITH MY KNUCKLES!",
        'KNUCCLES 3 & KNUCCLES & KNUCCLES DELUXE FEATURING KNUCCLES FROM THE KNUCCLES MAY CHUCCLE SERIES FOR THE NEW NINTENDO SWITCH U 3D XL & KNUCCLES',
        'KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES',
        `Approximately ${images.length}00000 knuccles and counting!`,
        'THE KNUCKLES BLENDED MY KNUCKLES AND SHOVED THE KNUCKLES INTO THE KNUCKLES AND MADE MY KNUCKLES INTO A KNUCKLE SANDWICH, TURNING MY KNUCKLES INTO KNUCKLES AND KNUCKLES AND KNUCKLES',
        'KNUCKLES AND KNUCKLES AND KNUCKLES: THE MOVIE: STARRING KNUCKLES EDITED BY: KNUCKLES DIRECTED BY: KNUCKLES',
        'KNUCKLES AND KNUCCLES AND DUCKLES AND BUCKLES AND PUCCLES AND TUCCLES AND FUCKLES',
        //'KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES AND KNUCKLES...',
        'THIS KNUCKLES USES AN AUTOSAVE KNUCKLES. DO NOT CHUCKLE OR TURN OFF THE KNUCKLES WHEN THIS KNUCKLES IS KNUCKLES.',
        ]
        let knuxImage=images[random.integer(0,images.length-1)]
        let knuxQuote=quotes[random.integer(0,quotes.length-1)]
        message.channel.send(knuxImage)
        message.channel.send(knuxQuote)
  }
}
module.exports=Knuccles
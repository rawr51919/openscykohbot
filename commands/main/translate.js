const commando=require('discord.js-commando')
const gtranslate=require('@vitalets/google-translate-api')
const etranslate=require('moji-translate')
const ytranslate=require('yandex-translate')('trnsl.1.1.20190321T202015Z.dfef3ca551e0bae4.73998dd197afebbf398f759a3fcfad493257b06c')
const glangs={
  'auto': 'Automatic',
  'af': 'Afrikaans',
  'sq': 'Albanian',
  'am': 'Amharic',
  'ar': 'Arabic',
  'hy': 'Armenian',
  'az': 'Azerbaijan',
  'eu': 'Basque',
  'be': 'Belarusian',
  'bn': 'Bengali',
  'bs': 'Bosnian',
  'bg': 'Bulgarian',
  'ca': 'Catalan',
  'ceb': 'Cebuano',
  'ny': 'Chichewa',
  'zh': 'Simplified Chinese',
  'zh-cn': 'Simplified Chinese',
  'zh-tw': 'Traditional Chinese',
  'co': 'Corsican',
  'hr': 'Croatian',
  'cs': 'Czech',
  'da': 'Danish',
  'nl': 'Dutch',
  'en': 'English',
  'eo': 'Esperanto',
  'et': 'Estonian',
  'tl': 'Filipino',
  'fi': 'Finnish',
  'fr': 'French',
  'fy': 'Frisian',
  'gl': 'Galician',
  'ka': 'Georgian',
  'de': 'German',
  'el': 'Greek',
  'gu': 'Gujarati',
  'ht': 'Haitian Creole',
  'ha': 'Hausa',
  'haw': 'Hawaiian',
  'he': 'Hebrew',
  'iw': 'Hebrew',
  'hi': 'Hindi',
  'hmn': 'Hmong',
  'hu': 'Hungarian',
  'is': 'Icelandic',
  'ig': 'Igbo',
  'id': 'Indonesian',
  'ga': 'Irish',
  'it': 'Italian',
  'ja': 'Japanese',
  'jw': 'Javanese',
  'kn': 'Kannada',
  'kk': 'Kazakh',
  'km': 'Khmer',
  'ko': 'Korean',
  'ku': 'Kurdish (Kurmanji)',
  'ky': 'Kyrgyz',
  'lo': 'Lao',
  'la': 'Latin',
  'lv': 'Latvian',
  'lt': 'Lithuanian',
  'lb': 'Luxembourgish',
  'mk': 'Macedonian',
  'mg': 'Malagasy',
  'ms': 'Malay',
  'ml': 'Malayalam',
  'mt': 'Maltese',
  'mi': 'Maori',
  'mr': 'Marathi',
  'mn': 'Mongolian',
  'my': 'Myanmar (Burmese)',
  'ne': 'Nepali',
  'no': 'Norwegian',
  'ps': 'Pashto',
  'fa': 'Persian',
  'pl': 'Polish',
  'pt': 'Portuguese',
  'pa': 'Punjabi',
  'ro': 'Romanian',
  'ru': 'Russian',
  'sm': 'Samoan',
  'gd': 'Scots Gaelic',
  'sr': 'Serbian',
  'st': 'Sesotho',
  'sn': 'Shona',
  'sd': 'Sindhi',
  'si': 'Sinhala',
  'sk': 'Slovak',
  'sl': 'Slovenian',
  'so': 'Somali',
  'es': 'Spanish',
  'su': 'Sundanese',
  'sw': 'Swahili',
  'sv': 'Swedish',
  'tg': 'Tajik',
  'ta': 'Tamil',
  'te': 'Telugu',
  'th': 'Thai',
  'tr': 'Turkish',
  'uk': 'Ukrainian',
  'ur': 'Urdu',
  'uz': 'Uzbek',
  'vi': 'Vietnamese',
  'cy': 'Welsh',
  'xh': 'Xhosa',
  'yi': 'Yiddish',
  'yo': 'Yoruba',
  'zu': 'Zulu'
}
const ylangs={
  'af': 'Afrikaans',
  'sq': 'Albanian',		
  'am': 'Amharic',
  'ar': 'Arabic',		
  'hy': 'Armenian',
  'az': 'Azerbaijan',
  'ba': 'Bashkir',		
  'eu': 'Basque',
  'be': 'Belarusian',
  'bn': 'Bengali',
  'bg': 'Bulgarian',
  'my': 'Burmese',
  'bs': 'Bosnian',
  'en': 'English',
  'cy': 'Welsh',		
  'hu': 'Hungarian',		
  'vi': 'Vietnamese',		
  'ht': 'Haitian Creole',		
  'gl': 'Galician',		
  'nl': 'Dutch',		
  'mrj': 'Hill Mari',		
  'el': 'Greek',		
  'ka': 'Georgian',		
  'gu': 'Gujarati',		
  'da': 'Danish',		
  'he': 'Hebrew',		
  'yi': 'Yiddish',		
  'id': 'Indonesian',		
  'ga': 'Irish',		
  'it': 'Italian',		
  'is': 'Icelandic',		
  'es': 'Spanish',		
  'kk': 'Kazakh',		
  'kn': 'Kannada',		
  'ca': 'Catalan',		
  'ky': 'Kyrgyz',		
  'zh': 'Chinese',		
  'ko': 'Korean',		
  'xh': 'Xhosa',		
  'km': 'Khmer',		
  'lo': 'Laotian',		
  'la': 'Latin',	
  'lv': 'Latvian',		
  'lt': 'Lithuanian',	
  'lb': 'Luxembourgish',		
  'mg': 'Malagasy',		
  'ms': 'Malay',
  'ml': 'Malayalam',
  'mt': 'Maltese',
  'mk': 'Macedonian',
  'mi': 'Maori',
  'mr': 'Marathi',
  'mhr': 'Mari',
  'mn': 'Mongolian',
  'de': 'German',
  'ne': 'Nepali',
  'no': 'Norwegian',
  'pa': 'Punjabi',
  'pap': 'Papiamento',
  'fa': 'Persian',
  'pl': 'Polish',
  'pt': 'Portuguese',
  'ro': 'Romanian',
  'ru': 'Russian',
  'ceb': 'Cebuano',
  'sr': 'Serbian',
  'si': 'Sinhala',
  'sk': 'Slovakian',
  'sl': 'Slovenian',
  'sw': 'Swahili',
  'su': 'Sundanese',
  'tg': 'Tajik',
  'th': 'Thai',
  'tl': 'Tagalog',
  'ta': 'Tamil',
  'tt': 'Tatar',
  'te': 'Telugu',
  'tr': 'Turkish',
  'udm': 'Udmurt',
  'uz': 'Uzbek',
  'uk': 'Ukrainian',
  'ur': 'Urdu',
  'fi': 'Finnish',
  'fr': 'French',
  'hi': 'Hindi',
  'hr': 'Croatian',
  'cs': 'Czech',
  'sv': 'Swedish',
  'gd': 'Scottish',
  'et': 'Estonian',
  'eo': 'Esperanto',
  'jv': 'Javanese',
  'ja': 'Japanese',		
}
const gisos=Object.keys(glangs).join('|')
const yisos=Object.keys(ylangs).join('|')
const manual1=new RegExp('^('+gisos+')-('+gisos+')$')
const auto1=new RegExp('^('+gisos+')$')
const manual3=new RegExp('^('+yisos+')-('+yisos+')$')
const auto3=new RegExp('^('+yisos+')$')
class Translate extends commando.Command{
    constructor(client){
      super(client,{
        name: 'translate',
        aliases: ['t'],
        group: 'main',
        memberName: 'translate',
        description: 'Translates text from one language to another using a translation API of your choosing.'
      })
    }
    run(message){
        let args=message.content.split(/\s/gm)
        if(manual1.exec(args[2])&&args[1].toLowerCase()=='google'){
            gtranslate(args.slice(3).join(' '),{
                from: manual1.exec(args[2])[1],
                to: manual1.exec(args[2])[2]
            }).then(text=>{
                if (text.from.text.didYouMean==true&&text.from.text.autoCorrected==false){
                    message.channel.send("Did you mean `"+text.from.text.value+"`?\nTranslating from "+glangs[manual1.exec(args[2])[1]]+" to "+glangs[manual1.exec(args[2])[2]]+":\n"+text.text)
                }else if (text.from.text.autoCorrected==true&&text.from.text.didYouMean==false){
                    message.channel.send("Text automatically corrected to `"+text.from.text.value+"`.\nTranslating from "+glangs[manual1.exec(args[2])[1]]+" to "+glangs[manual1.exec(args[2])[2]]+":\n"+text.text)
                }else{
                    message.channel.send("Translating from "+glangs[manual1.exec(args[2])[1]]+" to "+glangs[manual1.exec(args[2])[2]]+":\n"+text.text)
                }
            }).catch(err=>{
                message.channel.send("A translation error occurred. Either you didn't use the right language codes for arguments, you typed them the wrong way, or something went wrong on the bot's end.")
                console.error(err)
            })
        }else if(auto1.exec(args[2])&&args[1].toLowerCase()=='google'){
            gtranslate(args.slice(3).join(' '),{
                to: auto1.exec(args[2])[1]
            }).then(text=>{
                if (text.from.text.didYouMean==true&text.from.text.autoCorrected==false){
                    message.channel.send("Did you mean `"+text.from.text.value+"`?\nDetected "+glangs[text.from.language.iso.toLowerCase()]+" as the source language.\n"+text.text)
                }else if (text.from.text.autoCorrected==true&&text.from.text.didYouMean==false){
                    message.channel.send("Text automatically corrected to `"+text.from.text.value+"`.\nDetected "+glangs[text.from.language.iso.toLowerCase()]+" as the source language.\n"+text.text)
                }else{
                    message.channel.send("Detected "+glangs[text.from.language.iso.toLowerCase()]+" as the source language.\n"+text.text)
                }
                }).catch(err=>{
                    message.channel.send("A translation error occurred. Either you didn't use the right language codes for arguments, you typed them the wrong way, or something went wrong on the bot's end.")
                    console.error(err)
                })
        }else if(manual2.exec(args[2])&&args[1].toLowerCase()=='yandex'){
            ytranslate.translate(args.slice(3).join(' '),{
                from: manual3.exec(args[2])[1],
                to: manual3.exec(args[2])[2]
            },function(err,text){
                message.channel.send("Translating from "+ylangs[manual3.exec(args[2])[1]]+" to "+ylangs[manual3.exec(args[2])[2]]+":\n"+text.text)
            })
        }else if(auto2.exec(args[2])&&args[1].toLowerCase()=='yandex'){
            ytranslate.detect(args.slice(3).join(' '),function(err,text){
                message.channel.send("Detected "+ylangs[text.lang]+" as the source language.")
            })
            ytranslate.translate(args.slice(3).join(' '),{
                to: auto3.exec(args[2])[1]
            },function(err,text){
                message.channel.send(text.text)
            })
        }else if(args[1].toLowerCase()=='emoji'){
            message.channel.send("Translating to emoji:\n"+etranslate.translate(args.slice(2).join(' '),false))
        }else if(args[1].toLowerCase()=='justemoji'){
            message.channel.send("Translating to emoji:\n"+etranslate.translate(args.slice(2).join(' '),true))
        }else if(args[1].toLowerCase()=='help'){
            message.channel.send("Help for **&translate**:\n You specify a translation engine to use, for ex. `google` or `bing`, in the first argument, and what language to use, for ex. `en` or `he`, in the second argument.\nYou can manually specify what to translate from if you specify two arguments, plus the translation engine, before the text you wish to translate.\nAvailable translation engines: `google bing yandex emoji`")
        }else{
            message.channel.send("Command error. You must specify a translation engine to use, for ex. `google` or `bing`, in the first argument, and what language to use, for ex. `en` or `he`, in the second argument.\nYou can manually specify what to translate from if you specify two arguments, plus the translation engine, before the text you wish to translate.\nAvailable translation engines: `google bing yandex emoji`")
        }
    }
}
module.exports=Translate
const commando=require('discord.js-commando')
const translate=require('@vitalets/google-translate-api')
const langs={
  'auto': 'Automatic',
  'af': 'Afrikaans',
  'sq': 'Albanian',
  'am': 'Amharic',
  'ar': 'Arabic',
  'hy': 'Armenian',
  'az': 'Azerbaijani',
  'eu': 'Basque',
  'be': 'Belarusian',
  'bn': 'Bengali',
  'bs': 'Bosnian',
  'bg': 'Bulgarian',
  'ca': 'Catalan',
  'ceb': 'Cebuano',
  'ny': 'Chichewa',
  'zh-cn': 'Chinese Simplified',
  'zh-tw': 'Chinese Traditional',
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
  'ma': 'Punjabi',
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
const isos=Object.keys(langs).join('|')
const manual=new RegExp('('+isos+')-('+isos+')')
const auto=new RegExp('('+isos+')')
class GoogleTranslate extends commando.Command{
    constructor(client){
      super(client,{
        name: 'translate',
        aliases: ['gt'],
        group: 'main',
        memberName: 'translate',
        description: 'Translates text from one language to another.'
      })
    }
    run(message){   
        let args=message.content.split(/\s/gm)
        if(manual.exec(args[1])){
            translate(args.slice(2).join(' '), {
                from: manual.exec(args[1])[1],
                to: manual.exec(args[1])[2]
            }).then(text=>{
                if (text.from.text.didYouMean==true&&text.from.text.autoCorrected==false){
                    message.channel.send("Did you mean `"+text.from.text.value+"`?\nTranslating from "+langs[manual.exec(args[1])[1]]+" to "+langs[manual.exec(args[1])[2]]+":\n"+text.text)
                }else if (text.from.text.autoCorrected==true&&text.from.text.didYouMean==false){
                    message.channel.send("Text automatically corrected to `"+text.from.text.value+"`.\nTranslating from "+langs[manual.exec(args[1])[1]]+" to "+langs[manual.exec(args[1])[2]]+":\n"+text.text)
                }else{
                    message.channel.send("Translating from "+langs[manual.exec(args[1])[1]]+" to "+langs[manual.exec(args[1])[2]]+":\n"+text.text)
                }
            }).catch(err=>{
                message.channel.send("A translation error occurred. Either you didn't use the right language codes for arguments, you typed them the wrong way, or something went wrong on the bot's end.")
                console.error(err)
            })
        }else{
            if(auto.exec(args[1])){
                translate(args.slice(2).join(' '), {
                    to: auto.exec(args[1])[1]
                }).then(text=>{
                if (text.from.text.didYouMean==true&text.from.text.autoCorrected==false){
                    message.channel.send("Did you mean `"+text.from.text.value+"`?\nDetected "+`${langs[text.from.language.iso]}`+" as the source language.\n"+text.text)
                }else if (text.from.text.autoCorrected==true&&text.from.text.didYouMean==false){
                    message.channel.send("Text automatically corrected to `"+text.from.text.value+"`.\nDetected "+`${langs[text.from.language.iso]}`+" as the source language.\n"+text.text)
                }else{
                    message.channel.send("Detected "+`${langs[text.from.language.iso]}`+" as the source language.\n"+text.text)
                }
                }).catch(err=>{
                    message.channel.send("A translation error occurred. Either you didn't use the right language codes for arguments, you typed them the wrong way, or something went wrong on the bot's end.")
                    console.error(err)
                })
            }else{
                message.channel.send("Command error. You must specify a language to use, for ex. `en` or `en-us`, in the first argument.\nYou can manually specify what to translate from if you specify two arguments before the text you wish to translate.")
            }
        }
    }
}
module.exports=GoogleTranslate
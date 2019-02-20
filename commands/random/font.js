const commando = require('discord.js-commando')
class Fonts extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'font',
			group: 'random',
			memberName: 'font',
			description: 'Make OpenScykohBot output what you say in any font you specify.',
		});
    }
    async run(message,args){
        if (message.guild.commandPrefix==null || message.guild.commandPrefix==undefined){
            args = message.content.split(/ +/).slice(this.client.commandPrefix.length)
        }else{
            args = message.content.split(/ +/).slice(message.guild.commandPrefix.length)
        }
        if(!args[0]){
            message.channel.send(':capital_abcd: **Help for `&font`**\nUsage: `&font <fullwidth; chinese; script; blocks; mirror> <text>`\nExamples:\n`&font` by itself shows this help screen.\n`&font fullwidth hi` will give `ｈｉ`\n`&font script hi` will give `𝒽𝒾')
            return
        }
        if(args[0]=='fullwidth'){
            if (!args[1]){
                message.channel.send('You need to specify text to convert.')
                return
            }
            function textlooks1(text){
  			return Array.from(text)
              .map(i => ({
                  // fullwidth font lookup table
                a: 'ａ',
                b: 'ｂ',
                c: 'ｃ',
                d: 'ｄ',
                e: 'ｅ',
                f: 'ｆ',
                g: 'ｇ',
                h: 'ｈ',
                i: 'ｉ',
                j: 'ｊ',
                k: 'ｋ',
                l: 'ｌ',
                m: 'ｍ',
                n: 'ｎ',
                o: 'ｏ',
                p: 'ｐ',
                q: 'ｑ',
                r: 'ｒ',
                s: 'ｓ',
                t: 'ｔ',
                u: 'ｕ',
                v: 'ｖ',
                w: 'ｗ',
                x: 'ｘ',
                y: 'ｙ',
                z: 'ｚ',
                A: 'Ａ',
                B: 'Ｂ',
                C: 'Ｃ',
                D: 'Ｄ',
                E: 'Ｅ',
                F: 'Ｆ',
                G: 'Ｇ',
                H: 'Ｈ',
                I: 'Ｉ',
                J: 'Ｊ',
                K: 'Ｋ',
                L: 'Ｌ',
                M: 'Ｍ',
                N: 'Ｎ',
                O: 'Ｏ',
                P: 'Ｐ',
                Q: 'Ｑ',
                R: 'Ｒ',
                S: 'Ｓ',
                T: 'Ｔ',
                U: 'Ｕ',
                V: 'Ｖ',
                W: 'Ｗ',
                X: 'Ｘ',
                Y: 'Ｙ',
                Z: 'Ｚ',
                0: '０',
                1: '１',
                2: '２',
                3: '３',
                4: '４',
                5: '５',
                6: '６',
                7: '７',
                8: '８',
                9: '９',
                '!': '！',
                '@': '＠',
                '#': '＃',
                '$': '＄',
                '%': '％',
                '^': '＾',
                '&': '＆',
                '*': '＊',
                '(': '（',
                ')': '）',
                '\'': '’',
                '"': '”',
                '-': '－',
                '_': '＿',
                '+': '＋',
                '=': '＝',
                ';': '；',
                ':': '：',
                '[': '［',
                ']': '］',
                '{': '｛',
                '}': '｝',
                '|': '｜',
                '<': '＜',
                '>': '＞',
                '?': '？',
                '/': '／',
                '\\': '＼',
                '.': '．',
                ',': '，',
                '`': '‘',
                '~': '～',
                '\ ': '　'
              })[i])
              .join('')
            }
            message.channel.send(textlooks1(message.content.substr(16)))
        }
        else if(args[0]=='chinese'){
            if (!args[1]){
                message.channel.send('You need to specify text to convert.')
                return
            }
            function textlooks2(text){
  			return Array.from(text)
              .map(i => ({
                  // chinese font lookup table
                  a: '卂',
                  b: '乃',
                  c: '匚',
                  d: '刀',
                  e: '乇',
                  f: '下',
                  g: '厶',
                  h: '卄',
                    i: '工',
                    j: '丁',
                    k: '长',
                    l: '乚',
                   m: '从',
                   n: '𠘨',
                   o: '口',
                   p: '尸',
                   q: '㔿',
                   r: '尺',
                  s: '丂',
                   t: '丅',
                   u: '凵',
                   v: 'リ',
                   w: '山',
                   x: '乂',
                   y: '丫',
                   z: '乙',
                   A: '卂',
                  B: '乃',
                  C: '匚',
                  D: '刀',
                  E: '乇',
                  F: '下',
                  G: '厶',
                  H: '卄',
                    I: '工',
                    J: '丁',
                    K: '长',
                    L: '乚',
                   M: '从',
                   N: '𠘨',
                   O: '口',
                   P: '尸',
                   Q: '㔿',
                   R: '尺',
                  S: '丂',
                   T: '丅',
                   U: '凵',
                   V: 'リ',
                   W: '山',
                   X: '乂',
                   Y: '丫',
                   Z: '乙',
                   0: '〇',
                   1: '〡',
                   2: '己',
                   3: 'ろ',
                   4: '나',
                   5: 'ら',
                   6: '万',
                   7: 'フ',
                   8: '日',
                   9: '㔿',
                   '!': '！',
                   '(': '「',
                   ')': '」',
                   ';': '；',
                   ':': '：',
                   '<': 'く',
                   '>': '＞',
                   '?': '？',
                   '.': '。',
                   ',': '、',
                   '\ ': '　',
                  '-': '一',
                  '+': '十',
                  '*': '六',
                  '=': '二'
              })[i])
              .join('')
            }
            message.channel.send(textlooks2(message.content.substr(14)))
        }
        else if(args[0]=='script'){
            if (!args[1]){
                message.channel.send('You need to specify text to convert.')
                return
            }
            function textlooks3(text){
                return Array.from(text)
              .map(i => ({
                  // script font lookup table
                  a: '𝒶',
                  b: '𝒷',
                  c: '𝒸',
                  d: '𝒹',
                  e: '𝑒',
                  f: '𝒻',
                  g: '𝑔',
                  h: '𝒽',
                    i: '𝒾',
                    j: '𝒿',
                    k: '𝓀',
                    l: '𝓁',
                   m: '𝓂',
                   n: '𝓃',
                   o: '𝑜',
                   p: '𝓅',
                   q: '𝓆',
                   r: '𝓇',
                  s: '𝓈',
                   t: '𝓉',
                   u: '𝓊',
                   v: '𝓋',
                   w: '𝓌',
                   x: '𝓍',
                   y: '𝓎',
                   z: '𝓏',
                   A: '𝒜',
                  B: '𝐵',
                  C: '𝒞',
                  D: '𝒟',
                  E: '𝐸',
                  F: '𝐹',
                  G: '𝒢',
                  H: '𝐻',
                    I: '𝐼',
                    J: '𝒥',
                    K: '𝒦',
                    L: '𝐿',
                   M: '𝑀',
                   N: '𝒩',
                   O: '𝒪',
                   P: '𝒫',
                   Q: '𝒬',
                   R: '𝑅',
                  S: '𝒮',
                   T: '𝒯',
                   U: '𝒰',
                   V: '𝒱',
                   W: '𝒲',
                   X: '𝒳',
                   Y: '𝒴',
                   Z: '𝒵',
                   0: '0',
                   1: '1',
                   2: '2',
                   3: '3',
                   4: '4',
                   5: '5',
                   6: '6',
                   7: '7',
                   8: '8',
                   9: '9',
                   '"': '”',
                   ',': ',',
                   '.': '.',
                   '!': '!',
                   '?': '?',
                   '\ ': '\ '
              })[i])
              .join('')
            }
            message.channel.send(textlooks3(message.content.substr(13)))
        }
        else if(args[0]=='blocks'){
            if (!args[1]){
                message.channel.send('You need to specify text to convert.')
                return
            }
            function textlooks4(text){
  			return Array.from(text)
              .map(i => ({
                  // blocks font lookup table
                  a: '🇦 ',
                  b: '🇧 ',
                  c: '🇨 ',
                  d: '🇩 ',
                  e: '🇪 ',
                  f: '🇫 ',
                  g: '🇬 ',
                  h: '🇭 ',
                    i: 'ℹ ',
                    j: '🇯 ',
                    k: '🇰 ',
                    l: '🇱 ',
                   m: '🇲 ',
                   n: '🇳 ',
                   o: '🇴 ',
                   p: '🇵 ',
                   q: '🇶 ',
                   r: '🇷 ',
                  s: '🇸 ',
                   t: '🇹 ',
                   u: '🇺 ',
                   v: '🇻 ',
                   w: '🇼 ',
                   x: '🇽 ',
                   y: '🇾 ',
                   z: '🇿 ',
                   A: '🇦 ',
                  B: '🇧 ',
                  C: '🇨 ',
                  D: '🇩 ',
                  E: '🇪 ',
                  F: '🇫 ',
                  G: '🇬 ',
                  H: '🇭 ',
                    I: '🇮 ',
                    J: '🇯 ',
                    K: '🇰 ',
                    L: '🇱 ',
                   M: '🇲 ',
                   N: '🇳 ',
                   O: '🇴 ',
                   P: '🇵 ',
                   Q: '🇶 ',
                   R: '🇷 ',
                  S: '🇸 ',
                   T: '🇹 ',
                   U: '🇺 ',
                   V: '🇻 ',
                   W: '🇼 ',
                   X: '🇽 ',
                   Y: '🇾 ',
                   Z: '🇿 ',
                   0: ':zero: ',
                   1: ':one: ',
                   2: ':two: ',
                   3: ':three: ',
                   4: ':four: ',
                   5: ':five: ',
                   6: ':six: ',
                   7: ':seven: ',
                   8: ':eight: ',
                   9: ':nine: ',
                   'up!': ':up:',
                   'UP!': ':up:',
                   'uP!': ':up:',
                   'Up!': ':up:',
                   '*': ':asterisk: ',
                   '#': ':hash: ',
                   '\ ': '　',
                   '!': ':exclamation: ',
                   '?': ':question: ',
              })[i])
              .join('')
            }
            message.channel.send(textlooks4(message.content.substr(12)))
        }
        else if(args[0]=='mirror'){
            if (!args[1]){
                message.channel.send('You need to specify text to convert.')
                return
            }
            function textlooks5(text){
  			return Array.from(text)
              .map(i => ({
                  // mirror font lookup table
                  a: 'ɐ',
                  b: 'q',
                  c: 'ɔ',
                  d: 'p',
                  e: 'ǝ',
                  f: 'ɟ',
                  g: 'ƃ',
                  h: 'ɥ',
                    i: 'ı',
                    j: 'ɾ',
                    k: 'ʞ',
                    l: 'l',
                   m: 'ɯ',
                   n: 'u',
                   o: 'o',
                   p: 'd',
                   q: 'b',
                   r: 'ɹ',
                  s: 's',
                   t: 'ʇ',
                   u: 'n',
                   v: 'ʌ',
                   w: 'ʍ',
                   x: 'x',
                   y: 'ʎ',
                   z: 'z',
                   A: 'ꓯ',
                  B: 'ꓭ',
                  C: 'ꓛ',
                  D: 'ꓷ',
                  E: 'Ǝ',
                  F: 'ꓞ',
                  G: 'ꓨ',
                  H: 'H',
                    I: 'I',
                    J: 'ſ',
                    K: 'ꓘ',
                    L: 'ꓶ',
                   M: 'W',
                   N: 'N',
                   O: 'O',
                   P: 'ꓒ',
                   Q: 'Ὸ',
                   R: 'ꓤ',
                  S: 'S',
                   T: 'ꓕ',
                   U: 'ꓵ',
                   V: 'ꓥ',
                   W: 'M',
                   X: 'X',
                   Y: '⅄',
                   Z: 'Z',
                   0: '0',
                   1: 'Ɩ',
                   2: 'Շ',
                   3: 'Ɛ',
                   4: 'h',
                   5: '૬',
                   6: '9',
                   7: 'L',
                   8: '8',
                   9: '6',
                   '*': 'ₓ',
                   '#': '#',
                   '\ ': '\ ',
                   '!': '¡',
                   '?': '¿',
                   '@': '@', 
                   '$': '$',
                   '%': '%',
                   '^': 'v',
                   '&': '⅋',
                   '(': ')',
                   ')': '(',
                   '\\': '/',
                   '/': '\\',
                   '+': '+',
                   '=': '=',
                   '_': '‾',
                   ':': ':',
                   '\'': ',',
                   '\"': ',,',
                   '~': '~',
                   '.': '\˙',
                   ',': '\\`'
              })[i])
              .join('')
            }
            function reverse(string){
                if (string==="")
                    return ""
                else
                    return reverse(string.substr(1))+string.charAt(0)
            }
            message.channel.send(reverse(textlooks5(message.content.substr(12))))
        }
    }
}
module.exports=Fonts
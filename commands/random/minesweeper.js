const commando=require('discord.js-commando')
const Minesweeper=require('discord.js-minesweeper')
class MinesweeperBoards extends commando.Command {
        constructor(client){
            super(client,{
                name: 'minesweeper',
                group: 'random',
                memberName: 'minesweeper',
                description: 'Have OpenScykohBot generate a minesweeper field for you.',
                args: [
                        {
                          key: 'rows',
                          prompt: 'How many rows of pieces should there be?',
                          type: 'integer',
                          min: 1,
                          max: 12
                        },
                        {
                          key: 'columns',
                          prompt: 'How many columns of pieces should there be?',
                          type: 'integer',
                          min: 1,
                          max: 12
                        },
                        {
                          key: 'mines',
                          prompt: 'How many mines?',
                          type: 'integer',
                          min: 1
                        },
                        {
                          key: 'emote',
                          prompt: 'What emoji should be used as the mine?',
                          type: 'string'
                        },
                        {
                          key: 'spaces',
                          prompt: 'Should the pieces be seperated by spaces?',
                          type: 'boolean',
                          false: 'no',
                          true: 'yes'
                        },
                ]
            })
        }
        async run(message,{rows, columns, mines, emote, spaces}){
                const minesweeper=new Minesweeper({rows, columns, mines, emote, spaces})
                const board=minesweeper.start()
                return board ? message.channel.send(board) : message.channel.send("You provided invalid data. Please try again.")
        }
}
module.exports=MinesweeperBoards
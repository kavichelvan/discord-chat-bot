const {MessageEmbed} = require('discord.js')

module.exports = {
    slash: true,
    testOnly: true,
    description: 'simple oping ping command',
    // minArgs: 2,
    // expectedArgs: '<Name> <Age>', 
    //callback: ({message, args }) => {
    callback: ({message }) => {
        const embed = new MessageEmbed().setTitle('example').setDescription('pong called')

        // const [name,age] = args
        // embed.addField('Name', name)
        // embed.addField('age', age)

        if(message){
           message.reply('',{embed})
        }
        return embed
    },
}
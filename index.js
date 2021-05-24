const DiscordJS = require('discord.js')
require('dotenv').config()

const guildId = '815798125495189505'
const client = new DiscordJS.Client()

const getApp = (guildId) =>{
    const app = client.api.applications(client.user.id)
    if(guildId){
        app.guilds(guildId)
    } 
    return app
}
client.on('ready', async()=>{
    console.log('The bot is ready')

    const commands = await getApp(guildId).commands.get()
    console.log(commands)
    await getApp(guildId).commands.post({
        data :{
            name: 'ping',
            description: 'A simple ping',         
        },
    })

    await getApp(guildId).commands.post({
        data :{
            name: 'pong',
            description: 'A simple pong',         
        },
    })

    client.ws.on ('INTERACTION_CREATE', async (interaction) => {
        const {name} = interaction.data
        const command = name.
        toLowerCase()

        if(command ==='ping'){
            reply(interaction,'ping called')
         }
         if(command ==='pong'){
            reply(interaction,'pong called')
         }
        console.log(command)
    })
})
        const reply = (interaction,response) => {
            client.api.interactions(interaction.id,interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                    content: response,
                    },
                },
            })
        }

client.login(process.env.TOKEN)
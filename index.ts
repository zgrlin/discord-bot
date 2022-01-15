import DiscordJS, { Intents } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({

    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_PRESENCES,
    ],
})

client.on('ready', () => {
    console.log('The bot is ready')

    new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'commands'),
        featuresDir: path.join(__dirname, 'features'),
        typeScript: true,
        testServers: ['insert_discord_server_id'],
        botOwners: ['insert_bot_owner_id'],
    })
})

// client.on('messageCreate', (message) => {
//    if (message.content === '!ping') {
//        message.reply({
//          content: 'pong'  
//        })
//    }
// })

client.login(process.env.TOKEN)

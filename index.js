import dotenv from 'dotenv'
dotenv.config()

import { Client, GatewayIntentBits } from 'discord.js';

const gifLinks = ["https://nekos.best/api/v2/hug", "https://nekos.best/api/v2/smile", "https://nekos.best/api/v2/highfive"];
const gifMessages = ["Did someone say gif?", "Here's a random Anime gif for you...", "Yeah, I'm bored too. Here's the gif you wanted."];
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.on("guildMemberAdd", async member => {
    console.log('${member.user.tag} has joined the server!');

    // Example: Send a welcome message to a specific channel
    const welcomeChannelId = "1386903488684097640"; // Replace with your channel ID
    const welcomeChannel = member.guild.channels.cache.get(welcomeChannelId);

    if (welcomeChannel) {
        welcomeChannel.send('Welcome to Centennial Anime Club, ${member}! :partying_face::partying_face: ');

                let url = gifLinks[Math.floor(Math.random() * gifLinks.length)];
        let response = await fetch(url);
        let json = await response.json();

        welcomeChannel.send(json.results[0].url);
    }

    // Example: Assign a default role
    const defaultRoleId = "1386903830725398690"; // Replace with your role ID
    const defaultRole = member.guild.roles.cache.get(defaultRoleId);

    if (defaultRole) {
        member.roles.add(defaultRole)
            .then(() => console.log('Assigned default role to ${member.user.tag}'))
            .catch(console.error);
    }
});

client.on("messageCreate", async msg => {
    if (msg.content == "!gif") {

        msg.channel.send(gifMessages[Math.floor(Math.random() * gifMessages.length)]);

        let url = gifLinks[Math.floor(Math.random() * gifLinks.length)];
        let response = await fetch(url);
        let json = await response.json();

        msg.channel.send(json.results[0].url);
    }

    if (msg.author.bot) return;

    // Check if the bot is mentioned in the message
    if (msg.mentions.has(client.user.id)) {
        // Reply to the message
        await msg.reply("Hey I'm just a bot. Don't ping me!!!");

        let url = "https://nekos.best/api/v2/angry";
        let response = await fetch(url);
        let json = await response.json();

        msg.channel.send(json.results[0].url);
    }
});

client.login(process.env.DISCORD_TOKEN);
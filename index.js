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
    console.log(`${member.user.tag} has joined the server!`);

    // Example: Send a welcome message to a specific channel
    const welcomeChannelId = "1386903488684097640"; // Replace with your channel ID
    const welcomeChannel = member.guild.channels.cache.get(welcomeChannelId);

    if (welcomeChannel) {
        welcomeChannel.send(`Welcome to Centennial Anime Club, ${member}! :partying_face::partying_face: `);

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
            .then(() => console.log(`Assigned default role to ${member.user.tag}`))
            .catch(console.error);
    }
});

const dice1ImageURL = "https://upload.wikimedia.org/wikipedia/commons/c/c5/Dice-1.png";
const dice2ImageURL = "https://upload.wikimedia.org/wikipedia/commons/1/18/Dice-2.png";
const dice3ImageURL = "https://upload.wikimedia.org/wikipedia/commons/7/70/Dice-3.png";
const dice4ImageURL = "https://upload.wikimedia.org/wikipedia/commons/a/a9/Dice-4.png";
const dice5ImageURL = "https://upload.wikimedia.org/wikipedia/commons/6/6c/Dice-5.png";
const dice6ImageURL = "https://upload.wikimedia.org/wikipedia/commons/5/5c/Dice-6.png";

client.on("messageCreate", async msg => {

    if (msg.author.bot) return; // Check if the bot is mentioned in the message

    if (msg.content == "!gif") {

        msg.channel.send(gifMessages[Math.floor(Math.random() * gifMessages.length)]);

        let url = gifLinks[Math.floor(Math.random() * gifLinks.length)];
        let response = await fetch(url);
        let json = await response.json();

        msg.channel.send(json.results[0].url);
    }

    if (msg.mentions.has(client.user.id)) {
        // Reply to the message
        await msg.reply("Hey I'm just a bot. Don't ping me!!!");

        let url = "https://nekos.best/api/v2/angry";
        let response = await fetch(url);
        let json = await response.json();

        msg.channel.send(json.results[0].url);
    }

    if (msg.content == "!dice6") {
        let dice = Math.floor(1 + Math.random() * 6);
        msg.channel.send(`**${dice}!**`);

        if (dice == 1){
            let response = await fetch(dice1ImageURL);
        } else if (dice == 2){
            let response = await fetch(dice2ImageURL);
        } else if (dice == 3){
            let response = await fetch(dice3ImageURL);
        } else if (dice == 4){
            let response = await fetch(dice4ImageURL);
        } else if (dice == 5){
            let response = await fetch(dice5ImageURL);
        } else {
            let response = await fetch(dice6ImageURL);
        }
        msg.channel.send(response);
    }
    
    else if (msg.content == "!dice20") {
        let dice = Math.floor(1 + Math.random() * 20);
        msg.channel.send(`**${dice}!**`);
    }
});

client.login(process.env.DISCORD_TOKEN);
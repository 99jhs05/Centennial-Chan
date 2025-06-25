import dotenv from 'dotenv'
dotenv.config()

import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent,
    ],
});

const gifLinks = ["https://nekos.best/api/v2/hug", "https://nekos.best/api/v2/smile", "https://nekos.best/api/v2/highfive"];
const gifMessages = ["Did someone say gif?", "Here's a random Anime gif for you...", "Yeah, I'm bored too. Here's the gif you wanted."];

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
const dice6ImageURL = "https://upload.wikimedia.org/wikipedia/commons/7/7a/Dice-6E.png";

const dnd1ImageURL = "https://i.imgur.com/Iv7DiXm.png";
const dnd2ImageURL = "https://i.imgur.com/qSkxeBC.png";
const dnd3ImageURL = "https://i.imgur.com/jO08HBK.png";
const dnd4ImageURL = "https://i.imgur.com/pLCXFcz.png";
const dnd5ImageURL = "https://i.imgur.com/l5T7ddl.png";
const dnd6ImageURL = "https://i.imgur.com/lmUKh2x.png";
const dnd7ImageURL = "https://i.imgur.com/WN6Ctv2.png";
const dnd8ImageURL = "https://i.imgur.com/vFc6Stz.png";
const dnd9ImageURL = "https://i.imgur.com/2EP9uzY.png";
const dnd10ImageURL = "https://i.imgur.com/qUWFl9o.png";
const dnd11ImageURL = "https://i.imgur.com/RaC4uMC.png";
const dnd12ImageURL = "https://i.imgur.com/xIqrDx9.png";
const dnd13ImageURL = "https://i.imgur.com/Px4mK20.png";
const dnd14ImageURL = "https://i.imgur.com/lWUftwK.png";
const dnd15ImageURL = "https://i.imgur.com/3xHtcn4.png";
const dnd16ImageURL = "https://i.imgur.com/d5uCuO2.png";
const dnd17ImageURL = "https://i.imgur.com/Pu8Wc7l.png";
const dnd18ImageURL = "https://i.imgur.com/VNx6QUD.png";
const dnd19ImageURL = "https://i.imgur.com/1ZSZxhg.png";
const dnd20ImageURL = "https://i.imgur.com/BxJkWGs.png";


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

        if (dice == 1){
            msg.channel.send({ content: `**${dice}!**`, files: [dice1ImageURL] })
        } else if (dice == 2){
            msg.channel.send({ content: `**${dice}!**`, files: [dice2ImageURL] })
        } else if (dice == 3){
            msg.channel.send({ content: `**${dice}!**`, files: [dice3ImageURL] })
        } else if (dice == 4){
            msg.channel.send({ content: `**${dice}!**`, files: [dice4ImageURL] })
        } else if (dice == 5){
            msg.channel.send({ content: `**${dice}!**`, files: [dice5ImageURL] })
        } else {
            msg.channel.send({ content: `**${dice}!**`, files: [dice6ImageURL] })
        }
    }
    
    else if (msg.content == "!dice20") {
        let dice = Math.floor(1 + Math.random() * 20);

        if (dice == 1){
            msg.channel.send({ content: `**${dice}!**`, files: [dnd1ImageURL] })
        } else if (dice == 2){
            msg.channel.send({ content: `**${dice}!**`, files: [dnd2ImageURL] })
        } else if (dice == 3){
            msg.channel.send({ content: `**${dice}!**`, files: [dnd3ImageURL] })
        } else if (dice == 4){
            msg.channel.send({ content: `**${dice}!**`, files: [dnd4ImageURL] })
        } else if (dice == 5){
            msg.channel.send({ content: `**${dice}!**`, files: [dnd5ImageURL] })
        } else if (dice == 6){
            msg.channel.send({ content: `**${dice}!**`, files: [dnd6ImageURL] })
        } else if (dice == 7){
            msg.channel.send({ content: `**${dice}!**`, files: [dnd7ImageURL] })
        } else if (dice == 8){
            msg.channel.send({ content: `**${dice}!**`, files: [dnd8ImageURL] })
        } else if (dice == 9){
            msg.channel.send({ content: `**${dice}!**`, files: [dnd9ImageURL] })
        } else if (dice == 10){
            msg.channel.send({ content: `**${dice}!**`, files: [dnd10ImageURL] })
        } else if (dice == 11){
            msg.channel.send({ content: `**${dice}!**`, files: [dnd11ImageURL] })
        } else if (dice == 12){
            msg.channel.send({ content: `**${dice}!**`, files: [dnd12ImageURL] })
        } else if (dice == 13){
            msg.channel.send({ content: `**${dice}!**`, files: [dnd13ImageURL] })
        } else if (dice == 14){
            msg.channel.send({ content: `**${dice}!**`, files: [dnd14ImageURL] })
        } else if (dice == 15){
            msg.channel.send({ content: `**${dice}!**`, files: [dnd15ImageURL] })
        } else if (dice == 16){
            msg.channel.send({ content: `**${dice}!**`, files: [dnd16ImageURL] })
        } else if (dice == 17){
            msg.channel.send({ content: `**${dice}!**`, files: [dnd17ImageURL] })
        } else if (dice == 18){
            msg.channel.send({ content: `**${dice}!**`, files: [dnd18ImageURL] })
        } else if (dice == 19){
            msg.channel.send({ content: `**${dice}!**`, files: [dnd19ImageURL] })
        } else {
            msg.channel.send({ content: `**${dice}!**`, files: [dnd20ImageURL] })
        }
    }
});

client.login(process.env.DISCORD_TOKEN);
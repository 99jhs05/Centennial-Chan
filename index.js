import dotenv from 'dotenv'
dotenv.config()

import { Client, GatewayIntentBits, AttachmentBuilder, EmbedBuilder } from 'discord.js';

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
const dice1ImageURL = "https://upload.wikimedia.org/wikipedia/commons/c/c5/Dice-1.png";
const dice2ImageURL = "https://upload.wikimedia.org/wikipedia/commons/1/18/Dice-2.png";
const dice3ImageURL = "https://upload.wikimedia.org/wikipedia/commons/7/70/Dice-3.png";
const dice4ImageURL = "https://upload.wikimedia.org/wikipedia/commons/a/a9/Dice-4.png";
const dice5ImageURL = "https://upload.wikimedia.org/wikipedia/commons/6/6c/Dice-5.png";
const dice6ImageURL = "https://upload.wikimedia.org/wikipedia/commons/7/7a/Dice-6E.png";

const dnd1ImageURL = new AttachmentBuilder('../container/assets/d1.png');
const dnd2ImageURL = new AttachmentBuilder('../container/assets/d2.png');
const dnd3ImageURL = new AttachmentBuilder('../container/assets/d3.png');
const dnd4ImageURL = new AttachmentBuilder('../container/assets/d4.png');
const dnd5ImageURL = new AttachmentBuilder('../container/assets/d5.png');
const dnd6ImageURL = new AttachmentBuilder('../container/assets/d6.png');
const dnd7ImageURL = new AttachmentBuilder('../container/assets/d7.png');
const dnd8ImageURL = new AttachmentBuilder('../container/assets/d8.png');
const dnd9ImageURL = new AttachmentBuilder('../container/assets/d9.png');
const dnd10ImageURL = new AttachmentBuilder('../container/assets/d10.png');
const dnd11ImageURL = new AttachmentBuilder('../container/assets/d11.png');
const dnd12ImageURL = new AttachmentBuilder('../container/assets/d12.png');
const dnd13ImageURL = new AttachmentBuilder('../container/assets/d13.png');
const dnd14ImageURL = new AttachmentBuilder('../container/assets/d14.png');
const dnd15ImageURL = new AttachmentBuilder('../container/assets/d15.png');
const dnd16ImageURL = new AttachmentBuilder('../container/assets/d16.png');
const dnd17ImageURL = new AttachmentBuilder('../container/assets/d17.png');
const dnd18ImageURL = new AttachmentBuilder('../container/assets/d18.png');
const dnd19ImageURL = new AttachmentBuilder('../container/assets/d19.png');
const dnd20ImageURL = new AttachmentBuilder('../container/assets/d20.png');

const announceChannelID = "1386903580887224472";
const welcomeChannelId = "1386903488684097640";
const defaultRoleId = "1386903830725398690";

client.on("guildMemberAdd", async member => {
    console.log(`${member.user.tag} has joined the server!`);

    //Send a welcome message to a specific channel
    const welcomeChannel = member.guild.channels.cache.get(welcomeChannelId);

    if (welcomeChannel) {
        welcomeChannel.send(`Welcome to Centennial Anime Club, ${member}! :Koncha:`);

        let url = gifLinks[Math.floor(Math.random() * gifLinks.length)];
        let response = await fetch(url);
        let json = await response.json();

        welcomeChannel.send(json.results[0].url);
    }

    //Assign a default role
    const defaultRole = member.guild.roles.cache.get(defaultRoleId);

    if (defaultRole) {
        member.roles.add(defaultRole)
            .then(() => console.log(`Assigned default role to ${member.user.tag}`))
            .catch(console.error);
    }
});

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

    if (msg.content == "!duce6" || msg.content == "!duce20") { 
        msg.channel.send("It's not ***duce*** LOOOOL");
    }

    else if (msg.content == "!dice") { 
        msg.channel.send("Dice what? 6 or 20?");
    }

    else if (msg.content == "!dice6") {
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
            msg.channel.send({ content: `**${dice}! CRITICAL FAILURE. :sadge:**`, files: [dnd1ImageURL] })
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
            msg.channel.send({ content: `**${dice}! CRITICAL SUCCESS! :fire:**`, files: [dnd20ImageURL] })
        }
    }

    if(msg.content.startsWith("!announce")){

        if(msg.channelId == welcomeChannelId){
            let imageAttachment = msg.attachments.first();
            /* This takes the sentence sent, and makes it an array. In this case, a list of words.
            It 'splits' the list up wherever it sees space.*/
            let sentence = msg.content.split(" ");
    
            /* .shift(), alters the list. It removes the first thing in the list. This would be the "!say" word.
            If we assigned shift() to a variable.
            Like "let x = msg.shift()" ... "x" would be the word that was removed.
            This is handy for grabbing command words. If you used shift() again, it would remove the second,
            then the third, each time that you type it.*/

            sentence.shift();

            // Now join the list back together into a sentence with "join()" and set that as the new sentence.
            sentence = sentence.join(" ");
            client.channels.cache.get(announceChannelID).send({ content: sentence, files: imageAttachment });
        }
    }
});

client.login(process.env.DISCORD_TOKEN);
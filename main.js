const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();
const prefix = '<3';

const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}



client.once('ready', () => {

    console.log('LoveYouBot has warmed up their lips and is ready to give some LOVE!');
    client.user.setActivity(`spreading love to the lonely's`, { type: "WATCHING"})

});



client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'love'){
        client.commands.get('love').execute(message, args);
    } 
    if(command === 'loveme'){
        client.commands.get('loveme').execute(message, args);
    } 
    if(command === 'kissme'){
        client.commands.get('kissme').execute(message, args);
    } 
    if(command === 'help'){
        client.commands.get('help').execute(message, args);
    } 
    if(command === 'hugme'){
        client.commands.get('hugme').execute(message, args);
    } 
    if(command === 'lovely'){
        client.commands.get('lovely').execute(message, args);
    } 
    if(command === 'rest'){
        client.commands.get('rest').execute(message, args);
    } 
    if(command === 'addbot'){
        client.commands.get('addbot').execute(message, args);

    } 
    

});


client.login(process.env.DISCORD_TOKEN);
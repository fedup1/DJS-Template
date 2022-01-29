const Discord = require('discord.js');
const { TOKEN } = require('./config.json');

const client = new Discord.Client({ 
    intents: 32767,
});

client.slash = new Discord.Collection();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();


["commands", "Events", "SlashCommands"].forEach(file => {
    require(`./handlers/${file}`)(client) 
});


client.login(TOKEN);

/* Code by FEDUP1#9020 | https://github.com/fedup1/DJS-Template */

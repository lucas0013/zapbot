const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const { meaning_of_life } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES] });

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', interaction => {
	console.log(interaction);
});

client.on("messageCreate", message => {
    console.log(message);
});

client.on('messageCreate', async message => {
	if (!message.content) return;

	if (message.content === 'ping') {
		await message.reply('Pong!');
		
	}
	else if (message.content === 'sentido da vida') {
		await message.reply(meaning_of_life);
	}
	
	else if (message.content === 'Ping') {
		await message.reply('Pong!');
	}
	else if (message.content === 'server') {
		await message.reply(`This server's name is: ${message.guild.name}`);
	}
});


client.login(token);



const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am Online. Ready when you are.');
});
     
client.on('message', message => {
    if (message.content === '-nitrox') {
    	message.channel.send('Check out Nitrox!');
        message.channel.send('Website: <https://nitrocga.org>');
        message.channel.send('Twitter: <https://twitter.com/NitroxOfficial>');
        message.channel.send('Youtube: <https://www.youtube.com/user/TairicGames>');
  	}   
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.on('guildDelete', guild => {
    console.log(`I have left ${guild.name} at ${new Date()}`);

});

client.on('guildCreate', guild => {
    guild.defaultChannel.sendMessage(`I have joined ${guild.name}`);

});

client.on('guildMemberAdd', member => {
    let guild = member.guild;
    guild.defaultChannel.sendMessage(`Welcome ${member.user} to the Nitrox Hub Discord Server!}`);

});

client.on('guildMemberRemove', member => {
    let guild = member.guild;
    guild.defaultChannel.sendMessage(`${member.user} has left the server.`);

});
      
client.on('message', message => {
    if (message.content === '-nitrox') {
    	message.channel.send('Check out Nitrox!');
        message.channel.send('Website: <https://nitrocga.org>');
        message.channel.send('Twitter: <https://twitter.com/NitroxOfficial>');
        message.channel.send('Youtube: <https://www.youtube.com/user/TairicGames>');
        message.channel.send('Patreon: <https://www.patreon.com/NITROXAC>');
  	}
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

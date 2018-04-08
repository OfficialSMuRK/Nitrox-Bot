const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('guildDelete', guild=> {
    console.log(`I have left ${guild.name}`);
    
});

client.on('guildCreate', guild=> {
    guild.defaultChannel.sendMessage(`I'm now online at ${guild.name}`);
    
});
    
client.on('guildMemberAdd', member=> {
    let guild = member.guild;
    guild.defaultChannel.sendMessage(`Welcome ${member.user.username`} to the Nitrox Hub! Hope you have a wonderful time here!`)
    
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
    
client.on("guildMemberAdd", (member) => {
  newUsers.set(member.id, member.user);
});
client.on("guildMemberRemove", (member) => {
  if(newUsers.has(member.id)) newUsers.delete(member.id);
});
    
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

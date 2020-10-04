const {Client, embed} = require('discord.js');
const discord = require('discord.js');
const token = 'ur super secret token'
const bot = new Client();
const client = new discord.Client();
const PREFIX = '!';

bot.on('ready', () => {
  console.log('This bot is active!');
  bot.user.setActivity('!ticket', { type: 'WATCHING'}).catch(console.error);
})

client.login(token);

client.on('ready', () => {
    let myGuild = client.guilds.cache.get('server id');
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.cache.get('user count channel id');
    memberCountChannel.setName('User count: ' + memberCount)
    .then(result => console.log(result))
    .catch(error => console.log(error));
});

client.on('guildMemberAdd', member =>{
    let myGuild = client.guilds.cache.get('server id');
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.cache.get('user count channel id');
    memberCountChannel.setName('User count: ' + memberCount)
    .then(result => console.log(result))
    .catch(error => console.log(error));
});

client.on('guildMemberRemove', member =>{
    let myGuild = client.guilds.cache.get('server id');
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.cache.get('user count channel id');
    memberCountChannel.setName('User count: ' + memberCount)
    .then(result => console.log(result))
    .catch(error => console.log(error));
});

client.on('guildMemberKick', member =>{
    let myGuild = client.guilds.cache.get('server id');
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.cache.get('user count channel id');
    memberCountChannel.setName('User count: ' + memberCount)
    .then(result => console.log(result))
    .catch(error => console.log(error));
});

bot.on('guildMemberAdd', function(member){
    const role = member.guild.roles.cache.find(role => role.name === 'some role');
    member.roles.add(role);
});

bot.on('message', message => {
	if (message.content === `!ping`) {
        message.channel.send('Pong!');
    }
});

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    
    switch (args[0]) { 
        case 'ticket':
            const embed = new discord.MessageEmbed()
                .setTitle("**Help ticket**")
                .setColor(0xff0000)
                .setDescription("If you need help with anything make sure to message <@ur account id>!");
            ;message.author.send(embed);
         break;
    }
});

bot.on('message', message => {
	if (message.content === `!rules`) {
        const embed = new discord.MessageEmbed()
        .setTitle("**Rules**")
        .setColor(0x000000)
    .addFields(
            { name: '‎', value: '- Use common sense, if something isnt specifically stated in the rules it does not mean you wont be punished for it.'},
            { name: '‎', value: '- Be kind and respectful to each other.'},
            { name: '‎', value: '- No self-promotion or advertising.'},
            { name: '‎', value: '- Put the right content into the right channel.'},
            { name: '‎', value: '- No useless user pings. Let staff do their job. No bad nicknames.'},
            { name: '‎', value: '- Dont misuse any of the bots.'},
            { name: '‎', value: '- Dont spam or copypasta.'},);  
		;message.author.send(embed);
    }
});

bot.on('message', message => {
    if (message.channel.name === 'your bot command channel name') {
        message.delete({ timeout:10000 });
      };
});

bot.on('guildMemberAdd', member =>{

    member.send(`Hello ${member}! Welcome to our Discord Server. Please read rules at <#rules channel channel id>. Use <#bot command channel id> for all commands.`);

});

bot.login(token);

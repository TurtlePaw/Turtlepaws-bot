const Discord = require("discord.js");
module.exports = {
 name: "specific-channel",
 aliases: ['specific-channels', 'sc'],
 description: "Learn how to send messages to specific channels!",
 async execute(message, Member, args) {
   message.channel.send(
       new Discord.MessageEmbed()
       .setColor('BLUE')
       .setDescription(`To get a specific channel to send a message to, you get it from a channels collection, either \`<client>.channels.cache\` or \`<guild>.channels.cache.\`  You can use \`.get()\` or \`.find()\` to get a single channel from one of the collections.
       \`\`\`
       //.get() with an id
       <client>.channels.cache.get('1234567890').send('Hello world.');
       
       //.find() with a function to find one by name, good for server-specific channels
       <guild>.channels.cache.find(ch => ch.name === 'general').send('Hello world.');
       \`\`\``)
   )
 },
};
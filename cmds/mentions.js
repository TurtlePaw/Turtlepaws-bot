const Discord = require("discord.js");
module.exports = {
 name: "mention",
 description: "Learn how to get mentions from messages!",
 async execute(message, Member, args) {
   message.channel.send(
       new Discord.MessageEmbed()
       .setTitle('Getting mentions from a message!')
       .setDescription(`
       \`\`\`
       const user = message.mentions.users.first();
       const member = message.mentions.members.first();
       const role = message.mentions.roles.first();
       const channel = message.mentions.channels.first();
       \`\`\`
       
       [Parsing mentions from content](https://discordjs.guide/miscellaneous/parsing-mention-arguments.html)`)
       .setColor(`BLUE`)
   )
 },
};
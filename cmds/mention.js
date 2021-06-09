const Discord = require("discord.js");
module.exports = {
 name: "mention-me",
 description: "Learn how to mention users in an embed",
 async execute(message, Member, args) {
   message.channel.send(
       new Discord.MessageEmbed()
       .setDescription(`${message.author}`)
       .addField(`Code`, '```.setDescription(`${message.author}`)```')
       .setColor(`BLUE`)
   )
 },
};
const Discord = require("discord.js");
module.exports = {
 name: "mention",
 description: "Returns latency and API ping",
 async execute(message, Member, args) {
   message.channel.send(
       new Discord.MessageEmbed()
       .setDescription(`${message.author}`)
       .addField(`Code`, '```.setDescription(`${message.author}`)```')
       .setColor(`BLUE`)
   )
 },
};
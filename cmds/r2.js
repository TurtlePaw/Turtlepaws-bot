const Discord = require("discord.js");
module.exports = {
 name: "r2",
 description: "Returns latency and API ping",
 async execute(message, Member, args) {
   message.channel.send(
       new Discord.MessageEmbed()
       .setTitle('2. We expect you to have a solid understanding of JavaScript')
       .setColor(`BLUE`)
   )
 },
};
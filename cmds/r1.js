const Discord = require("discord.js");
module.exports = {
 name: "r1",
 description: "Returns latency and API ping",
 async execute(message, Member, args) {
   message.channel.send(
       new Discord.MessageEmbed()
       .setTitle('1. No spamming, advertising, or NSFW content')
       .setColor(`BLUE`)
   )
 },
};
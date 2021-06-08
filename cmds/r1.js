const Discord = require("discord.js");
module.exports = {
 name: "r1",
 description: "Rule 1",
 async execute(message, Member, args) {
   message.channel.send(
       new Discord.MessageEmbed()
       .setTitle('1. No spamming, advertising, or NSFW content')
       .setColor(`BLUE`)
   )
 },
};
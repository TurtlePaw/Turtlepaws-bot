const Discord = require("discord.js");
module.exports = {
 name: "r2",
 description: "Rule 2",
 async execute(message, Member, args) {
   message.channel.send(
       new Discord.MessageEmbed()
       .setTitle('2. We expect you to have a solid understanding of JavaScript')
       .setColor(`BLUE`)
   )
 },
};
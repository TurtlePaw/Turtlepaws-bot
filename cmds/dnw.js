const Discord = require("discord.js");
module.exports = {
 name: "dnw",
 description: "-",
 async execute(message, Member, args) {
   message.channel.send(
       new Discord.MessageEmbed()
       .setColor('BLUE')
       .setDescription(`To help you we need more information:
   • What are you trying to do?
   • What is your code?
   • What errors and debug logs do you have?`)
   )
 },
};
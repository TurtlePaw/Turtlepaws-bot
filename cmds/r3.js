const Discord = require("discord.js");
module.exports = {
 name: "r3",
 description: "Returns latency and API ping",
 async execute(message, Member, args) {
   message.channel.send(
       new Discord.MessageEmbed()
       .setTitle(`3. When asking for help don't say "My bot does not work" or "How do i make slash commands" you must provide us with your code/error`)
       .setColor(`BLUE`)
   )
 },
};
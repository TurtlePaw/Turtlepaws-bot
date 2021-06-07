const Discord = require("discord.js");
module.exports = {
 name: "r4",
 description: "Returns latency and API ping",
 async execute(message, Member, args) {
   message.channel.send(
       new Discord.MessageEmbed()
       .setTitle('4. Do not mention or DM members just for help. You may not get a reply quickly, if at all. Post your question in the public channels where more people can see it.')
       .setColor(`BLUE`)
   )
 },
};
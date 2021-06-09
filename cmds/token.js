const Discord = require("discord.js");
module.exports = {
 name: "token",
 description: "Learn how to get your bots token!",
 async execute(message, Member, args) {
   message.channel.send(
       new Discord.MessageEmbed()
       .setDescription(`To get your bot token, visit [Discord Developers](https://discord.com/developers/applications/me)`)
       .setColor(`BLUE`)
       .setImage('https://goo.gl/EQ25Rb/')
   )
 },
};
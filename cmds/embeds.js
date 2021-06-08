const Discord = require("discord.js");
module.exports = {
 name: "embeds",
 description: "Learn how to create embeds!",
 async execute(message, Member, args) {
   message.channel.send(
       new Discord.MessageEmbed()
        .setTitle(`Embeds!`)
        .setURL('https://discordjs.guide/popular-topics/embeds.html')
       .setDescription(`[Building and sending embeds](https://discordjs.guide/popular-topics/embeds.html)`)
       .setColor(`BLUE`)
   )
 },
};
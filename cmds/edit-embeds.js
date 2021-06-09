const Discord = require("discord.js");
module.exports = {
 name: "edit-embeds",
 aliases: ['ee', 'edit-embed'],
 description: "-",
 async execute(message, Member, args) {
   message.channel.send(
       new Discord.MessageEmbed()
       .setColor('BLUE')
       .setTitle('Resending and editing received embeds')
       .setURL('https://discordjs.guide/popular-topics/embeds.html#resending-and-editing')
   )
 },
};
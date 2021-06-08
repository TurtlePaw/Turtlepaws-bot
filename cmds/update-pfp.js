const Discord = require("discord.js");
const config = require('../config.json')
module.exports = {
 name: "update",
 description: "Update me to turtlepaws avatar!",
 async execute(message, Member, args) {
     if(message.author.id === config.ownerID) {
    message.client.user.setAvatar(`${message.author.displayAvatarURL()}`);
   message.channel.send(
       new Discord.MessageEmbed()
       .setTitle(`Updated!`)
       .setDescription(`Updated to: [This](${message.author.displayAvatarURL()})`)
       .setThumbnail(message.author.displayAvatarURL())
       .setColor(`BLUE`)
   )
     }
 },
};
const Discord = require("discord.js");
module.exports = {
 name: "buttons",
 description: "Discord.js Buttons!",
 async execute(message, Member, args) {
   message.channel.send(
       new Discord.MessageEmbed()
       .setTitle(':sparkles: Buttons (aka: ClickyBois):')
       .setDescription(`Discord.js will support buttons in version 13.0.0!\n
       • Buttons have been merged into the development branch npm i discord.js@​​​​dev\n
       • A draft guide is available at https://deploy-preview-674--discordjs-guide.netlify.app/interactions/buttons.html`)
       .setImage(`https://i.imgur.com/MCEC3No.png`)
       .setColor(`BLUE`)
   )
 },
};
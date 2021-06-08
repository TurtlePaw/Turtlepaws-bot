const Discord = require("discord.js");
module.exports = {
 name: "/",
 description: "Learn about slash commands!",
 async execute(message, Member, args) {
   message.channel.send(
       new Discord.MessageEmbed()
       .setTitle('**/** Slashcommands')
       .setURL('https://deploy-preview-638--discordjs-guide.netlify.app/interactions/registering-slash-commands.html')
       .setDescription(`• will release with v13.0.0\n
       • available in the development branch  npm i discord.js@​dev\n
       (check [<#824410868505903114>](https://discord.gg/djs) pins :pushpin: )`)
       .setColor(`BLUE`)
   )
 },
};
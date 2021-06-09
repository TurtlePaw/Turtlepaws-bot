const Discord = require("discord.js");
module.exports = {
 name: "reset",
 description: "Learn how to reset your bots token!",
 async execute(message, Member, args) {
   message.channel.send(
       new Discord.MessageEmbed()
       .setTitle('Resetting your bots token')
       .setDescription(`Go to [Discord Developers](https://discord.com/developers/applications) and then click on the application that corresponds with your bot
       Click \`Bot\` on the left side 
       Click the \`Regenerate\` button and then \`Yes, do it!\` on the popup.`)
       .setColor(`BLUE`)
       .setImage('https://i.imgur.com/XtQsR9s.png')
   )
 },
};
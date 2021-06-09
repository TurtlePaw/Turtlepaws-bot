const Discord = require("discord.js");
module.exports = {
 name: "missing-access",
 aliases: ['ma'],
 description: "-",
 async execute(message, Member, args) {
   message.channel.send(
       new Discord.MessageEmbed()
       .setColor('BLUE')
       .setTitle('\`DiscordAPIError: Missing Access\`')
       .setURL('https://discordjs.guide/popular-topics/permissions-extended.html#implicit-permissions')
       .setDescription(`\`DiscordAPIError: Missing Access\`? [We got you covered](https://discordjs.guide/popular-topics/permissions-extended.html#implicit-permissions)`)
   )
 },
};
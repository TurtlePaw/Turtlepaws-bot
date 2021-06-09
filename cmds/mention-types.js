const Discord = require("discord.js");
module.exports = {
 name: "mention-type",
 aliases: ['mention-types', 'mt'],
 description: "Learn the mention types!",
 async execute(message, Member, args) {
   message.channel.send(
       new Discord.MessageEmbed()
       .setDescription(`User: \`@​user\` => \`<@​user_id>\`
       User with nickname: \`@​user\` => \`<@​!user_id>\`
       Role: \`@​role\` => \`<@​&role_id>\`
       Channel: \`#channel\` => \`<#channel_id>\`
       Emoji: \`:emoji:\` => \`<:emoji_name:emoji_id>\`
       Animated Emoji: \`:emoji:\` => \`<a:emoji_name:emoji_id>\``)
       .setColor(`BLUE`)
   )
 },
};
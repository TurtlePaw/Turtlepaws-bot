const Discord = require("discord.js");
module.exports = {
 name: "hyperlink",
 description: "Learn how to use Hyper Links",
 async execute(message, Member, args) {
   message.channel.send(
       new Discord.MessageEmbed()
       .setDescription(`You can use the standard markdown syntax to display clickable links in embeds without showing the url:
       \`\`\`
       "[text](url)"
       '[text](url "optional hovertext")'
       "[text](url 'optional hovertext')"
       \`\`\`
       This only works in the embed description and field values. Webhooks can also use masked links in message content.`)
       .setColor(`BLUE`)
   )
 },
};
const Discord = require("discord.js");
module.exports = {
 name: "rules",
 description: "Returns latency and API ping",
 async execute(message, Member, args) {
   message.channel.send(
       new Discord.MessageEmbed()
       .setTitle(`Rules 📚`)
       .addField('1.', 'No spamming, advertising, or NSFW content')
       .addField('2.', 'We expect you to have a solid understanding of JavaScript')
       .addField('3.', `When asking for help don't say "My bot does not work" or "How do i make slash commands" you must provide us with your code/error`)
       .addField('4.', 'Do not mention or DM members just for help. You may not get a reply quickly, if at all. Post your question in the public channels where more people can see it.')
       .setColor(`BLUE`)
       .setThumbnail(message.guild.iconURL({ size: 4096, format: 'png'}))
   )
 },
};
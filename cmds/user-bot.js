const Discord = require("discord.js");
module.exports = {
 name: "user-bot",
 description: "Are you a bot?",
 async execute(message, Member, args) {
    if (message.author.bot){
        message.channel.send(
            new Discord.MessageEmbed()
            .setDescription(`You are a bot!`)
            .addField(`Code:`, '```if (message.author.bot)```')
            .setColor(`BLUE`)
        )
    } else {
   message.channel.send(
       new Discord.MessageEmbed()
       .setDescription(`You are not a bot!`)
       .addField(`Code:`, '```if (message.author.bot)```')
       .setColor(`BLUE`)
   )
}
 },
};
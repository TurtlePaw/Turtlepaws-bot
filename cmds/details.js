const Discord = require("discord.js");
module.exports = {
 name: "details",
 description: "-",
 async execute(message, Member, args) {
     const bchannel = '<#851287858639405057>'
   message.channel.send(
       new Discord.MessageEmbed()
       .setColor('BLUE')
       .setDescription(`In order to better help you, we need more details on your problem. Ideally, you need to provide the following:
   • What are you trying to do? Describe in English what you're trying to accomplish.
   • What is your code? Give us a sample of your code, in codeblocks (do \`?codeblocks\` in ${bchannel} to learn how). Show all relevant code for the command or event that you're having a problem with.
   • What behaviour are you expecting? Tell us exactly what you want to happen.
   • What behaviour are you getting? Tell us exactly what's not working. Is is an error? Show us the error log. Is it the wrong output? Show us the output you get versus the one you expected.`)
   )
 },
};
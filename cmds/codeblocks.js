const Discord = require("discord.js");
module.exports = {
 name: "codeblocks",
 description: "Learn how to use codeblocks!",
 async execute(message, Member, args) {
     const bchannel = '<#851287858639405057>'
   message.channel.send(
       new Discord.MessageEmbed()
       .setTitle('Codeblocks:')
       .setColor('BLUE')
       .setDescription(`
        \`\`\`js
        const Discord = require(\"discord.js\"); 
        // further code
        \`\`\`
        
        Inline Codeblocks:
        \`console.log('inline!');\``)
   )
 },
};
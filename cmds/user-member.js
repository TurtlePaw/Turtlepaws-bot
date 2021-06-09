const Discord = require("discord.js");
module.exports = {
 name: "user-member",
 description: "??",
 async execute(message, Member, args) {
   message.channel.send(
       new Discord.MessageEmbed()
       .setDescription(`**User:** refers to a global discord user (avatar, username, tag)
       **GuildMember:** user data associated with a specific guild (guild, nickname, roles, voice, etc.)
       **User** -> **GuildMember:** \`<Guild>.members.fetch(<User>)\` 
       **GuildMember** -> **User:** \`<GuildMember>.user\``)
       .setColor(`BLUE`)
   )
 },
};
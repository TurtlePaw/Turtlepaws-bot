const Discord = require("discord.js");
const messagess = require('../models/thanks')
module.exports = {
 name: "thanks",
 description: "See a users thanks",
 async execute(message, Member, args) {
     const thankuser = message.mentions.users.first() ?? message.author

     let messageUser = await messagess.findOne({
        user: thankuser.id
    });

     const thankembed = new Discord.MessageEmbed()
     .setDescription(`${thankuser} has ${messageUser?.thanks ?? '0'} thanks`)
     .setColor(`BLUE`)
   message.channel.send(thankembed)
 },
};
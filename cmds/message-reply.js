const Discord = require("discord.js");
module.exports = {
 name: "message-reply",
 description: "Get a reply from me!",
 async execute(message, Member, args) {
   message.reply(`Here's a reply!`)
 },
};
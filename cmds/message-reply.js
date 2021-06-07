const Discord = require("discord.js");
module.exports = {
 name: "message-reply",
 description: "Returns latency and API ping",
 async execute(message, Member, args) {
   message.reply(`Here's a reply!`)
 },
};
const Discord = require("discord.js");
const messagess = require('../models/thanks')
module.exports = {
 name: "thank",
 description: "Thank a user for helping you!",
 async execute(message, Member, args) {
     const thankuser = message.mentions.users.first();
     if(!thankuser){
        return message.reply(
           new Discord.MessageEmbed()
           .setTitle(`You can't thank no one!`)
           .setColor(`RED`)
        )
    }
     if(thankuser.id === message.author.id){
         return message.reply(
             new Discord.MessageEmbed()
             .setTitle(`You can't thank yourself!`)
             .setColor(`RED`)
         )
     }

     let messageUser = await messagess.findOne({
        user: thankuser.id
    });

    if (!messageUser) {
        messageUser = new messagess({
            user: thankuser.id,
            thanks: 0
        });
        await messageUser.save().catch(e => console.log(e));
    };

    await messagess.findOne({
        user: thankuser.id
    }, async (err, dUser) => {
        if (err) console.log(err);
        dUser.thanks += 1;
        await dUser.save().catch(e => console.log(e));
    });

    let newthanks = await messagess.findOne({
        user: thankuser.id
    });

     const thankembed = new Discord.MessageEmbed()
     .setTitle(`${message.author.username} Thanked ${thankuser.username}`)
     .setDescription(`${thankuser} Now has ${newthanks.thanks} thanks`)
     .setColor(`BLUE`)
   message.channel.send(thankembed)
 },
};
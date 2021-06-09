const Discord = require("discord.js");
module.exports = {
    name: "kick",
    description: "Kick a user!",
    async execute(message, Member, args) {
        const banmember = message.mentions.members.first();
        if (!message.member.permissions.has('BAN_MEMBERS')) {
            message.reply(
                new Discord.MessageEmbed()
                .setTitle(`You don't have permissions!`)
                .setColor('RED')
            )
        }
        if (message.member.permissions.has('KICK_MEMBERS')) {
            if (banmember) {
                const m = await message.channel.send(
                    new Discord.MessageEmbed()
                        .setAuthor(banmember.user.tag, banmember.user.displayAvatarURL())
                        .setTitle(`Kick ${banmember.user.tag}?`)
                        .setColor('RED')
                );
                m.react(`✅`)
                m.react(`❎`)
                message.client.on('messageReactionAdd', async (reaction, user) => {
                    if (user.id !== message.author.id) {
                        return
                    }
                    if (reaction.message.id !== m.id) {
                        return
                    }
                    if (user.bot) {
                        return
                    }
                    if (reaction.emoji.name === '✅') {
                        banmember.kick();
                    }
                    if (reaction.emoji.name === '✅') {
                        //m.edit('\u200B')
                        m.edit(
                            new Discord.MessageEmbed()
                                .setAuthor(banmember.user.tag, banmember.user.displayAvatarURL())
                                .setTitle(`Successfully kicked ${banmember.user.tag}!`)
                                .setColor('GREEN')
                        );
                    }
                    if (reaction.emoji.name === '❎') {
                        m.delete();
                    }
                });
            } if (args[0] && !banmember) {
                let banid = args[0];
                const banm = await message.guild.members.fetch(banid)
                if (!banm) {
                    return message.reply(
                        new Discord.MessageEmbed()
                            .setTitle(`Could not find \`${banid}\``)
                    )
                }
                const m = await message.channel.send(
                    new Discord.MessageEmbed()
                        .setAuthor(banm.user.tag, banm.user.displayAvatarURL())
                        .setTitle(`Kick ${banm.user.tag}?`)
                        .setColor('RED')
                );
                m.react(`✅`)
                m.react(`❎`)
                message.client.on('messageReactionAdd', async (reaction, user) => {
                    if (user.id !== message.author.id) {
                        return
                    }
                    if (reaction.message.id !== m.id) {
                        return
                    }
                    if (user.bot) {
                        return
                    }
                    if (reaction.emoji.name === '✅') {
                        banm.kick();
                    }
                    if (reaction.emoji.name === '✅') {
                        //m.edit('\u200B')
                        m.edit(
                            new Discord.MessageEmbed()
                                .setAuthor(banm.user.tag, banm.user.displayAvatarURL())
                                .setTitle(`Successfully kicked ${banm.user.tag}!`)
                                .setColor('GREEN')
                        );
                    }
                    if (reaction.emoji.name === '❎') {
                        m.delete();
                    }
                });
            }
        }
    },
};
const Discord = require("discord.js");
var pm2 = require('pm2');



module.exports = {
    name: "pm2",
    description: "Discord.js Buttons!",
    async execute(message, Member, args) {
        let description = '';
        pm2.connect(true, function (err) {
            if (err) {
                console.error(err);
            }
            else {

                pm2.list((err, list) => {
                    console.log(err, list)
                    description += `Errors: ${err ?? 'None'}\n`;
                    list.forEach(process => {
                        description += `Process: ${process.name} - Status: ${process.pm2_env?.status ?? "What?"}\n`;
                    });
                    message.channel.send(
                        new Discord.MessageEmbed()
                            .setDescription(`Status of pm2 processes:\n${description}`)
                    );        
                });
            }
        }, function (err, apps) {
            pm2.disconnect();   // Disconnects from PM2
            if (err) throw err
        });
    },
};
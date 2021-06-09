const Discord = require("discord.js");
const npm = require('npm-searcher')

module.exports = {
 name: "npm",
 description: "See info about a npm package!",
 async execute(message, Member, args) {
     let search = args.join(' ')
    const res = await npm.search(search)
    console.log(res) // All information related to the express package
    console.log(res.name) // express
    const main = res.maintainers.map(n => n.name)
    message.channel.send(
        new Discord.MessageEmbed()
        .setAuthor('NPM', 'https://cdn.tixte.com/uploads/turtle.discowd.com/kpoupz0hz9a.png', 'https://npmjs.com')
        .setTitle(`${res.name}`)
        .setURL(`https://www.npmjs.com/package/${res._id}`)
        .setDescription(`${res.description}`)
        .addField('❯ License', `${res.license}`)
        .addField('❯ Author', `${res.author.name}`)
        .addField('❯ Maintainers', `${main}`)
    )
 },
};
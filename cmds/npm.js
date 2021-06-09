/*const Discord = require("discord.js");
const npm = require('npm-searcher')

module.exports = {
 name: "npm",
 description: "See info about a npm package!",
 async execute(message, Member, args) {
     let search = args.join(' ')
    const res = await npm.search(search)
    console.log(res) // All information related to the express package
    console.log(res.name) // express
    message.channel.send(
        new Discord.MessageEmbed()
        .setAuthor('NPM', 'https://npmjs.com', 'https://images-ext-2.discordapp.net/external/3Cuh51nny9guvBRgO7FlskPbsaBIoZRbm4toUA9ba7U/https/i.imgur.com/ErKf5Y0.png')
        .setTitle(`${res.name}`)
        .setURL(`https://www.npmjs.com/package/${res._id}`)
        .setDescription(`${res.description}`)
        .addField('❯ Version', `?`)/*❯ Version
        12.5.3
        ❯ License
        Apache-2.0
        ❯ Author
        Amish Shah
        ❯ Creation Date
        2015/08/10 14:15:29
        ❯ Modification Date
        2021/06/07 12:14:57
        ❯ Main File
        ./src/index
        ❯ Dependencies
        @discordjs/collection, @discordjs/form-data, abort-controller, node-fetch, prism-media, setimmediate, tweetnacl, ws
        ❯ Maintainers
        hydrabolt, crawl, lewdcario, spaceeec
    )
 },
};
*/
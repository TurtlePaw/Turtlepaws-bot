const Discord = require("discord.js");
const fetch = require('node-fetch')

async function fetchDocs(term) {
	const q = encodeURIComponent(term.toString());

	const res = await fetch(`https://djsdocs.sorta.moe/v1/main/stable/embed?q=${q}`);
	const embed = await res.json();

	return embed; 
};

module.exports = {
    name: 'docs',
    description: 'Use the Discord.js docs',
    async execute(client, interaction) {
        fetchDocs(`${interaction.options[0].value}`).then(async (docr) => {
                const docs = new Discord.MessageEmbed()
                .setAuthor(`Discord.js Docs (stable)`, 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org/#/docs/main/stable')
                .setTitle(`Search results:`)
                .setDescription(docr.description)
                .setColor('BLUE')
                await interaction.reply(docs); 
        }
        )
            .catch(console.error);
    }
}
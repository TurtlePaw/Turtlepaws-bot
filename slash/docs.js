const Discord = require("discord.js");
const fetch = require('node-fetch')

module.exports = {
    name: 'docs',
    description: 'Use the Discord.js docs',
    async execute(client, interaction) {
        async function fetchDocs(term) {
            const q = encodeURIComponent(term.toString());
            const source = interaction.options?.find(c => c?.name === 'source')?.value ?? 'stable'
            const res = await fetch(`https://djsdocs.sorta.moe/v1/main/${source}/embed?q=${q}`);
            const embed = await res.json();
        
            return embed; 
        };
        const search = interaction.options?.find(c => c?.name === 'query').value
        fetchDocs(`${search}`).then(async (docr) => {
                const docs = new Discord.MessageEmbed()
                .setAuthor(`${docr.author?.name}`, `${docr.author?.icon_url}`, `${docr.author?.url}`)
                .setTitle(`Search results:`)
                .setDescription(docr.description)
                .setColor('BLUE')
                await interaction.reply(docs);
                const userr = interaction.options?.find(c => c?.name === 'target').user;
                if(interaction.options?.find(c => c?.name === 'target')){
                await interaction.followUp(`${userr}`).then(async (msg) => {
                setTimeout(async () => {
                    await msg.delete()
                }, 1000);
                }
                )
                }
        }
        )
            .catch(console.error);
    }
}
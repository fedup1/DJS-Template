const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: 'invite',
    description: 'get a invite link',
    run: async (interaction, client) => {
        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(client.user.username)
            .setDescription(`Invite a bot`)
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`)
                    .setLabel('Click')
                    .setStyle("LINK")
                    .setEmoji('✉️')
            )
    interaction.reply(
        { 
        embeds: [embed],
        components: [row], 
        ephemeral: true
        })
    }
    
}

/* Code by FEDUP1#9020 | https://github.com/fedup1/DJS-Template */

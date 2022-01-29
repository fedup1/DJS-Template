const { Message, Client, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "invite",
    aliases: ['botlink'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setTitle(client.user.username)
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .setColor("RANDOM")
            .setDescription(`Invite a bot`)
        
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`)
                    .setLabel('Click')
                    .setStyle("LINK")
                    .setEmoji('✉️')
            )
    message.reply(
        { 
        embeds: [embed],
        components: [row], 
        ephemeral: true
        })
    },
};

/* Code by FEDUP1#9020 | https://github.com/fedup1/DJS-Template */

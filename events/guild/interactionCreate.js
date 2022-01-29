const { MessageEmbed } = require('discord.js');
const { OWNER_ID } = require ('../../config.json');
const humanizeDuration = require("humanize-duration");

module.exports = async(client, interaction) => {
    if (interaction.isCommand()) {
        if (!client.slash.has(interaction.commandName)) return;
        if (!interaction.guild) return;
        const command = client.slash.get(interaction.commandName);

        try {
            if (command.permission) {
                if (!interaction.member.permissions.has(command.userPerms)) {
                    const embed = new MessageEmbed()
                        .setTitle('Access denied!')
                        .setColor("BLUE")
                        .setDescription(`this order because ${command.permission} only!`)
                        .setFooter(interaction.user.tag, interaction.user.displayAvatarURL())

                    return interaction.reply({ embeds: [embed],  ephemeral: true  })
                }
            }

            if (command.owner) {
                if (interaction.user.id !== OWNER_ID) {
                    const embed = new MessageEmbed()
                        .setTitle('Access denied!')
                        .setColor("BLUE")
                        .setDescription("You do not have permission to access this command!")
                        .setFooter(interaction.user.tag, interaction.user.displayAvatarURL())
    
                    return interaction.reply({ embeds: [embed],  ephemeral: true  })
                }
            }

            command.run(interaction, client);
                Timeout.add(`${interaction.user.id}${command.name}`)
			setTimeout(() => {
				Timeout.delete(`${interaction.user.id}${command.name}`)
			}, command.timeout);
        } catch (e) {
            console.log(e);
            await interaction.reply({ content: ":x: have some problems!", ephemeral: true })
        } 
    }
}

/* Code by FEDUP1#9020 | https://github.com/fedup1/DJS-Template */

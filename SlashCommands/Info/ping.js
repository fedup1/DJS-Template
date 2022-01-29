module.exports = {
    name: 'ping',
    description: 'See bot ping',
    run: async (interaction, client) => {
        interaction.reply(`${client.ws.ping} ws ping`);
    }
}

/* Code by FEDUP1#9020 | https://github.com/fedup1/DJS-Template */

const { PREFIX } = require ('../../config.json');

module.exports = (client, message) => {
    if (
        message.author.bot ||
        !message.guild ||
        !message.content.toLowerCase().startsWith(PREFIX)
    )
        return;

    const [cmd, ...args] = message.content
        .slice(PREFIX.length)
        .trim()
        .split(/ +/g);

    const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));

    if (!command) return;
    command.run(client, message, args);
};

/* Code by FEDUP1#9020 | https://github.com/fedup1/DJS-Template */

const { readdirSync } = require('fs');

module.exports = async (client) => {
    readdirSync("./SlashCommands/").map(async dir => {
        const commands = readdirSync(`./SlashCommands/${dir}/`).map(async (cmd) => {
            const pull = require(`../SlashCommands/${dir}/${cmd}`)
            client.slash.set(pull.name, pull);
            if (pull.aliases) {
                pull.aliases.map(x => client.slash.set(x, pull));
            }
        });
    })
}

/* Code by FEDUP1#9020 | https://github.com/fedup1/DJS-Template */

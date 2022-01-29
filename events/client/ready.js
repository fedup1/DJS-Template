const { PREFIX } = require("../../config.json");

module.exports = async (client) => {
    console.log(`[SYSTEM] Logged in as ${client.user.tag}`)
    client.user.setActivity(`${PREFIX}help | ${client.guilds.cache.size} Server`)
}

/* Code by FEDUP1#9020 | https://github.com/fedup1/DJS-Template */

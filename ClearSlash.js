const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { CLIENT_ID, GUILD_ID, TOKEN } = require("./config.json");

const commands = [];

const rest = new REST({ version: "9" }).setToken(TOKEN);

(async () => {
    try {
        console.log("[SYSTEM] Started Clearing Slash commands...");
        await rest.put(
        Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
        // Routes.applicationCommands(CLIENT_ID),
            { body: commands },
        );
        console.log("[SYSTEM] Successfully Clearing Slash commands!");
    } catch (error) {
        console.log(error);
    }
})();

/* Code by FEDUP1#9020 | https://github.com/fedup1/DJS-Template */

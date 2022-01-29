const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { readdirSync } = require("fs");
const path = require("path");
const { CLIENT_ID, GUILD_ID, TOKEN } = require("./config.json");

const commands = [];
readdirSync("./SlashCommands/").map(async dir => {
    readdirSync(`./SlashCommands/${dir}`).map(async (cmd) => {
        commands.push(require(path.join(__dirname, `./SlashCommands/${dir}/${cmd}`)));
    })
})

const rest = new REST({ version: "9" }).setToken(TOKEN);

(async () => {
	try {
		console.log("[SYSTEM] Started reloaded Slash commands...");
		await rest.put(
			Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
			// Routes.applicationCommands(CLIENT_ID),
			{ body: commands },
		);

		console.log("[SYSTEM] Successfully reloaded Slash commands!");
	} catch (error) {
		console.error(error);
  }

})();

/* Code by FEDUP1#9020 | https://github.com/fedup1/DJS-Template */

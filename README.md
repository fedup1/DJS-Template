## NEED USE WITH PREFIX?

[v1.0.0](https://github.com/fedup1/DJS-Template/) go download `Source code (zip)`

## Requirements

Node.js V16+ **[Download](https://nodejs.org/dist/v17.0.1/node-v17.0.1-x64.msi)**

Discord Bot Token **[Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**

## Installation

```
git clone https://github.com/fedup1/DJS-Template.git
cd DJS-Template
npm install
```
 1.After installation finishes you can use `npm run start` or `node index.js` to start the bot.
 
 2.After you run the bot you can use `npm run load` or `node LoadSlash.js` to register slashcommand. (on use global (/) not have? please kick bot and invite again!) 
 
 3.You want clearing slashcommand you can use `npm run clear` or `node ClearSlash.js` to clearing slashcommand. (same header)

## Configuration

Enter a value in `config.json`

```json
{
    "PREFIX": "!",
    "TOKEN": "BOT_TOKEN",
    "CLIENT_ID": "BOT_CLIENT",
    "GUILD_ID": "GUILD_ID",
    "OWNER_ID": "OWNER_ID"
}
```


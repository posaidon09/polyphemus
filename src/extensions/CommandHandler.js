const fs = require("node:fs");
const path = require("node:path");

class Extension {

    constructor() {
        this.name = "CommandHandler";
        this.description = "Handle commands running from the client.";
        this.version = { major: 1, minor: 0, patch: 0 };

        this.commands = new Map();
        this.aliases = new Map();

        const files = fs.readdirSync("./src/commands", { withFileTypes: true }).filter(file => file.name.endsWith(".js") && file.isFile());

        for (const file of files) {
            const Command = require(path.join("../commands/", file.name));
            const command = new Command();

            if (!command.name) continue;
            if (this.commands.has(command.name)) throw new Error(`Syntax Error: Command name already in use: ${command.name} - ${file.name}`);
            this.commands.set(command.name, command);

            if (!command.aliases) continue;
            for (const alias of command.aliases) {
                if (this.aliases.has(alias)) throw new Error(`Syntax Error: Command alias already in use: ${alias} - ${file.name}`);
                this.aliases.set(alias, command);
            }
        }
    }

    ready(client) {
        client.on("messageCreate", async message => {
            if (!message.guild) return;
            if (message.author.bot) return;
    
            const serverData = client.params.get("Storage")[0];
            const box = serverData.box("prefix");
    
            const prefix = box.has(message.guild.id) ? box.get(message.guild.id) : "!";
    
            if (!message.content.startsWith(prefix)) return;
    
            const args = message.content.slice(prefix.length).split(" ");
            const command = args.shift().toLowerCase();
    
            if (!this.commands.has(command) && !this.aliases.has(command)) return;
    
            const c = this.commands.get(command) ?? this.aliases.get(command);
            await c.run({ message, prefix, client, commands: this.commands, aliases: this.aliases, args, command });
        })
    }

}


module.exports = Extension;
const Discord = require("discord.js");
const fs = require("node:fs");
const path = require("node:path");

class Client extends Discord.Client {

    constructor(options={ prefix: "!", intents: ["MessageContent", "Guilds", "GuildMessages", "GuildMembers"] }) {
        super({ intents: options.intents });

        this.extensions = new Map();
        this.params = new Map();

        // Loading Extensions
        const files = fs.readdirSync("./src/extensions/", { withFileTypes: true }).filter(file => file.name.endsWith(".js") && file.isFile());
        for (const file of files) {
            const Extension = require(path.join("../extensions/", file.name));
            const extension = new Extension();

            // Events
            if (extension.export) {
                this.params.set(extension.name, extension.export());
            }
            
            extension.ready(this);

            // Committing
            this.extensions.set(extension.name, extension);
        }

        // Debug
        this.on("ready", () => console.log("Ready!"));
    }

}

module.exports.Client = Client;
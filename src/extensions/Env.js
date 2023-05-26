const fs = require("node:fs");
const path = require("node:path");

class Extension {

    constructor() {
        this.name = "Env";
        this.description = "Load the .env file to process.env";
        this.version = { major: 1, minor: 0, patch: 0 };

        const file = fs.readFileSync(path.join(process.cwd(), ".env"), "utf-8");
        const rows = file.split("\n");

        for (const row of rows) {
            if (!row.length) continue;
            if (row.startsWith("#")) continue;

            const [key, value] = row.split("=");

            process.env[key] = value;
        }
    }

    ready(client) {
        client.login(process.env.TOKEN);
    }

}

module.exports = Extension;
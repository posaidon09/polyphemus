const Salvis = require("salvis");

global.storage = new Salvis("PlayerData", { path: "./src/PlayerData" });
   global.toggles = storage.box("search", false)
global.Sdata = new Salvis("ServerData", { path: "./src/ServerData" });
Sdata.box("prefix", ".");
global.Prefix = Sdata.box("prefix", ".")
class Extension {

    constructor() {
        this.name = "Storage";
        this.description = "Handle storage (saving/loading) data.";
        this.version = { major: 1, minor: 0, patch: 0 };
    }

    export() {
        return [Sdata, storage];
    }

    ready(client) {
        client.on("messageCreate", async message => {
           
           
        })
    }

}

module.exports = Extension;
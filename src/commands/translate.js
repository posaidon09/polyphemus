module.exports = class TranslateCommand {

	constructor() {
		this.name = "translate";
		this.description = "Translates sentences across different languages";
		this.category = "Utility";
		this.args = ["[sentence]"]
	};

	async run({ message, commands, args }) {
	  const { GoogleTranslator } = require("@translate-tools/core/translators/GoogleTranslator")

const translator = new GoogleTranslator();
const tra = args.join(" ")

message.reply("which language would you like to translate that to?\n*note: you have to only type the first 2 letters. ex: japanese = ja*")
	    
const filter = (msg) => msg.author.id == message.author.id

	    
const collector = message.channel.createMessageCollector({ filter: filter, time: 60 * 1000  });
        
collector.on("collect", async (msg) => {
    
     const lang = msg.content
     
     translator.translate(tra, "auto", lang).then((translate) => message.reply(translate));
     
    collector.stop()
    
})
}
	}

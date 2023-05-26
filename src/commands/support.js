const Discord = require("discord.js")
module.exports = class SuggestCommand {

	constructor() {
		this.name = "support";
		this.description = "Sends you an invite to my support server";
		this.category = "Information";
	};

	async run({ message, commands, args }) {
	    
	    const embed = new Discord.EmbedBuilder()
	    .setTitle("Support server!")
	    .setURL("https://discord.gg/CHJMvd8N9G")
	    .setColor("#00A4FF")
	    message.reply({ embeds: [embed] })
	}
}
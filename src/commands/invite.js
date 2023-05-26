const Discord = require("discord.js")
module.exports = class InviteCommand {

	constructor() {
		this.name = "invite";
		this.description = "Sends you the link to invite me to your server";
		this.category = "Information";
	};

	async run({ message, commands, args }) {
	    const embed = new Discord.EmbedBuilder()
	    .setTitle("Invite me!")
	    .setURL("https://discord.com/oauth2/authorize?client_id=1050122102084227133&permissions=8&scope=bot")
	    .setColor("#00A4FF")
	    
	    message.reply({ embeds: [embed] })
	    
	}
}
const Discord = require("discord.js")

class AvatarCommand {
	constructor() {
		this.name = "pfp";
		this.description = "Shows you the target's pfp";
		this.category = "Utility";
		this.args = ["(@target)"]
		this.aliases = ["avatar", "av"]
	};

	async run({ message, commands, args }) {
	    
	    const mentioned = message.mentions.members.first() ?? message.member
	    const embed = new Discord.EmbedBuilder()
	    .setTitle(`${mentioned.displayName}'s Avatar`)
	    .setImage(mentioned.displayAvatarURL({ size: 4096, format: "png" }))
	    .setColor("#AE3096")
	    
	    message.channel.send({ embeds: [embed] })
	    
	}
    
}
	module.exports = AvatarCommand
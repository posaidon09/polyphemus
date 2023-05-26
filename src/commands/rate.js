const Discord = require("discord.js")
module.exports = class RateCommand {

	constructor() {
		this.name = "rate";
		this.description = "Allows you to rate users";
		this.category = "Fun";
		this.args = ["[@target]"]
	};

	async run({ message, commands, args, mentioned }) {
	    const rating = message.mentions.members.first()
	    const perc = Math.floor(Math.random() * 101)
	    
	    if (message.content.includes("@")) {
	        const rate = new Discord.EmbedBuilder
	        rate.setTitle(`user rating`)
	        rate.setColor("#7300C8")
	        rate.setDescription(`${rating.displayName} is ${perc}/100`)
	        message.reply({ embeds: [rate] })
	    }
	  else if (!message.content.includes("@"))  {
	      const rate2 = new Discord.EmbedBuilder
	        rate2.setTitle(`${message.member.displayName} rating`)
	        rate2.setColor("#7300C8")
	        rate2.setDescription(`${message.member.displayName} is ${perc}/100`)
	        message.reply({ embeds: [rate2]} )
	  }
	}
}
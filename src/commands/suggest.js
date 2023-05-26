const Discord = require("discord.js")
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events } = require('discord.js');
module.exports = class SuggestCommand {

	constructor() {
		this.name = "suggest";
		this.description = "Allows you to send suggestions to improve the server";
		this.category = "Suggestion";
	};

	async run({ message, commands, args }) {
	    
	    const suggestion = args.join(" ")
	    
	    const attachment = message.attachments.first()
	    
	var embed = new Discord.EmbedBuilder()
	    .setTitle(`suggestion from ${message.member.displayName}`)
	    .setColor("#9200FF")
	    .setImage(attachment?.url)
	    .setFooter({ text: `${message.author.tag}`, iconURL: message.member.displayAvatarURL() })
	    
	    if (!args.length) {
	        message.reply("empty suggestion")
	    } 
	    else {
	        global.logchannel2 = storage.box("suggestchannel") 
	    embed.setDescription(suggestion)
    let chaenele = logchannel2.get(message.guild.id)
    let id = chaenele.match(/<?@?!?(\d{17,19})>?/)[1]
    let channele = client.channels.cache.get(id)
    
    
    
    if (logchannel2.has(message.guild.id)) {
        try {
    channele.send({ embeds: [embed] }).then((msg) => {
	    msg.react("✅")
	    msg.react("❌")
	 })
        } catch {
            message.reply("fuck you")
        }
    } else return 
	    }
	   
	   
	    
  
	}
}



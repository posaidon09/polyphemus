const Discord = require("discord.js")
module.exports = class SuggestCommand {

	constructor() {
		this.name = "ping";
		this.description = "Shows you the bot's latency";
		this.category = "Information";
	};

	async run({ message, commands, args }) {
	    
	   
        const initialPing = new Discord.EmbedBuilder()
            .setTitle("pinging...");
        message.channel.send({ embeds: [initialPing] }).then(async (msg) => {
            await msg.delete();
            const pingEmbed = new Discord.EmbedBuilder()
                .setTitle("Pong!")
                .addFields(
                    { name: "API Latency", value: `${msg.client.ws.ping}ms`, inline: true },
                    { name: "Response Time", value: `${msg.createdTimestamp - message.createdTimestamp}ms`, inline: true }
                )
                .setColor("#80FF00")
                .setFooter({
                    text: `${message.author.tag}`,
                    iconURL: `${message.author.displayAvatarURL({ dynamic: true })}`
                });
            msg.channel.send({ embeds: [pingEmbed] });
        });
    }
}
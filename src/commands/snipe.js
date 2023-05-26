const { EmbedBuilder } = require("discord.js")
module.exports = class SnipeCommand {

	constructor() {
		this.name = "snipe";
		this.description = "Shows you the last message that was deleted in a channel";
		this.category = "Utility";
	};

	async run({ message, commands, args }) {
	 let snipe = storage.box("snipe")
	 let snipeMsg = storage.box("snipeMsg", [])
	 if (!snipeMsg.has(message.channel.id)) {
	  await message.reply("there are no messages to snipe")
	 } else {
	 let sniped = snipe.get(message.channel.id)
	 let snipedMsg = snipeMsg.get(message.channel.id)
	 let snipeEmbed = new EmbedBuilder()
	 .setTitle(`Message sniped in #${snipe[0]} from ${snipe[1]}`)
	 .setDescription(snipeMsg[0])
	 .setColor("#FF0041")
	await message.channel.send({ embeds: [snipeEmbed] })
	 }
	 
	 
	 
	 
 client.on("messageDelete", async message => {
     if (snipeMsg.has(message.channel.id)) {
	    let SnpMsg = snipeMsg.get(message.channel.id)
     } else {
         snipeMsg.setup(message.channel.id)
     
	    await snipe.set(message.channel.id, [message.channel.name, message.author.tag])
	    await snipeMsg.set(message.channel.id, await SnpMsg.push(message.content))
     }
	 })
	 
	 
	 
	}
}
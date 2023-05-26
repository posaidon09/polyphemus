module.exports = class ClearCommand {

	constructor() {
		this.name = "clear";
		this.description = "Wipes the amount of messages that you select";
		this.category = "Moderation";
		this.args = ["[number of messages]"]
	};

	async run({ message, commands, args }) {
	    const deleteCount = parseInt(args[0], 10);
if (message.author.id === "691321562179305492" || message.author.id === "936638216604385320") {
if (!deleteCount || deleteCount < 1 || deleteCount > 100) {
    message.reply("the amount of messages must be between 1 and 100")
}

     else {
        await message.channel.bulkDelete(deleteCount + 1)
         message.channel.send(`deleted ${deleteCount} messages`)
     }
}
else {
    message.reply("no")
}
	}
}
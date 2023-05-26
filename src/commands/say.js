module.exports = class SayCommand {

	constructor() {
		this.name = "say";
		this.description = "Allows you to send messages through the bot";
		this.category = "Utility";
		this.args = ["[message]"]
	};

	async run({ message, commands, args }) {
	    const say = args.join(" ")
	    
	    if (!args.length) {
	        message.reply("you didn't provide a message")
	    }
	    else {
	        message.delete()
	        message.channel.send(say)
	    }
	}
}
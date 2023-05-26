module.exports = class CoinCommand {

	constructor() {
		this.name = "coinflip";
		this.description = "Flips a coin";
		this.category = "Fun";
		this.aliases = ["cf"]
	};

	async run({ message, commands, args }) {
	    const coin = Math.floor(Math.random() * 2)
	    if (coin == 0) {
	    message.channel.send("heads")
	    } else if (coin == 1) {
	        message.channel.send("tails")
	    }
	}
}
class UnCloakCommand {
	constructor() {
		this.name = "uncloak";
		this.description = "Clears your cloak";
		this.category = "Utility";
		
		this.aliases = ["undisguise"]
	};

	async run({ message, commands, args }) {
	    const cloak = storage.box("webhook")
	    
	        if (cloak.has(message.author.id)) {
	    message.channel.send("successfully uncloaked")
	    cloak.delete(message.author.id)
	    }
	    else {
	        message.channel.send("you are not cloaked")
	    }
	    
	    
	   }
	   
	}

    module.exports = UnCloakCommand
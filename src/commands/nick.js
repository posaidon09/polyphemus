module.exports = class NickCommand {

	constructor() {
		this.name = "nick";
		this.description = "Allows you to change your server nickname";
		this.category = "Utility";
		this.args = ["[nick]"]
	};

	async run({ message, commands, args }) {
	    const nick = args.join(" ")
	  try {  
	    if (nick.length > 20) {
	        message.reply("that nickname is too long")
	    }
	    else if (nick.length == 0) {
	        message.reply("you didn't provide a nickname")
	    } else {
	        if (message.member.manageable) {
	        message.member.setNickname(nick)
	        } else {
	            message.reply("i do not have permission to do that")
	        }
	    }
	  } catch (err) {
	      message.reply("missing permissions")
	  }
	}
}
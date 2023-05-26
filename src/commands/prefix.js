const { EmbedBuilder, PermissionFlagsBits } = require("discord.js");
module.exports = class PrefixCommand {

	constructor() {
		this.name = "prefix";
		this.description = "Allows you to change the prefix on your server";
		this.category = "Management";
		this.args = ["prefix"]
	};

	async run({ message, commands, args }) {
	    
	   if (!Prefix.has(message.guild.id)) {
	       Prefix.setup(message.guild.id)
	   }
	    const pre = Prefix.get(message.guild.id)
	    
	    const prefix = args.join(" ")
	    
	    if (!args.length) {
	        message.reply(`My prefix is ${pre}`)
	    }
	    else {
	      if (message.member.permissions.has(PermissionFlagsBits.ManageGuild)) {
	       Prefix.set(message.guild.id, prefix)
	       message.channel.send(`Set prefix to ${prefix}`)
	       
	      }
	      
	    }
	    
	    
	    
	    
	}
}
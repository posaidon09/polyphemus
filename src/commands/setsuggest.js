const {
    PermissionsBitField
} = require('discord.js');
const Discord = require("discord.js")
module.exports = class SuggestCommand {

	constructor() {
		this.name = "setsuggest";
		this.description = "Sets a selected channel to recieve suggestions from users";
		this.category = "Suggestion";
		this.args = ["[suggestion]"]
	};

	async run({ message, commands, args }) {
	     global.logchannel2 = Sdata.box("suggestchannel")
        let log = args[0]
        




        if (message.member.permissions.has(PermissionsBitField.Flags.ManageGuild)) {


            try {
                message.channel.send(`${log} will now start recieving server suggestions`)
                logchannel2.set(message.guild.id, log)
            } catch {
                message.channel.send("invalid channel")
            }


        } else {
    message.channel.send("you do not have permission to do that")
}


    
    
 

      }
}
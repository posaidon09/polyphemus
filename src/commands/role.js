const Discord = require("discord.js")
const { PermissionsBitField } = require("discord.js")
module.exports = class RoleCommand {

	constructor() {
		this.name = "role";
		this.description = "Gives a selected role to the target user";
		this.category = "Management";
		this.args = ["[@role]", "[@target]"]
	};

	async run({ message, commands, args }) {
	    const role = message.mentions.roles.first()
	    
	    const target = message.mentions.members.first() ?? message.member
	    
	    const embed = new Discord.EmbedBuilder()
	    .setTitle(`gave ${target.displayName} the ${role.name} role`)
	    .setColor("#006FB0")
	    
	    
     if (message.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) {
         if (!role) {
             message.reply("that is not a valid role")
         } else {
             if (target.manageable) {
                 if (target.roles.has(role)) {
                     message.reply("that member already has this role")
                 } else {
          target.roles.add(role)
          message.channel.send({ embeds: [embed] })
                 }   
             } else {
                 message.reply("i do not have permission to do that")
             }
         }
     } else {

         message.reply("you do not have permission to do that")
     }
     
     
     
	}
}
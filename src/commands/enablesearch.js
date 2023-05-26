const { EmbedBuilder, PermissionFlagsBits } = require("discord.js");

class EnableSearchCommand {
  constructor() {
    this.name = "enablesearch";
    this.description = "Enables the search command in your server\nit is recommended to keep the command turned off as it allows people to abuse it for breaking rules";
    this.category = "Management";
  }

  async run({ message, commands, args }) {
   
      if (!message.member.permissions.has(PermissionFlagsBits.ManageGuild)) {
          message.reply("you do not have permission to do that")
      }
      else {
          toggles.set(message.guild.id, true)
          message.channel.send("the search command has been enabled")
      }
      
      
  }
  }
module.exports = EnableSearchCommand
const { EmbedBuilder, PermissionFlagsBits } = require("discord.js");

class DisableSearchCommand {
  constructor() {
    this.name = "disablesearch";
    this.description = "Disables the search command in your server\nit is recommended to keep the command turned off as it allows people to abuse it for breaking rules";
    this.category = "Management";
  }

  async run({ message, commands, args }) {
      
      if (!message.member.permissions.has(PermissionFlagsBits.ManageGuild)) {
          message.reply("you do not have permission to do that")
      }
      else {
          toggles.set(message.guild.id, false)
          message.channel.send("the search command has been disabled")
      }
      
      
      
  }
  }
module.exports = DisableSearchCommand
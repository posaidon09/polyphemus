const {
    PermissionsBitField
} = require('discord.js');
const Discord = require("discord.js")

class WelcomeCommand {
    constructor() {
        this.name = "setwelcome";
        this.description = "Sends welcome messages to a set channel whenever someone joins the server";
        this.category = "Management";
        this.args = ["[#channel]"]
    };

    async run({
        message, commands, args
    }) {
        let logchannel = Sdata.box("welcome")
        let log = args[0]
        




        if (message.member.permissions.has(PermissionsBitField.Flags.ManageGuild)) {


            try {
                message.channel.send(`${log} will now start recieving welcome messages`)
                logchannel.set(message.guild.id, log)
            } catch {
                message.channel.send("invalid channel")
            }


        } else {
    message.channel.send("you do not have permission to do that")
}

client.on("guildMemberAdd", function(member){
    storage.load()
    let chaenele = logchannel.get(message.guild.id)
    let id = chaenele.match(/<?@?!?(\d{17,19})>?/)[1]
    let channele = client.channels.cache.get(id)
    
    const embed = new Discord.EmbedBuilder()
    .setTitle(`Welcome <@${member.id}>`)
    .setColor("#9C00FF")
    .setFooter({ text: `${member.tag}`, iconURL: member.displayAvatarURL() })
    
    if (logchannel.has(message.guild.id)) {
    channele.send({ embeds: [embed] })
    } else return
    
 })

      }
}
  
module.exports = WelcomeCommand;
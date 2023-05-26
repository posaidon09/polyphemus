const {
    PermissionsBitField
} = require('discord.js');
const Discord = require("discord.js")

class LogCommand {
    constructor() {
        this.name = "logsetup";
        this.description = "Logs selected actions into a selected channel";
        this.category = "Moderation";
        this.args = ["[#channel]"]
    };

    async run({
        message, commands, args
    }) {
        let logchannel = Sdata.box("logs")
        let log = args[0]
        




        if (message.member.permissions.has(PermissionsBitField.Flags.ManageGuild)) {


            try {
                message.channel.send(`${log} will now start recieving server logs`)
                logchannel.set(message.guild.id, log)
            } catch {
                message.channel.send("invalid channel")
            }


        } else {
    message.channel.send("you do not have permission to do that")
}

client.on("messageDelete", async message => {
    storage.load()
    let chaenele = logchannel.get(message.guild.id)
    let id = chaenele.match(/<?@?!?(\d{17,19})>?/)[1]
    let channele = client.channels.cache.get(id)
    
    const embed = new Discord.EmbedBuilder()
    .setTitle(`Message deleted by ${message.author.tag}`)
    .setDescription(message.content)
    .setColor("#FF0000")
    .setFooter({ text: `${message.author.tag}`, iconURL: message.member.displayAvatarURL() })
    
    if (logchannel.has(message.guild.id)) {
    channele.send({ embeds: [embed] })
    } else return
    
 })
 
 
 
client.on("channelCreate", function(channel){
    
  storage.load()
    let chaenele2 = logchannel.get(channel.id)
    let id2 = chaenele.match(/<?@?!?(\d{17,19})>?/)[1]
    let channele2 = client.channels.cache.get(id)
    
    const embed2 = new Discord.EmbedBuilder()
    .setTitle(`New channel created`)
    .setDescription
    .setColor("#FF0000")
    .setFooter({ text: `${message.author.tag}`, iconURL: message.member.displayAvatarURL() })
    
    if (logchannel.has(message.guild.id)) {
    channele.send({ embeds: [embed] })
    } else return
    
})

 
 
 
 
 
 
 
 
 
 
 

      }
}
  
module.exports = LogCommand;
const { PermissionsBitField } = require("discord.js")
module.exports = class UnLockCommand {

    constructor() {
        this.name = "unlock";
        this.description = "Allows you to rate things";
        this.category = "Moderation";
    };

    async run({
        message, commands, args, mentioned
    }) {
      
        if (message.member.permissions.has(PermissionsBitField.Flags.ManageChannels)) {

            message.channel.permissionOverwrites.edit(message.guild.id, {
                SendMessages: true
            });


            message.channel.send(`Successfully unlocked **${message.channel.name}**`)
        } else {
            message.channel.send("you don't have permission for that")
        }
    }
}
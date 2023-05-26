 const { PermissionsBitField } = require("discord.js")
module.exports = class LockCommand {

    constructor() {
        this.name = "lock";
        this.description = "Allows you to rate things";
        this.category = "Moderation";
    };

    async run({
        message, commands, args, mentioned
    }) {
       
        if (message.member.permissions.has(PermissionsBitField.Flags.ManageChannels)) {

            message.channel.permissionOverwrites.edit(message.guild.id, {
                SendMessages: false
            });


            message.channel.send(`Successfully locked **${message.channel.name}**`)
        } else {
            message.channel.send("you cant do that dumbass")
        }
    }
}
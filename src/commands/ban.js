const { EmbedBuilder, PermissionFlagsBits } = require("discord.js");

class BanCommand {
  constructor() {
    this.name = "ban";
    this.description = "Bans members";
    this.category = "Moderation";
    this.args = ["[@target]", "(reason)"]
  }

  async run({ message, commands, args }) {
    const member = message.mentions.members.first();
    const reason = args.splice(1).join(" ");

    const embed = new EmbedBuilder()
      .setTitle(`${member.user.tag} has been banned`)
      .setColor("#BB004B")
      .setDescription(`reason by ${message.member.displayName}: ${reason}`)
      .setFooter({ text: message.author.tag, iconURL: message.member.displayAvatarURL() });

    const dmEmbed = EmbedBuilder.from(embed) //
      .setTitle(`you've been banned from ${message.guild.name}`);

    if (!message.member.permissions.has(PermissionFlagsBits.BanMembers)) {
      return message.reply("you do not have permission to ban that member");
    }

    if (!member.bannable) {
      return message.reply("i do not have permission to ban that member");
    }

    await message.channel.send({ embeds: [embed] });

    try {
      await member.send({ embeds: [dmEmbed] });
    } catch {
      message.channel.send("could not DM the user");
    }

    await member.ban();
  }
}

module.exports = BanCommand;
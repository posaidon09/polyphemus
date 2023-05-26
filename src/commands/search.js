const { AttachmentBuilder } = require('discord.js');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events } = require('discord.js');
const Discord = require("discord.js")

module.exports = class SearchCommand {

    constructor() {
        this.name = "search";
        this.description = "Searches images on google";
        this.category = "Utility";
        this.args = ["query"]
    };

    async run({
        message, commands, args
    }) {
        if (!toggles.has(message.guild.id)) {
            toggles.setup(message.guild.id)
        }
 const hm = toggles.get(message.guild.id)
 if (hm == true) {
        const imageSearch = require("image-search-google")

        const google = new imageSearch("344d8b7f9f3e24e0e", "AIzaSyCE5s-SbU0K0PIlA3owT5FTlTpX0v5eSW0")
        const pagecount = storage.box("page", 1)
        pagecount.setup(message.author.id)
        pagecount.set(message.author.id, 1)
      
        var page = pagecount.get(message.author.id)
        const query = args.join(" ")

  const [result] = await google.search(query, { page: page });

        if (!result) return await message.channel.send(':x: No images found!');

        
        const embed = new Discord.EmbedBuilder()
        .setTitle(query)
        .setColor("B70061")
        .setImage(result.url)
        .setFooter({ text: `page ${page}`, iconURL: message.member.displayAvatarURL() })
        
        
        
       let previ = new ButtonBuilder()
             .setCustomId('prev')
             .setLabel('Previous page')
             .setStyle(ButtonStyle.Danger)
             .setDisabled(true)
       let next = new ButtonBuilder()
             .setCustomId('next')
             .setLabel('Next page')
             .setStyle(ButtonStyle.Success)
             
            
            
        const msg = await message.channel.send({ embeds: [embed], components: [new ActionRowBuilder().addComponents(previ, next)] })
            
       const collector = msg.createMessageComponentCollector({
      filter: (interaction) => interaction.user.id === message.author.id,
      time: 6000_000
    });


      
      collector.on("collect", async (interaction) => {
          if (!interaction.isButton()) return;
          //NEXT
          if (interaction.customId === "next") {
              var page2 = pagecount.get(message.author.id)
              
              const [result2] = await google.search(query, { page: page2+1 });
              
              pagecount.set(message.author.id, page2 + 1)
              previ.setDisabled(false)
              const embed2 = new Discord.EmbedBuilder()
        .setTitle(query)
        .setImage(result2.url)
        .setColor("#B70061")
        .setFooter({ text: `page ${page2+1}`, iconURL: message.member.displayAvatarURL() })
        
              
              interaction.update({ embeds: [embed2], components: [new ActionRowBuilder().addComponents(previ, next)] })
          } else if (interaction.customId === "prev") {
         //PREVIOUS
              var page3 = pagecount.get(message.author.id)
              
              const [result3] = await google.search(query, { page: page3-1 });
              
              const embed3 = new Discord.EmbedBuilder()
        .setTitle(query)
        .setImage(result3.url)
        .setColor("#B70061")
        .setFooter({ text: `page ${page3-1}`, iconURL: message.member.displayAvatarURL() })
              
              pagecount.set(message.author.id, page3 - 1)
       //PAGE CHECK       
            if (page3 <= 2) {
             const embed4 = new Discord.EmbedBuilder()
        .setTitle(query)
        .setImage(result3.url)
        .setColor("#B70061")
        .setFooter({ text: `page ${page3}`, iconURL: message.member.displayAvatarURL() })
            previ.setDisabled(true)
            interaction.update({ embeds: [embed], components: [new ActionRowBuilder().addComponents(previ, next)] })
            } else {
              interaction.update({ embeds: [embed3], components: [new ActionRowBuilder().addComponents(previ, next)] })
          }
          
          }
     
});

}
else {
    message.reply("this command is disabled for this server")
}

    } catch(err) {
        console.error(err);

    }
}
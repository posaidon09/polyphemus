const Discord = require("discord.js")

class CloakCommand {
	constructor() {
		this.name = "cloak";
		this.description = "Disguises you as an other user";
		this.category = "Utility";
		this.args = ["[@target]"]
		this.aliases = ["disguise"]
	};

	async run({ message, commands, args }) {
	 try {   
	    var mentioned = message.mentions.members.first() ?? await client.users.fetch(args[0])
	    const cloak = storage.box("webhook")
	   
	   if (!mentioned) {
	     message.reply("Invalid user.")
	   }
	       message.channel.send(`successfully disguised as ${mentioned.user?.tag ?? mentioned.tag}`)
	   if (!cloak.has(message.author.id)) {
	       const webhook = await message.channel.createWebhook({
          name: `${mentioned.displayName ?? mentioned.username}`,
          avatar: `${mentioned.displayAvatarURL({ format: "png" })}`
        });
        cloak.set(message.author.id, [webhook.url, message.channel.id])
	  
	   }
	   else {
	      
	   const clok = cloak.get(message.author.id)
	       
    const webhoks = await message.channel.fetchWebhooks();
    
    const webhok = webhoks.find(w => w.url == clok[0]);
    
	    webhok.edit({
	       name: `${mentioned.displayName ?? mentioned.username}`,
          avatar: `${mentioned.displayAvatarURL({ format: "png" })}`
	    })   
	       
	   }
     
	   
	client.on("messageCreate", async message => { 
	    
	    
	    if (message.author.bot) return
	    if (!cloak.has(message.author.id)) return
	    const web = cloak.get(message.author.id)
	   
	        const webhooks = await message.channel.fetchWebhooks();
    const webhook = webhooks.find(w => w.url == web[0]);
	    if (message.attachments.size > 0) {
	     const attachments = message.attachments.map(a => a.url);
	    message.delete()
	    webhook.send({ content: `${message.content}`, files: attachments })
	    }
	    else {
	    message.delete()
	    webhook.send(`${message.content}`)
	    }
	  
	})
	 }
	 catch {
	    return webhook.send("an error has occured")
	 }
	   
	}
    

}

	module.exports = CloakCommand
	


    
    
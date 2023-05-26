const { PermissionsBitField } = require('discord.js');
const Discord = require("discord.js")

class AfkCommand {
	constructor() {
		this.name = "afk";
		this.description = "Displays you as AFK\n(note: you can also add attachments to your AFK message.)";
		this.args = ["(AFK reason)"];
		this.category = "Utility";
	};

	async run({ message, commands, args }) {
       const afk = storage.box("afk")
	    
	   const reason = storage.box("reason")
	    
	    const attach = storage.box("attachment", "")
        
        
        const attachments = message.attachments.map(a => a.url);
	    
	   const raeson = `${args.join(" ")}` ?? ""
	    
	    
	    afk.set(message.author.id, "yes")
	    
	    reason.set(message.author.id, raeson)
	    attach.set(message.author.id, attachments)
	   
	   const grab = attach.get(message.author.id)
	    if (!args.length) {
	        
	      
	    if (message.attachments.size > 0) {
	    message.channel.send({ content: `<@${message.author.id}> went afk`, files: attachments })
	    } else if (message.attachments.size == 0) {
	      
	        message.channel.send({ content: `<@${message.author.id}> went afk`, files: attachments })
	        
	    }
	  
	    
	    } else {
	        
	    message.channel.send({ content: `<@${message.author.id}> went afk: ${raeson}`, files: attachments })
	    
	    }
	    
 client.on("messageCreate", async message => {
	 
	 const mentioned = message.mentions.users.first()
	 
	   if (message.author.bot) return 
	   if (message.content.includes(".afk")) return
	   
    if (afk.has(message.author.id)) {
        afk.delete(message.author.id)
        if (message.content.includes("--afk")) return
        else if (attach.has(message.author.id)) { 
        
        
        message.channel.send(`<@${message.author.id}> has returned`)
        
            attach.delete(message.author.id)
        } else if (!attach.has(message.author.id)) return
            
        
        }
    
    
   
	if (mentioned) {
	    
	if (afk.has(`${mentioned.id}`)) {
	    if (message.author.bot) return
	    if (!reason.get(`${mentioned.id}`).length) {
	        
	    message.reply({ content: `that user is AFK`, files: attach.get(mentioned.id) })
	    } else {
	    message.reply({ content: `that user is AFK: ${reason.get(`${mentioned.id}`)}`, files: attach.get(mentioned.id) })
	    
	    
	    }
	} else if (!afk.has(`${mentioned.id}`)) return
	} else if (!mentioned) return
	
	
	 })
	 
	 
	 
	 
	 
	 
	 }
}

	
    


module.exports = AfkCommand
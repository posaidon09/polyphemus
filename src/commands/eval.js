class EvalCommand {
	constructor() {
		this.name = "eval";
		this.description = "Executes code";
		this.category = "Dev";
		this.hidden = true;
		this.disabled = true;
		this.args = ["[code]"]
	};

	async run({ message, commands, args }) {
     
        const code = args.join(" ");
        
     if (message.author.id === "936638216604385320" || message.author.id === "533043678307024925") {
        try {
            const output = eval(code);
            const evalString = "" + output;
            const condition = evalString.startsWith("http://")
                || evalString.startsWith("https://");
            if (condition) {
                return message.channel.send(`${output}`);
            } else {

            message.channel.send(`\`\`\`js\n${output}\`\`\``);
            }
        } catch (error) {
            message.channel.send(`\`\`\`js\n${error}\`\`\``);
            console.log(error);
        }
     } else {
         return
     }
    }
}
module.exports = EvalCommand
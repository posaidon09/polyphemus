const { Client } = require("./src/lib/Client");
global.client = new Client();


client.on("messageCreate", async message => {
   
   if (message.channel.id !== "1103403656985981018") return
 
       const { Configuration, OpenAIApi } = require("openai");


  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  const history = [];

 
    const user_input = message.content

    const messages = [];
    for (const [input_text, completion_text] of history) {
      messages.push({ role: "user", content: input_text });
      messages.push({ role: "assistant", content: completion_text });
    }

    messages.push({ role: "user", content: user_input });

    try {
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: messages,
      });

      const completion_text = completion.data.choices[0].message.content;
      message.channel.send(completion_text)

      history.push([user_input, completion_text]);

      const user_input_again = message.content
      if (user_input_again.toUpperCase() === "N") {
        return;
      } else if (user_input_again.toUpperCase() !== "Y") {
        console.log("Invalid input. Please enter 'Y' or 'N'.");
        return;
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }
  
})
   

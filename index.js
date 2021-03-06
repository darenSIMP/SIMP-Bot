const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = "dswq_";

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }

  else if (command === "sum") {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`The sum of all the arguments you provided is ${sum}!`);
  }
else if 9command === "echo")(
  const string = args.join(" ");
  message.channel.send(string);
)
else if (command === "yell") {
  const string = args.join(" ");
  const upperCase = string.toUppercase();
  message.channel.send(keys);
}
});

  if (command === "name") {
    message.reply(`Your full name is Darren Sim Wei Quan`);
  }

client.login(process.env.BOT_TOKEN);  
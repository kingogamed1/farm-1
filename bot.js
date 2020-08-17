const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("744707687186432033")
setInterval(function() {
channel.send(`king up`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
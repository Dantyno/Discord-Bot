const Discord = require("discord.js");
const { Client, Intents } = require('discord.js');
const bot = new Discord.Client({
  intents: [
      Discord.Intents.FLAGS.GUILDS,
      Discord.Intents.FLAGS.GUILD_MESSAGES,
      Discord.Intents.FLAGS.GUILD_VOICE_STATES
  ]
})
const botsettings = require("./botsettings.json");
const { DisTube } = require("distube")
const SpotifyPlugin = require("@distube/spotify")
bot.distube = new DisTube(bot, {
  leaveOnStop: false,
  emitNewSongOnly: true
})


const fs = require("fs");

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

client.on("ready", () => {
  console.log(`${client.user.tag}d is ready to play music.`)
})

bot.on("message", async(msg)=>{
  if(msg.author.bot || msg.channel.type === "dm") return;
  const content = msg.content.toLowerCase().split(" ")//"!content 50"
  const args = content.slice(1)//50
  const comand = content[0]//"!content"
 
  let prefix = botsettings.prefix
  if(!msg.content.startsWith(prefix)) return;
  
  let commandfile = bot.commands.get(comand.slice(prefix.length)) || bot.commands.get(bot.aliases.get(comand.slice(prefix.length)))
  if(commandfile) commandfile.run(bot,msg,args)
})










bot.login(botsettings.token)

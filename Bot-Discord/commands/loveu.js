const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, msg, args) => {
    const love = "love u";//loveu
    let result = love.toUpperCase()//LOVEU
    return msg.reply(result)//LOVEU
}
const love = "love u";
module.exports.config = {
    name: "loveu",//loveu
    description: "",
    usage: "!loveu",//"!"loveu
    accessableby: "Members",
    aliases: ['l']
}
const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async(bot,msg,args) => {
    
    if(isNaN(args[0])){
        return msg.reply("non è un numero,coglione")
    }
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) {
        return msg.reply("Missing Permissions!")
    }
    if(args[0] > 100){
        return msg.reply("No non puoi")
    }
    if(args[0] < 1){
        return msg.reply("No non puoi")
    }
    await msg.channel.messages.fetch({ limit: args[0] }).then((messages) => {
        msg.channel.bulkDelete(messages);
    })
}
module.exports.config = {
        name: "clear",
        description: "",
        usage: "!clear",
        accessableby:"Members",
        aliases: ['c','purge']
}

    

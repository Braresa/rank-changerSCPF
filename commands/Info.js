const Discord = require("discord.js")
const rbx = require("noblox.js")

const CookieAccount = ""

async function Login() {
    await rbx.cookieLogin(CookieAccount)
}

const depsID = 5209004
const princID = 5208959

async function Kick(member,message) {
    Login();
    const infoEmbed = new Discord.RichEmbed()
    infoEmbed.setColor("#0099ff")
    infoEmbed.setTitle(`Info: **${member}**`)
    const playerID = await rbx.getIdFromUsername(member)
    .catch(function(err) {
        message.channel.send("\nErro ao pegar ID do player, tenha certeza que colocou o nick certo.")
    });
    const rankIdPrinc = await rbx.getRankNameInGroup(princID,playerID)
    const rankIdDeps = await rbx.getRankNameInGroup(depsID,playerID)
    infoEmbed.addBlankField()
    infoEmbed.addField("Grupo principal:",`**${rankIdPrinc}**`)
    infoEmbed.addField("Grupo de departamentos:",`**${rankIdDeps}**`)
    infoEmbed.setThumbnail(`https://www.roblox.com/Thumbs/Avatar.ashx?x=100&y=100&userId=${playerID}`)
    message.channel.send(infoEmbed)
   
};
module.exports  = {
    "name": "info",
    "desc": "Kick command.",
    execute(message,args,client) {
            if(!args[0]) {
                message.channel.send("Você não especificou o nickname do Player.")
            }
            if(args[0]) {
                message.channel.send(`Pegando informações do player...`)
                Kick(args[0],message)
        }
    }
}

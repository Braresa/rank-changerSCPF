const Discord = require("discord.js")
const rbx = require("noblox.js")

const CookieAccount = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_A6769CA9C2D1F69A529CC15C1DC0E9B50386D9FF3FE9F02DF89FA5654A7C4AA16C9FC3E0D3EE4DF44D529C817774EE3335B265F4963B3FA4D3A8A283B57C87F5687B3597E5E43DC521C13E02FFD8C50334BCB919D40E8E8123AF808FC4F980EBF715D0815398B23787D59F592106F8922870A3F2078076D11A030F01F45156A599265ABCA72AB810FD1FAD1307024B2FE59D25D602AC75F5F4AD0D850C4AD02394828AFA607929BABDFC3645E2B3B7CBCF4ADA6A299DB21B21E77C0E57AE0C62EB2999E799877471E5A2340BE1F3778C89E3A92FB461C88CBB404C55E818079E1C53D3E049A790E8A8E408EE7A2F43812142AC9AB4B48E90691F54B720D9B01B69CEFDEDE6AF40921D7256E5086301139C8390E47235257B43227F9654E478F62A07D36BB5BB2F5EED11070206A4301A036002EF"

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
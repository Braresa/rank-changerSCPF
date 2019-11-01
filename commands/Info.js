const Discord = require("discord.js")
const rbx = require("noblox.js")

const CookieAccount = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_3F707CC4EA91FC85C8DF338B24B0AD9B3451B0C91E4D2A633F3E1AF3A7F73E5774FCD671E6CA2894B3F50D3017911224CCB958672443794F3D35E3E0B5692DC24B18B9E3EE4312182FC7546354DAF822480C7D4F3893484B03AF44BDB2F3CA5101A7A6B86E16973C078586A5B41A7DC03065439203ACC316847E8804A882312027A0237D96C4708F2DF2CFF44F158D3AC4F3DACC8576FCBCD9181A19B7CC9CE2B8228E7D5A2A4BE078EAF8EEAB46F1378B237BA314E65E9261F0B25F3720CACBE2CA042DBB8C92D848353EFF65AF810DF7D424E7239BD47EDDFEA78FAB51E0C44C81955AD48606BB40AA2B4125EAC4E2BC7F0A157AB8347BCA6B87DC002530D1F6F4C0CE130B1F4450AC076F6465A1E1CEEA9AF8F7502B57CE7E65683C406F4889FF15A4BE5C60F875CBF64305F23AE13DF84B5E"

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
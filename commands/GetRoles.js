const Discord = require("discord.js")
const rbx = require("noblox.js")

const CookieAccount = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_3F707CC4EA91FC85C8DF338B24B0AD9B3451B0C91E4D2A633F3E1AF3A7F73E5774FCD671E6CA2894B3F50D3017911224CCB958672443794F3D35E3E0B5692DC24B18B9E3EE4312182FC7546354DAF822480C7D4F3893484B03AF44BDB2F3CA5101A7A6B86E16973C078586A5B41A7DC03065439203ACC316847E8804A882312027A0237D96C4708F2DF2CFF44F158D3AC4F3DACC8576FCBCD9181A19B7CC9CE2B8228E7D5A2A4BE078EAF8EEAB46F1378B237BA314E65E9261F0B25F3720CACBE2CA042DBB8C92D848353EFF65AF810DF7D424E7239BD47EDDFEA78FAB51E0C44C81955AD48606BB40AA2B4125EAC4E2BC7F0A157AB8347BCA6B87DC002530D1F6F4C0CE130B1F4450AC076F6465A1E1CEEA9AF8F7502B57CE7E65683C406F4889FF15A4BE5C60F875CBF64305F23AE13DF84B5E"

module.exports = {
    "name": "getroles",
    "desc": "Get roles in a group.",
    execute(message,args,client) {
        const InformationRoles = new Discord.RichEmbed()
        const levelsID = 5208959
        const levelsDeps = 5209004
        InformationRoles.setColor("#000000")
        
        async function Login() {
            await rbx.cookieLogin(CookieAccount)
        }


        if(!args[0]) {
            message.channel.send("Por favor, especifique o grupo quer quer ver os ranks, **princ** ou **deps**")
        } else if(args[0]==="princ") {
            Login()
            const getRolesRBX = rbx.getRoles(levelsID)
            getRolesRBX.then(function(roles) {
                roles.forEach(function(item,index,array) {
                    InformationRoles.addField(item.name,item.rank)
                })

            }).then(function() {
                InformationRoles.setThumbnail('https://i.imgur.com/fT8I4jJ.png')
                InformationRoles.setTitle("Informações de ranks do grupo principal")
                message.channel.send(InformationRoles)
            });
        } else if(args[0]==="deps") {
            Login()
            const getRolesRBX = rbx.getRoles(levelsDeps)
            getRolesRBX.then(function(roles) {
                roles.forEach(function(item,index,array) {
                    InformationRoles.addField(item.name,item.rank)
                })

            }).then(function() {
                InformationRoles.setThumbnail('https://i.imgur.com/kPcYxM5.png')
                InformationRoles.setTitle("Informações de ranks do grupo de departamentos")
                message.channel.send(InformationRoles)
            });
        }
        
    }
}
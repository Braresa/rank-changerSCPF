const Discord = require("discord.js")
const rbx = require("noblox.js")

const CookieAccount = ""

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

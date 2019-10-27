const Discord = require("discord.js")
const rbx = require("noblox.js")

module.exports = {
    "name": "getroles",
    "desc": "Get roles in a group.",
    execute(message,args,client) {
        const InformationRoles = new Discord.RichEmbed()
        const levelsID = 5208959
        const levelsDeps = 5209004
        InformationRoles.setColor("#000000")

        
        


        if(!args[0]) {
            message.channel.send("Por favor, especifique o grupo quer quer ver os ranks, **princ** ou **deps**")
        } else if(args[0]==="princ") {
            const getRolesRBX = rbx.getRoles(levelsID)
            getRolesRBX.then(function(roles) {
                roles.forEach(function(item,index,array) {
                    InformationRoles.addField(item.name,item.rank,true)
                })

            }).then(function() {
                InformationRoles.setThumbnail('https://i.imgur.com/fT8I4jJ.png')
                InformationRoles.setTitle("Informações de ranks do grupo principal")
                message.channel.send(InformationRoles)
            });
        } else if(args[0]==="deps") {
            const getRolesRBX = rbx.getRoles(levelsDeps)
            getRolesRBX.then(function(roles) {
                roles.forEach(function(item,index,array) {
                    InformationRoles.addField(item.name,item.rank,true)
                })

            }).then(function() {
                InformationRoles.setThumbnail('https://i.imgur.com/kPcYxM5.png')
                InformationRoles.setTitle("Informações de ranks do grupo de departamentos")
                message.channel.send(InformationRoles)
            });
        }
        
    }
}
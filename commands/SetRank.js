const rbx = require("noblox.js");
const fs = require("fs")

const CookieAccount = ""

async function Setrank(group,userget,rankget,message) {
    var rank = Number(rankget)
    await rbx.cookieLogin(CookieAccount)
    var plrID = await rbx.getIdFromUsername(userget)
    .catch(function (err) {
        message.channel.send("\nErro ao pegar ID do player, tenha certeza que colocou o nick certo.")
    })
    rbx.setRank(group,plrID,rank)
    .then(function(newRole) {
        message.channel.send(`\nSucesso! **${userget}** teve seu rank modificado para **${newRole.name}** `)
    })
    .catch(function(err) {
        message.channel.send(`\nErro ao setar rank do Player, ou não tenho permissão, ou você não especificou o rank certo. O rank tem que ser em número, ou seja, permissões, para obter o número de permissão de algum grupo, utilize o comando **!getroles (princ ou deps)**.`)
        console.warn(err.stack)
    });
}

const depsID = 5209004
const levelsID = 5208959

module.exports = {
    "name": "setrank",
    "desc": "Set rank command.",
    execute(message,args,client) {
        if(message.member.roles.find(r => r.name==="bot perm")) {
            if(!args[0]) {
                message.channel.send("Ops! Esqueceu do grupo")
            } else if(!args[1]) {
                message.channel.send("Ops! Esqueceu do usuário")

            } else if(!args[1]) {
                message.channel.send("Ops! Esqueceu do rank")

            } if(args[0]==="deps" && args[1] && args[2]) {
                message.channel.send("Setando rank no grupo de departamentos...")
                Setrank(depsID,args[1],args[2],message)
            } else if(args[0]==="levels" && args[1] && args[2]) {
                message.channel.send("Setando rank no grupo principal...")
                Setrank(levelsID,args[1],args[2],message)
            }
        }

    }
}

const Discord = require("discord.js")
const rbx = require("noblox.js")

const CookieAccount = ""

async function Login() {
    await rbx.cookieLogin(CookieAccount)
}

async function Kick(group,member,message) {
    Login()
    const playerID = await rbx.getIdFromUsername(member)
    .catch(function (err) {
        message.channel.send("Erro ao pegar ID do player, tenha certeza que especificou o nickname certo.")
    });
    rbx.exile(group,playerID)
    .then(function (kicked) {
        message.channel.send(`Sucesso! **${member}** foi kickado do grupo.`)
    })  .catch(function (err) {
        message.channel.send("Ocorreu um erro durante o kick. Provavelmente eu não tenho permissão para kickar esse membro.")
    })
}

const depsID = 5209004
const princID = 5208959

module.exports  = {
    "name": "kick",
    "desc": "Kick command.",
    execute(message,args,client) {
        if(message.member.roles.find(r => r.name==="bot perm")) {
            if(!args[0]) {
                message.channel.send("Você não especificou o grupo que quer, escolha entre deps e princ para expulsar.")
            } else if(!args[1]) {
                message.channel.send("Você não especificou o nickname do Player para expulsar")
            }
            if(args[0]==="princ" && args[0] && args[1]) {
                message.channel.send(`Kickando **${args[1]}** do grupo principal...`)
                Kick(princID,args[1],message)
            } else if(args[0]==="deps" && args[0] && args[1]) {
                message.channel.send(`Kickando **${args[1]}** do grupo de departamentos...`)
                Kick(depsID,args[1],message)
            }
        }
    }

}

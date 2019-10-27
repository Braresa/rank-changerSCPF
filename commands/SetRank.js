const rbx = require("noblox.js");
const fs = require("fs")

const CookieAccount = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_4C4593C9500241382842D024E10BB94FF05E401A215A82834626E77F1528851C3391E92006F9A50969B40F547265E63185F22C8E510B3E2861180D7D51AA3AA120CE016936C94537FC9EBDADC7E8C2A906A4950EFE41A1E7F8C45889020F636B5E7B9FE8A1DD1F818AC0FC0627C95D31B01B705B48F80AE285733BD1E6997C756D95993777ACFE0F10F6392D072AFDEFDD4A7BF4D2E57F1698FAAD25C42147DB75C85FA3A27F6F94A3588CB102CDE9B3BFD7C8965FD494551EBF845B4768E0363C4CC8846C1DD8889C2E97689131BEF3BFCF0A83D30EC28937BCF1D2A6A45F5358B074A3452FDAC63B763FEBE47CE6649CC178E664015ADDA643B2FB4E4CBC39D5C3266F8EFCBC1355D31B80A6A9C31D88CB38D1D9D96DB2D10BC0D9BF58A9B13F2D4BB0C70AA945F8CCEA6A84A142BE4A2ECF0C"

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
        message.channel.send(`\nErro ao setar rank do Player, ou não tenho permissão, ou você não especificou o rank certo.`)
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
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const rbx = require("noblox.js");
const fs = require("fs")
const bot = new Discord.Client({disableEveryone: true})

var http = require()


var CookieAccount = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_1AE5BBEE8001861FD30D10E778D6DC9A5268F9FA52D763802A6A145A2CD692F5376D645E563DED914FF65E9F1C754A935E84EF66636197BEB6D9FD5FD3E945998CDFA3B79FCFB1564D167A5D8505DD3A01BFEF2FF6BB3C8229AD4C0127409FEAFC7A51F501A70331C1B8AB656897DE604844B9C15F5B589884F9B081B5876F0337FC6E109788F3E8090ED4460C141E411728EB91FEC178FE6B5DD0A3E442EEE4E2523EEC66FE4A047581DF571CAEF7B4574D96ADD451012554FB176DCCE80F37D9FC47773546A3245903F8CE3A6DA4FDBB3B28864FF1B1D443109933D0AB5330EC883489F133D3B82AA3A4E4A1AB88AA24D20E1C45E7F136875203E3AC00B82266C9DF69F3297AC927F49E732D0362E413476BC7C76A7B428B0C4A458EE0760275F046BAE52C92D9A40629A574DED258EE8ECDE6"





const ownerid = config.ownerid

client.on("ready", () => {
    console.log(`Bot logado como ${client.user.username} estando em ${client.guilds.size} guilda(s), servindo à ${client.users.size}`);
    client.user.setActivity("ROBLOX", {type: "PLAYING"})
});

async function startApp(group,user,rank) {
    await rbx.cookieLogin(CookieAccount)
    let currentUser = await rbx.getCurrentUser()
    rbx.setRank(group,user,rank)
    .then(function (newRole) {
      console.log('Novo cargo é: ' + JSON.stringify(newRole));
    });
}

client.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm")   ;

    const args = message.content.slice(config.prefixo.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();
// ping
    if (comando === "ping") {
        var r = await message.channel.send("Ping?")
       function EditMessage() {
        r.edit(`Pong! A latência atual do bot é: ${r.createdTimestamp - message.createdTimestamp}ms. A latência da API é: ${Math.round(client.ping)}ms.`)
        startApp()
       }

       setTimeout(EditMessage,2000)
    }

    if (message.content === "avatar") {
        message.reply(message.author.avatarURL)
    }
});



client.login(config.token);
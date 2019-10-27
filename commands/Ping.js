module.exports = {
    name: "ping",
    desc: "Mostra o ping!",
    execute(message,args,client) {
    message.channel.send(`Pong! A latência da API é: ${Math.round(client.ping)}ms.`)
    }
}
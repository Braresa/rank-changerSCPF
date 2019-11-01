const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const rbx = require("noblox.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
const app = express();
client.commands = new Discord.Collection();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});


// Preparando cliente para iniciar

const AllComands = fs.readdirSync("./commands").filter(file => file.endsWith('.js'));

for (const file of AllComands) {
    const cmd = require(`./commands/${file}`)
    console.log(`${file} carregado!`)

    client.commands.set(cmd.name, cmd)
}
//

var CookieAccount = config.cookie

// Cliente iniciando.

const ownerid = config.ownerid

client.on("ready", () => {
    console.log(`Bot logado como ${client.user.username} estando em ${client.guilds.size} guilda(s), servindo à ${client.users.size} usuários.`);
    client.user.setActivity("ROBLOX", {type: "PLAYING"})
});

// Set rank.
async function startApp(group,user,rank) {
    await rbx.cookieLogin(CookieAccount)
    let currentUser = await rbx.getCurrentUser()
    var plrID = await rbx.getIdFromUsername(user) 
}

client.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    const args = message.content.slice(config.prefixo.length).split(" ");
    const comando = args.shift().toLowerCase();

    if (!client.commands.has(comando)) return;
    client.commands.get(comando).execute(message,args,client)
});


client.login(config.token);
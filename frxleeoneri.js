

const Discord = require("discord.js")     
const client = new Discord.Client();       
const frxlee = require("./frxlee.js")    
const fs = require("fs");                
const moment = require("moment");
    
var AsciiTable = require('ascii-table')


client.commands = new Discord.Collection(); 
client.aliases = new Discord.Collection();  
fs.readdir('./commands/', (err, files) => { 
  if (err) console.error(err);               
  console.log(`${files.length} Komut Yükleniyor... \n`);
  files.forEach(f => {                       
    let props = require(`./commands/${f}`);   
    console.log(`${props.config.name} Komutu Yüklendi ✔`);  
    client.commands.set(props.config.name, props); 
    props.config.aliases.forEach(alias => {          
      client.aliases.set(alias, props.config.name);  
    });
  });
})







client.on('ready', () => {
  console.log(`--> Bot başarı ile giriş yaptı {Frxlee}`);
});


client.on('ready', () => {

client.channels.cache.get(frxlee.botseskanalı).join()
console.log('ses kanalına giriş yapıldı')
client.user.setActivity(frxlee.botdurum)


})



client.on("message", msg => {
  var dm = client.channels.cache.get(frxlee.onerikanalı)
  if(msg.channel.type === "dm") {
  if(msg.author.id === client.user.id) return;

  const frx = new Discord.MessageEmbed()
  .setTitle(`🔔Yeni Bir Öneri`)
  .setTimestamp()
  .setColor("RANDOM")
  .addField("Öneri Yapanın Adı", msg.author.tag)
  .addField("Öneri Yapan Kişinin İdsi", msg.author.id)
  .addField("Kişinin Önerisi", msg.content)
  .setFooter('Katıldığınız Önerilere ✅ Tepkisine Basarak Belirtebilirsiniz') 
  
  dm.send(frx)
  msg.author.send(`**Öneriniz Başarı İle İletildi ✅**`)
  }
  if(msg.channel.bot) return;
  });

  client.on('message', message =>{
    if(message.channel.id == frxlee.onerikanalı) {
    message.react(`✅`) 
    message.react(`❌`) } })


client.login(frxlee.token)





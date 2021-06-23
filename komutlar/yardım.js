





const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, msg, args) => {
   
    var s = 'tr'
  var a = client.commands.get('yardım').help.name
    if(db.has(`dil_${msg.guild.id}`) === true) {
        var s = 'en'
        var a = client.commands.get('yardım').help.enname
    }
    const dil = client[s]
    const o = a
 
  
  let prefix = await db.fetch(`prefix_${msg.guild.id}`) || client.ayarlar.prefix;
const footer = `[${dil.special.botinvite}](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8) | [${dil.special.supportserver}](https://discordapp.com/invite/knESwdy) | [${dil.special.DBLpage}](${client.ayarlar.webpanel})\n \`Vortex'in Tek Geliştiricisi Yusuf K Dev.#3004'dir.\``;

  var arg = ``
 if(args[0] === 'müzik') {
      let müzik = [`
**${prefix}oynat**: İstenilen şarkıyı oynatır. 
**${prefix}tekrar**: Çalan şarkıyı bittiği zaman tekrar oynatır. 
**${prefix}durdur**: Çalan şarkıyı durdurur. 
**${prefix}ses**: Şarkının sesini ayarlar. 
**${prefix}geç**: Sıradaki şarkıya geçer. 
**${prefix}kuyruk**: Şarkı kuyruğunu ve çalan şarkıyı gösterir.  

${footer}`];
      
            const müzikE = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(client.user.avatarURL)
            .setDescription(müzik)
          msg.channel.send(müzikE)
     return
    }else {
      var arg = args[0]
      }
  
  
  if(!args[0]) {var arg = args[0]}
  
  
  if(!args[0]) {var arg = args[0]}
  
 // let yana = await bot.emojis.get(bot.emojiler.yan);
let yana = "-";


let arr = [];
client.commands.forEach(x => {
if (!arr.includes(x.conf.kategori)) {
arr.push(x.conf.kategori)
}
})

  let cats = arr.filter(x => x !== undefined).map(k => `• \`${prefix}${dil.yardımm} ${k} \`-> ${k.charAt(0).toUpperCase()+k.slice(1)} ${dil.showw}`).join("\n")
  let muzik = (`• \`${prefix}${dil.yardımm} müzik \`-> Müzik ${dil.showw}`)
let bilgi =(`• ${dil.yardım.hata}\n`)
  
  
  
  if (!arg) {
    
    /*  msg.channel.send(`# ${client.user.username} - Kategoriler

${cats}

> ${prefix}yardım [kategori] yazarak komutları görebilirsiniz.
`, {split: true, code: "md"})
*/
    
    const embed = new Discord.RichEmbed()
    .setAuthor(`${dil.menüü}`, client.avatarURL)
        .setThumbnail(client.avatarURL)
    .setColor('RANDOM')
    .setDescription(`
${footer}\n
${bilgi}
• ${dil.yardım.komuts}\n
${cats}
${muzik}


`)
.setTimestamp()
    msg.channel.send(embed)
  } else {
  
  let list = client.commands.filter(x => x.conf.kategori === arg)
  
  if (!arr.includes(arg)) return msg.channel.send(`**${arg}** ${dil.yardım.hata2}`)
  
  const cmds = Array.from(list.keys())
  const longest = cmds.reduce((long, str) => Math.max(long, str.length), 0);
  
 // msg.channel.send(list.map(k => `${k.help.name}${' '.repeat(longest - k.help.name.length)} :: ${k.help.description}`).join("\n"), {split: true, code: "asciidoc"})

    const e = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription(list.map(k => `**${prefix + k.help.name}**${' '.repeat(longest - k.help.name.length)}: ${k.help.description}`).join("\n") + `\n\n${footer}`)
msg.channel.send(e)
  }
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['help'],
  permLevel: 0,
  kategori: "bot"
};

exports.help = {
  name: 'yardım',
  description: 'Botun komutlarını listeler',
  usage: 'yardım [kategori]'
};

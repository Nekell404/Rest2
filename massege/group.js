const util = require('util')
const moment = require("moment-timezone");
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fs = require("fs");
const fetch = require('node-fetch')
const { color } = require("../lib/color");
const { getGroupAdmins, h2k, FileSize, smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, pickRandom, short } = require('../lib/myfunc')
const chalk = require('chalk')
const canvacord = require("canvacord");
const bg = "https://tinyurl.com/y23xrfhu"
let thumbdoc = fs.readFileSync('./media/thumbnaildokumen.jpg')
//require("../settings.js")

let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				let week = d.toLocaleDateString(locale, { weekday: 'long' })
				let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})

module.exports = async(aqua, anu) => {
try{
	
let type1 = false
let type2 = true
let type3 = false
let type4 = false
let type5 = false

let metadata = await aqua.groupMetadata(anu.id)
const from = anu.id
const memb = metadata.participants.length
const botNumber = aqua.user.id 
const groupMet = await aqua.groupMetadata(from)
const groupName = metadata.subject  
const desc = metadata.desc
const allmem = groupMet.participants.length
const mem = anu.participants[0];
const memNumber = mem.split("@")[0];
const timeWib = moment.tz("Asia/Jakarta").format("HH:mm");
const groupMembers = groupMet.participants;
//const groupAdmins = getGroupAdmins(groupMembers);                
const pushname =  await aqua.getName(mem)
const copyright = `${week} ${calender}`
const Add = anu.action == 'add'
const Remove = anu.action == 'remove'
const OneMem = anu.participants.length === 1
const NotMe = !mem.includes(botNumber) 


const intro = `Halo @${memNumber}
Selamat Datang Di ${groupName} 

*_JANGAN LUPA INTRO_*
» Nama: 
» Umur:
» Askot:
Semoga Betah Kak ><
`;

const outro = `Selamat Tinggal @${memNumber}

Sisa Peserta Grub ${memb}
`

try {
var pp_user = await aqua.profilePictureUrl(mem, 'image')
} catch (e) {
var pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
};    
try {
var pp_grup = await aqua.profilePictureUrl(from, 'image')
} catch (e) {
var pp_grup = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
}

let ppUser = await getBuffer(pp_user)
let ppGc = await getBuffer(pp_grup)
let ppGGc = await getBuffer(pp_grup)



let options1 =
{ mentionedJid: [mem],
externalAdReply: {
title: `Group Bot Official 念`, 
//description: 'Now Playing...',
mediaType: 1,
renderLargerThumbnail: true,
thumbnail: ppUser,
mediaUrl: 'https://www.youtube.com/watch?v=JJwLesqqcmM',
sourceUrl: `https://chat.whatsapp.com/DaBXFf82aqwHc03v22E09D`
}
}
                  
//Button In    
let butIn = [{ buttonId: `intro`, buttonText: { displayText: "Omke" }, type: 1 }];         
 
//Button out
let butOut= [{ buttonId: `y`, buttonText: { displayText: "Good Bye" },type: 1 }];   

 
const WelcomeType1 = async(id, text1, desc1, gam1, gam2, but = [], options = {}) => {	
try{

if (Add) {
var image3 = await new canvacord.Welcomer()
        .setUsername(pushname)
        .setDiscriminator(memb)
        .setMemberCount(allmem)
        .setGuildName(groupName)
        .setAvatar(gam1)
        .setBackground(bg)  
        .setColor("border", "#000000")
        .setColor("username-box", "#000000d")
        .setColor("discriminator-box", "#000000")
        .setColor("message-box", "#000000")
        .setColor("title", "#eb26dd")
        .setColor("avatar", "#000000")
        .setColor("background", "#000000")
        .setText("member-count", `+ 1 member!`)
        .setText("title", "welcome")
        .setText("message", `welcome in ${groupName}`)
} else if (Remove) {
var image3 = await new canvacord.Leaver()
        .setUsername(pushname)
        .setDiscriminator(memb)
        .setMemberCount(allmem)
        .setGuildName(groupName)
        .setBackground(bg)  
        .setAvatar(gam1)
        .setColor("border", "#000000")
        .setColor("username-box", "#000000d")
        .setColor("discriminator-box", "#000000")
        .setColor("message-box", "#000000")
        .setColor("title", "#eb26dd")
        .setColor("avatar", "#000000")
        .setColor("background", "#000000")
        .setText("member-count", `- 1 member!`)
        .setText("title", "good bye")
        .setText("message", `we will miss you friends`)
}

let foto = await getRandom(".png")
image3.build()
    .then(async data => {
       await canvacord.write(data,foto);
          let gambar = await fs.readFileSync(foto)

let buttonMessage = {
    contextInfo:options,
    image:gambar,
    caption: text1,
    footer: desc1,
    buttons: but,
    headerType: 4
}

await aqua.sendMessage(from, buttonMessage)


await fs.unlinkSync(foto)
});
  
} catch(err){
console.log(err)

let autoButton = Remove? butOut : butIn
await aqua.sendButImage(id, text1, desc1, gam1, autoButton, options)

}
}


const WelcomeType2 = async(id, text1, desc1, gam1, but = [], options, options1 = {}) => {	

let buttonMessage = {
    contextInfo:options,
    image: gam1,
    caption: text1,
    footer: desc1,
    buttons: but,
    headerType: 4
}
await aqua.sendMessage(from, buttonMessage)     
}

//sendButDoc
const sendButDoc = async(id, text1, desc1, gam1, but = [], options, options1 = {}) => {	
try{
const asuu =['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/zip', 'application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
const mimitny = asuu[Math.floor(Math.random() * asuu.length)]                    
const buttonMessage = {
contextInfo: options,
document: fs.readFileSync('./media/file.docx'),
mimetype: mimitny, 
title : "Footer text", 
fileLength : 999999999, 
pageCount: 1, 
fileName : "Aqua Bot - Md", 
caption: text1,
footer: desc1,
buttons: but,
headerType: "DOCUMENT"
}

return await aqua.sendMessage(id, buttonMessage,options1)
} catch(err){
console.log(err)
let autoButton = Remove? butOut : butIn
await aqua.sendButDoc(id, text1, desc1, gam1, autoButton, options)
}
} 


   
//Group Update Console
if (Remove && OneMem){
console.log(color("[GRUP UPDATE]", "magenta"), color(`${pushname} telah keluar dari gc`,`green`), color(`${groupName}`,`magenta`))
} else  if (Add && OneMem){ 
console.log(color("[GRUP UPDATE]", "magenta"), color(`${pushname} telah bergabung di gc`,`green`), color(`${groupName}`,`magenta`))
}


//Welcome ny
if(Add){ 
if(type1){
WelcomeType1(from, intro, copyright, ppUser, ppGc, butIn,{ "mentionedJid": [mem]})
} else if(type2){
//welcom = await getBuffer(`https://sewa4yeye.herokuapp.com/api/canvas/welcome?nama=${encodeURI(pushname)}&namaGb=${encodeURI(groupName)}&pepeGb=${ppGc}&totalMem=${encodeURI(allmem)}&pepeUser=${ppUser}&bege=https://tinyurl.com/y23xrfhu&apikey=BetaBotz`)
//aqua.sendButImage(from, intro, copyright, welcom, butIn, { "mentionedJid": [mem]})

//aqua.sendMessage(from, { caption: intro, welcom, buttons: butIn, footer: 'tes welcome' })
///aqua.sendMessage(from, { caption: intro, image: {url: `https://sewa4yeye.herokuapp.com/api/canvas/welcome?nama=${encodeURI(memNumber)}&namaGb=${encodeURI(groupName)}&pepeGb=${ppGc}&totalMem=${encodeURI(allmem)}&pepeUser=${ppUser}&bege=https://tinyurl.com/y23xrfhu&apikey=BetaBotz`}, buttons: butIn, footer: 'tes welcome' })
//WelcomeType2(from, intro, copyright, welcom, butIn, { "mentionedJid": [mem]})
aqua.sendMessage(from, { caption: intro, image: {url: `https://sewa4yeye.herokuapp.com/api/canvas/welcome?nama=${encodeURIComponent(memNumber)}&namaGb=${encodeURIComponent(groupName)}&pepeGb=${encodeURIComponent(ppGc)}&totalMem=${encodeURIComponent(allmem)}&pepeUser=${encodeURIComponent(ppUser)}&bege=https://tinyurl.com/y23xrfhu&apikey=BetaBotz`}, buttons: butIn, footer: 'tes welcome' })

} else if(type3){
sendButDoc(from, intro, `Rules:
${desc}`, ppUser, butIn, options1)
} else if(type4){
aqua.sendMessageV2(from, { contextInfo: { mentionedJid: [mem],
externalAdReply: {
showAdAttribution: true,
title: `                  ⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻`, 
body: `                        ━━━━⬤──────────    `,
//description: 'Now Playing...',
mediaType: 1,
renderLargerThumbnail: true,
thumbnail: ppUser,
mediaUrl: `https://www.instagram.com/`,
sourceUrl: `https://wa.me/628388024064?text=lah`
}
}, text: intro})
} else if(type5){
aqua.sendMessage(from, {caption: intro, mentions:[mem], image: ppUser})
//aqua.sendMessage(from, {image: ppUser,caption: intro}, {contextInfo:{ "mentionedJid": [mem]}})
}


} else if(Remove){ 
if(type1){
WelcomeType1(from, outro,  `Hm Kok Keluar ^_^`, ppUser, ppGc, butOut, { "mentionedJid": [mem]})
} else if(type2){
//welcom = await getBuffer(`https://sewa4yeye.herokuapp.com/api/canvas/welcome?nama=${encodeURI(pushname)}&namaGb=${encodeURI(groupName)}&pepeGb=${ppGc}&totalMem=${encodeURI(allmem)}&pepeUser=${ppUser}&bege=https://tinyurl.com/y23xrfhu&apikey=BetaBotz`)
//aqua.sendButImage(from, outro, 'Kok keluarr', welcom, butOut, { "mentionedJid": [mem]})


//aqua.sendMessage(from, { caption: outro, image: welcom, buttons: butIn, footer: 'tes welcome' })
//aqua.sendMessage(from, { caption: outro, image: {url: "https://sewa4yeye.herokuapp.com/api/canvas/welcome?nama=${pushname}&namaGb=${groupName}&pepeGb=${ppGc}&totalMem=${allmem}&pepeUser=${ppUser}&bege=https://tinyurl.com/y23xrfhu&apikey=BetaBotz" ` `${welcom}`}, buttons: butOut, footer: 'tes welcome' })
///aqua.sendMessage(from, {image: {url: `https://sewa4yeye.herokuapp.com/api/canvas/welcome?nama=${encodeURI(memNumber)}&namaGb=${encodeURI(groupName)}&pepeGb=${ppGc}&totalMem=${encodeURI(allmem)}&pepeUser=${ppUser}&bege=https://tinyurl.com/y23xrfhu&apikey=BetaBotz`}, caption: outro, mentions:[mem]})
//WelcomeType2(from, outro,  `Hm Kok Keluar ^_^`, welcom, butOut, { "mentionedJid": [mem]})
aqua.sendMessage(from, { caption: intro, image: {url: `https://sewa4yeye.herokuapp.com/api/canvas/welcome?nama=${encodeURIComponent(memNumber)}&namaGb=${encodeURIComponent(groupName)}&pepeGb=${encodeURIComponent(ppGc)}&totalMem=${encodeURIComponent(allmem)}&pepeUser=${encodeURIComponent(ppUser)}&bege=https://tinyurl.com/y23xrfhu&apikey=BetaBotz`}, buttons: butIn, footer: 'tes welcome' })

} else if(type3){
sendButDoc(from, outro, `Hm Kok Keluar ^_^`, ppUser, butOut, options1)
} else if(type4){
aqua.sendMessageV2(from, { contextInfo: { mentionedJid: [mem],
externalAdReply: {
showAdAttribution: true,
title: `                  ⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻`, 
body: `                        ━━━━⬤──────────    `,
//description: 'Now Playing...',
mediaType: 1,
renderLargerThumbnail: true,
thumbnail: ppUser,
mediaUrl: `https://www.instagram.com/`,
sourceUrl: `https://wa.me/628388024064?text=lah`
}
}, text: outro})
} else if(type5){
aqua.sendMessage(from, {caption: outro, mentions:[mem], image: ppUser})
//aqua.sendMessage(from, {image: ppUser,caption: outro}, {contextInfo:{ "mentionedJid": [mem]}})
}
}



 
} catch (err) {
console.log(color('GROUP : %s', 'white'), color(err, 'green'))
}   
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

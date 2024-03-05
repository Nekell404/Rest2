

require('./config')
const { default: makeWASocket, 
useSingleFileAuthState,
//useMultiFileAuthState , 
DisconnectReason, 
fetchLatestBaileysVersion, 
generateForwardMessageContent, 
prepareWAMessageMedia, 
generateWAMessageFromContent, 
generateMessageID, 
generateWAMessage,
getContentType,
downloadContentFromMessage, 
makeInMemoryStore, 
relayMessage,
jidDecode, 
proto } = require("@adiwajshing/baileys")
const { state, saveState } = useSingleFileAuthState(`./${sessionName}.json`)
const pino = require('pino')
const fs = require('fs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const { color, bgcolor } = require("./lib/color")
const  { Boom } = require('@hapi/boom')
const figlet = require('figlet')
const canvacord = require("canvacord");
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const CFonts = require('cfonts')
const spin = require('spinnies')
const { smsg, isUrl, getRandom, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, runtime } = require('./lib/myfunc')
const forward = { forwardingScore: 10000000, isForwarded: true, sendEphemeral: true}
let session = `./session/${sessionName}.json`
let welcome = JSON.parse(fs.readFileSync('./database/welcome.json'));

/*
require("http").createServer((_, res) => res.end(`Uptime Robot`)).listen(3000)
*/
/*
const express = require('express');
//const path    = require('path');
const app     = express();
const port    = 3000;
const appRouting    = require('./routers/app-route');

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use('/assets',express.static(path.join(__dirname, 'assets')));

app.use('/', appRouting);

app.listen(port, () => console.log(`Bot running on http://localhost:${port}`));
*/

//apinya
__path = process.cwd();
var favicon = require('serve-favicon');
var express = require('express'),
    cors = require('cors'),
    secure = require('ssl-express-www');
const PORT = process.env.PORT || 8080 || 5000 || 3000
//var { color } = require('./lib/color.js')

var mainrouter = require('./routes/main'),
    apirouter = require('./routes/api')

var app = express()
app.enable('trust proxy');
app.set("json spaces",2)
app.use(cors())
app.use(secure)
app.use(favicon(__path +'/views/favicon.ico'))
app.use(express.static("public"))

app.use('/', mainrouter);
app.use('/api', apirouter);

app.listen(PORT, () => {
    console.log(color("Server running on port " + PORT,'green'))
})



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



  const spinner = { 
  "interval": 120,
  "frames": [
"🕛 [░░░░░░░░░░░░░░░]",
"🕐 [■░░░░░░░░░░░░░░]",
"🕑 [■■░░░░░░░░░░░░░]",
"🕒 [■■■░░░░░░░░░░░░]",
"🕒 [■■■■░░░░░░░░░░░]",
"🕓 [■■■■■░░░░░░░░░░]",
"🕔 [■■■■■■░░░░░░░░░]",
"🕔 [■■■■■■■░░░░░░░░]",
"🕕 [■■■■■■■■░░░░░░░]",
"🕕 [■■■■■■■■■░░░░░░]",
"🕖 [■■■■■■■■■■░░░░░]",
"🕗 [■■■■■■■■■■■░░░░]",
"🕘 [■■■■■■■■■■■■░░░]",
"🕘 [■■■■■■■■■■■■■░░]",
"🕙 [■■■■■■■■■■■■■■░]",
"🕚 [■■■■■■■■■■■■■■■]"
  ]}
let globalSpinner;
const getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'green', spinner, disableSpins});
return globalSpinner;
}
let spins = getGlobalSpinner(false)
const start = (id, text) => {
spins.add(id, {text: text})
}
const success = (id, text) => {
spins.succeed(id, {text: text})

}


CFonts.say('Bot Wea', {
  font: 'chrome',
  align: 'left',
  gradient: ['red', 'magenta']
})


const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

async function startAqua() {
//  const { state, saveCreds } = await useMultiFileAuthState("session")
  let { version, isLatest } = await fetchLatestBaileysVersion()
  
  const aqua = makeWASocket({
        logger: pino({ level: 'silent' }),
       // printQRInTerminal: true,
        //browser: ['Takim Tod','IOS','4.1.0'],
        browser: ['Takim Tod Multi Device','Safari','1.0.0'],
        auth: state,
        
      getMessage: async (key) => {
          if(store) {
              const m = await store.loadMessage(key.remoteJid, key.id, undefined)
              return m?.message || undefined
          }
          return {             
          }
      }
      
    })


aqua.waVersion = version
    store.bind(aqua.ev)


 
        // Anti Call
    aqua.ev.on('call', async (json) => {
    let botNumber = await aqua.decodeJid(aqua.user.id)
    console.log(json)
    for (let kimd of json) {
    if (kimd.isGroup == false) {
    if (kimd.status == "offer") {
    let pa7rick = await aqua.sendTextWithMentions(kimd.from, `*${aqua.user.name}* tidak bisa menerima panggilan ${kimd.isVideo ? `video` : `suara`}. Maaf kamu akan diblockir!!\nSilahkan Hubungi Owner Untuk Dibuka`)
    aqua.sendContact(kimd.from, global.pemilik, pa7rick)
    await sleep(5000)
    await aqua.updateBlockStatus(kimd.from, "block")
    }
    }
    }
    })

   


    aqua.ev.on('messages.upsert', async chatUpdate => {
        try {
        mek = chatUpdate.messages[0]
        if (!mek.message) return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (mek.key && mek.key.remoteJid === 'status@broadcast') return
        if (!aqua.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        m = smsg(aqua, mek, store)
        require("./kimmy")(aqua, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })



//Welcome
	aqua.ev.on('group-participants.update', async (anu) => {
	const isWelcome = welcome.includes(anu.id) ? true : false
    console.log(anu)
    if(isWelcome){
    try {
    let metadata = await aqua.groupMetadata(anu.id)
    let participants = anu.participants
    for (let num of participants) {
    
    // Get Pp Group And User
    try {
    ppuser = await aqua.profilePictureUrl(num, 'image')
    } catch {
    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
    }
    try {
    ppgroup = await aqua.profilePictureUrl(anu.id, 'image')
    } catch {
    ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
    }
memb = metadata.participants.length
const nama = await aqua.getName(num)
const desc = metadata.desc
const groupName = metadata.subject
const ppUser = await getBuffer(ppuser)
const ppGc = await getBuffer(ppgroup)  
const bg = "https://telegra.ph/file/165e1368b3d4df03b6504.jpg"
const Remove = anu.action == 'remove'
const Add = anu.action == 'add'
const Promote = anu.action == 'promote'
const Demote = anu.action == 'demote'

const intro = `Halo @${num.split('@')[0]}\nSelamat Datang Di ${groupName} \n\nSemoga Betah Yahh`;
const outro = `Selamat Tinggal @${num.split('@')[0]}\n\nSisa Peserta Grub ${memb}`
const promo = `Selamat untuk @${num.split('@')[0]} Jadi Admin Di ${groupName}`
const demo = `@${num.split('@')[0]} Demote From ${groupName}`


//button
let btnwel = [{buttonId: 'inntro', buttonText: {displayText: 'Omkee'}, type: 1},]
let btnbye = [{buttonId: 'lunga', buttonText: {displayText: 'Goodbye'}, type: 1},]
let btnpro= [{buttonId: 'inntro', buttonText: {displayText: 'ok'}, type: 1},]
let btndem = [{buttonId: 'lunga', buttonText: {displayText: 'yahaha'}, type: 1},]


const WelcomeType1 = async(id, text1, desc1, gam1, gam2, but = [], options = {}) => {	
try{

if (anu.action == 'add'){
var image3 = await new canvacord.Welcomer()
        .setUsername(nama)
        .setDiscriminator(`${memb}`)
        .setMemberCount(memb)
        .setGuildName(metadata.subject)
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
        .setText("title", "Welcome")
        .setText("message", `Welcome in ${metadata.subject}`)

} else if (anu.action == 'remove') {  
var image3 = await new canvacord.Leaver()
        .setUsername(nama)
        .setDiscriminator(`${memb}`)
        .setMemberCount(memb)
        .setGuildName(metadata.subject)
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
        .setText("title", "GoodBye")
        .setText("message", `We will miss you friends`)
}

if (anu.action == 'promote'){
var image3 = await new canvacord.Welcomer()
        .setUsername(nama)
        .setDiscriminator(`${memb}`)
        .setMemberCount(memb)
        .setGuildName(metadata.subject)
        .setAvatar(gam1)
        .setBackground(bg)  
        .setColor("border", "#000000")
        .setColor("username-box", "#000000d")
        .setColor("discriminator-box", "#000000")
        .setColor("message-box", "#000000")
        .setColor("title", "#eb26dd")
        .setColor("avatar", "#000000")
        .setColor("background", "#000000")
        .setText("member-count", `+ 1 admin!`)
        .setText("title", "Promote")
        .setText("message", `Selamat Kamu Jadi Admin`)


} else if (anu.action == 'demote') {  
var image3 = await new canvacord.Leaver()
        .setUsername(nama)
        .setDiscriminator(`${memb}`)
        .setMemberCount(memb)
        .setGuildName(metadata.subject)
        .setBackground(bg)  
        .setAvatar(gam1)
        .setColor("border", "#000000")
        .setColor("username-box", "#000000d")
        .setColor("discriminator-box", "#000000")
        .setColor("message-box", "#000000")
        .setColor("title", "#eb26dd")
        .setColor("avatar", "#000000")
        .setColor("background", "#000000")
        .setText("member-count", `- 1 admin!`)
        .setText("title", "Demote")
        .setText("message", `Yah Kesian Jadi Member :v`)
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
    headerType: 1
}

await aqua.sendMessage(anu.id, buttonMessage)
await fs.unlinkSync(foto)
});
 } catch(err){
console.log(err)
let autoButton = Remove? btnbye : btnwel
await aqua.sendButImage(id, text1, desc1, gam1, autoButton, options)
}
}


if (anu.action == 'add') {
      WelcomeType1(anu.id, intro, `Rules:\n${desc}`, ppUser, ppGc, btnwel, { "mentionedJid": [num]})
} else if (anu.action == 'remove') {  
    	WelcomeType1(anu.id, outro, 'Bot Wea', ppUser, ppGc, btnbye, { "mentionedJid": [num]}) 
} else if (anu.action == 'promote') {  
    	WelcomeType1(anu.id, promo, `Cie Jadi Admin :v`, ppUser, ppGc, btnpro,  { "mentionedJid": [num]})
} else if (anu.action == 'demote') {  
        WelcomeType1(anu.id, demo, `Kesian :v`, ppUser, ppGc, btndem,  { "mentionedJid": [num]})	
}
}        
} catch (err) {
console.log(err)
aqua.sendMessage(`628388024064@s.whatsapp.net`, {text: `${err}`})
}
}
})





    // Group Update
    aqua.ev.on('groups.update', async pea => {    	
       try {
       ppgc = await aqua.profilePictureUrl(pea[0].id, 'image')
       } catch {
       ppgc = 'https://shortlink.hisokaarridho.my.id/rg1oT'
       }
       let ppny = { url : ppgc }
       if (pea[0].announce == true) {
       aqua.send5ButImg(pea[0].id, `「 *Group Settings Change* 」\n\nGroup telah ditutup oleh admin, Sekarang hanya admin yang dapat mengirim pesan !`, `Group Settings Change Message by Aqua Bot `, ppny, [])
       } else if(pea[0].announce == false) {
       aqua.send5ButImg(pea[0].id, `「 *Group Settings Change* 」\n\nGroup telah dibuka oleh admin, Sekarang peserta dapat mengirim pesan !`, `Group Settings Change Message by Aqua Bot`, ppny, [])
       } else if (pea[0].restrict == true) {
       aqua.send5ButImg(pea[0].id, `「 *Group Settings Change* 」\n\nInfo group telah dibatasi, Sekarang hanya admin yang dapat mengedit info group !`, `Group Settings Change Message by Aqua Bot`, ppny, [])
       } else if (pea[0].restrict == false) {
       aqua.send5ButImg(pea[0].id, `「 *Group Settings Change* 」\n\nInfo group telah dibuka, Sekarang peserta dapat mengedit info group !`, `Group Settings Change Message by Aqua Bot`, ppny, [])
       } else {
       aqua.send5ButImg(pea[0].id, `「 *Group Settings Change* 」\n\nGroup Subject telah diganti menjadi *${pea[0].subject}*`, `Group Settings Change Message by Aqua Bot`, ppny, [])
     }
    })



    // Setting
    aqua.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }

    
    aqua.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = aqua.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })


    aqua.getName = (jid, withoutContact  = false) => {
        id = aqua.decodeJid(jid)
        withoutContact = aqua.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = aqua.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === aqua.decodeJid(aqua.user.id) ?
            aqua.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }

   
    aqua.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await aqua.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await aqua.getName(i + '@s.whatsapp.net')}\nFN:${await aqua.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:takimtod@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://instagram.com/zyee_ez\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	aqua.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
    }

    
    aqua.setStatus = (status) => {
        aqua.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }

	
    aqua.public = true
    aqua.serializeM = (m) => smsg(aqua, m, store)



    aqua.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update	    
        if (connection === 'close') {
        let reason = new Boom(lastDisconnect?.error)?.output?.statusCode
          if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); process.exit(); }
           if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); startAqua(); }
           else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); startAqua(); }
           else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); process.exit(); }
           else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Delete Session and Scan Again.`); process.exit(); }
           else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); startAqua(); }
           else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); startAqua(); }
           else { console.log(`Unknown DisconnectReason: ${reason}|${connection}`) }            
        } else if (connection === 'connecting') {
console.log(`${color(`[`,`white`)+color(`1`,`red`)+color(`]`,`white`)}`,`WA v${version.join('.')}`)
//await sleep(400) 
console.log(`${color(`[`,`white`)+color(`2`,`red`)+color(`]`,`white`)}`,`${calender}`)
//await sleep(400) 
console.log(`${color(`[`,`white`)+color(`3`,`red`)+color(`]`,`white`)}`,`https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`)
//await sleep(400)  
console.log(`${color(`[`,`white`)+color(`4`,`red`)+color(`]`,`white`)}`,"data 5") 
//await sleep(400)  
console.log(color(`]─`,`magenta`),`「`,  color(`Aqua Bot`,`red`), `」`,  color(`─[`,`magenta`))
//await sleep(400)  
start(`1`,`Connecting...`)
} else if (connection === 'open') { 
aqua.sendText(`628388024064@s.whatsapp.net`, `Tersambung Kembali`)
success(`1`,`[■■■■■■■■■■■■■■■] Connected`) 
}
      //console.log('Connected...', update)
})


aqua.ev.on('creds.update', saveState)
    //aqua.ev.on('creds.update', await saveCreds)




// Add Other
aqua.sendMessageV2 = async (chatId, message, options = {}) => {
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await aqua.relayMessage(chatId, generate.message, { messageId: generate.key.id })
  }
  
/**
aqua.logger = {
        ...aqua.logger,
        info(...args) { console.log(chalk.bold.rgb(57, 183, 16)(`INFO [${chalk.rgb(255, 255, 255)(new Date())}]:`), chalk.cyan(...args)) },
        error(...args) { console.log(chalk.bold.rgb(247, 38, 33)(`ERROR [${chalk.rgb(255, 255, 255)(new Date())}]:`), chalk.rgb(255, 38, 0)(...args)) },
        warn(...args) { console.log(chalk.bold.rgb(239, 225, 3)(`WARNING [${chalk.rgb(255, 255, 255)(new Date())}]:`), chalk.keyword('orange')(...args)) }
}
*/  

    
//send Button Text
aqua.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
let buttonMessage = {
text,
footer,
buttons,
headerType: 2,
...options
}        
aqua.sendMessage(jid, buttonMessage, { quoted, ...options })
}


//send Button Image
aqua.sendButImage = async(id, text1, desc1, gam1, but = [], options1 = {}) => {
let buttonMessage = {
image: gam1,
caption: text1,
footer: desc1,
buttons: but,
headerType: 4
}
return await aqua.sendMessage(id, buttonMessage, options1)
}  


//Button Gif ✓
aqua.sendButGif = async (id, text1, desc1, gam1, but = [],gam, options = {}) => {
const buttonMessage = { 
buttons: but,
video: gam1, 
jpegThumbnail: gam,
caption: text1, 
footer: desc1, 
gifPlayback: true }
return await aqua.sendMessage(id, buttonMessage, options)
}    

            
//Button Video ✓
aqua.sendButVideo = async (id, text1, desc1, gam1, but = [], options = {}) => {
const listMessage = { 
buttons: but,
video: gam1, 
caption: text1, 
footer: desc1 }
return await aqua.sendMessage(id, listMessage, options)
}                        
                                                
///Button Loc ✓
aqua.sendButLoc = async(id, text1, desc1, gam1, but = [], options1 = {}) => {
let buttonMessage = {
location: { jpegThumbnail: gam1 } ,
caption: text1,
footer: desc1,
buttons: but,
headerType: "LOCATION"
}
return await aqua.sendMessage(id, buttonMessage, options1)
}
      

//send Button Text
aqua.sendButMessage = async(id, text1, desc1, but = [], options) => {
let buttonMessage = {
text: text1,
footerc: desc1,
buttons: but,
headerType: 1,
}
 return aqua.sendMessage(id, buttonMessage, {quoted: m})
}  


//send Button Doc
aqua.sendButDoc = async(id, text1, desc1, gam1, but = [], options, options1 = {}) => {	
const asuu =['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/zip', 'application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
const mimitny = asuu[Math.floor(Math.random() * asuu.length)]                    
const buttonMessage = {
contextInfo: options,
document: fs.readFileSync('./media/file.docx'),
mimetype: mimitny, 
title : "Footer text", 
fileLength : 99999, 
pageCount: 1, 
fileName : "Bot WhatsApp ꨄ︎", 
caption: text1,
footer: desc1,
buttons: but,
headerType: "DOCUMENT"
}
return await aqua.sendMessage(id, buttonMessage,options1)
} 

  //resize image
aqua.reSize = async (image, width, height) => {
       let jimp = require('jimp')
       var anjg = await jimp.read(image);
       var kiyomasa = await anjg.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
       return kiyomasa
}
  

//send listMsg
aqua.sendListMsg = (jid, text = '', footer = '', title = '' , butText = '', sects = [], quoted) => {
let sections = sects
var listMes = {
text: text,
footer: footer,
 title: title,
buttonText: butText,
 sections
}     
aqua.sendMessage(jid, listMes, { quoted: quoted })
}



//send Katalog
aqua.sendKatalog = async (jid , title = '' , desc = '', gam , options = {}) =>{
   let message = await prepareWAMessageMedia({ image: gam    }, { upload: aqua.waUploadToServer })
const tod = generateWAMessageFromContent(jid,
{"productMessage": {
"product": {
"productImage": message.imageMessage,
"productId": "9999",
"title": title,
"description": desc,
"currencyCode": "IDR",
"priceAmount1000": "100000",
"url": `https://www.youtube.com/watch?v=TOmXzkWuCWk`,
"productImageCount": 1,
"salePriceAmount1000": "0"
},
"businessOwnerJid": `${nomerOwner}@s.whatsapp.net`
}
}, options)
return aqua.relayMessage(jid, tod.message, {messageId: tod.key.id})
} 



//send Image Ke Sticker
aqua.sendImageAsSticker2 = async (jid, media, m, options = {}) => {
let { Sticker, StickerTypes } = require('wa-sticker-formatter')
let jancok = new Sticker(media, {
    pack: packname, // The pack name
    author: author, // The author name
    type: StickerTypes.FULL, // The sticker type
    categories: ['', ''], // The sticker category
    id: '12345', // The sticker id
    quality: 50, // The quality of the output file
    background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await aqua.sendMessage(jid,{sticker: nah},{quoted: m})
return await fs.unlinkSync(stok)
 }


//Button 5 template Gif ✓
aqua.send5ButGif = async (id, text1, desc1, gam1, but = [],gam, options = {}) => {
const listMessage = { 
templateButtons: but,
video: gam1, 
jpegThumbnail: gam,
caption: text1, 
footer: desc1, 
gifPlayback: true }
return await aqua.sendMessage(id, listMessage, options)
}

//Button 5 template Image  ✓
aqua.send5ButImg = async(id, text1, desc1, gam1, but = [], options = {}) => {
const listMessage = {
templateButtons: but,
image: gam1, 
caption: text1, 
footer: desc1 }
return await aqua.sendMessage(id, listMessage, options)
}                

//Button 5 template Loc ✓
aqua.send5ButLoc = async(id, text1, desc1, gam1, but = []) => {
      let template = generateWAMessageFromContent(id, proto.Message.fromObject({
      templateMessage: {
      hydratedTemplate: {
      locationMessage: { 
      jpegThumbnail: gam1},
      hydratedContentText: text1,
      hydratedFooterText: desc1,
      hydratedButtons: but
      }
      }
      }), {});
      return await aqua.relayMessage(id, template.message,{ messageId: template.key.id })                   
      }

 /* 
aqua.send5ButLoc = async(id, text1, desc1, gam1, but = [], options = {}) => {
const listMessage = { 
templateButtons: but,
location: { jpegThumbnail: gam1 },
caption: text1, 
footer: desc1 }
return await aqua.sendMessage(id, listMessage, options)
}
*/
  
//Button 5 template Video ✓
aqua.send5ButVideo = async (id, text1, desc1, gam1, but = [], options = {}) => {
const listMessage = { 
templateButtons: but,
video: gam1, 
caption: text1, 
footer: desc1 }
return await aqua.sendMessage(id, listMessage, options)
}


  aqua.resize = async (image, width, height) => {
       let jimp = require('jimp')
       var anjg = await jimp.read(image);
       var kiyomasa = await anjg.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
       return kiyomasa
  }
  
//Send Teks
aqua.sendText = (jid, text, quoted = '', options) => aqua.sendMessage(jid, { text: text, ...options }, { quoted })


//send Image
aqua.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await aqua.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}


//send Video
aqua.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await aqua.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
}


//send Audio
aqua.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
 return await aqua.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }


//send Teks Tag
aqua.sendTextWithMentions = async (jid, text, quoted, options = {}) => aqua.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

     
//send Image Ke Sticker
    aqua.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }
        await aqua.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

    
//send Video Ke Sticker
    aqua.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }
        await aqua.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

	

   aqua.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }



    aqua.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}      
	return buffer
     } 

    

    aqua.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await aqua.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./lib/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await aqua.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }



    aqua.sendMedia2 = async (jid, path, quoted, options = {}) => {
    let { ext, mime, data } = await aqua.getFile2(path)
    let messageType = mime.split("/")[0]
    let pase = messageType.replace('application', 'document') || messageType
    return await aqua.sendMessage(jid, { [`${pase}`]: data, mimetype: mime, ...options }, { quoted })
    } 

    

    aqua.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}



        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await aqua.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }



    aqua.cMod = (jid, copy, text = '', sender = aqua.user.id, options = {}) => {
        //let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === aqua.user.id
        return proto.WebMessageInfo.fromObject(copy)
    }




    aqua.getFile2 = async (path, save) => {
    let res, filename
    let data = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (res = await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : typeof path === 'string' ? path : Buffer.alloc(0)
    if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
    let type = await FileType.fromBuffer(data) || {
    mime: 'application/vnd.android.package-archive',
    ext: '.bin'
    }
    if (data && save && !filename) (filename = path.join(__dirname, './src/' + new Date * 1 + '.' + type.ext), await fs.promises.writeFile(filename, data))
    return {
    res,
    filename,
    ...type,
    data
    }
    }

    
    aqua.getFile = async (path, save) => {
    let res, filename
    let data = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (res = await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : typeof path === 'string' ? path : Buffer.alloc(0)
    if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
    let type = await FileType.fromBuffer(data) || {
    mime: 'application/octet-stream',
    ext: '.bin'
    }
    if (data && save && !filename) (filename = path.join(__dirname, './src/' + new Date * 1 + '.' + type.ext), await fs.promises.writeFile(filename, data))
    return {
    res,
    filename,
    ...type,
    data
    }
    }


    aqua.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }
    }




return aqua
}
startAqua()



module.exports=app;


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
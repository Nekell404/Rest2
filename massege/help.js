const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");
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

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
const { runtime } = require('../lib/myfunc')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
let global = fs.readFileSync('./config.js')


exports.menu = (global, m, prefix, pushname, isPremium) => {
return `*────── [ Aqua Bot - Md ] ──────*

    *${ucapanWaktu} ${pushname}*, 


 Status : ${isPremium ? 'Premium' : 'Gratisan'}
 Limit : ${isPremium ? 'Unlimited' : `${global.db.users[m.sender].limit}`}


╭─❒ 「  *Main Menu* 」
├ ${prefix}ping
├ ${prefix}tqto
├ ${prefix}grubbot
├ ${prefix}runtime
├ ${prefix}owner
├ ${prefix}sewa
╰❒

╭─❒ 「  *Downloader Menu* 」
├ ${prefix}tiktoknowm  _linktt_
├ ${prefix}tiktokwm  _linktt_
├ ${prefix}tiktokmusik _linktt_
├ ${prefix}ytmp3  _linkyt_
├ ${prefix}ytmp4  _linkyt_ 
├ ${prefix}twitterdl  _linktw_ 
├ ${prefix}instagram  _linkig_
├ ${prefix}play   _teks_
├ ${prefix}playmusik  _teks_
├ ${prefix}jpg  _link_ 
├ ${prefix}mediafire  _link_
├ ${prefix}pinterestdl  _link_
├ ${prefix}getmusic 
├ ${prefix}getvideo 
╰❒

╭─❒ 「  *Convert Menu* 」
├ ${prefix}toimg    
├ ${prefix}nobg
├ ${prefix}sticker     
├ ${prefix}tovideo     
├ ${prefix}togif    
├ ${prefix}tourl     
├ ${prefix}bitly
├ ${prefix}tovn     
├ ${prefix}tomp3     
├ ${prefix}toaudio    
├ ${prefix}styletext     
╰❒

╭─❒ 「  *Search Menu* 」
├ ${prefix}grupwa  
├ ${prefix}ytsearch
├ ${prefix}lirik
├ ${prefix}gempa
├ ${prefix}wattpad
├ ${prefix}gimage 
├ ${prefix}searchgc
├ ${prefix}meme
├ ${prefix}darkjoke
├ ${prefix}wikimedia 
├ ${prefix}google        
├ ${prefix}gimage            
├ ${prefix}pinterest                     
╰❒

╭─❒ 「  *Mager Nulis* 」
├ ${prefix}nuliskiri _teks_
├ ${prefix}nuliskanan _teks_
├ ${prefix}foliokiri _teks_
├ ${prefix}foliokanan _teks_
╰❒

╭─❒ 「  *Jadwal Tv* 」
├ ${prefix}jadwalbola
├ ${prefix}jadwaltv
╰❒

╭─❒ 「  *Random Sticker* 」
├ ${prefix}stikpetrik
├ ${prefix}stikdoge
├ ${prefix}stikgura
├ ${prefix}stikbucin
╰❒

╭─❒ 「  *Database* 」
├ ${prefix}addvn
├ ${prefix}delvn
├ ${prefix}listvn
╰❒

╭─❒ 「  *Stalking* 」
├ ${prefix}stalkig    
├ ${prefix}stalkff
├ ${prefix}ghstalk
╰❒
 
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎╭─❒ 「  *Group Menu* 」
├ ${prefix}linkgroup
├ ${prefix}grupinfo
├ ${prefix}getppgc
├ ${prefix}totag 
├ ${prefix}listonline
├ ${prefix}getidgc
├ ${prefix}ephemeral 
├ ${prefix}setppgc 
├ ${prefix}setname 
├ ${prefix}setdesc
├ ${prefix}group 
├ ${prefix}editinfo
├ ${prefix}add @user
├ ${prefix}kick @user
├ ${prefix}hidetag 
├ ${prefix}tagall 
├ ${prefix}antilink 
├ ${prefix}antivirtex 
├ ${prefix}antiwame 
├ ${prefix}mute
├ ${prefix}promote @user
├ ${prefix}demote @user
├ ${prefix}vote 
├ ${prefix}devote
├ ${prefix}upvote
├ ${prefix}cekvote
├ ${prefix}hapusvote
╰❒

╭─❒ 「  *Semoji* 」
├ ${prefix}emojimix
├ ${prefix}emojiap
├ ${prefix}emojigo
├ ${prefix}emojisa
├ ${prefix}emojims
├ ${prefix}emojiwa
├ ${prefix}emojitw
├ ${prefix}emojifb
╰❒

╭─❒ 「  *Profil Wa Couple* 」
├ ${prefix}ppcouple
├ ${prefix}couple
╰❒

╭─❒ 「  *Random Vitur* 」
├ ${prefix}afk
├ ${prefix}kodebahasa
├ ${prefix}cecan
├ ${prefix}cogan
├ ${prefix}truth
├ ${prefix}dare
├ ${prefix}quotes
├ ${prefix}qrcode
├ ${prefix}shortlink     
├ ${prefix}take
├ ${prefix}film 
├ ${prefix}translate
├ ${prefix}tts 
╰❒ 
 
╭─❒ 「  *Random Wallpaper* 」
├ ${prefix}wallpaper 
├ ${prefix}wallml
├ ${prefix}cyberspace 
├ ${prefix}games 
├ ${prefix}pubg 
├ ${prefix}islamic 
├ ${prefix}mountain
├ ${prefix}programming 
├ ${prefix}technology 
├ ${prefix}tatasurya  
├ ${prefix}hekel
├ ${prefix}motor 
├ ${prefix}mobil 
├ ${prefix}aesthetic
├ ${prefix}wallhp 
├ ${prefix}anjing
├ ${prefix}kucing 
├ ${prefix}keneki 
├ ${prefix}megumin 
├ ${prefix}yotsuba 
├ ${prefix}kartun
├ ${prefix}chiho 
├ ${prefix}tejina 
├ ${prefix}yumeko 
├ ${prefix}shinomiya 
├ ${prefix}pentol
├ ${prefix}toukachan 
├ ${prefix}akira 
├ ${prefix}itori 
├ ${prefix}kurumi
├ ${prefix}sagiri 
├ ${prefix}eba 
├ ${prefix}deidara 
├ ${prefix}itachi 
├ ${prefix}madara
╰❒ 
 
╭─❒ 「  *Tools* 」
├ ${prefix}getpp
├ ${prefix}chat
├ ${prefix}q
├ ${prefix}readmore
├ ${prefix}react
├ ${prefix}apatuh
├ ${prefix}kalkulator
├ ${prefix}ss
├ ${prefix}ssweb-hp
├ ${prefix}ssweb-pc
╰❒

╭─❒ 「  *Random Anime* 」
├ ${prefix}loli 
├ ${prefix}anime
├ ${prefix}manga
├ ${prefix}character
├ ${prefix}milf 
├ ${prefix}waifu
├ ${prefix}husbu  
├ ${prefix}cry
├ ${prefix}kill
├ ${prefix}hug
├ ${prefix}pat
├ ${prefix}lick
├ ${prefix}kiss
├ ${prefix}bite
├ ${prefix}yeet
├ ${prefix}neko
├ ${prefix}bully
├ ${prefix}bonk
├ ${prefix}wink
├ ${prefix}poke
├ ${prefix}nom
├ ${prefix}slap
├ ${prefix}smile
├ ${prefix}wave
├ ${prefix}awoo
├ ${prefix}blush
├ ${prefix}smug
├ ${prefix}glomp
├ ${prefix}happy
├ ${prefix}dance
├ ${prefix}cringe
├ ${prefix}cuddle
├ ${prefix}highfive
├ ${prefix}shinobu
├ ${prefix}megumin
├ ${prefix}handhold
├ ${prefix}zettai 
├ ${prefix}thighs 
├ ${prefix}panties 
├ ${prefix}pussy 
├ ${prefix}tentacles
├ ${prefix}masturbasi 
├ ${prefix}jahy 
├ ${prefix}glases  
├ ${prefix}foot 
├ ${prefix}hentai 
├ ${prefix}orgy 
├ ${prefix}nekopoi 
├ ${prefix}manga 
├ ${prefix}ass 
├ ${prefix}ahegao
├ ${prefix}bdsm 
├ ${prefix}cuckold 
├ ${prefix}cum 
├ ${prefix}femdom 
├ ${prefix}ero
╰❒ 

╭─❒ 「  *Islamic Menu* 」
├ ${prefix}iqra
├ ${prefix}hadist
├ ${prefix}alquran
├ ${prefix}juzamma
├ ${prefix}tafsirsurah
├ ${prefix}listsurah
╰❒

╭─❒ 「  *Fun Menu* 」
├ ${prefix}halah
├ ${prefix}hilih
├ ${prefix}huluh
├ ${prefix}heleh
├ ${prefix}holoh
├ ${prefix}jodohku
├ ${prefix}cekbapak
├ ${prefix}jadian
├ ${prefix}delttt
├ ${prefix}tictactoe
├ ${prefix}suitpvp @tag
╰❒

╭─❒ 「  *Kerang Ajaib* 」
├ ${prefix}bisakah
├ ${prefix}apakah
├ ${prefix}bagaimanakah
├ ${prefix}kapankah
├ ${prefix}kapan
╰❒ 

╭─❒ 「   *Text To Png* 」 
├ ${prefix}attp
├ ${prefix}ttp
├ ${prefix}ttpred
├ ${prefix}ttpblue
├ ${prefix}ttpyellow
├ ${prefix}ttppink
├ ${prefix}ttpviolet
├ ${prefix}ttpgreen
├ ${prefix}ttppurple
├ ${prefix}ttpmagenta
├ ${prefix}ttp2
├ ${prefix}ttp2red
├ ${prefix}ttp2blue
├ ${prefix}ttp2yellow
├ ${prefix}ttp2pink
├ ${prefix}ttp2violet
├ ${prefix}ttp2green
├ ${prefix}ttp2purple
├ ${prefix}ttp2magenta
╰❒
 
╭─❒ 「  *Berita* 」
├ ${prefix}fajar-news
├ ${prefix}cnn-news
├ ${prefix}layarkaca-search
├ ${prefix}cnbc-news
├ ${prefix}tribun-news
├ ${prefix}indozone-news
├ ${prefix}kompas-news
├ ${prefix}detik-news
├ ${prefix}daily-news
├ ${prefix}inews-news
├ ${prefix}okezone-news
├ ${prefix}sindo-news
├ ${prefix}tempo-news
├ ${prefix}antara-news
├ ${prefix}kontan-news
├ ${prefix}merdeka-news
├ ${prefix}jalantikus-meme
╰❒

╭─❒ 「  *Cerpen* 」
├ ${prefix}cerpen Anak
├ ${prefix}cerpen Bahasa Daerah
├ ${prefix}cerpen Bahasa Inggris
├ ${prefix}cerpen Bahasa Jawa
├ ${prefix}cerpen Bahasa Sunda
├ ${prefix}cerpen Budaya
├ ${prefix}cerpen Cinta
├ ${prefix}cerpen Cinta Islami
├ ${prefix}cerpen Cinta Pertama
├ ${prefix}cerpen Cinta Romantis
├ ${prefix}cerpen Cinta Sedih
├ ${prefix}cerpen Cinta Segitiga
├ ${prefix}cerpen Cinta Sejati
├ ${prefix}cerpen Galau
├ ${prefix}cerpen Gokil
├ ${prefix}cerpen Inspiratif
├ ${prefix}cerpen Jepang
├ ${prefix}cerpen Kehidupan
├ ${prefix}cerpen Keluarga
├ ${prefix}cerpen Kisah Nyata
├ ${prefix}cerpen Korea
├ ${prefix}cerpen Kristen
├ ${prefix}cerpen Liburan
├ ${prefix}cerpen Lingkungan
├ ${prefix}cerpen Lucu
├ ${prefix}cerpen Malaysia
├ ${prefix}cerpen Mengharukan
├ ${prefix}cerpen Misteri
├ ${prefix}cerpen Motivasi
├ ${prefix}cerpen Nasihat
├ ${prefix}cerpen Nasionalisme
├ ${prefix}cerpen Olahraga
├ ${prefix}cerpen Patah Hati
├ ${prefix}cerpen Penantian
├ ${prefix}cerpen Pendidikan
├ ${prefix}cerpen Pengalaman Pribadi
├ ${prefix}cerpen Pengorbanan
├ ${prefix}cerpen Penyesalan
├ ${prefix}cerpen Perjuangan
├ ${prefix}cerpen Perpisahan
├ ${prefix}cerpen Persahabatan
├ ${prefix}cerpen Petualangan
├ ${prefix}cerpen Ramadhan
├ ${prefix}cerpen Remaja
├ ${prefix}cerpen Renungan
├ ${prefix}cerpen Rindu
├ ${prefix}cerpen Rohani
├ ${prefix}cerpen Romantis
├ ${prefix}cerpen Sastra
├ ${prefix}cerpen Sedih
├ ${prefix}cerpen Sejarah
├ ${prefix}cerpen Slice Of Life
├ ${prefix}cerpen Terjemahan
├ ${prefix}cerpen Thriller
╰❒

╭─❒ 「  *Voice Changer* 」
├ ${prefix}bass
├ ${prefix}blown
├ ${prefix}deep
├ ${prefix}earrape
├ ${prefix}fast
├ ${prefix}fat
├ ${prefix}nightcore
├ ${prefix}reverse
├ ${prefix}robot
├ ${prefix}slow
├ ${prefix}tupai
╰❒

╭─❒ 「  *Text Pro Menu* 」
├ ${prefix}candy 
├ ${prefix}christmas 
├ ${prefix}3dchristmas 
├ ${prefix}sparklechristmas
├ ${prefix}deepsea 
├ ${prefix}scifi 
├ ${prefix}rainbow 
├ ${prefix}waterpipe 
├ ${prefix}spooky 
├ ${prefix}pencil 
├ ${prefix}circuit
├ ${prefix}discovery 
├ ${prefix}metalic
├ ${prefix}fiction 
├ ${prefix}demon 
├ ${prefix}transformer
├ ${prefix}berry 
├ ${prefix}thunder 
├ ${prefix}magma 
├ ${prefix}3dstone 
├ ${prefix}neonlight 
├ ${prefix}glitch 
├ ${prefix}harrypotter
├ ${prefix}brokenglass 
├ ${prefix}papercut 
├ ${prefix}watercolor 
├ ${prefix}multicolor 
├ ${prefix}neondevil 
├ ${prefix}underwater 
├ ${prefix}graffitibike
├ ${prefix}snow
├ ${prefix}cloud 
├ ${prefix}honey 
├ ${prefix}ice 
├ ${prefix}fruitjuice 
├ ${prefix}biscuit 
├ ${prefix}wood 
├ ${prefix}chocolate 
├ ${prefix}strawberry 
├ ${prefix}matrix 
├ ${prefix}blood 
├ ${prefix}dropwater 
├ ${prefix}toxic 
├ ${prefix}lava 
├ ${prefix}rock
├ ${prefix}bloodglas 
├ ${prefix}hallowen
├ ${prefix}darkgold 
├ ${prefix}joker 
├ ${prefix}wicker
├ ${prefix}firework 
├ ${prefix}skeleton 
├ ${prefix}blackpink
├ ${prefix}sand 
├ ${prefix}glue 
├ ${prefix}1917 
├ ${prefix}leaves 
╰❒

╭─❒ 「  *Photo Oxy* 」
├ ${prefix}3000years
├ ${prefix}approved
├ ${prefix}wanted
├ ${prefix}utatoo
├ ${prefix}unsharpen
├ ${prefix}thanos
├ ${prefix}sniper
├ ${prefix}sharpen
├ ${prefix}sepia
├ ${prefix}scary
├ ${prefix}rip
├ ${prefix}redple
├ ${prefix}rejected
├ ${prefix}posterize
├ ${prefix}ps4
├ ${prefix}pixelize
├ ${prefix}missionpassed
├ ${prefix}moustache
├ ${prefix}lookwhatkarenhave
├ ${prefix}jail
├ ${prefix}invert
├ ${prefix}greyscale
├ ${prefix}glitch
├ ${prefix}gay
├ ${prefix}frame
├ ${prefix}fire
├ ${prefix}distort
├ ${prefix}dictator
├ ${prefix}deepfry
├ ${prefix}ddungeon
├ ${prefix}circle
├ ${prefix}challenger
├ ${prefix}burn
├ ${prefix}brazzers
├ ${prefix}beautiful
├ ${prefix}triggered
├ ${prefix}wasted
├ ${prefix}comrade
├ ${prefix}horny
├ ${prefix}blur
├ ${prefix}pixelate
├ ${prefix}simpcard
├ ${prefix}lolice
├ ${prefix}glass
╰❒

╭─❒ 「  *Primbon* 」
├ ${prefix}randomnama    
├ ${prefix}jodoh
├ ${prefix}weton
├ ${prefix}jadian
├ ${prefix}tebakumur
├ ${prefix}nomorhoki
├ ${prefix}artimimpi
├ ${prefix}artinama
├ ${prefix}ramaljodoh
├ ${prefix}ramaljodohbali
├ ${prefix}suamiistri
├ ${prefix}ramalcinta
├ ${prefix}cocoknama
├ ${prefix}pasangan
├ ${prefix}jadiannikah
├ ${prefix}sifatusaha
├ ${prefix}rezeki
├ ${prefix}pekerjaan
├ ${prefix}nasib
├ ${prefix}penyakit
├ ${prefix}tarot
├ ${prefix}fengshui
├ ${prefix}haribaik
├ ${prefix}harisangar
├ ${prefix}harisial
├ ${prefix}nagahari
├ ${prefix}arahrezeki
├ ${prefix}peruntungan
├ ${prefix}weton
├ ${prefix}karakter
├ ${prefix}keberuntungan
├ ${prefix}memancing
├ ${prefix}masasubur
├ ${prefix}zodiak
├ ${prefix}shio
╰❒

╭─❒ 「  *Random Sound* 」
├ ${prefix}sound1
├ ${prefix}sound2
├ ${prefix}sound3
├ ${prefix}sound4
├ ${prefix}sound5
├ ${prefix}sound6
├ ${prefix}sound7
├ ${prefix}sound8
├ ${prefix}sound9
├ ${prefix}sound10
├ ${prefix}sound11
├ ${prefix}sound12
├ ${prefix}sound13
├ ${prefix}sound14
├ ${prefix}sound15
├ ${prefix}sound16
├ ${prefix}sound17
├ ${prefix}sound18
├ ${prefix}sound19
├ ${prefix}sound20
├ ${prefix}sound21
├ ${prefix}sound22
├ ${prefix}sound23
├ ${prefix}sound24
├ ${prefix}sound25
├ ${prefix}sound26
├ ${prefix}sound27
├ ${prefix}sound28
├ ${prefix}sound29
├ ${prefix}sound30
├ ${prefix}sound31
├ ${prefix}sound32
├ ${prefix}sound33
├ ${prefix}sound34
├ ${prefix}sound35
├ ${prefix}sound36
├ ${prefix}sound37
├ ${prefix}sound38
├ ${prefix}sound39
├ ${prefix}sound40
├ ${prefix}sound41
├ ${prefix}sound42
├ ${prefix}sound43
├ ${prefix}sound44
├ ${prefix}sound45
├ ${prefix}sound46
├ ${prefix}sound47
├ ${prefix}sound48
├ ${prefix}sound49
├ ${prefix}sound50
├ ${prefix}sound51
├ ${prefix}sound52
├ ${prefix}sound53
├ ${prefix}sound54
├ ${prefix}sound55
├ ${prefix}sound56
├ ${prefix}sound57
├ ${prefix}sound58
├ ${prefix}sound59
├ ${prefix}sound60
├ ${prefix}sound61
├ ${prefix}sound62
├ ${prefix}sound63
├ ${prefix}sound64
├ ${prefix}sound65
├ ${prefix}sound66
├ ${prefix}sound67
├ ${prefix}sound68
├ ${prefix}sound69
├ ${prefix}sound70
├ ${prefix}sound71
├ ${prefix}sound72
├ ${prefix}sound73
├ ${prefix}sound74
├ ${prefix}sound75
├ ${prefix}sound76
├ ${prefix}sound77
├ ${prefix}sound78
├ ${prefix}sound79
├ ${prefix}sound80
├ ${prefix}sound81
├ ${prefix}sound82
├ ${prefix}sound83
├ ${prefix}sound84
├ ${prefix}sound85
├ ${prefix}sound86
├ ${prefix}sound87
├ ${prefix}sound88
├ ${prefix}sound89
├ ${prefix}sound90
├ ${prefix}sound91
├ ${prefix}sound92
├ ${prefix}sound93
├ ${prefix}sound94
├ ${prefix}sound95
├ ${prefix}sound96
├ ${prefix}sound97
├ ${prefix}sound98
├ ${prefix}sound99
├ ${prefix}sound100
├ ${prefix}sound101
├ ${prefix}sound102
├ ${prefix}sound103
├ ${prefix}sound104
├ ${prefix}sound105
├ ${prefix}sound106
├ ${prefix}sound107
├ ${prefix}sound108
├ ${prefix}sound109
├ ${prefix}sound110
├ ${prefix}sound111
├ ${prefix}sound112
├ ${prefix}sound113
├ ${prefix}sound114
├ ${prefix}sound115
├ ${prefix}sound116
├ ${prefix}sound117
├ ${prefix}sound118
├ ${prefix}sound119
├ ${prefix}sound120
├ ${prefix}sound121
├ ${prefix}sound122
├ ${prefix}sound123
├ ${prefix}sound124
├ ${prefix}sound125
├ ${prefix}sound126
├ ${prefix}sound127
├ ${prefix}sound128
├ ${prefix}sound129
├ ${prefix}sound130
├ ${prefix}sound131
├ ${prefix}sound132
├ ${prefix}sound133
├ ${prefix}sound134
├ ${prefix}sound135
├ ${prefix}sound136
├ ${prefix}sound137
├ ${prefix}sound138
├ ${prefix}sound139
├ ${prefix}sound140
├ ${prefix}sound141
├ ${prefix}sound142
├ ${prefix}sound143
├ ${prefix}sound144
├ ${prefix}sound145
├ ${prefix}sound146
├ ${prefix}sound147
├ ${prefix}sound148
├ ${prefix}sound149
├ ${prefix}sound150
├ ${prefix}sound151
├ ${prefix}sound152
├ ${prefix}sound153
├ ${prefix}sound154
├ ${prefix}sound155
├ ${prefix}sound156
├ ${prefix}sound157
├ ${prefix}sound158
├ ${prefix}sound159
├ ${prefix}sound160
├ ${prefix}sound161
╰❒

╭─❒ 「  *Owner Menu* 」
├ ${prefix}culik
├ ${prefix}getcase
├ ${prefix}berkas 
├ ${prefix}join 
├ ${prefix}leave
├ ${prefix}block @user
├ ${prefix}unblock @user
├ ${prefix}balas
├ ${prefix}bcgc 
├ ${prefix}bcpc 
├ ${prefix}bcall 
├ ${prefix}bcimg 
├ ${prefix}bcvidio 
├ ${prefix}bcaudio
├ ${prefix}setppbot 
├ ${prefix}setmenu
├ ${prefix}setquoted
├ ${prefix}setthumb 
├ ${prefix}setgif         
├ ${prefix}setcmd
├ ${prefix}listcmd
├ ${prefix}delcmd
├ ${prefix}lockcmd
├ ${prefix}addmsg
├ ${prefix}listmsg
├ ${prefix}getmsg
├ ${prefix}delmsg
├ ${prefix}restart
├ ${prefix}shutdown
├ ${prefix}autobio 
├ ${prefix}autoread 
├ ${prefix}autoketik
├ ${prefix}autovn
├ ${prefix}autosticker
├ $
├ > / x
├ =>
╰❒

╭─❒ 「  *Virus Wea* 」
├ ${prefix}bug1
├ ${prefix}bug2
├ ${prefix}bug3
├ ${prefix}bug4
├ ${prefix}bug5
├ ${prefix}bug6
├ ${prefix}bug7
├ ${prefix}buggc
├ ${prefix}bugpc
├ ${prefix}bugstik
├ ${prefix}buginvite
├ ${prefix}buglokasi1
├ ${prefix}buglokasi2
├ ${prefix}jadibug1
├ ${prefix}jadibug2
├ ${prefix}jadibug3
├ ${prefix}jadibug4
├ ${prefix}jadibug5
├ ${prefix}sendbug
├ ${prefix}troli
├ ${prefix}poll
├ ${prefix}santetgc
╰❒
`
}


//=============[ LIST MENU ]=============//
exports.menu1 = (prefix) => {
return `────────────────────────
➲ *Main Menu*
 ≻ ${prefix}ping
 ≻ ${prefix}tqto
 ≻ ${prefix}grubbot
 ≻ ${prefix}runtime
 ≻ ${prefix}owner
 ≻ ${prefix}sewa
 ≻ ${prefix}menu / help
`
}

exports.menu2 = (prefix) => {
return `➲ *Downloader Menu*
────────────────────────

 ≻ ${prefix}tiktoknowm  _linktt_
 ≻ ${prefix}tiktokwm  _linktt_
 ≻ ${prefix}tiktokmusik _linktt_
 ≻ ${prefix}ytmp3  _linkyt_
 ≻ ${prefix}ytmp4  _linkyt_ 
 ≻ ${prefix}twitterdl  _linktw_ 
 ≻ ${prefix}instagram  _linkig_
 ≻ ${prefix}play   _teks_
 ≻ ${prefix}playmusik  _teks_
 ≻ ${prefix}jpg  _link_ 
 ≻ ${prefix}mediafire  _link_
 ≻ ${prefix}pinterestdl  _link_
 ≻ ${prefix}getmusic 
 ≻ ${prefix}getvideo 
`}


exports.menu3 = (prefix) => {
return `➲ *Convert Menu*
────────────────────────

 ≻ ${prefix}toimg    
 ≻ ${prefix}nobg
 ≻ ${prefix}sticker     
 ≻ ${prefix}tovideo     
 ≻ ${prefix}togif    
 ≻ ${prefix}tourl     
 ≻ ${prefix}bitly
 ≻ ${prefix}tovn     
 ≻ ${prefix}tomp3     
 ≻ ${prefix}toaudio    
 ≻ ${prefix}styletext     
`}


exports.menu4 = (prefix) => {
return `➲ *Search Menu*
────────────────────────

 ≻ ${prefix}grupwa  
 ≻ ${prefix}ytsearch
 ≻ ${prefix}lirik
 ≻ ${prefix}gempa
 ≻ ${prefix}wattpad
 ≻ ${prefix}gimage 
 ≻ ${prefix}searchgc
 ≻ ${prefix}brainly
 ≻ ${prefix}meme
 ≻ ${prefix}darkjoke
 ≻ ${prefix}wikimedia 
 ≻ ${prefix}google        
 ≻ ${prefix}gimage            
 ≻ ${prefix}pinterest           
 ≻ ${prefix}kbbi        
 ≻ ${prefix}wikipedia  
`}

exports.menu5 = (prefix) => {
return `➲ *Anonymous Menu*
────────────────────────

 ≻ ${prefix}start
 ≻ ${prefix}next
 ≻ ${prefix}keluar
 ≻ ${prefix}sendkontak
`}


exports.menu6 = (prefix) => {
return `➲ *Jadwal Tv*
────────────────────────

 ≻ ${prefix}jadwalbola
 ≻ ${prefix}jadwaltv
`}


exports.menu7 = (prefix) => {
return `➲ *Random Sticker*
────────────────────────

 ≻ ${prefix}stikpetrik
 ≻ ${prefix}stikdoge
 ≻ ${prefix}stikgura
 ≻ ${prefix}stikbucin
`}


exports.menu8 = (prefix) => {
return `➲ *Database*
────────────────────────

 ≻ ${prefix}addvn
 ≻ ${prefix}delvn
 ≻ ${prefix}listvn
`}


exports.menu9 = (prefix) => {
return `➲ *Stalking*
────────────────────────

 ≻ ${prefix}stalkig    
 ≻ ${prefix}stalkff
 ≻ ${prefix}ghstalk
 `}
 
 
 exports.menu10 = (prefix) => {
return `➲ *Group Menu*
────────────────────────
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
 ≻ ${prefix}linkgroup
 ≻ ${prefix}grupinfo
 ≻ ${prefix}getppgc
 ≻ ${prefix}totag 
 ≻ ${prefix}listonline
 ≻ ${prefix}getidgc
 ≻ ${prefix}ephemeral [option]
 ≻ ${prefix}setppgc [image]
 ≻ ${prefix}setname [text]
 ≻ ${prefix}setdesc [text]
 ≻ ${prefix}group [option]
 ≻ ${prefix}editinfo [option]
 ≻ ${prefix}add @user
 ≻ ${prefix}kick @user
 ≻ ${prefix}hidetag [text]
 ≻ ${prefix}tagall [text]
 ≻ ${prefix}antilink [on/off]
 ≻ ${prefix}antivirtex [on/off]
 ≻ ${prefix}antiwame [on/off]
 ≻ ${prefix}mute [on/off]
 ≻ ${prefix}promote @user
 ≻ ${prefix}demote @user
 ≻ ${prefix}vote [text]
 ≻ ${prefix}devote
 ≻ ${prefix}upvote
 ≻ ${prefix}cekvote
 ≻ ${prefix}hapusvote
`}


exports.menu11 = (prefix) => {
return `➲ *Semoji*
────────────────────────

 ≻ ${prefix}emojimix
 ≻ ${prefix}emojiap
 ≻ ${prefix}emojigo
 ≻ ${prefix}emojisa
 ≻ ${prefix}emojims
 ≻ ${prefix}emojiwa
 ≻ ${prefix}emojitw
 ≻ ${prefix}emojifb
`}


exports.menu12 = (prefix) => {
return `➲ *Profil Wa Couple*
────────────────────────

 ≻ ${prefix}ppcouple
 ≻ ${prefix}couple
`}


exports.menu13 = (prefix) => {
return `➲ *Random Vitur*
────────────────────────

 ≻ ${prefix}afk
 ≻ ${prefix}kodebahasa
 ≻ ${prefix}cecan
 ≻ ${prefix}cogan
 ≻ ${prefix}truth
 ≻ ${prefix}dare
 ≻ ${prefix}quotes
 ≻ ${prefix}qrcode
 ≻ ${prefix}take
 ≻ ${prefix}film 
 ≻ ${prefix}translate
 ≻ ${prefix}tts 
`}

 

 exports.menu14 = (prefix) => {
return ` ➲ *Tools*
────────────────────────

 ≻ ${prefix}getpp
 ≻ ${prefix}chat
 ≻ ${prefix}q
 ≻ ${prefix}readmore
 ≻ ${prefix}react
 ≻ ${prefix}apatuh
 ≻ ${prefix}kalkulator
 ≻ ${prefix}ss
 ≻ ${prefix}ssweb-hp
 ≻ ${prefix}ssweb-pc
`}


exports.menu15 = (prefix) => {
return `➲ *Random Anime*
────────────────────────

 ≻ ${prefix}loli 
 ≻ ${prefix}anime
 ≻ ${prefix}manga
 ≻ ${prefix}character
 ≻ ${prefix}milf 
 ≻ ${prefix}waifu
 ≻ ${prefix}husbu  
 ≻ ${prefix}cry
 ≻ ${prefix}kill
 ≻ ${prefix}hug
 ≻ ${prefix}pat
 ≻ ${prefix}lick
 ≻ ${prefix}kiss
 ≻ ${prefix}bite
 ≻ ${prefix}yeet
 ≻ ${prefix}neko
 ≻ ${prefix}bully
 ≻ ${prefix}bonk
 ≻ ${prefix}wink
 ≻ ${prefix}poke
 ≻ ${prefix}nom
 ≻ ${prefix}slap
 ≻ ${prefix}smile
 ≻ ${prefix}wave
 ≻ ${prefix}awoo
 ≻ ${prefix}blush
 ≻ ${prefix}smug
 ≻ ${prefix}glomp
 ≻ ${prefix}happy
 ≻ ${prefix}dance
 ≻ ${prefix}cringe
 ≻ ${prefix}cuddle
 ≻ ${prefix}highfive
 ≻ ${prefix}shinobu
 ≻ ${prefix}megumin
 ≻ ${prefix}handhold
 ≻ ${prefix}zettai 
 ≻ ${prefix}thighs 
 ≻ ${prefix}panties 
 ≻ ${prefix}pussy 
 ≻ ${prefix}tentacles
 ≻ ${prefix}masturbasi 
 ≻ ${prefix}jahy 
 ≻ ${prefix}glases  
 ≻ ${prefix}foot 
 ≻ ${prefix}hentai 
 ≻ ${prefix}orgy 
 ≻ ${prefix}nekopoi 
 ≻ ${prefix}manga 
 ≻ ${prefix}ass 
 ≻ ${prefix}ahegao
 ≻ ${prefix}bdsm 
 ≻ ${prefix}cuckold 
 ≻ ${prefix}cum 
 ≻ ${prefix}femdom 
 ≻ ${prefix}ero
`}


exports.menu16 = (prefix) => {
return `➲ *Islamic Menu*
────────────────────────

 ≻ ${prefix}iqra
 ≻ ${prefix}hadist
 ≻ ${prefix}alquran
 ≻ ${prefix}juzamma
 ≻ ${prefix}tafsirsurah
 ≻ ${prefix}jadwalsholat
 ≻ ${prefix}listsurah
`}


exports.menu17 = (prefix) => {
return `➲ *Fun Menu*
────────────────────────

 ≻ ${prefix}halah
 ≻ ${prefix}hilih
 ≻ ${prefix}huluh
 ≻ ${prefix}heleh
 ≻ ${prefix}holoh
 ≻ ${prefix}jodohku
 ≻ ${prefix}cekbapak
 ≻ ${prefix}jadian
 ≻ ${prefix}delttt
 ≻ ${prefix}tictactoe
 ≻ ${prefix}suitpvp [@tag]
`}


exports.menu18 = (prefix) => {
return `➲ *Kerang Ajaib*
────────────────────────

 ≻ ${prefix}bisakah
 ≻ ${prefix}apakah
 ≻ ${prefix}bagaimanakah
 ≻ ${prefix}kapankah
 ≻ ${prefix}kapan
`}

 
exports.menu19 = (prefix) => {
return `➲  *Text To Png* 
────────────────────────

 ≻ ${prefix}attp
 ≻ ${prefix}ttp
 ≻ ${prefix}ttpred
 ≻ ${prefix}ttpblue
 ≻ ${prefix}ttpyellow
 ≻ ${prefix}ttppink
 ≻ ${prefix}ttpviolet
 ≻ ${prefix}ttpgreen
 ≻ ${prefix}ttppurple
 ≻ ${prefix}ttpmagenta
 ≻ ${prefix}ttp2
 ≻ ${prefix}ttp2red
 ≻ ${prefix}ttp2blue
 ≻ ${prefix}ttp2yellow
 ≻ ${prefix}ttp2pink
 ≻ ${prefix}ttp2violet
 ≻ ${prefix}ttp2green
 ≻ ${prefix}ttp2purple
 ≻ ${prefix}ttp2magenta
`}

 
 exports.menu20 = (prefix) => {
return `➲ *Berita*
────────────────────────

 ≻ ${prefix}fajar-news
 ≻ ${prefix}cnn-news
 ≻ ${prefix}layarkaca-search
 ≻ ${prefix}cnbc-news
 ≻ ${prefix}tribun-news
 ≻ ${prefix}indozone-news
 ≻ ${prefix}kompas-news
 ≻ ${prefix}detik-news
 ≻ ${prefix}daily-news
 ≻ ${prefix}inews-news
 ≻ ${prefix}okezone-news
 ≻ ${prefix}sindo-news
 ≻ ${prefix}tempo-news
 ≻ ${prefix}antara-news
 ≻ ${prefix}kontan-news
 ≻ ${prefix}merdeka-news
 ≻ ${prefix}jalantikus-meme
`}


exports.menu21 = (prefix) => {
return `➲ *Cerpen*
────────────────────────

 ≻ ${prefix}cerpen Anak
 ≻ ${prefix}cerpen Bahasa Daerah
 ≻ ${prefix}cerpen Bahasa Inggris
 ≻ ${prefix}cerpen Bahasa Jawa
 ≻ ${prefix}cerpen Bahasa Sunda
 ≻ ${prefix}cerpen Budaya
 ≻ ${prefix}cerpen Cinta
 ≻ ${prefix}cerpen Cinta Islami
 ≻ ${prefix}cerpen Cinta Pertama
 ≻ ${prefix}cerpen Cinta Romantis
 ≻ ${prefix}cerpen Cinta Sedih
 ≻ ${prefix}cerpen Cinta Segitiga
 ≻ ${prefix}cerpen Cinta Sejati
 ≻ ${prefix}cerpen Galau
 ≻ ${prefix}cerpen Gokil
 ≻ ${prefix}cerpen Inspiratif
 ≻ ${prefix}cerpen Jepang
 ≻ ${prefix}cerpen Kehidupan
 ≻ ${prefix}cerpen Keluarga
 ≻ ${prefix}cerpen Kisah Nyata
 ≻ ${prefix}cerpen Korea
 ≻ ${prefix}cerpen Kristen
 ≻ ${prefix}cerpen Liburan
 ≻ ${prefix}cerpen Lingkungan
 ≻ ${prefix}cerpen Lucu
 ≻ ${prefix}cerpen Malaysia
 ≻ ${prefix}cerpen Mengharukan
 ≻ ${prefix}cerpen Misteri
 ≻ ${prefix}cerpen Motivasi
 ≻ ${prefix}cerpen Nasihat
 ≻ ${prefix}cerpen Nasionalisme
 ≻ ${prefix}cerpen Olahraga
 ≻ ${prefix}cerpen Patah Hati
 ≻ ${prefix}cerpen Penantian
 ≻ ${prefix}cerpen Pendidikan
 ≻ ${prefix}cerpen Pengalaman Pribadi
 ≻ ${prefix}cerpen Pengorbanan
 ≻ ${prefix}cerpen Penyesalan
 ≻ ${prefix}cerpen Perjuangan
 ≻ ${prefix}cerpen Perpisahan
 ≻ ${prefix}cerpen Persahabatan
 ≻ ${prefix}cerpen Petualangan
 ≻ ${prefix}cerpen Ramadhan
 ≻ ${prefix}cerpen Remaja
 ≻ ${prefix}cerpen Renungan
 ≻ ${prefix}cerpen Rindu
 ≻ ${prefix}cerpen Rohani
 ≻ ${prefix}cerpen Romantis
 ≻ ${prefix}cerpen Sastra
 ≻ ${prefix}cerpen Sedih
 ≻ ${prefix}cerpen Sejarah
 ≻ ${prefix}cerpen Slice Of Life
 ≻ ${prefix}cerpen Terjemahan
 ≻ ${prefix}cerpen Thriller
`}


exports.menu22 = (prefix) => {
return `➲ *Voice Changer*
────────────────────────

 ≻ ${prefix}bass
 ≻ ${prefix}blown
 ≻ ${prefix}deep
 ≻ ${prefix}earrape
 ≻ ${prefix}fast
 ≻ ${prefix}fat
 ≻ ${prefix}nightcore
 ≻ ${prefix}reverse
 ≻ ${prefix}robot
 ≻ ${prefix}slow
 ≻ ${prefix}tupai
`}


exports.menu23 = (prefix) => {
return `➲ *Text Pro Menu*
────────────────────────

 ≻ ${prefix}candy 
 ≻ ${prefix}christmas 
 ≻ ${prefix}3dchristmas 
 ≻ ${prefix}sparklechristmas
 ≻ ${prefix}deepsea 
 ≻ ${prefix}scifi 
 ≻ ${prefix}rainbow 
 ≻ ${prefix}waterpipe 
 ≻ ${prefix}spooky 
 ≻ ${prefix}pencil 
 ≻ ${prefix}circuit
 ≻ ${prefix}discovery 
 ≻ ${prefix}metalic
 ≻ ${prefix}fiction 
 ≻ ${prefix}demon 
 ≻ ${prefix}transformer
 ≻ ${prefix}berry 
 ≻ ${prefix}thunder 
 ≻ ${prefix}magma 
 ≻ ${prefix}3dstone 
 ≻ ${prefix}neonlight 
 ≻ ${prefix}glitch 
 ≻ ${prefix}harrypotter
 ≻ ${prefix}brokenglass 
 ≻ ${prefix}papercut 
 ≻ ${prefix}watercolor 
 ≻ ${prefix}multicolor 
 ≻ ${prefix}neondevil 
 ≻ ${prefix}underwater 
 ≻ ${prefix}graffitibike
 ≻ ${prefix}snow
 ≻ ${prefix}cloud 
 ≻ ${prefix}honey 
 ≻ ${prefix}ice 
 ≻ ${prefix}fruitjuice 
 ≻ ${prefix}biscuit 
 ≻ ${prefix}wood 
 ≻ ${prefix}chocolate 
 ≻ ${prefix}strawberry 
 ≻ ${prefix}matrix 
 ≻ ${prefix}blood 
 ≻ ${prefix}dropwater 
 ≻ ${prefix}toxic 
 ≻ ${prefix}lava 
 ≻ ${prefix}rock
 ≻ ${prefix}bloodglas 
 ≻ ${prefix}hallowen
 ≻ ${prefix}darkgold 
 ≻ ${prefix}joker 
 ≻ ${prefix}wicker
 ≻ ${prefix}firework 
 ≻ ${prefix}skeleton 
 ≻ ${prefix}blackpink
 ≻ ${prefix}sand 
 ≻ ${prefix}glue 
 ≻ ${prefix}1917 
 ≻ ${prefix}leaves 
`}


exports.menu24 = (prefix) => {
return `➲ *Photo Oxy*
────────────────────────

 ≻ ${prefix}3000years
 ≻ ${prefix}approved
 ≻ ${prefix}wanted
 ≻ ${prefix}utatoo
 ≻ ${prefix}unsharpen
 ≻ ${prefix}thanos
 ≻ ${prefix}sniper
 ≻ ${prefix}sharpen
 ≻ ${prefix}sepia
 ≻ ${prefix}scary
 ≻ ${prefix}rip
 ≻ ${prefix}redple
 ≻ ${prefix}rejected
 ≻ ${prefix}posterize
 ≻ ${prefix}ps4
 ≻ ${prefix}pixelize
 ≻ ${prefix}missionpassed
 ≻ ${prefix}moustache
 ≻ ${prefix}lookwhatkarenhave
 ≻ ${prefix}jail
 ≻ ${prefix}invert
 ≻ ${prefix}greyscale
 ≻ ${prefix}glitch
 ≻ ${prefix}gay
 ≻ ${prefix}frame
 ≻ ${prefix}fire
 ≻ ${prefix}distort
 ≻ ${prefix}dictator
 ≻ ${prefix}deepfry
 ≻ ${prefix}ddungeon
 ≻ ${prefix}circle
 ≻ ${prefix}challenger
 ≻ ${prefix}burn
 ≻ ${prefix}brazzers
 ≻ ${prefix}beautiful
 ≻ ${prefix}triggered
 ≻ ${prefix}wasted
 ≻ ${prefix}comrade
 ≻ ${prefix}horny
 ≻ ${prefix}blur
 ≻ ${prefix}pixelate
 ≻ ${prefix}simpcard
 ≻ ${prefix}lolice
 ≻ ${prefix}glass
`}


exports.menu25 = (prefix) => {
return `➲ *Primbon*
────────────────────────

 ≻ ${prefix}randomnama    
 ≻ ${prefix}jodoh
 ≻ ${prefix}weton
 ≻ ${prefix}jadian
 ≻ ${prefix}tebakumur
 ≻ ${prefix}nomorhoki
 ≻ ${prefix}artimimpi
 ≻ ${prefix}artinama
 ≻ ${prefix}ramaljodoh
 ≻ ${prefix}ramaljodohbali
 ≻ ${prefix}suamiistri
 ≻ ${prefix}ramalcinta
 ≻ ${prefix}cocoknama
 ≻ ${prefix}pasangan
 ≻ ${prefix}jadiannikah
 ≻ ${prefix}sifatusaha
 ≻ ${prefix}rezeki
 ≻ ${prefix}pekerjaan
 ≻ ${prefix}nasib
 ≻ ${prefix}penyakit
 ≻ ${prefix}tarot
 ≻ ${prefix}fengshui
 ≻ ${prefix}haribaik
 ≻ ${prefix}harisangar
 ≻ ${prefix}harisial
 ≻ ${prefix}nagahari
 ≻ ${prefix}arahrezeki
 ≻ ${prefix}peruntungan
 ≻ ${prefix}weton
 ≻ ${prefix}karakter
 ≻ ${prefix}keberuntungan
 ≻ ${prefix}memancing
 ≻ ${prefix}masasubur
 ≻ ${prefix}zodiak
 ≻ ${prefix}shio
`}


exports.menu26 = (prefix) => {
return `➲ *Random Sound*
────────────────────────

 ≻ ${prefix}sound1
 ≻ ${prefix}sound2
 ≻ ${prefix}sound3
 ≻ ${prefix}sound4
 ≻ ${prefix}sound5
 ≻ ${prefix}sound6
 ≻ ${prefix}sound7
 ≻ ${prefix}sound8
 ≻ ${prefix}sound9
 ≻ ${prefix}sound10
 ≻ ${prefix}sound11
 ≻ ${prefix}sound12
 ≻ ${prefix}sound13
 ≻ ${prefix}sound14
 ≻ ${prefix}sound15
 ≻ ${prefix}sound16
 ≻ ${prefix}sound17
 ≻ ${prefix}sound18
 ≻ ${prefix}sound19
 ≻ ${prefix}sound20
 ≻ ${prefix}sound21
 ≻ ${prefix}sound22
 ≻ ${prefix}sound23
 ≻ ${prefix}sound24
 ≻ ${prefix}sound25
 ≻ ${prefix}sound26
 ≻ ${prefix}sound27
 ≻ ${prefix}sound28
 ≻ ${prefix}sound29
 ≻ ${prefix}sound30
 ≻ ${prefix}sound31
 ≻ ${prefix}sound32
 ≻ ${prefix}sound33
 ≻ ${prefix}sound34
 ≻ ${prefix}sound35
 ≻ ${prefix}sound36
 ≻ ${prefix}sound37
 ≻ ${prefix}sound38
 ≻ ${prefix}sound39
 ≻ ${prefix}sound40
 ≻ ${prefix}sound41
 ≻ ${prefix}sound42
 ≻ ${prefix}sound43
 ≻ ${prefix}sound44
 ≻ ${prefix}sound45
 ≻ ${prefix}sound46
 ≻ ${prefix}sound47
 ≻ ${prefix}sound48
 ≻ ${prefix}sound49
 ≻ ${prefix}sound50
 ≻ ${prefix}sound51
 ≻ ${prefix}sound52
 ≻ ${prefix}sound53
 ≻ ${prefix}sound54
 ≻ ${prefix}sound55
 ≻ ${prefix}sound56
 ≻ ${prefix}sound57
 ≻ ${prefix}sound58
 ≻ ${prefix}sound59
 ≻ ${prefix}sound60
 ≻ ${prefix}sound61
 ≻ ${prefix}sound62
 ≻ ${prefix}sound63
 ≻ ${prefix}sound64
 ≻ ${prefix}sound65
 ≻ ${prefix}sound66
 ≻ ${prefix}sound67
 ≻ ${prefix}sound68
 ≻ ${prefix}sound69
 ≻ ${prefix}sound70
 ≻ ${prefix}sound71
 ≻ ${prefix}sound72
 ≻ ${prefix}sound73
 ≻ ${prefix}sound74
 ≻ ${prefix}sound75
 ≻ ${prefix}sound76
 ≻ ${prefix}sound77
 ≻ ${prefix}sound78
 ≻ ${prefix}sound79
 ≻ ${prefix}sound80
 ≻ ${prefix}sound81
 ≻ ${prefix}sound82
 ≻ ${prefix}sound83
 ≻ ${prefix}sound84
 ≻ ${prefix}sound85
 ≻ ${prefix}sound86
 ≻ ${prefix}sound87
 ≻ ${prefix}sound88
 ≻ ${prefix}sound89
 ≻ ${prefix}sound90
 ≻ ${prefix}sound91
 ≻ ${prefix}sound92
 ≻ ${prefix}sound93
 ≻ ${prefix}sound94
 ≻ ${prefix}sound95
 ≻ ${prefix}sound96
 ≻ ${prefix}sound97
 ≻ ${prefix}sound98
 ≻ ${prefix}sound99
 ≻ ${prefix}sound100
 ≻ ${prefix}sound101
 ≻ ${prefix}sound102
 ≻ ${prefix}sound103
 ≻ ${prefix}sound104
 ≻ ${prefix}sound105
 ≻ ${prefix}sound106
 ≻ ${prefix}sound107
 ≻ ${prefix}sound108
 ≻ ${prefix}sound109
 ≻ ${prefix}sound110
 ≻ ${prefix}sound111
 ≻ ${prefix}sound112
 ≻ ${prefix}sound113
 ≻ ${prefix}sound114
 ≻ ${prefix}sound115
 ≻ ${prefix}sound116
 ≻ ${prefix}sound117
 ≻ ${prefix}sound118
 ≻ ${prefix}sound119
 ≻ ${prefix}sound120
 ≻ ${prefix}sound121
 ≻ ${prefix}sound122
 ≻ ${prefix}sound123
 ≻ ${prefix}sound124
 ≻ ${prefix}sound125
 ≻ ${prefix}sound126
 ≻ ${prefix}sound127
 ≻ ${prefix}sound128
 ≻ ${prefix}sound129
 ≻ ${prefix}sound130
 ≻ ${prefix}sound131
 ≻ ${prefix}sound132
 ≻ ${prefix}sound133
 ≻ ${prefix}sound134
 ≻ ${prefix}sound135
 ≻ ${prefix}sound136
 ≻ ${prefix}sound137
 ≻ ${prefix}sound138
 ≻ ${prefix}sound139
 ≻ ${prefix}sound140
 ≻ ${prefix}sound141
 ≻ ${prefix}sound142
 ≻ ${prefix}sound143
 ≻ ${prefix}sound144
 ≻ ${prefix}sound145
 ≻ ${prefix}sound146
 ≻ ${prefix}sound147
 ≻ ${prefix}sound148
 ≻ ${prefix}sound149
 ≻ ${prefix}sound150
 ≻ ${prefix}sound151
 ≻ ${prefix}sound152
 ≻ ${prefix}sound153
 ≻ ${prefix}sound154
 ≻ ${prefix}sound155
 ≻ ${prefix}sound156
 ≻ ${prefix}sound157
 ≻ ${prefix}sound158
 ≻ ${prefix}sound159
 ≻ ${prefix}sound160
 ≻ ${prefix}sound161
`}


exports.menu27 = (prefix) => {
return `➲ *Owner Menu*
────────────────────────

 ≻ ${prefix}culik
 ≻ ${prefix}getcase
 ≻ ${prefix}berkas 
 ≻ ${prefix}join 
 ≻ ${prefix}leave
 ≻ ${prefix}block @user
 ≻ ${prefix}unblock @user
 ≻ ${prefix}balas
 ≻ ${prefix}bcgc 
 ≻ ${prefix}bcpc 
 ≻ ${prefix}bcall 
 ≻ ${prefix}bcimg 
 ≻ ${prefix}bcvidio 
 ≻ ${prefix}bcaudio
 ≻ ${prefix}setppbot 
 ≻ ${prefix}setmenu
 ≻ ${prefix}setquoted
 ≻ ${prefix}setthumb 
 ≻ ${prefix}setgif         
 ≻ ${prefix}setcmd
 ≻ ${prefix}listcmd
 ≻ ${prefix}delcmd
 ≻ ${prefix}lockcmd
 ≻ ${prefix}addmsg
 ≻ ${prefix}listmsg
 ≻ ${prefix}getmsg
 ≻ ${prefix}delmsg
 ≻ ${prefix}restart
 ≻ ${prefix}shutdown
 ≻ ${prefix}autobio 
 ≻ ${prefix}autoread 
 ≻ ${prefix}autoketik
 ≻ ${prefix}autovn
 ≻ ${prefix}autosticker
 ≻ $
 ≻ > / x
 ≻ =>
 `}
 
 
 exports.menu28 = (prefix) => {
return `➲ *Random Wallpaper*
────────────────────────

 ≻ ${prefix}wallpaper 
 ≻ ${prefix}wallml
 ≻ ${prefix}cyberspace 
 ≻ ${prefix}games 
 ≻ ${prefix}pubg 
 ≻ ${prefix}islamic 
 ≻ ${prefix}mountain
 ≻ ${prefix}programming 
 ≻ ${prefix}technology 
 ≻ ${prefix}tatasurya  
 ≻ ${prefix}hekel
 ≻ ${prefix}motor 
 ≻ ${prefix}mobil 
 ≻ ${prefix}aesthetic
 ≻ ${prefix}wallhp 
 ≻ ${prefix}anjing
 ≻ ${prefix}kucing 
 ≻ ${prefix}keneki 
 ≻ ${prefix}megumin 
 ≻ ${prefix}yotsuba 
 ≻ ${prefix}kartun
 ≻ ${prefix}chiho 
 ≻ ${prefix}tejina 
 ≻ ${prefix}yumeko 
 ≻ ${prefix}shinomiya 
 ≻ ${prefix}pentol
 ≻ ${prefix}toukachan 
 ≻ ${prefix}akira 
 ≻ ${prefix}itori 
 ≻ ${prefix}kurumi
 ≻ ${prefix}sagiri 
 ≻ ${prefix}eba 
 ≻ ${prefix}deidara 
 ≻ ${prefix}itachi 
 ≻ ${prefix}madara
 `}
 
 exports.menu29 = (prefix) => {
return `➲ *Mager Nulis*
────────────────────────

 ≻ ${prefix}nuliskiri _teks_
 ≻ ${prefix}nuliskanan _teks_
 ≻ ${prefix}foliokiri _teks_
 ≻ ${prefix}foliokanan _teks_

`}


exports.menu30 = (prefix) => {
return `➲ *Virus Wea*
────────────────────────

≻ ${prefix}bug1
≻ ${prefix}bug2
≻ ${prefix}bug3
≻ ${prefix}bug4
≻ ${prefix}bug5
≻ ${prefix}bug6
≻ ${prefix}bug7
≻ ${prefix}buggc
≻ ${prefix}bugpc
≻ ${prefix}bugstik
≻ ${prefix}buginvite
≻ ${prefix}buglokasi1
≻ ${prefix}buglokasi2
≻ ${prefix}jadibug1
≻ ${prefix}jadibug2
≻ ${prefix}jadibug3
≻ ${prefix}jadibug4
≻ ${prefix}jadibug5
≻ ${prefix}sendbug
≻ ${prefix}troli
≻ ${prefix}poll
≻ ${prefix}santetgc

`}


 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

 

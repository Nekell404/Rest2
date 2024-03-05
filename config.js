
const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9',
}

//Apikey lolhuman
global.apikey = '280805'


// Other

global.owner = ['6289695073357', '18138239316','6281317726468']

global.pemilik = ['6289695073357']

global.premium = ['6289695073357','18138239316','6281317726468']

global.creator = ['628388024064', '6288292024190', '6283127014833']


global.pengguna = '𝗡𝗲𝗸𝗲𝗹𝗹𝗮𝗹𝘄𝗮𝘆𝘀𝗹𝘂𝘀'
global.botnma = '𝑳𝒐𝒔𝒆𝒓𝑩𝒐𝒕-𝑴𝑫'

global.grub1 = 'https://chat.whatsapp.com/FvF2ucrsjCiJHro8pCYQ0y'  //GRUB LU
global.grub2 = '-'  //GRUB LU

global.melcanz = 'melcantik'

global.footer = '© 𝑳𝒐𝒔𝒆𝒓𝑩𝒐𝒕-𝑴𝑫⠀ ོ' //FooterText Biar Di Bawah Nya Ada Text 

global.web = 'https://nekellishere.biz.id/' // Ubah Sama Lu Web Nya Bebas 
global.web2 = 'https://instagram.com/@nekell1337_' //Ubah Jga Bebas Sama lu 
global.ganti = 'Website' //Edit Terserah Lu Mau Apa
global.ganti2 = 'Instagram'

global.accestken = 'Nekellalwayslus'
global.ownernma = '𝗡𝗲𝗸𝗲𝗹𝗹𝗮𝗹𝘄𝗮𝘆𝘀𝗹𝘂𝘀'
global.packname = '© BY 𝑳𝒐𝒔𝒆𝒓𝑩𝒐𝒕-𝑴𝑫'
global.author = '@nekell1337_'

global.sessionName = 'takim'

global.prefa = ['','!','.','🐦','🐤','🗿','#','/']
global.sp = '⭔' 
global.apibg = 'qhWucnuLruQzVASYoFxwkzGn'
global.qoted = 'fkontak'
global.setmenu = 'list'
global.reply = 'web'

global.mess = {
    success: '✓ S u c c e s s',
    admin: 'Fitur Khusus Admin Group!',
    prem: 'Fitur Khusus User Premium, Silahkan Ketik .buyprem Untuk Beli',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!❌',
    owner: 'Fitur Khusus Owner Bot❌',
    group: 'Fitur Digunakan Hanya Untuk Group!❌',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!❌',
    bot: 'Fitur Khusus Pengguna Nomor Bot❌',
    wait: 'Sedang Di Proses . . .',
    endLimit: 'Limit Harian Anda Telah Habis, Reset Limit 2x 24 Jam\nKetik .buyprem Jika Mau Unlimited Limit',
}
global.limitawal = {
    premium: "Unlimited",
    free: 20
}
global.thumb = fs.readFileSync('./media/thumb.jpeg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

const fs = require('fs')
const toMs = require('ms')



exports.cmdAdd = function(run, time, _db){

    let position = false

    Object.keys(_db).forEach((i) => {

        if (_db[i].id === run) {

            position = i

        }

    })

    if (position !== false) {

        _db[position].totalcmd += 1

        fs.writeFileSync('./database/hitToday.json', JSON.stringify(_db))

    } else {

        const bulin = ({

        	id: run,

            expired: Date.now() + toMs(time),

            totalcmd: 1

                })

        _db.push(bulin)

        fs.writeFileSync('./database/hitToday.json', JSON.stringify(_db))

    }

}


exports.getHit = function(run, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === run) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].db
    }
}

exports.Succes = function(cmd, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].cmd === cmd) {
            position = i
        }
    })
    if (position !== false) {
        _db[position].succes += 1
        fs.writeFileSync('./database/dashboard.json', JSON.stringify(_db))
    } else {
        const bulin = ({
            cmd: cmd,
            succes: 1,
            failed: 0
                })
        _db.push(bulin)
        fs.writeFileSync('./database/dashboard.json', JSON.stringify(_db))
    }
}

exports.Failed = function(cmd, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].cmd === cmd) {
            position = i
        }
    })
    if (position !== false) {
        _db[position].succes -= 1
        _db[position].failed += 1
        fs.writeFileSync('./database/dashboard.json', JSON.stringify(_db))
    } else {
        const bulin = ({
            cmd: cmd,
            succes: 0,
            failed: 1
                })
        _db.push(bulin)
        fs.writeFileSync('./database/dashboard.json', JSON.stringify(_db))
    }
} 


exports.Nothing = function(cmd, _db){
    Object.keys(_db).forEach((i) => {
        if (_db[i].cmd === cmd) {
            _db.splice(i, 1)
            fs.writeFileSync('./database/dashboard.json', JSON.stringify(_db))
        }
    })
return true
}



const { color } = require("../lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

const fs = require('fs')
const toMs = require('ms')
//const allcommand = JSON.parse(fs.readFileSync('./database/allcommand.json'));



exports.Succes = function(cmd, _db, allcommand){


   let index = false
  for (let i of allcommand){
    if(i == cmd){
      index = true
    }
  }
  
  if(index == false){
  allcommand.push(cmd)
  fs.writeFileSync('./database/allcommand.json', JSON.stringify(allcommand))
  }
       
        
    
	
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


exports.Nothing = function(cmd, _db, allcommand){
	allcommand.splice(allcommand.indexOf(cmd), 1)
  fs.writeFileSync('./database/allcommand.json', JSON.stringify(allcommand))
	
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







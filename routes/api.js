__path = process.cwd()
var favicon = require('serve-favicon');
var express = require('express');
var db = require(__path + '/database/db');
try {
var zahirr = db.get("zahirr");
} catch (e) {
	console.log('')  
}
 
var creator = "Nekellalwayslus"
var neoxr = "yntkts"
var zeks = "DitzzRestKey"
var zeks2 = "apivinz"
var secure = require('ssl-express-www');
var cors = require('cors');
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var zrapi = require("zrapi");
var ch = require('canvas-hikki');
var ling = require("knights-canvas");
var dotenv = require("dotenv").config()
var fs = require('fs');
var TikTokScraper = require('tiktok-scraper');
var { EmojiAPI } = require("emoji-api");
var emoji = new EmojiAPI();
var router  = express.Router();
var { TiktokDownloader } = require('../lib/tiktokdl.js')
var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js');
var options = require(__path + '/lib/options.js');
var {
	Searchnabi,
	Gempa
} = require('./../lib');

var {
  pShadow,
  pRomantic,
  pSmoke,
  pBurnPapper,
  pNaruto,
  pLoveMsg,
  pMsgGrass,
  pGlitch,
  pDoubleHeart,
  pCoffeCup,
  pLoveText,
  pButterfly
} = require("./../lib/utils/photooxy");

var {
  ttdownloader,
  pinterest,
  fbdown,
  igstalk,
  igstory,
  igdl,
  linkwa,
  igDownloader
} = require("./../lib/anjay");

var {
  igStalk,
  igDownloader
} = require("./../lib/utils/igdown");

var {
  ytDonlodMp3,
  ytDonlodMp4,
  ytPlayMp3,
  ytPlayMp4,
  ytSearch
} = require("./../lib/utils/yt");

var { 
  Joox, 
  FB, 
  Tiktok
} = require("./../lib/utils/downloader");

var {
  Cuaca, 
  Lirik
} = require('./../lib/utils/information');

var {
  Base, 
  WPUser
} = require('./../lib/utils/tools');

var {
  fbDownloader,
  fbdown2
} = require('./../lib/utils/fbdl');

//var TiktokDownloader = require('./../lib/tiktokdl');

var tebakGambar = require('./../lib/utils/tebakGambar');

var cookie = process.env.COOCKIE
/*
* @Pesan Error
*/
loghandler = {
    notparam: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter apikey'
    },
    keyinvalid: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Apikey Invalid'
    },
    noturl: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter url'
    },
     notcomment: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter comment'
    },
     notdisplayname: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter displayname'
    },
     notdog: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter dog'
    },
    notnamaGb: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan paramer namaGb'
        },
    notpepeGb: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan paramer pepeGb'
        },
    notpepeUser: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan paramer pepeUser'
        },
    notbege: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan paramer bege'
        },
    nottotalMem: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan paramer totalMem'
        },
    notavatar: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan parameter avatar'
        },
        notprofile: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan parameter profile'
        },
        notname: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan parameter name'
        },
        notneedexp: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan parameter needexp'
        },
        notcurxp: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan parameter curxp'
        },
        notlevel: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan parameter level'
        },
        notlogorank: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan parameter logorankr'
        },
    notquery: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan parameter query'
        },
    notkata: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter kata'
    },
    notlagu: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter lagu'
    },
    nottext: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text'
    },
    nottext2: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text2'
    },
    notnabi: {
        status: false,
        creator: `${creator}`,
        code: 406, 
        message: 'masukan parameter nabi'
    },
    nottext3: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text3'
    },
    nottheme: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter theme'
    },
    notusername: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter username'
    },
    notvalue: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter value'
    },
    invalidKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
    },
    invalidlink: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin link anda tidak valid.'
    },
    invalidkata: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin kata tidak ada dalam api.'
    },
    error: {
        status: false,
        creator: `${creator}`,
        message: '404 ERROR'
    }
}

/*
Akhir Pesan Error
*/

router.use(favicon(__path + "/views/favicon.ico"));

const listkey = ["Nekellalwayslus","apinekell","nekellbot"];

router.get("/addapikey", async (req, res, next) => {
  const key = req.query.key;
  if(listkey.includes(key)) {
    res.json({
      message: 'apikey sudah terdaftar'
    });
  } else {
    listkey.post(key);
    res.json({
      message: `berhasil mendaftarkan ${key} Kedatabase apikey`
    });
  }
});

// delete apikey

router.delete("/apikey", async(req, res, next) => {
	const key = req.query.delete;
	if(listkey.includes(key)) {
		res.json({
			message: 'apikey tidak ada sebelumnya'
			})
			} else {
	listkey.splice(key, 1)
	res.json({
		message: 'apikey berhasil dihapus' 
});
 }
});









router.get('/ingfo', async (req, res) => {
  var os = require('os-utils');
  
    const hasil = {
      status: true,
      code: 200,
      creator: `${creator}`,
      cpu: os.cpus(),
      totalmem: os.totalmem(),
      freemem: os.freemem(),
      cpusage: os.cpuUsage(),
      cpufree: os.cpuFree(),
      platform: os.platform(),
      cpucount: os.cpuCount(),
      sysuptime: os.sysUptime()
      
    }
    res.json(hasil)
})

router.get('/console', async (req, res) => {
  
    const konsol = {
      status: true,
      code: 200,
      creator: `${creator}`,
      log: console.log()
      
    }
    res.json(konsol)
})




router.get('/game/family100', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var soal = JSON.parse(
            fs.readFileSync(__path + '/data/family100.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...soal[~~(Math.random() * soal.length)]
          })
    } else {
        res.sendFile(__path + '/views/apikey.html');
    }
})

router.get('/game/tebakkalimat', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var soal = JSON.parse(
            fs.readFileSync(__path + '/data/tebakkalimat.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...soal[~~(Math.random() * soal.length)]
          })
    } else {
        res.sendFile(__path + '/views/apikey.html');
    }
})

router.get('/game/tebakkata', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var soal = JSON.parse(
            fs.readFileSync(__path + '/data/tebakkata.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...soal[~~(Math.random() * soal.length)]
          })
    } else {
        res.sendFile(__path + '/views/apikey.html');
    }
})

router.get('/game/tebakjenaka', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var pertanyaan = JSON.parse(
            fs.readFileSync(__path + '/data/tebakjenaka.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...pertanyaan[~~(Math.random() * pertanyaan.length)]
          })
    } else {
        res.sendFile(__path + '/views/apikey.html');
    }
})

router.get('/game/tebakkimia', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var nama = JSON.parse(
            fs.readFileSync(__path + '/data/tebakkimia.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...nama[~~(Math.random() * nama.length)]
          })
    } else {
        res.sendFile(__path + '/views/apikey.html');
    }
})

router.get('/game/tebaklirik', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var question = JSON.parse(
            fs.readFileSync(__path + '/data/tebaklirik.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...question[~~(Math.random() * question.length)]
          })
    } else {
        res.sendFile(__path + '/views/apikey.html');
    }
})

router.get('/game/tebakchara', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var name = JSON.parse(
            fs.readFileSync(__path + '/data/tebakchara.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
               ...name[~~(Math.random() * name.length)]
          })
    } else {
        res.sendFile(__path + '/views/apikey.html');
    }
})

router.get('/game/tebaktebakan', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var soal = JSON.parse(
            fs.readFileSync(__path + '/data/tebaktebakan.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...soal[~~(Math.random() * soal.length)]
          })
    } else {
        res.sendFile(__path + '/views/apikey.html');
    }
})

router.get('/game/tebakbendera', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var bendera = JSON.parse(
            fs.readFileSync(__path + '/data/tebakbendera.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...bendera[~~(Math.random() * bendera.length)]
          })
    } else {
        res.sendFile(__path + '/views/apikey.html');
    }
})

router.get('/music/joox', async(req, res, next) => {
  const query = req.query.query;
  const apikey = req.query.apikey;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
  Joox(query)
  .then((result) => {
  res.json(result)
    res.json(result)
  });
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/music/spotify', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  if(!apikey) return res.json(loghandler.notparam)
  if(!query) return res.json(loghandler.notquery)
  
  if(listkey.includes(apikey)){
  fetch(encodeURI(`https://alpin-api-2021.herokuapp.com/api/spotify?apikey=alpin1&q=${query}`))
  .then(response => response.json())
        .then(hasil => {

        var result = hasil.data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey.html');
}
})
router.get('/download/ytmp3', async(req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  ytDonlodMp3(url)
    .then((result) => {
      res.json({
        status: true,
        code: 200,
        creator: `${creator}`,
        result
      })
    })
    .catch((error) => {
      console.log(error)
      res.json(error)
    });
    } else {
    	res.sendFile(__path + '/views/apikey.html');
    }
});

router.get('/download/ytmp4', async(req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;

  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  ytDonlodMp4(url)
    .then((result) => {
      res.json({
        status: true,
        code: 200,
        creator: `${creator}`,
        result
      })
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.sendFile(__path + '/views/apikey.html');
    }
});

router.get("/yt/playmp3", async(req, res, next) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    
    if(!query) return res.json(loghandler.notquery)
    if(!apikey) return res.json(loghandler.notparam)
    if(listkey.includes(apikey)){
    ytPlayMp3(query)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.json(error);
        });
      } else {
      res.sendFile(__path + '/views/apikey.html');
      }
});

router.get("/yt/playmp4", async(req, res, next) => {

    const query = req.query.query;

    const apikey = req.query.apikey;
    
    if(!query) return res.json(loghandler.notquery)
    if(!apikey) return res.json(loghandler.notparam)
    if(listkey.includes(apikey)){
    ytPlayMp4(query)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.json(error);
        });
      } else {
      res.sendFile(__path + '/views/apikey.html');
      }
});


router.get('/search/yts', async(req, res, next) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    
    if(!query) return res.json(loghandler.notquery)
    if(!apikey) return res.json(loghandler.notparam)
    if(listkey.includes(apikey)){
    ytSearch(query)
        .then((result) => {
            res.json({
              status: true,
              code: 200,
              creator: `${creator}`,
              result
            })
        })
        .catch((error) => {
            res.json(error);
        });
      } else {
     res.sendFile(__path + '/views/apikey.html');
     }
});

router.get('/download/tiktok', async (req, res, next) => {
    var Apikey = req.query.apikey,
        url = req.query.url

	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
     if (!url) return res.json(loghandler.noturl)
     TiktokDownloader(`${url}`)
        .then(data => {
        var result = data.result;
             res.json({
               status: true,
               code: 200,
               creator: `${creator}`,
               result
             })
         })
         .catch((error) => {
            res.json(error);
        });
      } else {
     res.sendFile(__path + '/views/apikey.html');
     }
});

router.get('/download/ig', async(req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  igDownloader(url)
    .then((result) => {
      res.json({
        status: true,
        code: 200,
        creator: `${creator}`,
        result
      })
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.sendFile(__path + '/views/apikey.html');
    }
});

router.get('/download/ig2', async(req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  igdl(url)
    .then((result) => {
      res.json({
        status: true,
        code: 200,
        creator: `${creator}`,
        result
      })
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.sendFile(__path + '/views/apikey.html');
    }
});

router.get('/search/google', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api-aquabot.herokuapp.com/search/google?apikey=aquabot&q=${q}`))
       .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: 'Nekellalwayslus',
                 code: 200,
                 message: 'pake api seada nya aja oke:)',
                 result: result.result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})
router.get('/search/stickerline', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://nzcha-apii.herokuapp.com/stickerline?url=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey.html');
}
})
router.get('/download/smule', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://mnazria.herokuapp.com/api/smule?link=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/search/joox3', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://nzcha-apii.herokuapp.com/joox?q=${query}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/download/joox2', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://myhuman.herokuapp.com/api/joox?query=${query}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.lirik;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/download/apkdl', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://nzcha-apii.herokuapp.com/apk-download?dl_url=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/search/apk', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://nzcha-apii.herokuapp.com/apk-search?q=${query}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/search/googleimg', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://nzcha-apii.herokuapp.com/googleimage?q=${query}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/download/mediafire', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api-json-reysekha.herokuapp.com/api/mediafire/?url=${url}&apikey=Yuzzu`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/download/telesticker', async(req, res) => {
	      let url = req.query.url
	      if (!url) return res.json(loghandler.noturl)
let packName = url.replace("https://t.me/addstickers/", "")

    let gas = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, { method: "GET", headers: { "User-Agent": "GoogleBot" } })
    if (!gas.ok) throw eror

    let json = await gas.json()
    const result = []
    for (let i = 0; i < json.result.stickers.length; i++) {
        let fileId = json.result.stickers[i].thumb.file_id

        let gasIn = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)

        let jisin = await gasIn.json()
   result.push("https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + jisin.result.file_path)
  
    }
res.json({
  status: 200,
  creator: creator,
  result: result
})
    })

router.get('/stalk/gh', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.username
       	if(!apikey) return res.json(loghandler.apikey)
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter username"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://github-api-zhirrr.vercel.app/api/detailuser?q=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Nekell',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/stalk/yt', async (req, res, next) => {
        var apikey = req.query.apikey,
            user = req.query.user
            
	if(!apikey) return res.json(loghandler.notparam)
    if (!user) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter user"})

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://myhuman.herokuapp.com/api/ytstalk?query=${user}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: 'Nekellalwayslus',
                 code: 200,
                 message: 'pake api seada nya aja oke:)',
                 result: result.result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})
router.get('/stalk/repostalk', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.username
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter username"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://github-api-zhirrr.vercel.app/api/searchrepo?q=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Nekellalwayslus',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/views/apikey.html')
})
} else {
  res.sendFile(__path + '/views/apikey.html')
}
})
router.get('/stalk/ig', async(req, res, next) => {
  const apikey = req.query.apikey;
  const username = req.query.username;
  
  if(!username) return res.json(loghandler.notusername)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api-toxic-devil.herokuapp.com/api/stalk/instagram?username=${username}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/downloader/wallpaperflare', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://hadi-api.herokuapp.com/api/wallpaperflare?query=${query}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/download/ytmp32', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://kocakz.herokuapp.com/api/media/ytaudio?url=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/download/ytmp42', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://kocakz.herokuapp.com/api/media/ytvid?url=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.getVideo;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/search/shoppe', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.zeks.me/api/shopee?apikey=reyterganz&q=${q}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/fun/zodiak', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://revita.herokuapp.com/api/primbon/zodiaku?mimpi=${text}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/fun/artimimpi', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://kocakz.herokuapp.com/api/primbon/tafsirmimpi?mimpi=${text}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/fun/artinama', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://kocakz.herokuapp.com/api/primbon/artinama?name=${text}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/search/unplash', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.zeks.me/api/unsplash?apikey=apivinz&q=${q}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/search/sticker', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://myhuman.herokuapp.com/api/stickers?search=${q}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.sticker;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/search/xnxx', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://kocakz.herokuapp.com/api/media/xnxx/search?query=${query}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/search/chordlagu', async (req, res, next) => {
        var apikey = req.query.apikey,
            lagu = req.query.lagu
            
	if(!apikey) return res.json(loghandler.notparam)
     if(!lagu) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://betaapikey.herokuapp.com/api/chordlagu?lagu=${lagu}&apikey=Nekellalwayslus`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator: 'Nekellalwayslus',
                 code: 200,
                 message: 'pake api seada nya aja oke:)',
                 result: result.result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/search/liriklagu', async (req, res, next) => {
        var apikey = req.query.apikey,
            lagu = req.query.lagu
            
	if(!apikey) return res.json(loghandler.notparam)
        if(!lagu) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter lagu"})

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://myhuman.herokuapp.com/api/lirik?query=${lagu}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator: 'Nekellalwayslus',
                 code: 200,
                 message: 'pake api seada nya aja oke:)',
                 result: result.result
            })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
 res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/search/playstore', async (req, res, next) => {
        var apikey = req.query.apikey,
            query = req.query.query
            
	if(!apikey) return res.json(loghandler.notparam)
        if(!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api-toxic-devil-production.up.railway.app/api/search/playstore?query=${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator: 'Nekellalwayslus',
                 code: 200,
                 message: 'pake api seada nya aja oke:)',
                 result: result.result
            })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
 res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/search/kbbi', async (req, res, next) => {
        var apikey = req.query.apikey,
            kata = req.query.kata
            
	if(!apikey) return res.json(loghandler.notparam)
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://kbbi-api-zhirrr.vercel.app/api/kbbi?text=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator: 'Nekellalwayslus',
                 code: 200,
                 message: 'pake api seada nya aja oke:)',
                 result: result.arti
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
 res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/downloader/twittervid', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://kocakz.herokuapp.com/api/media/twvid?url=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.getVideo;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/downloader/twitterimg', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://kocakz.herokuapp.com/api/media/twimg?url=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.images;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey.html');
}
})


router.get('/downloader/ig', async (req, res, next) => {
        var apikey = req.query.apikey,
            url = req.query.url
            
	if(!apikey) return res.json(loghandler.notparam)
	if(apikey != 'Nekellalwayslus') return res.sendFile(invalidKey)
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})

       fetch(encodeURI(`https://betakey-apii.herokuapp.com/docs/download/instagram?url=${url}&apikey=SagiriChan`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: 'Nekellalwayslus',
                 code: 200,
                 message: 'pake api seada nya aja oke:)',
                 result: result.result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})


router.get('/download/igvideo', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://myhuman.herokuapp.com/api/igvivideo?url=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/downloader/igimg', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://myhuman.herokuapp.com/api/igimage?url=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/search/xvideo', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://kocakz.herokuapp.com/api/media/xvideo/search?query=${query}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey.html');
}
})


router.get('/search/pornhub', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://kocakz.herokuapp.com/api/media/pornhub/search?query=${query}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.res;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/search/pinterest', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://aqulzz.herokuapp.com/pinterest?q=${q}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/downloader/igtv', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://aqulzz.herokuapp.com/igtv?url=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/downloader/igstory', async(req, res, next) => {
  const apikey = req.query.apikey;
  const username = req.query.username;
  
  if(!username) return res.json(loghandler.notusername)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://betakey-apii.herokuapp.com/docs/download/igstory?username=${username}&apikey=SagiriChan`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/download/tiktok3', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://tiktokd.herokuapp.com/tiktok?url=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.link;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/download/tiktok2', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://aqulzz.herokuapp.com/tiktok?url=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/downloader/facebook2', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api-xcoders.xyz/api/download/fb?url=${url}&apikey=UW8wc3KPy0`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/downloader/facebook777', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api-xcoders.xyz/api/download/fb?url=${url}&apikey=UW8wc3KPy0`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.data.url;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/downloader/fb2', async (req, res, next) => {

        var Apikey = req.query.apikey,
            url = req.query.url
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})

       FB(url)
       .then((data) => {
         res.json({
           status: true,
           code: 200,
           creator: `${creator}`,
           title: data.title,
           desc: data.deskripsi,
           durasi: data.durasi,
           thumb: data.thumbnail,
           result: data.hd
         })
       });
} else {
res.sendFile(__path + '/views/apikey.html');
}
});

router.get('/downloader/fb', async (req, res, next) => {

  const url = req.query.url;
  const apikey = req.query.apikey;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
       fbDownloader(`${url}`)
       .then((result) => {
            res.json({
        status: true,
        code: 200,
        creator: `${creator}`,
        result
      })
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.sendFile(__path + '/views/apikey.html');
    }
});

router.get('/stalk/tiktok', async (req, res, next) => {
    var Apikey = req.query.apikey,
        username = req.query.username

	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!username) return res.json(loghandler.notusername)


    TikTokScraper.getUserProfileInfo(username)
        .then(user => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : user
            })
        })
        .catch(e => {
             res.json({
                 status : false,
                 creator : `${creator}`,
                 message : "error, mungkin username anda tidak valid"
             })
         })
   } else {
       res.sendFile(__path + '/views/apikey.html');
   }
})

router.get('/stalk/ig2', async(req, res, next) => {
  const username = req.query.username;
  const apikey = req.query.apikey;
  if(!username) return res.json(loghandler.notusername)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  igStalk(username)
    .then((result) => {
      res.json({
        status : true,
        code: 200,
        creator : `${creator}`,
        result
      });
    })
    .catch((err) => {
      res.json(err);
    });
    } else {
    	res.sendFile(__path + '/views/apikey.html');
    }
});


router.get('/stalk/npm', async (req, res, next) => {
        var Apikey = req.query.apikey,
            query = req.query.query
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       fetch(encodeURI(`https://registry.npmjs.org/${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/fun/faktaunik', async (req, res, next) => {
        var Apikey = req.query.apikey
	if(!Apikey) return res.json(loghandler.notparam)
        if(listkey.includes(Apikey)){

       fetch(encodeURI(`http://kocakz.herokuapp.com/api/random/text/faktaunik`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/fun/katabijak', async (req, res, next) => {
        var Apikey = req.query.apikey
	if(!Apikey) return res.json(loghandler.notparam)
        if(listkey.includes(Apikey)){

       fetch(encodeURI(`http://kocakz.herokuapp.com/api/random/text/katabijak`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/fun/motivasi', async (req, res, next) => {
        var Apikey = req.query.apikey
	if(!Apikey) return res.json(loghandler.notparam)
        if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://x-restapi.herokuapp.com/api/random-motivasi?apikey=BETA`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.motivasi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/fun/truth', async (req, res, next) => {
        var Apikey = req.query.apikey
	if(!Apikey) return res.json(loghandler.notparam)
        if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://myhuman.herokuapp.com/api/truth`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/fun/dare', async (req, res, next) => {
        var Apikey = req.query.apikey
	if(!Apikey) return res.json(loghandler.notparam)
        if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://myhuman.herokuapp.com/api/dare`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/fun/rate', async (req, res, next) => {
        var Apikey = req.query.apikey
        text = req.query.text 
        
	if(!Apikey) return res.json(loghandler.notparam)
	if(!text) return res.json(loghandler.nottext)
        if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://myhuman.herokuapp.com/api/rate?rate=${text}`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/fun/watak', async (req, res, next) => {
        var Apikey = req.query.apikey
        text = req.query.text 
        
	if(!Apikey) return res.json(loghandler.notparam)
	if(!text) return res.json(loghandler.nottext)
        if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://myhuman.herokuapp.com/api/watak?nama=${text}`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/random/pantun', async (req, res, next) => {
        var Apikey = req.query.apikey
	if(!Apikey) return res.json(loghandler.notparam)
        if(listkey.includes(Apikey)){

       fetch(encodeURI(`http://kocakz.herokuapp.com/api/random/text/pantun`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/random/fancytext', async (req, res, next) => {
        var Apikey = req.query.apikey
             text = req.query.text 
  
	if(!Apikey) return res.json(loghandler.notparam)
        if(!text) return res.json(loghandler.nottext)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`http://kocakz.herokuapp.com/api/random/text/fancytext?text=${text}`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/random/quotes', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`http://kocakz.herokuapp.com/api/random/text/quotes`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})


router.get('/jadwal-bioskop', async(req, res, next) => {
var Apikey = req.query.apikey

if(!Apikey) return res.json(loghandler.notparam)
if(listkey.includes(Apikey)){
const { default: Axios } = require('axios')
const cheerio = require('cheerio')

Axios.get('https://jadwalnonton.com/now-playing')
.then(({ data }) => {
     const $ = cheerio.load(data)
     let title = []
     let url = []
     let img = []
 	$('div.row > div.item > div.clearfix > div.rowl > div.col-xs-6 > a').get().map((rest) => {
         url.push($(rest).attr('href'))
         })
         $('div.row > div.item > div.clearfix > div.rowl > div.col-xs-6 > a > img').get().map((rest) => {
        	title.push($(rest).attr('alt'))
         })
         $('div.row > div.item > div.clearfix > div.rowl > div.col-xs-6 > a > img').get().map((rest) => {
        	img.push($(rest).attr('src'))
         })
     let result = []
     for (let i = 0; i < url.length; i++) {
          result.push({
               	url: url[i],
               	title: title[i],
               	img: img[i]
          })
     }
     res.json({
     creator:  `${creator}`,
     status: true,
     result: result
     })
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/short/tinyurl', async (req, res, next) => {
    var Apikey = req.query.apikey,
        url = req.query.url

	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
     if (!url) return res.json(loghandler.noturl)
     request(`https://tinyurl.com/api-create.php?url=${url}`, function (error, response, body) {
         try {
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result : `${body}`
             })
         } catch (e) {
             console.log('Error :', color(e,'red'))
             res.json(loghandler.invalidlink)
         }
     })
   } else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/base', async (req, res, next) => {
	var type = req.query.type,
		encode = req.query.encode,
		decode = req.query.decode,
		Apikey = req.query.apikey;
		if (!Apikey) return res.json(loghandler.notparam)
		if (listkey.includes(Apikey)){
		if (!type) return res.json({status: false, creator, code: 404, message: 'masukan parameter type, type yang tersedia : base64 , base32'})
		if (type == 'base64' && encode){
				Base("b64enc", encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base64' && decode){
				Base("b64dec", decode)
				.then(result => {
					res.json({
						status: true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32' && encode){
				Base('b32enc', encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32' && decode){
				Base('b32dec', decode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if(!(encode || decode)){
				res.json({
					status:false,
					creator: `${creator}`,
					message: "tambahkan parameter encode/decode"
				})
			} else {
				res.json(loghandler.error)
			}
	} else {
res.sendFile(__path + '/views/apikey.html');
}
});

router.get('/tools/wpuser', async(req, res, next) => {
  const link = req.query.url;
  const apikey = req.query.apikey;
  
  if(!link) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    WPUser(link)
    .then((data) => {
      res.json(data)
    })
} else {
  res.sendFile(__path + '/views/apikey.html');
};
});

router.get('/info/cuaca', async(req, res, next) => {
  const apikey = req.query.apikey;
  const kota = req.query.kota;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!kota) return res.json({status: false, code: 406, message: 'masukkan parameter kota'})
  if(listkey.includes(apikey)) {
    Cuaca(kota)
    .then((data) => {
      res.json(data)
    })
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
})
router.get('/info/gempa', async (req, res, next) => {
	        var Apikey = req.query.apikey

		if (!Apikey) return res.json(loghandler.notparam)
		if (listkey.includes(Apikey)){
		Gempa()
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
	} else {
res.sendFile(__path + '/views/apikey.html');
}
})


router.get('/muslim/kisahnabi', async (req, res, next) => {
	var nabi = req.query.nabi,
		Apikey = req.query.apikey;

		if (!Apikey) return res.json(loghandler.notparam)
		if (listkey.includes(Apikey)){
		Searchnabi(nabi)
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
	} else {
res.sendFile(__path + '/views/apikey.html');
}
})


router.get('/muslim/hadits', async (req, res, next) => {
        var Apikey = req.query.apikey,
            kitab = req.query.kitab,
            nomor = req.query.nomor
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!kitab) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kitab"})
    if (!nomor) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nomor"})

       fetch(encodeURI(`https://hadits-api-zhirrr.vercel.app/books/${kitab}/${nomor}`))
        .then(response => response.json())
        .then(data => {
             res.json(
             data
             )
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})


router.get('/muslim/quran', async (req, res, next) => {
        var Apikey = req.query.apikey,
            surah = req.query.surah,
            ayat = req.query.ayat
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!surah) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter surah"})
    if (!ayat) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter ayat"})

       fetch(encodeURI(`https://alquran-apiii.vercel.app/surah/${surah}/${ayat}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/muslim/tahlil', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/ERLANRAHMAT/My-SQL-Results/main/data/dataTahlil.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})


router.get('/muslim/wirid', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/ERLANRAHMAT/My-SQL-Results/main/data/dataWirid.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})


router.get('/muslim/ayatkursi', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/ERLANRAHMAT/My-SQL-Results/main/data/dataAyatKursi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})


router.get('/muslim/doaharian', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/ERLANRAHMAT/My-SQL-Results/main/data/dataDoaHarian.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})


router.get('/muslim/bacaanshalat', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/ERLANRAHMAT/My-SQL-Results/main/data/dataBacaanShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})


router.get('/muslim/niatshalat', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/ERLANRAHMAT/My-SQL-Results/main/data/dataNiatShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})


router.get('/muslim/kisahnabi2', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/ERLANRAHMAT/My-SQL-Results/main/data/dataKisahNabi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})


router.get('/muslim/asmaulhusna', async (req, res, next) => {
        var Apikey = req.query.apikey

	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

	asmaul = JSON.parse(fs.readFileSync(__path +'/data/AsmaulHusna.json'));
	res.json(asmaul)
} else {
res.sendFile(__path + '/views/apikey.html');
}
})


router.get('/muslim/niatshubuh', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/ERLANRAHMAT/My-SQL-Results/main/data/NiatShubuh.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})


router.get('/muslim/niatdzuhur', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/ERLANRAHMAT/My-SQL-Results/main/data/NiatDzuhur.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})


router.get('/muslim/niatmaghrib', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/ERLANRAHMAT/My-SQL-Results/main/data/NiatMaghrib.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})


router.get('/muslim/niatisya', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/ERLANRAHMAT/My-SQL-Results/main/data/NiatIsya.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})


router.get('/muslim/niatashar', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/ERLANRAHMAT/My-SQL-Results/main/data/NiatAshar.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})
router.get('/muslim/jadwalshalat', async (req, res, next) => {
        var Apikey = req.query.apikey,
            kota = req.query.kota
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!kota) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/Zhirrr-Database/main/adzan/${kota}/2021/03.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/search/image', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    try {
        var options = {
            url: `http://results.dogpile.com/serp?qc=images&q=${query}`,
            method: "GET",
            headers: {
                "Accept": "text/html",
                "User-Agent": "Chrome"
            }
        }
        request(options, function(error, response, responseBody) {
            if (error) return

            $ = cheerio.load(responseBody)
            var links = $(".image a.link")
            var cari = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"))
            if (!cari.length) return
            var hasil = cari[Math.floor(Math.random() * cari.length)]
        res.json({
              status: true,
              code: 200,
              creator: `${creator}`,
              result: hasil
            })
        })
    } catch (e) {}
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
})



router.get('/nsfw/ahegao', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const ahegao = JSON.parse(fs.readFileSync(__path +'/data/ahegao.json'));
  const randahegao = ahegao[Math.floor(Math.random() * ahegao.length)];
  data = await fetch(randahegao).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/ahegao.jpeg', data)
  res.sendFile(__path +'/tmp/ahegao.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/nsfw/ass', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const ass = JSON.parse(fs.readFileSync(__path +'/data/ass.json'));
  const randass = ass[Math.floor(Math.random() * ass.length)];
  data = await fetch(randass).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/ass.jpeg', data)
  res.sendFile(__path +'/tmp/ass.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/nsfw/bdsm', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const bdsm = JSON.parse(fs.readFileSync(__path +'/data/bdsm.json'));
  const randbdsm = bdsm[Math.floor(Math.random() * bdsm.length)];
  data = await fetch(randbdsm).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/bdsm.jpeg', data)
  res.sendFile(__path +'/tmp/bdsm.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/nsfw/blowjob', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const blowjob = JSON.parse(fs.readFileSync(__path +'/data/blowjob.json'));
  const randblowjob = blowjob[Math.floor(Math.random() * blowjob.length)];
  data = await fetch(randblowjob).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/blowjob.jpeg', data)
  res.sendFile(__path +'/tmp/blowjob.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/nsfw/cuckold', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const cuckold = JSON.parse(fs.readFileSync(__path +'/data/cuckold.json'));
  const randcuckold = cuckold[Math.floor(Math.random() * cuckold.length)];
  data = await fetch(randcuckold).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/cuckold.jpeg', data)
  res.sendFile(__path +'/tmp/cuckold.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/nsfw/cum', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const cum = JSON.parse(fs.readFileSync(__path +'/data/cum.json'));
  const randcum = cum[Math.floor(Math.random() * cum.length)];
  data = await fetch(randcum).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/cum.jpeg', data)
  res.sendFile(__path +'/tmp/cum.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/nsfw/ero', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const ero = JSON.parse(fs.readFileSync(__path +'/data/ero.json'));
  const randero = ero[Math.floor(Math.random() * ero.length)];
  data = await fetch(randero).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/ero.jpeg', data)
  res.sendFile(__path +'/tmp/ero.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/nsfw/femdom', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const femdom = JSON.parse(fs.readFileSync(__path +'/data/femdom.json'));
  const randfemdom = femdom[Math.floor(Math.random() * femdom.length)];
  data = await fetch(randfemdom).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/femdom.jpeg', data)
  res.sendFile(__path +'/tmp/femdom.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/nsfw/foot', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const foot = JSON.parse(fs.readFileSync(__path +'/data/foot.json'));
  const randfoot = foot[Math.floor(Math.random() * foot.length)];
  data = await fetch(randfoot).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/foot.jpeg', data)
  res.sendFile(__path +'/tmp/foot.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/nsfw/gangbang', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const gangbang = JSON.parse(fs.readFileSync(__path +'/data/gangbang.json'));
  const randgangbang = gangbang[Math.floor(Math.random() * gangbang.length)];
  data = await fetch(randgangbang).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/gangbang.jpeg', data)
  res.sendFile(__path +'/tmp/gangbang.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/nsfw/glasses', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const glasses = JSON.parse(fs.readFileSync(__path +'/data/glasses.json'));
  const randglasses = glasses[Math.floor(Math.random() * glasses.length)];
  data = await fetch(randglasses).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/glasses.jpeg', data)
  res.sendFile(__path +'/tmp/glasses.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/nsfw/hentai', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const hentai = JSON.parse(fs.readFileSync(__path +'/data/hentai.json'));
  const randhentai = hentai[Math.floor(Math.random() * hentai.length)];
  data = await fetch(randhentai).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/hentai.jpeg', data)
  res.sendFile(__path +'/tmp/hentai.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/nsfw/gifs', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const gifs = JSON.parse(fs.readFileSync(__path +'/data/gifs.json'));
  const randgifs = gifs[Math.floor(Math.random() * gifs.length)];
  data = await fetch(randgifs).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/gifs.jpeg', data)
  res.sendFile(__path +'/tmp/gifs.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/nsfw/jahy', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const jahy = JSON.parse(fs.readFileSync(__path +'/data/jahy.json'));
  const randjahy = jahy[Math.floor(Math.random() * jahy.length)];
  data = await fetch(randjahy).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/jahy.jpeg', data)
  res.sendFile(__path +'/tmp/jahy.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/nsfw/manga', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const manga = JSON.parse(fs.readFileSync(__path +'/data/manga.json'));
  const randmanga = manga[Math.floor(Math.random() * manga.length)];
  data = await fetch(randmanga).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/manga.jpeg', data)
  res.sendFile(__path +'/tmp/manga.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/nsfw/masturbation', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const masturbation = JSON.parse(fs.readFileSync(__path +'/data/masturbation.json'));
  const randmasturbation = masturbation[Math.floor(Math.random() * masturbation.length)];
  data = await fetch(randmasturbation).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/masturbation.jpeg', data)
  res.sendFile(__path +'/tmp/masturbation.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/nsfw/neko', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const neko = JSON.parse(fs.readFileSync(__path +'/data/neko.json'));
  const randneko = neko[Math.floor(Math.random() * neko.length)];
  data = await fetch(randneko).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/neko.jpeg', data)
  res.sendFile(__path +'/tmp/neko.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/nsfw/orgy', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const orgy = JSON.parse(fs.readFileSync(__path +'/data/orgy.json'));
  const randorgy = orgy[Math.floor(Math.random() * orgy.length)];
  data = await fetch(randorgy).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/orgy.jpeg', data)
  res.sendFile(__path +'/tmp/orgy.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/nsfw/panties', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const panties = JSON.parse(fs.readFileSync(__path +'/data/panties.json'));
  const randpanties = panties[Math.floor(Math.random() * panties.length)];
  data = await fetch(randpanties).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/panties.jpeg', data)
  res.sendFile(__path +'/tmp/panties.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/nsfw/pussy', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const pussy = JSON.parse(fs.readFileSync(__path +'/data/pussy.json'));
  const randpussy = pussy[Math.floor(Math.random() * pussy.length)];
  data = await fetch(randpussy).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/pussy.jpeg', data)
  res.sendFile(__path +'/tmp/pussy.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/nsfw/neko2', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const neko2 = JSON.parse(fs.readFileSync(__path +'/data/neko2.json'));
  const randneko2 = neko2[Math.floor(Math.random() * neko2.length)];
  data = await fetch(randneko2).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/neko2.jpeg', data)
  res.sendFile(__path +'/tmp/neko2.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/nsfw/tentacles', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const tentacles = JSON.parse(fs.readFileSync(__path +'/data/tentacles.json'));
  const randtentacles = tentacles[Math.floor(Math.random() * tentacles.length)];
  data = await fetch(randtentacles).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/tentacles.jpeg', data)
  res.sendFile(__path +'/tmp/tentacles.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/nsfw/thighs', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const thighs = JSON.parse(fs.readFileSync(__path +'/data/thighs.json'));
  const randthighs = thighs[Math.floor(Math.random() * thighs.length)];
  data = await fetch(randthighs).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/thighs.jpeg', data)
  res.sendFile(__path +'/tmp/thighs.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/nsfw/yuri', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const yuri = JSON.parse(fs.readFileSync(__path +'/data/yuri.json'));
  const randyuri = yuri[Math.floor(Math.random() * yuri.length)];
  data = await fetch(randyuri).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/yuri.jpeg', data)
  res.sendFile(__path +'/tmp/yuri.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/nsfw/zettai', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const zettai = JSON.parse(fs.readFileSync(__path +'/data/zettai.json'));
  const randzettai = zettai[Math.floor(Math.random() * zettai.length)];
  data = await fetch(randzettai).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/zettai.jpeg', data)
  res.sendFile(__path +'/tmp/zettai.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/keneki', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const keneki = JSON.parse(fs.readFileSync(__path +'/data/keneki.json'));
  const randkeneki = keneki[Math.floor(Math.random() * keneki.length)];
  data = await fetch(randkeneki).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/keneki.jpeg', data)
  res.sendFile(__path +'/tmp/keneki.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/megumin', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const megumin = JSON.parse(fs.readFileSync(__path +'/data/megumin.json'));
  const randmegumin = megumin[Math.floor(Math.random() * megumin.length)];
  data = await fetch(randmegumin).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/megumin.jpeg', data)
  res.sendFile(__path +'/tmp/megumin.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/yotsuba', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const yotsuba = JSON.parse(fs.readFileSync(__path +'/data/yotsuba.json'));
  const randyotsuba = yotsuba[Math.floor(Math.random() * yotsuba.length)];
  data = await fetch(randyotsuba).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/yotsuba.jpeg', data)
  res.sendFile(__path +'/tmp/yotsuba.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/shinomiya', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const shinomiya = JSON.parse(fs.readFileSync(__path +'/data/shinomiya.json'));
  const randshinomiya = shinomiya[Math.floor(Math.random() * shinomiya.length)];
  data = await fetch(randshinomiya).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/shinomiya.jpeg', data)
  res.sendFile(__path +'/tmp/shinomiya.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/yumeko', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const yumeko = JSON.parse(fs.readFileSync(__path +'/data/yumeko.json'));
  const randyumeko = yumeko[Math.floor(Math.random() * yumeko.length)];
  data = await fetch(randyumeko).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/yumeko.jpeg', data)
  res.sendFile(__path +'/tmp/yumeko.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/tejina', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const tejina = JSON.parse(fs.readFileSync(__path +'/data/tejina.json'));
  const randtejina = tejina[Math.floor(Math.random() * tejina.length)];
  data = await fetch(randtejina).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/tejina.jpeg', data)
  res.sendFile(__path +'/tmp/tejina.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/chiho', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const chiho = JSON.parse(fs.readFileSync(__path +'/data/chiho.json'));
  const randchiho = chiho[Math.floor(Math.random() * chiho.length)];
  data = await fetch(randchiho).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/chiho.jpeg', data)
  res.sendFile(__path +'/tmp/chiho.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/cyberspace', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const cyberspace = JSON.parse(fs.readFileSync(__path +'/data/CyberSpace.json'));
  const randcyberspace = cyberspace[Math.floor(Math.random() * cyberspace.length)];
  data = await fetch(randcyberspace).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/cyberspace.jpeg', data)
  res.sendFile(__path +'/tmp/cyberspace.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/gaming', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const gaming = JSON.parse(fs.readFileSync(__path +'/data/GameWallp.json'));
  const randgaming = gaming[Math.floor(Math.random() * gaming.length)];
  data = await fetch(randgaming).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/gaming.jpeg', data)
  res.sendFile(__path +'/tmp/gaming.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/islami', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const islami = JSON.parse(fs.readFileSync(__path +'/data/Islamic.json'));
  const randislami = islami[Math.floor(Math.random() * islami.length)];
  data = await fetch(randislami).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/islami.jpeg', data)
  res.sendFile(__path +'/tmp/islami.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/programing', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const programing = JSON.parse(fs.readFileSync(__path +'/data/Programming.json'));
  const randprograming = programing[Math.floor(Math.random() * programing.length)];
  data = await fetch(randprograming).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/programing.jpeg', data)
  res.sendFile(__path +'/tmp/programing.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/teknologi', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const teknologi = JSON.parse(fs.readFileSync(__path +'/data/Technology.json'));
  const randteknologi = teknologi[Math.floor(Math.random() * teknologi.length)];
  data = await fetch(randteknologi).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/teknologi.jpeg', data)
  res.sendFile(__path +'/tmp/teknologi.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/mountain', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const mountain = JSON.parse(fs.readFileSync(__path +'/data/Mountain.json'));
  const randmountain = mountain[Math.floor(Math.random() * mountain.length)];
  data = await fetch(randmountain).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/mountain.jpeg', data)
  res.sendFile(__path +'/tmp/mountain.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/tatasurya', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const tatasurya = JSON.parse(fs.readFileSync(__path +'/data/tatasurya.json'));
  const randtatasurya = tatasurya[Math.floor(Math.random() * tatasurya.length)];
  data = await fetch(randtatasurya).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/tatasurya.jpeg', data)
  res.sendFile(__path +'/tmp/tatasurya.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/kartun', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const kartun = JSON.parse(fs.readFileSync(__path +'/data/kartun.json'));
  const randkartun = kartun[Math.floor(Math.random() * kartun.length)];
  data = await fetch(randkartun).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/kartun.jpeg', data)
  res.sendFile(__path +'/tmp/kartun.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/yuli', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const yuli = JSON.parse(fs.readFileSync(__path +'/data/yulibocil.json'));
  const randyuli = yuli[Math.floor(Math.random() * yuli.length)];
  data = await fetch(randyuli).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/yuli.jpeg', data)
  res.sendFile(__path +'/tmp/yuli.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/pentol', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const pentol = JSON.parse(fs.readFileSync(__path +'/data/pentol.json'));
  const randpentol = pentol[Math.floor(Math.random() * pentol.length)];
  data = await fetch(randpentol).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/pentol.jpeg', data)
  res.sendFile(__path +'/tmp/pentol.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/katakata', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const katakata = JSON.parse(fs.readFileSync(__path +'/data/katakata.json'));
  const randkatakata = katakata[Math.floor(Math.random() * katakata.length)];
  data = await fetch(randkatakata).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/katakata.jpeg', data)
  res.sendFile(__path +'/tmp/katakata.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/toukachan', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const toukachan = JSON.parse(fs.readFileSync(__path +'/data/toukachan.json'));
  const randtoukachan = toukachan[Math.floor(Math.random() * toukachan.length)];
  data = await fetch(randtoukachan).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/toukachan.jpeg', data)
  res.sendFile(__path +'/tmp/toukachan.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/akira', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const akira = JSON.parse(fs.readFileSync(__path +'/data/akira.json'));
  const randakira = akira[Math.floor(Math.random() * akira.length)];
  data = await fetch(randakira).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/akira.jpeg', data)
  res.sendFile(__path +'/tmp/akira.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/itori', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const itori = JSON.parse(fs.readFileSync(__path +'/data/itori.json'));
  const randitori = itori[Math.floor(Math.random() * itori.length)];
  data = await fetch(randitori).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/itori.jpeg', data)
  res.sendFile(__path +'/tmp/itori.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/kurumi', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const kurumi = JSON.parse(fs.readFileSync(__path +'/data/kurumi.json'));
  const randkurumi = kurumi[Math.floor(Math.random() * kurumi.length)];
  data = await fetch(randkurumi).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/kurumi.jpeg', data)
  res.sendFile(__path +'/tmp/kurumi.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/miku', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const miku = JSON.parse(fs.readFileSync(__path +'/data/miku.json'));
  const randmiku = miku[Math.floor(Math.random() * miku.length)];
  data = await fetch(randmiku).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/miku.jpeg', data)
  res.sendFile(__path +'/tmp/miku.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/pokemon', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const pokemon = JSON.parse(fs.readFileSync(__path +'/data/pokemon.json'));
  const randpokemon = pokemon[Math.floor(Math.random() * pokemon.length)];
  data = await fetch(randpokemon).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/pokemon.jpeg', data)
  res.sendFile(__path +'/tmp/pokemon.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/ryujin', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const ryujin = JSON.parse(fs.readFileSync(__path +'/data/ryujin.json'));
  const randryujin = ryujin[Math.floor(Math.random() * ryujin.length)];
  data = await fetch(randryujin).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/ryujin.jpeg', data)
  res.sendFile(__path +'/tmp/ryujin.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/rose', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const rose = JSON.parse(fs.readFileSync(__path +'/data/rose.json'));
  const randrose = rose[Math.floor(Math.random() * rose.length)];
  data = await fetch(randrose).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/rose.jpeg', data)
  res.sendFile(__path +'/tmp/rose.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/kaori', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const kaori = JSON.parse(fs.readFileSync(__path +'/data/kaori.json'));
  const randkaori = kaori[Math.floor(Math.random() * kaori.length)];
  data = await fetch(randkaori).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/kaori.jpeg', data)
  res.sendFile(__path +'/tmp/kaori.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/shizuka', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const shizuka = JSON.parse(fs.readFileSync(__path +'/data/shizuka.json'));
  const randshizuka = shizuka[Math.floor(Math.random() * shizuka.length)];
  data = await fetch(randshizuka).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/shizuka.jpeg', data)
  res.sendFile(__path +'/tmp/shizuka.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/kaga', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const kaga = JSON.parse(fs.readFileSync(__path +'/data/kaga.json'));
  const randkaga = kaga[Math.floor(Math.random() * kaga.length)];
  data = await fetch(randkaga).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/kaga.jpeg', data)
  res.sendFile(__path +'/tmp/kaga.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/kotori', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const kotori = JSON.parse(fs.readFileSync(__path +'/data/kotori.json'));
  const randkotori = kotori[Math.floor(Math.random() * kotori.length)];
  data = await fetch(randkotori).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/kotori.jpeg', data)
  res.sendFile(__path +'/tmp/kotori.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/mikasa', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const mikasa = JSON.parse(fs.readFileSync(__path +'/data/mikasa.json'));
  const randmikasa = mikasa[Math.floor(Math.random() * mikasa.length)];
  data = await fetch(randmikasa).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/mikasa.jpeg', data)
  res.sendFile(__path +'/tmp/mikasa.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/akiyama', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const akiyama = JSON.parse(fs.readFileSync(__path +'/data/akiyama.json'));
  const randakiyama = akiyama[Math.floor(Math.random() * akiyama.length)];
  data = await fetch(randakiyama).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/akiyama.jpeg', data)
  res.sendFile(__path +'/tmp/akiyama.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/gremory', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const gremory = JSON.parse(fs.readFileSync(__path +'/data/gremory.json'));
  const randgremory = gremory[Math.floor(Math.random() * gremory.length)];
  data = await fetch(randgremory).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/gremory.jpeg', data)
  res.sendFile(__path +'/tmp/gremory.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/isuzu', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const isuzu = JSON.parse(fs.readFileSync(__path +'/data/isuzu.json'));
  const randisuzu = isuzu[Math.floor(Math.random() * isuzu.length)];
  data = await fetch(randisuzu).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/isuzu.jpeg', data)
  res.sendFile(__path +'/tmp/isuzu.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/random/cosplay', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const cosplay = JSON.parse(fs.readFileSync(__path +'/data/cosplay.json'));
  const randcosplay = cosplay[Math.floor(Math.random() * cosplay.length)];
  data = await fetch(randcosplay).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/cosplay.jpeg', data)
  res.sendFile(__path +'/tmp/cosplay.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/shina', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const shina = JSON.parse(fs.readFileSync(__path +'/data/shina.json'));
  const randshina = shina[Math.floor(Math.random() * shina.length)];
  data = await fetch(randshina).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/shina.jpeg', data)
  res.sendFile(__path +'/tmp/shina.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/kagura', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const kagura = JSON.parse(fs.readFileSync(__path +'/data/kagura.json'));
  const randkagura = kagura[Math.floor(Math.random() * kagura.length)];
  data = await fetch(randkagura).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/kagura.jpeg', data)
  res.sendFile(__path +'/tmp/kagura.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/shinka', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const shinka = JSON.parse(fs.readFileSync(__path +'/data/shinka.json'));
  const randshinka = shinka[Math.floor(Math.random() * shinka.length)];
  data = await fetch(randshinka).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/shinka.jpeg', data)
  res.sendFile(__path +'/tmp/shinka.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/eba', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const eba = JSON.parse(fs.readFileSync(__path +'/data/eba.json'));
  const randeba = eba[Math.floor(Math.random() * eba.length)];
  data = await fetch(randeba).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/eba.jpeg', data)
  res.sendFile(__path +'/tmp/eba.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/deidara', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Deidara = JSON.parse(fs.readFileSync(__path +'/data/deidara.json'));
  const randDeidara = Deidara[Math.floor(Math.random() * Deidara.length)];
  data = await fetch(randDeidara).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/deidara.jpeg', data)
  res.sendFile(__path +'/tmp/deidara.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/trans', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const trans = JSON.parse(fs.readFileSync(__path +'/data/trans.json'));
  const randtrans = trans[Math.floor(Math.random() * trans.length)];
  data = await fetch(randtrans).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/trans.jpeg', data)
  res.sendFile(__path +'/tmp/trans.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/cecan/jeni', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const jeni = JSON.parse(fs.readFileSync(__path +'/data/jeni.json'));
  const randjeni = jeni[Math.floor(Math.random() * jeni.length)];
  data = await fetch(randjeni).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/jeni.jpeg', data)
  res.sendFile(__path +'/tmp/jeni.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/cecan/jiso', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const jiso = JSON.parse(fs.readFileSync(__path +'/data/jiso.json'));
  const randjiso = jiso[Math.floor(Math.random() * jiso.length)];
  data = await fetch(randjiso).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/jiso.jpeg', data)
  res.sendFile(__path +'/tmp/jiso.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/satanic', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const satanic = JSON.parse(fs.readFileSync(__path +'/data/satanic.json'));
  const randsatanic = satanic[Math.floor(Math.random() * satanic.length)];
  data = await fetch(randsatanic).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/satanic.jpeg', data)
  res.sendFile(__path +'/tmp/satanic.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/cecan2', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const cecan2 = JSON.parse(fs.readFileSync(__path +'/data/cecan2.json'));
  const randcecan2 = cecan2[Math.floor(Math.random() * cecan2.length)];
  data = await fetch(randcecan2).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/cecan2.jpeg', data)
  res.sendFile(__path +'/tmp/cecan2.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/cogan2', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const cogan2 = JSON.parse(fs.readFileSync(__path +'/data/cogan2.json'));
  const randcogan2 = cogan2[Math.floor(Math.random() * cogan2.length)];
  data = await fetch(randcogan2).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/cogan2.jpeg', data)
  res.sendFile(__path +'/tmp/cogan2.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/itachi', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Itachi = JSON.parse(fs.readFileSync(__path +'/data/itachi.json'));
  const randItachi = Itachi[Math.floor(Math.random() * Itachi.length)];
  data = await fetch(randItachi).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/ita.jpeg', data)
  res.sendFile(__path +'/tmp/ita.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/madara', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Madara = JSON.parse(fs.readFileSync(__path +'/data/madara.json'));
  const randMadara = Madara[Math.floor(Math.random() * Madara.length)];
  data = await fetch(randMadara).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/madara.jpeg', data)
  res.sendFile(__path +'/tmp/madara.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/yuki', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Yuki = JSON.parse(fs.readFileSync(__path +'/data/yuki.json'));
  const randYuki = Yuki[Math.floor(Math.random() * Yuki.length)];
  data = await fetch(randYuki).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/yuki.jpeg', data)
  res.sendFile(__path +'/tmp/yuki.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/asuna', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const asuna = JSON.parse(fs.readFileSync(__path +'/data/asuna.json'));
  const randasuna = asuna[Math.floor(Math.random() * asuna.length)];
  data = await fetch(randasuna).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/asuna.jpeg', data)
  res.sendFile(__path +'/tmp/asuna.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/ayuzawa', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const ayuzawa = JSON.parse(fs.readFileSync(__path +'/data/ayuzawa.json'));
  const randayuzawa = ayuzawa[Math.floor(Math.random() * ayuzawa.length)];
  data = await fetch(randayuzawa).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/ayuzawa.jpeg', data)
  res.sendFile(__path +'/tmp/ayuzawa.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/chitoge', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const chitoge = JSON.parse(fs.readFileSync(__path +'/data/chitoge.json'));
  const randchitoge = chitoge[Math.floor(Math.random() * chitoge.length)];
  data = await fetch(randchitoge).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/chitoge.jpeg', data)
  res.sendFile(__path +'/tmp/chitoge.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/emilia', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const emilia = JSON.parse(fs.readFileSync(__path +'/data/emilia.json'));
  const randemilia = emilia[Math.floor(Math.random() * emilia.length)];
  data = await fetch(randemilia).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/emilia.jpeg', data)
  res.sendFile(__path +'/tmp/emilia.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/hestia', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const hestia = JSON.parse(fs.readFileSync(__path +'/data/hestia.json'));
  const randhestia = hestia[Math.floor(Math.random() * hestia.length)];
  data = await fetch(randhestia).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/hestia.jpeg', data)
  res.sendFile(__path +'/tmp/hestia.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/inori', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const inori = JSON.parse(fs.readFileSync(__path +'/data/inori.json'));
  const randinori = inori[Math.floor(Math.random() * inori.length)];
  data = await fetch(randinori).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/inori.jpeg', data)
  res.sendFile(__path +'/tmp/inori.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/ana', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const ana = JSON.parse(fs.readFileSync(__path +'/data/ana.json'));
  const randana = ana[Math.floor(Math.random() * ana.length)];
  data = await fetch(randana).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/ana.jpeg', data)
  res.sendFile(__path +'/tmp/ana.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/boruto', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Boruto = JSON.parse(fs.readFileSync(__path +'/data/boruto.json'));
  const randBoruto = Boruto[Math.floor(Math.random() * Boruto.length)];
  data = await fetch(randBoruto).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/bor.jpeg', data)
  res.sendFile(__path +'/tmp/bor.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/erza', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Erza = JSON.parse(fs.readFileSync(__path +'/data/erza.json'));
  const randErza = Erza[Math.floor(Math.random() * Erza.length)];
  data = await fetch(randErza).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/erza.jpeg', data)
  res.sendFile(__path +'/tmp/erza.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/kakasih', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Kakasih = JSON.parse(fs.readFileSync(__path +'/data/kakasih.json'));
  const randKakasih = Kakasih[Math.floor(Math.random() * Kakasih.length)];
  data = await fetch(randKakasih).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/ka.jpeg', data)
  res.sendFile(__path +'/tmp/ka.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/sagiri', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Sagiri = JSON.parse(fs.readFileSync(__path +'/data/sagiri.json'));
  const randSagiri = Sagiri[Math.floor(Math.random() * Sagiri.length)];
  data = await fetch(randSagiri).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/sagiri.jpeg', data)
  res.sendFile(__path +'/tmp/sagiri.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/minato', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Minato = JSON.parse(fs.readFileSync(__path +'/data/minato.json'));
  const randMinato = Minato[Math.floor(Math.random() * Minato.length)];
  data = await fetch(randMinato).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/minato.jpeg', data)
  res.sendFile(__path +'/tmp/minato.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/naruto', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Naruto = JSON.parse(fs.readFileSync(__path +'/data/naruto.json'));
  const randNaruto = Naruto[Math.floor(Math.random() * Naruto.length)];
  data = await fetch(randNaruto).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/naruto.jpeg', data)
  res.sendFile(__path +'/tmp/naruto.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/nezuko', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Nezuko = JSON.parse(fs.readFileSync(__path +'/data/nezuko.json'));
  const randNezuko = Nezuko[Math.floor(Math.random() * Nezuko.length)];
  data = await fetch(randNezuko).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/nezu.jpeg', data)
  res.sendFile(__path +'/tmp/nezu.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/onepiece', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Pic = JSON.parse(fs.readFileSync(__path +'/data/onepiece.json'));
  const randPic = Pic[Math.floor(Math.random() * Pic.length)];
  data = await fetch(randPic).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/pic.jpeg', data)
  res.sendFile(__path +'/tmp/pic.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/rize', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Rize = JSON.parse(fs.readFileSync(__path +'/data/rize.json'));
  const randRize = Rize[Math.floor(Math.random() * Rize.length)];
  data = await fetch(randRize).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/rize.jpeg', data)
  res.sendFile(__path +'/tmp/rize.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/sakura', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Sakura = JSON.parse(fs.readFileSync(__path +'/data/sakura.json'));
  const randSakura = Sakura[Math.floor(Math.random() * Sakura.length)];
  data = await fetch(randSakura).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/sakura.jpeg', data)
  res.sendFile(__path +'/tmp/sakura.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/sasuke', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Sasuke = JSON.parse(fs.readFileSync(__path +'/data/sasuke.json'));
  const randSasuke = Sasuke[Math.floor(Math.random() * Sasuke.length)];
  data = await fetch(randSasuke).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/sasuke.jpeg', data)
  res.sendFile(__path +'/tmp/sasuke.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/tsunade', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Su = JSON.parse(fs.readFileSync(__path +'/data/tsunade.json'));
  const randSu = Su[Math.floor(Math.random() * Su.length)];
  data = await fetch(randSu).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/su.jpeg', data)
  res.sendFile(__path +'/tmp/su.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/montor', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Mon = JSON.parse(fs.readFileSync(__path +'/data/montor.json'));
  const randMon = Mon[Math.floor(Math.random() * Mon.length)];
  data = await fetch(randMon).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/montor.jpeg', data)
  res.sendFile(__path+ '/tmp/montor.jpeg');
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/mobil', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Mob = JSON.parse(fs.readFileSync(__path +'/data/mobil.json'));
  const randMob = Mob[Math.floor(Math.random() * Mob.length)];
  data = await fetch(randMob).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/mobil.jpeg', data)
  res.sendFile(__path+ '/tmp/mobil.jpeg');
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/boneka-chucky', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Bon = JSON.parse(fs.readFileSync(__path +'/data/boneka.json'));
  const randBon = Bon[Math.floor(Math.random() * Bon.length)];
  data = await fetch(randBon).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/chucky.jpeg', data)
  res.sendFile(__path+ '/tmp/chucky.jpeg');
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/anime', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Wai23 = JSON.parse(fs.readFileSync(__path +'/data/wallhp2.json'));
  const randWai23 = Wai23[Math.floor(Math.random() * Wai23.length)];
  data = await fetch(randWai23).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/wallhp2.jpeg', data)
  res.sendFile(__path+ '/tmp/wallhp2.jpeg');
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/random/blackpink', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  Black = JSON.parse(fs.readFileSync(__path +'/data/blackpink.json'));
  const randBlack = Black[Math.floor(Math.random() * Black.length)]
  data = await fetch(randBlack).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/blak.jpeg', data)
  res.sendFile(__path +'/tmp/blak.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/wallhp', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Wai22 = JSON.parse(fs.readFileSync(__path +'/data/wallhp.json'));
  const randWai22 = Wai22[Math.floor(Math.random() * Wai22.length)];
  data = await fetch(randWai22).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/wallhp.jpeg', data)
  res.sendFile(__path+ '/tmp/wallhp.jpeg');
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/anime/waifu2', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Wai2 = JSON.parse(fs.readFileSync(__path +'/data/waifu2.json'));
  const randWai2 = Wai2[Math.floor(Math.random() * Wai2.length)];
  data = await fetch(randWai2).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/wibu2.jpeg', data)
  res.sendFile(__path+ '/tmp/wibu2.jpeg');
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/anime/waifu', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Wai = JSON.parse(fs.readFileSync(__path +'/data/waifu.json'));
  const randWai = Wai[Math.floor(Math.random() * Wai.length)];
  data = await fetch(randWai).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/wibu.jpeg', data)
  res.sendFile(__path+ '/tmp/wibu.jpeg');
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/kpop', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  Kpop = JSON.parse(fs.readFileSync(__path +'/data/kpop.json'));
  const randKpop = Kpop[Math.floor(Math.random() * Kpop.length)]
  data = await fetch(randKpop).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/kpop.jpeg', data)
  res.sendFile(__path +'/tmp/kpop.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/hekel', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  Hekel = JSON.parse(fs.readFileSync(__path +'/data/hekel.json'));
  const randHekel = Hekel[Math.floor(Math.random() * Hekel.length)]
  data = await fetch(randHekel).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/hek.jpeg', data)
  res.sendFile(__path +'/tmp/hek.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/kucing', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  Kucing = JSON.parse(fs.readFileSync(__path +'/data/kucing.json'));
  const randKucing = Kucing[Math.floor(Math.random() * Kucing.length)]
  data = await fetch(randKucing).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/kucing.jpeg', data)
  res.sendFile(__path +'/tmp/kucing.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/pubg', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  Pubg = JSON.parse(fs.readFileSync(__path +'/data/pubg.json'));
  const randPubg = Pubg[Math.floor(Math.random() * Pubg.length)]
  data = await fetch(randPubg).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/pubg.jpeg', data)
  res.sendFile(__path +'/tmp/pubg.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/ppcouple', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  Pp = JSON.parse(fs.readFileSync(__path +'/data/profil.json'));
  const randPp = Pp[Math.floor(Math.random() * Pp.length)]
  data = await fetch(randPp).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/pp.jpeg', data)
  res.sendFile(__path +'/tmp/pp.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/anjing', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  Anjing = JSON.parse(fs.readFileSync(__path +'/data/anjing.json'));
  const randAnjing = Anjing[Math.floor(Math.random() * Anjing.length)]
  data = await fetch(randAnjing).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/ajg.jpeg', data)
  res.sendFile(__path +'/tmp/ajg.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/doraemon', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  Dora = JSON.parse(fs.readFileSync(__path +'/data/doraemon.json'));
  const randDora = Dora[Math.floor(Math.random() * Dora.length)]
  data = await fetch(randDora).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/dora.jpeg', data)
  res.sendFile(__path +'/tmp/dora.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/cogan', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  Cogan = JSON.parse(fs.readFileSync(__path +'/data/cogan.json'));
  const randCogan = Cogan[Math.floor(Math.random() * Cogan.length)]
  data = await fetch(randCogan).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/cogan.jpeg', data)
  res.sendFile(__path +'/tmp/cogan.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})


router.get('/wallpaper/elaina', async (req, res, next) => {
        const Apikey = req.query.apikey;
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

const Elaina = JSON.parse(fs.readFileSync(__path +'/data/elaina.json'))
const randElaina = Elaina[Math.floor(Math.random() * Elaina.length)]
//tansole.log(randLoli)
data = await fetch(randElaina).then(v => v.buffer())
await fs.writeFileSync(__path +'/tmp/elaina.jpeg', data)
res.sendFile(__path +'/tmp/elaina.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})


router.get('/wallpaper/loli', async (req, res, next) => {
        const Apikey = req.query.apikey;
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

const Loli = JSON.parse(fs.readFileSync(__path +'/data/loli.json'))
const randLoli = Loli[Math.floor(Math.random() * Loli.length)]
//tansole.log(randLoli)
data = await fetch(randLoli).then(v => v.buffer())
await fs.writeFileSync(__path +'/tmp/loli.jpeg', data)
res.sendFile(__path +'/tmp/loli.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})


router.get('/wallpaper/yuri', async (req, res, next) => {
        const Apikey = req.query.apikey;
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

const Yuri = JSON.parse(fs.readFileSync(__path +'/data/yuri.json'))
const randYuri = Yuri[Math.floor(Math.random() * Yuri.length)]
//tansole.log(randTech)
data = await fetch(randYuri).then(v => v.buffer())
await fs.writeFileSync(__path +'/tmp/Yuri.jpeg', data)
res.sendFile(__path +'/tmp/Yuri.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})


router.get('/wallpaper/cecan', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const cecan = JSON.parse(fs.readFileSync(__path +'/data/cecan.json'));
  const randCecan = cecan[Math.floor(Math.random() * cecan.length)];
  data = await fetch(randCecan).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/cecan.jpeg', data)
  res.sendFile(__path +'/tmp/cecan.jpeg');
} else {
res.sendFile(__path + '/views/apikey.html');
}
})


router.get('/cecan/china', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Z-zxQ/Asupan/main/cecan/china.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/cecan/vietnam', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Z-zxQ/Asupan/main/cecan/vietnam.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/cecan/thailand', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Z-zxQ/Asupan/main/cecan/thailand.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/cecan/indonesia', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Z-zxQ/Asupan/main/cecan/indonesia.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/cecan/korea', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Z-zxQ/Asupan/main/cecan/korea.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/cecan/japan', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Z-zxQ/Asupan/main/cecan/japan.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/cecan/malaysia', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Z-zxQ/Asupan/main/cecan/malaysia.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})



router.get('/asupan/cecan', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/cecan.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/asupan/hijaber', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/hijaber.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/asupan/asupan', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/asupan.js`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/asupan/rikagusriani', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/asupan/rikagusriani.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/asupan/santuy', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/santuy.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/asupan/ukhty', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/ukhty.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/asupan/bocil', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/bocil.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/asupan/gheayubi', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/geayubi.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})



router.get('/wallpaper/aesthetic', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Aesthetic = JSON.parse(fs.readFileSync(__path +'/data/aesthetic.json'));
  const randAesthetic = Aesthetic[Math.floor(Math.random() * Aesthetic.length)];
  data = await fetch(randAesthetic).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/aesthetic.jpeg', data)
  res.sendFile(__path +'/tmp/aesthetic.jpeg');
} else {
res.sendFile(__path + '/views/apikey.html');
}
})


router.get('/wallpaper/justina', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Justina = JSON.parse(fs.readFileSync(__path +'/data/justina.json'));
  const randJus = Justina[Math.floor(Math.random() * Justina.length)];
  data = await fetch(randJus).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/justina.jpeg', data)
  res.sendFile(__path +'/tmp/justina.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})


router.get('/wallpaper/sagiri', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Sagiri = JSON.parse(fs.readFileSync(__path +'/data/sagiri.json'));
  const randSagiri = Sagiri[Math.floor(Math.random() * Sagiri.length)];
  data = await fetch(randSagiri).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/sagiri.jpeg', data)
  res.sendFile(__path +'/tmp/sagiri.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/wallpaper/shota', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Shota = JSON.parse(fs.readFileSync(__path +'/data/shota.json'));
  const randShota = Shota[Math.floor(Math.random() * Shota.length)];
  data = await fetch(randShota).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/shota.jpeg', data)
  res.sendFile(__path+ '/tmp/shota.jpeg');
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/search/darkjokes', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Dark = JSON.parse(fs.readFileSync(__path +'/data/darkjokes.json'));
  const randDark = Dark[Math.floor(Math.random() * Dark.length)];
  data = await fetch(randDark).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/darkjokes.jpeg', data)
  res.sendFile(__path +'/tmp/darkjokes.jpeg')
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/search/ppcouple', async (req, res, next) => {
        var apikey = req.query.apikey
            
            
	if(!apikey) return res.json(loghandler.notparam)
        

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=dappakntlll`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator: 'Nekellalwayslus',
                 code: 200,
                 message: 'pake api seada nya aja oke:)',
                 result: {
                 	cowo_image: result.result.male,
                     cewe_image: result.result.female
                  }
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/nsfw/loli', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Lol = JSON.parse(fs.readFileSync(__path +'/data/nsfwloli.json'));
  const randLol = Lol[Math.floor(Math.random() * Lol.length)];
  data = await fetch(randLol).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/lol.jpeg', data)
  res.sendFile(__path+ '/tmp/lol.jpeg');
} else {
res.sendFile(__path + '/views/apikey.html');
}
})     

router.get('/random/quotes2', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://kocakz.herokuapp.com/api/random/text/quotes`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/fun/simisimi-ar2', async (req, res, next) => {
        var Apikey = req.query.apikey
            text = req.query.text
   
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://simsumi.herokuapp.com/api?text=${text}&lang=ar`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/fun/simisimi-en2', async (req, res, next) => {
        var Apikey = req.query.apikey
            text = req.query.text
   
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://simsumi.herokuapp.com/api?text=${text}&lang=eng`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/fun/simisimi-jp2', async (req, res, next) => {
        var Apikey = req.query.apikey
            text = req.query.text
   
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://simsumi.herokuapp.com/api?text=${text}&lang=jp`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/fun/simisimi-ind2', async (req, res, next) => {
        var Apikey = req.query.apikey
            text = req.query.text
   
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://api.simsimi.net/v2/?text=${text}&lc=id`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/fun/simisimi4', async (req, res, next) => {
        var Apikey = req.query.apikey
            text = req.query.text
   
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://api.simsimi.net/v2/?text=${text}&lc=ar`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/fun/simisimi3', async (req, res, next) => {
        var Apikey = req.query.apikey
            text = req.query.text
   
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://api.simsimi.net/v2/?text=${text}&lc=ph`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/fun/simisimi2', async (req, res, next) => {
        var Apikey = req.query.apikey
            text = req.query.text
   
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://api.simsimi.net/v2/?text=${text}&lc=en`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/fun/simisimi', async (req, res, next) => {
        var Apikey = req.query.apikey
            text = req.query.text
   
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://simsumi.herokuapp.com/api?text=${text}&lang=id`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/random/asmaulhusna', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/random/asmaulhusna`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/search/wikipedia', async (req, res, next) => {
        var Apikey = req.query.apikey,
            search = req.query.search
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/wiki?keyword=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})


router.get('/info/drakorasia', async (req, res, next) => {
        var Apikey = req.query.apikey,
            search = req.query.search
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`http://docs-api-zahirrr.herokuapp.com/api/drakorasia?search=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/fakedata', async (req, res, next) => {
        var Apikey = req.query.apikey,
            country = req.query.country
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!country) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter country"})

       fetch(encodeURI(`https://fakename-api-zhirrr.vercel.app/api/fakename?country=${country}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})


router.get('/hilih', async (req, res, next) => {
        var Apikey = req.query.apikey,
            kata = req.query.kata
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://hilih-api-zhirrr.vercel.app/api/hilih?kata=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})


router.get('/music/liriklagu', async (req, res, next) => {
        var Apikey = req.query.apikey,
            lagu = req.query.query;
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!lagu) return res.json(loghandler.notquery)
        Lirik(lagu)
        .then((lirik) => {
          res.json({
            status: true,
            code: 200,
            creator: `${creator}`,
            result: lirik.data
          })
        });
} else {
res.sendFile(__path + '/views/apikey.html');
}
})


router.get('/music/chordlagu', async (req, res, next) => {
        var Apikey = req.query.apikey,
            lagu = req.query.lagu
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!lagu) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/chord?q=${lagu}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})


router.get('/info/kbbi', async (req, res, next) => {
        var Apikey = req.query.apikey,
            kata = req.query.kata
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://kbbi-api-zhirrr.vercel.app/api/kbbi?text=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})


router.get('/info/covidindo', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/covid-indonesia`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})


router.get('/info/covidworld', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/world`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/random/meme', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/meme`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})


router.get('/info/kodepos', async (req, res, next) => {
        var Apikey = req.query.apikey,
	    kota = req.query.kota
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!kota) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})

       fetch(encodeURI(`https://kodepos-api-zhirrr.vercel.app/?q=${kota}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})


router.get('/translate', async (req, res, next) => {
        var Apikey = req.query.apikey,
	    kata = req.query.kata
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/translate?text=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})


router.get('/anime/kusonime', async (req, res, next) => {
        var Apikey = req.query.apikey,
	    search = req.query.search
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/kusonime?search=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})

router.get('/anime/loli', async(req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.notparam)
    if(listkey.includes(apikey)){
    try {
        var options = {
            url: "http://results.dogpile.com/serp?qc=images&q= " + "Loli",
            method: "GET",
            headers: {
                "Accept": "text/html",
                "User-Agent": "Chrome"
            }
        }
        request(options, function(error, response, responseBody) {
            if (error) return

            $ = cheerio.load(responseBody)
            var links = $(".image a.link")
            var cari = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"))
            if (!cari.length) return
            var hasil = cari[Math.floor(Math.random() * cari.length)]
        res.json({
              status: true,
              code: 200,
              creator: `${creator}`,
              result: hasil
            })
        })
    } catch (e) {}
    } else {
      res.sendFile(__path + '/views/apikey.html');
    }
});


router.get('/anime/manga', async (req, res, next) => {
        var Apikey = req.query.apikey,
	    search = req.query.search
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/manga?keyword=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})


router.get('/game/caklontong', async (req, res, next) => {
        var Apikey = req.query.apikey
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=caklontong`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey.html');
}
})


router.get('/game/tebakGambar', async (req, res, next) => {
  var apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let result = await tebakGambar()
  if (result) {
    const hasil = {
      status: true,
      code: 200,
      creator: `${creator}`,
      image: result.img,
      jawaban: result.jawaban,
      clue: result.petunjuk
    }
    res.json(hasil)
  } else {
    return res.status(408).json({
      status: res.statusCode,
      error: 'Emror'
    })
  }
  } else {
  res.sendFile(__path + '/views/apikey.html');
  }
})

router.get('/fun/meme', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'Nekellalwayslus') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/meme`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/fun/katailham', async (req, res, next) => {
        var apikey = req.query.apikey
            
            
	if(!apikey) return res.json(loghandler.notparam)
        

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/katailham?apikey=dappakntlll`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator: 'Nekellalwayslus',
                 code: 200,
                 message: 'pake api seada nya aja oke:)',
                 result: {
                 	hasil: result.result
                 }
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/fun/pantun', async (req, res, next) => {
        var apikey = req.query.apikey
            
            
	if(!apikey) return res.json(loghandler.notparam)
        

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/pantun-pakboy?apikey=dappakntlll`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator: 'Nekellalwayslus',
                 code: 200,
                 message: 'pake api seada nya aja oke:)',
                 result: {
                 	hasil: result.result
                 }
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/fun/nyindir', async (req, res, next) => {
        var apikey = req.query.apikey
            
            
	if(!apikey) return res.json(loghandler.notparam)
        

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/skak?apikey=dappakntlll`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator: 'Nekellalwayslus',
                 code: 200,
                 message: 'pake api seada nya aja oke:)',
                 result: {
                 	hasil: result.result
                 }
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/fun/quotes', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'Nekellalwayslus') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=kanye`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/fun/hilih', async (req, res, next) => {
        var apikey = req.query.apikey,
            kata = req.query.kata
            
	if(!apikey) return res.json(loghandler.notparam)
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://hilih-api-zhirrr.vercel.app/api/hilih?kata=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator: 'Nekellalwayslus',
                 code: 200,
                 message: 'pake api seada nya aja oke:)',
                 result: result.result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})
router.get('/fun/cersex', async(req, res, next) => {
  Apikey = req.query.apikey;
  if(!Apikey) return res.json(loghandler.notparam)
  if(listkey.includes(Apikey)) {
    fetch(encodeURI(`https://docs-jojo.herokuapp.com/api/cersex`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Nekellalwayslus',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.invalidKey)
})
} else {
res.json(loghandler.invalidKey)
}
})
router.get('/fun/cerpen', async(req, res, next) => {
  Apikey = req.query.apikey;
  if(!Apikey) return res.json(loghandler.notparam)
  if(listkey.includes(Apikey)) {
    fetch(encodeURI(`https://docs-jojo.herokuapp.com/api/cerpen`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Nekellalwayslus',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.invalidKey)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/happymod', async (req, res, next) => {
        var apikey = req.query.apikey,
            apk = req.query.apk
            
	if(!apikey) return res.json(loghandler.notparam)
        if(!apk) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter apk"})

       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.dapuhy.xyz/api/search/happymod?query=${apk}&apikey=betakey`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator: 'Nekellalwayslus',
                 code: 200,
                 message: 'pake api seada nya aja oke:)',
                 result: result.result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/hu/faktaunik', async (req, res, next) => {
        var apikey = req.query.apikey,
            kata = req.query.kata
            
	if(!apikey) return res.json(loghandler.notparam)
        
       if(listkey.includes(apikey)){
       fetch(encodeURI(`http://docs-jojo.herokuapp.com/api/fakta-unik`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator: 'Nekellalwayslus',
                 code: 200,
                 message: 'pake api seada nya aja oke:)',
                 result: result.result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(invalidKey)
}
})

router.get('/search/cnn', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            type = req.query.type
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'Nekellalwayslus') return res.json(loghandler.invalidKey)
    if (!type) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter type"})

       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/cnn-news/${type}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Nekellalwayslus',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/search/cnbc', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            type = req.query.type
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'Nekellalwayslus') return res.json(loghandler.invalidKey)
    if (!type) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter type"})

       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/cnbc-news/${type}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Nekellalwayslus',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/search/republika', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            type = req.query.type
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'Nekellalwayslus') return res.json(loghandler.invalidKey)
    if (!type) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter type"})

       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/republika-news/${type}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Nekellalwayslus',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/search/tempo', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            type = req.query.type
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'Nekellalwayslus') return res.json(loghandler.invalidKey)
    if (!type) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter type"})

       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/tempo-news/${type}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Nekellalwayslus',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/search/antara', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            type = req.query.type
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'Nekellalwayslus') return res.json(loghandler.invalidKey)
    if (!type) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter type"})

       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/antara-news/${type}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Nekellalwayslus',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/search/kumparan', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'Nekellalwayslus') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/kumparan-news`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Nekellalwayslus',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/search/translate', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kata
       	if(!apikey) return res.sendFile(__path + '/views/apikey.html')
       if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/translate?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/views/404.html')
})
} else {
  res.sendFile(__path + '/views/404.html')
}
})
router.get('/search/infotsunami', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.sendFile(__path + '/views/apikey.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/tsunami`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/views/404.html')
})
} else {
  res.sendFile(__path + '/views/404.html')
}
})
router.get('/search/infocuacadunia', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.sendFile(__path + '/views/apikey.html')
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/cuaca/dunia`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/views/404.html')
})
} else {
  res.sendFile(__path + '/views/404.html')
}
})
router.get('/search/cuacabandara', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.sendFile(__path + '/views/apikey.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/cuaca/bandara`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/views/404.html')
})
} else {
  res.sendFile(__path + '/views/404.html')
}
})
router.get('/search/kodepos', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kota
       	if(!apikey) return res.sendFile(__path + '/views/apikey.html')
       if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://kodepos-api-zhirrr.vercel.app/?q=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/views/404.html')
})
} else {
  res.sendFile(__path + '/views/404.html')
}
})
router.get('/search/coviddunia', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.sendFile(__path + '/views/apikey.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/world`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/views/404.html')
})
} else {
  res.sendFile(__path + '/views/404.html')
}
})
router.get('/search/covidcountry', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.negara
       	if(!apikey) return res.sendFile(__path + '/views/apikey.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://yuuapi.herokuapp.com/information/covid19-2?country=${text}&apikey=BETA`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/views/404.html')
})
} else {
  res.sendFile(__path + '/views/404.html')
}
})
/**
* @Maker
**/



router.get('/photooxy/magma', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .photooxy("https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get("/photooxy/romantic", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pRomantic(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.sendFile(__path + '/views/apikey.html');
    }
});

// @PHOTOOXY

router.get("/photooxy/smoke", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pSmoke(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.sendFile(__path + '/views/apikey.html');
    }
});

router.get("/photooxy/burn-papper", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pBurnPapper(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.sendFile(__path + '/views/apikey.html');
    }
});

router.get("/photooxy/naruto", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pNaruto(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.sendFile(__path + '/views/apikey.html');
    }
});

router.get("/photooxy/love-message", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pLoveMsg(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.sendFile(__path + '/views/apikey.html');
    }
});

router.get("/photooxy/message-under-grass", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pMsgGrass(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.sendFile(__path + '/views/apikey.html');
    }
});

router.get("/photooxy/glitch", async(req, res, next) => {
  const text1 = req.query.text1;
  const text2 = req.query.text2;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pGlitch(text1, text2)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.sendFile(__path + '/views/apikey.html');
    }
});

router.get("/photooxy/double-heart", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pDoubleHeart(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.sendFile(__path + '/views/apikey.html');
    }
});

router.get("/photooxy/coffe-cup", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pCoffeCup(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.sendFile(__path + '/views/apikey.html');
    }
});

router.get("/photooxy/love-text", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pLoveText(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.sendFile(__path + '/views/apikey.html');
    }
});

router.get("/photooxy/butterfly", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pButterfly(text1)
  .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(loghandler.error)
    })
    } else {
    	res.sendFile(__path + '/views/apikey.html');
    }
});

/*
@ AKHIR PHOTOOXY
*/
/*
@ TEXTPROME
*/
router.get('/photooxy/army', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://photooxy.com/logo-and-text-effects/army-camouflage-fabric-text-effect-221.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/logo-wolf4', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-wolf-logo-black-white-937.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/natural-leaves', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/logo-wolf3', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/harry-potter', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/magma', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/hallowen-text', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/halloween-fire-text-effect-940.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/neon-light', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/broken-glass', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/broken-glass-text-effect-free-online-1023.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/art-papper', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/glossy', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-3d-glossy-metal-text-effect-1019.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/water-color', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/multi-color', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/neon-devil', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/sky-text', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/luxury', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/3d-luxury-gold-text-effect-online-1003.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/vintage', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-realistic-vintage-style-light-bulb-1000.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/writing', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/sand-writing-text-effect-online-990.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/engraved', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/sand-engraved-3d-text-effect-989.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/glue-text', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/minios', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/minion-text-effect-3d-online-978.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/pornhub', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/holograpic', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/deluxe-silver', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/deluxe-silver-text-effect-970.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/fabric', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/fabric-text-effect-online-964.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/wicker', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/wicker-text-effect-online-932.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/larva', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/lava-text-effect-online-914.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/toxic-bokeh', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/toxic-text-effect-online-901.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/stroberi', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/strawberry-text-effect-online-889.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/koi', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/koi-fish-text-effect-online-888.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/bread', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/bread-text-effect-online-887.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/horor-blood', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/horror-blood-text-effect-online-883.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/honey', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/honey-text-effect-868.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/ice', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/ice-cold-text-effect-862.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/rusty', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/rusty-metal-text-effect-860.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/3dstone', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/1917', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/1917-style-text-effect-online-980.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/thunder2', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/space', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/joker-logo', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-logo-joker-online-934.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/hallowen', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/halloween-fire-text-effect-940.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/blood', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/blood-text-on-the-frosted-glass-941.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/thunder3', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/astone', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-stone-text-effect-online-982.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/grafity-text', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/grafity-text2', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/ninja-logo', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-ninja-logo-online-935.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/lion-logo', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/avengers-logo', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/marvel-logo2', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/marvel-logo', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/glitch2', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/logo-wolf2', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/logo-wolf', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/firework-sparkle-text-effect-930.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/thunder', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/thunder-text-effect-online-881.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/black-pink', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/drop-water', async(req, res, next) => {



  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/dropwater-text-effect-872.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/christmas', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/3d-gradient', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/3d-gradient-text-effect-online-free-1002.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/porn-hub', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text1;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/textpro/captain', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text1;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-captain-america-text-effect-free-online-1039.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

/*
@AKHIR TEXTPRO ME
*/

router.get('/maker/dadu', async (req, res, next) => {
  Apikey = req.query.apikey;

  if(!Apikey) return res.json(loghandler.notparam)
  if(listkey.includes(Apikey)) {
      random = Math.floor(Math.random() * 6) + 1
      hasil = 'https://www.random.org/dice/dice' + random + '.png'
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/dadu.png', data)
        res.sendFile(__path+'/tmp/dadu.png')
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/blackpink', async (req, res, next) => {
  Apikey = req.query.apikey;
  
  if(!Apikey) return res.json(loghandler.notparam)
  if(listkey.includes(Apikey)) {
    const pop = JSON.parse(fs.readFileSync(__path +'/data/kpop.json'));
    const Pop = pop[Math.floor(Math.random() * pop.length)];
    let hasil = Pop.pop;
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/pink.jpeg', data)
    res.sendFile(__path +'/tmp/pink.jpeg')
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/asupan', async (req, res, next) => {
  Apikey = req.query.apikey;
  
  if(!Apikey) return res.json(loghandler.notparam)
  if(listkey.includes(Apikey)) {
    const asupan = JSON.parse(fs.readFileSync(__path +'/data/asupan.json'));
    const Asupan = asupan[Math.floor(Math.random() * asupan.length)];
    let hasil = Asupan.asupan;
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/asupan.mp4', data)
    res.sendFile(__path +'/tmp/asupan.mp4')
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});
 
router.get("/maker/nulis", async (req, res, next) => {
  
  apikey = req.query.apikey;
  text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://api.zeks.xyz/api/nulis?text='+ text +'&apikey=apivinz' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/nulis.jpeg', data)
    res.sendFile(__path +'/tmp/nulis.jpeg')
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
})

router.get('/maker/ttp', async(req, res, next) => {

  const text = req.query.text;
  const apikey = req.query.apikey;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://h4ck3rs404-api.herokuapp.com/api/ttp?text='+ text +'&apikey=404Api'
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/ttp.png', data)
  res.sendFile(__path +'/tmp/ttp.png')
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
})

router.get('/maker/attp', async(req, res, next) => {

  const text = req.query.text;
  const apikey = req.query.apikey;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://h4ck3rs404-api.herokuapp.com/api/attp?text='+ text +'&apikey=404Api'
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/attp.gif', data)
  res.sendFile(__path +'/tmp/attp.gif')
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
})

router.get('/maker/matrix', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://api.zeks.xyz/api/matrix?text='+ text +'&apikey=DitzzRestKey' 
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/matrix.jpg', data)
  res.sendFile(__path +'/tmp/matrix.jpg')
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/maker/breakwall', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://api.zeks.xyz/api/breakwall?text='+ text +'&apikey=DitzzRestKey' 
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/breakwall.jpg', data)
  res.sendFile(__path +'/tmp/breakwall.jpg')
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/maker/flowertext', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://api.zeks.xyz/api/flowertext?text='+ text +'&apikey=DitzzRestKey' 
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/flowertext.jpg', data)
  res.sendFile(__path +'/tmp/flowertext.jpg')
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/maker/smoketext', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://api.zeks.xyz/api/smoketext?text='+ text +'&apikey=DitzzRestKey' 
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/smoketext.jpg', data)
  res.sendFile(__path +'/tmp/smoketext.jpg')
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/maker/skytext', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://api.zeks.xyz/api/skytext?text='+ text +'&apikey=DitzzRestKey' 
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/skytext.jpg', data)
  res.sendFile(__path +'/tmp/skytext.jpg')
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/maker/pubglogo', async(req, res, next) => {
  const text1 = req.query.text1;
  const text2 = req.query.text2;
  const apikey = req.query.apikey;
  
  if(!text1) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://api.zeks.xyz/api/pubglogo?text1='+ text1 + '&text2' +'&apikey=DitzzRestKey'
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/pubglogo.jpg', data)
  res.sendFile(__path +'/tmp/pubglogo.jpg')
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/maker/bneon', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://api.zeks.xyz/api/bneon?text='+ text +'&apikey=DitzzRestKey' 
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/bneon.jpg', data)
  res.sendFile(__path +'/tmp/bneon.jpg')
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/maker/naruto', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://api.zeks.xyz/api/naruto?text='+ text +'&apikey=DitzzRestKey' 
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/naruto.jpg', data)
  res.sendFile(__path +'/tmp/naruto.jpg')
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/maker/teks3d', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://api.zeks.xyz/api/text3dbox?text='+ text +'&apikey=DitzzRestKey' 
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/text3dbox.jpg', data)
  res.sendFile(__path +'/tmp/text3dbox.jpg')
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/maker/nulis', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://api.zeks.xyz/api/nulis?text='+ text +'&apikey=DitzzRestKey' 
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/nulis.jpg', data)
  res.sendFile(__path +'/tmp/nulis.jpg')
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/maker/epep', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://api.zeks.xyz/api/epep?text='+ text +'&apikey=DitzzRestKey' 
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/epep.jpg', data)
  res.sendFile(__path +'/tmp/epep.jpg')
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/maker/silverbutton', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://api.zeks.xyz/api/splaybutton?text='+ text +'&apikey=DitzzRestKey' 
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/splaybutton.jpg', data)
  res.sendFile(__path +'/tmp/splaybutton.jpg')
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/maker/goldbutton', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://api.zeks.xyz/api/gplaybutton?text='+ text +'&apikey=DitzzRestKey' 
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/gplaybutton.jpg', data)
  res.sendFile(__path +'/tmp/gplaybutton.jpg')
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/maker/harta-tahta', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://api-ryubotz.herokuapp.com/api/textpro/magma?text='+ text +'&apikey=RyuBotz' 
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/tahta.jpg', data)
  res.sendFile(__path +'/tmp/tahta.jpg')
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/maker/ssweb', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://betabotz-api.herokuapp.com/api/magma?text='+ text +'&apikey=Nekellalwayslus' 
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/ssweb.jpg', data)
  res.sendFile(__path +'/tmp/ssweb.jpg')
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/search/ssweb-hp', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://leyscoders-api.herokuapp.com/api/ssweb-hp?url='+ text +'&apikey=dappakntlll' 
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/sshp.jpg', data)
  res.sendFile(__path +'/tmp/sshp.jpg')
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/search/ssweb-pc', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://leyscoders-api.herokuapp.com/api/ssweb-pc?url='+ text +'&apikey=dappakntlll' 
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/sspc.jpg', data)
  res.sendFile(__path +'/tmp/sspc.jpg')
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/maker/skatch', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://lindow-api.herokuapp.com/api/sketcheffect?img=${url}&apikey=LindowApi`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/skatch.jpeg', data)
        res.sendFile(__path+'/tmp/skatch.jpeg')
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});
router.get('/canvas/welcome', async(req, res, next) => {
const apikey = req.query.apikey;
  const nama = req.query.nama;
  const namaGb = req.query.namaGb;
  const pepeGb = req.query.pepeGb;
  const totalMem = req.query.totalMem;
  const pepeUser = req.query.pepeUser;
  const bege = req.query.bege;
  if(!nama) return res.json(loghandler.notnama)
  if(!totalMem) return res.json(loghandler.totalMem)
  if(!namaGb) return res.json(loghandler.namaGb)
  if(!bege) return res.json(loghandler.bege)
  if(!pepeUser) return res.json(loghandler.pepeUser)
  if(!pepeGb) return res.json(loghandler.pepeGb)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  const welcome = await new ling.Welcome()
    .setUsername(nama)
    .setGuildName(namaGb)
    .setGuildIcon(pepeGb)
    .setMemberCount(totalMem)
    .setAvatar(pepeUser)
    .setBackground(bege)
    .toAttachment();
  
  data = welcome.toBuffer();
  await fs.writeFileSync(__path +'/tmp/welcome.png', data)
  res.sendFile(__path+'/tmp/welcome.png')
 } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});
router.get('/canvas/goodbye', async(req, res, next) => {
const apikey = req.query.apikey;
  const nama = req.query.nama;
  const namaGb = req.query.namaGb;
  const pepeGb = req.query.pepeGb;
  const totalMem = req.query.totalMem;
  const pepeUser = req.query.pepeUser;
  const bege = req.query.bege;
  if(!nama) return res.json(loghandler.notnama)
  if(!totalMem) return res.json(loghandler.totalMem)
  if(!namaGb) return res.json(loghandler.namaGb)
  if(!bege) return res.json(loghandler.bege)
  if(!pepeUser) return res.json(loghandler.pepeUser)
  if(!pepeGb) return res.json(loghandler.pepeGb)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  const goodbye = await new ling.Goodbye()
    .setUsername(nama)
    .setGuildName(namaGb)
    .setGuildIcon(pepeGb)
    .setMemberCount(totalMem)
    .setAvatar(pepeUser)
    .setBackground(bege)
    .toAttachment();
  
  data = goodbye.toBuffer();
  await fs.writeFileSync(__path +'/tmp/goodbye.png', data)
  res.sendFile(__path+'/tmp/goodbye.png')
 } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});
router.get('/canvas/gfx5', async (req, res) => {
  const apikey = req.query.apikey;
  const nama = req.query.nama;
  if(!nama) return res.json(loghandler.notnama)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
const gfx5 = await new ch.Gfx5()
    .setText(nama) 
    .toAttachment();
    
  data = gfx5.toBuffer();
  await fs.writeFileSync(__path +'/tmp/goodbye.png', data)
  res.sendFile(__path+'/tmp/goodbye.png')
 } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});
router.get('/canvas/gfx1', async (req, res) => {
            const apikey = req.query.apikey;
  const nama = req.query.nama;
  if(!nama) return res.json(loghandler.notnama)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  
var gfx1 = await new ch.Gfx1()
    .setName(nama) 
    .toAttachment();
    
  data = gfx1.toBuffer();
  await fs.writeFileSync(__path +'/tmp/gfx1.png', data)
  res.sendFile(__path +'/tmp/gfx1.png')
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});
router.get('/canvas/gfx2', async (req, res) => {
            const apikey = req.query.apikey;
  const nama = req.query.nama;
  if(!nama) return res.json(loghandler.notnama)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  
var gfx2 = await new ch.Gfx2()
    .setName(nama) 
    .toAttachment();
    
  data = gfx2.toBuffer();
  await fs.writeFileSync(__path +'/tmp/gfx1.png', data)
  res.sendFile(__path +'/tmp/gfx1.png')
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});
router.get('/canvas/gfx3', async (req, res) => {
     const apikey = req.query.apikey;
  const text = req.query.text;
  const text2 = req.query.text2;
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  
  
var gfx3 = await new ch.Gfx3()
    .setText1(text) 
    .setText2(text2)
    .toAttachment();
    
  data = gfx3.toBuffer();
  await fs.writeFileSync(__path +'/tmp/gfx3.png', data)
  res.sendFile(__path +'/tmp/gfx3.png')
   } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});
router.get('/canvas/gfx4', async (req, res) => {
     const apikey = req.query.apikey;
  const text = req.query.text;
  const text2 = req.query.text2;
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  
  
var gfx4 = await new ch.Gfx4()
    .setText1(text) 
    .setText2(text2)
    .toAttachment();
    
  data = gfx4.toBuffer();
  await fs.writeFileSync(__path +'/tmp/gfx4.png', data)
  res.sendFile(__path +'/tmp/gfx4.png')
   } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});
router.get('/canvas/verivikasi', async(req, res, next) => {
const apikey = req.query.apikey;
  const nama = req.query.nama;
  const namaGb = req.query.namaGb;
  const pepeGb = req.query.pepeGb;
  const totalMem = req.query.totalMem;
  const pepeUser = req.query.pepeUser;
  const bege = req.query.bege;
  if(!nama) return res.json(loghandler.notnama)
  if(!totalMem) return res.json(loghandler.totalMem)
  if(!namaGb) return res.json(loghandler.namaGb)
  if(!bege) return res.json(loghandler.bege)
  if(!pepeUser) return res.json(loghandler.pepeUser)
  if(!pepeGb) return res.json(loghandler.pepeGb)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  const verification = await new ling.Verification()
    .setUsername(nama)
    .setGuildName(namaGb)
    .setGuildIcon(pepeGb)
    .setMemberCount(totalMem)
    .setAvatar(pepeUser)
    .setBackground(bege)
    .toAttachment();
  
  data = verification.toBuffer();
  await fs.writeFileSync(__path +'/tmp/verification.png', data)
  res.sendFile(__path+'/tmp/verification.png')
 } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});
router.get('/canvas/rankcard2', async(req, res, next) => {
  const apikey = req.query.apikey;
  const profile = req.query.profile;
  const name = req.query.name;
  const bg = req.query.bege;
  const needexp = req.query.needexp;
  const curxp = req.query.curxp;
  const level = req.query.level;
  const logorank = req.query.logorank;
  if(!profile) return res.json(loghandler.notprofile)
  if(!name) return res.json(loghandler.notname)
  if(!bg) return res.json(loghandler.notbege)
  if(!needexp) return res.json(loghandler.notneedexp)
  if(!curxp) return res.json(loghandler.notcurxp)
  if(!level) return res.json(loghandler.notlevel)
  if(!logorank) return res.json(loghlandler.notlogorank)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://hardianto.xyz/api/rankcard?profile=${profile}&name=${name}&bg=${bg}&needxp=${needexp}&curxp=${curxp}&level=${level}&logorank=${logorank}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/rankcard.png', data)
        res.sendFile(__path+'/tmp/rankcard.png')
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});
router.get('/canvas/promote', async(req, res, next) => {
const apikey = req.query.apikey;
  const nama = req.query.nama;
  const namaGb = req.query.namaGb;
  const pepeGb = req.query.pepeGb;
  const totalMem = req.query.totalMem;
  const pepeUser = req.query.pepeUser;
  const bege = req.query.bege;
  if(!nama) return res.json(loghandler.notnama)
  if(!totalMem) return res.json(loghandler.totalMem)
  if(!namaGb) return res.json(loghandler.namaGb)
  if(!bege) return res.json(loghandler.bege)
  if(!pepeUser) return res.json(loghandler.pepeUser)
  if(!pepeGb) return res.json(loghandler.pepeGb)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  const promote = await new ling.Promote()
    .setUsername(nama)
    .setGuildName(namaGb)
    .setGuildIcon(pepeGb)
    .setMemberCount(totalMem)
    .setAvatar(pepeUser)
    .setBackground(bege)
    .toAttachment();
  
  data = promote.toBuffer();
  await fs.writeFileSync(__path +'/tmp/promote.png', data)
  res.sendFile(__path+'/tmp/promote.png')
 } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});
router.get('/canvas/demote', async(req, res, next) => {
const apikey = req.query.apikey;
  const nama = req.query.nama;
  const namaGb = req.query.namaGb;
  const pepeGb = req.query.pepeGb;
  const totalMem = req.query.totalMem;
  const pepeUser = req.query.pepeUser;
  const bege = req.query.bege;
  if(!nama) return res.json(loghandler.notnama)
  if(!totalMem) return res.json(loghandler.totalMem)
  if(!namaGb) return res.json(loghandler.namaGb)
  if(!bege) return res.json(loghandler.bege)
  if(!pepeUser) return res.json(loghandler.pepeUser)
  if(!pepeGb) return res.json(loghandler.pepeGb)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  const demote = await new ling.Demote()
    .setUsername(nama)
    .setGuildName(namaGb)
    .setGuildIcon(pepeGb)
    .setMemberCount(totalMem)
    .setAvatar(pepeUser)
    .setBackground(bege)
    .toAttachment();
  
  data = demote.toBuffer();
  await fs.writeFileSync(__path +'/tmp/demote.png', data)
  res.sendFile(__path+'/tmp/demote.png')
 } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});
router.get('/canvas/rankcard', async(req, res, next) => {
  const apikey = req.query.apikey;
  const profile = req.query.profile;
  const name = req.query.name;
  const bg = req.query.bege;
  const needexp = req.query.needexp;
  const curxp = req.query.curxp;
  const level = req.query.level;
  const logorank = req.query.logorank;
  if(!profile) return res.json(loghandler.notprofile)
  if(!name) return res.json(loghandler.notname)
  if(!bg) return res.json(loghandler.notbege)
  if(!needexp) return res.json(loghandler.notneedexp)
  if(!curxp) return res.json(loghandler.notcurxp)
  if(!level) return res.json(loghandler.notlevel)
  if(!logorank) return res.json(loghlandler.notlogorank)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  const rank = await new ch.Rank()
    .setAvatar(profile) 
    .setUsername(name) 
    .setBg(bg)
    .setNeedxp(needexp) 
    .setCurrxp(curxp) 
    .setLevel(level) 
    .setRank(logorank) 
    .toAttachment();
  data = rank.toBuffer();
  await fs.writeFileSync(__path +'/tmp/rankcard.png', data)
  res.sendFile(__path +'/tmp/rankcard.png')
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});
router.get('/canvas/levelup', async(req, res, next) => {
  const apikey = req.query.apikey;
  const avatar = req.query.avatar;
  if(!apikey) return res.json(loghandler.notparam)
  if(!avatar) return res.json(loghandler.notavatar)
  if(listkey.includes(apikey)){
  const levelup = await new ch.Up()
    .setAvatar(avatar)
    .toAttachment();
  data = levelup.toBuffer();
  await fs.writeFileSync(__path +'/tmp/sup.png', data)
  res.sendFile(__path +'/tmp/sup.png')
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});
router.get('/maker/tololserti', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!text) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://api.lolhuman.xyz/api/toloserti?apikey=apitod0099&name=${text}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tololserti.jpeg', data)
        res.sendFile(__path+'/tmp/tololserti.jpeg')
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});
router.get('/canvas/trigger', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://some-random-api.ml/canvas/triggered?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/trigger.gif', data)
        res.sendFile(__path+'/tmp/trigger.gif')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/ttp', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://api.xteam.xyz/ttp?file&text=${text}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/ttp.jpeg', data)
        res.sendFile(__path+'/tmp/ttp.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/attp', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://api.xteam.xyz/attp?file&text=${text}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/attp.gif', data)
        res.sendFile(__path+'/tmp/attp.gif')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/wasted', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://some-random-api.ml/canvas/wasted?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/wasted.jpeg', data)
        res.sendFile(__path+'/tmp/wasted.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/gay', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://some-random-api.ml/canvas/gay?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/gay.jpeg', data)
        res.sendFile(__path+'/tmp/gay.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/passed', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://some-random-api.ml/canvas/passed?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/passed.jpeg', data)
        res.sendFile(__path+'/tmp/passed.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/glass', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://some-random-api.ml/canvas/glass?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/glass.jpeg', data)
        res.sendFile(__path+'/tmp/glass.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/jail', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://some-random-api.ml/canvas/jail?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/jail.jpeg', data)
        res.sendFile(__path+'/tmp/jail.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/comrade', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://some-random-api.ml/canvas/comrade?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/comrade.jpeg', data)
        res.sendFile(__path+'/tmp/comrade.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/meme', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text= req.query.text;
  const text2 = req.query.text2;
  const url = req.query.url;
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://api.memegen.link/images/custom/${text}/${text2}.png?background=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/meme.jpeg', data)
        res.sendFile(__path+'/tmp/meme.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/grayscale', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://some-random-api.ml/canvas/grayscale?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/grayscale.jpeg', data)
        res.sendFile(__path+'/tmp/grayscale.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/invert', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://some-random-api.ml/canvas/invert?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/invert.jpeg', data)
        res.sendFile(__path+'/tmp/invert.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/invertgrayscale', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://some-random-api.ml/canvas/invertgreyscale?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/invertgrayscale.jpeg', data)
        res.sendFile(__path+'/tmp/invertgrayscale.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/brightness', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://some-random-api.ml/canvas/brightness?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/brightness.jpeg', data)
        res.sendFile(__path+'/tmp/brightness.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/threshold', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://some-random-api.ml/canvas/threshold?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/threshold.jpeg', data)
        res.sendFile(__path+'/tmp/threshold.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/sepia', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://some-random-api.ml/canvas/sepia?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/sepia.jpeg', data)
        res.sendFile(__path+'/tmp/sepia.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/red', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://some-random-api.ml/canvas/red?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/red.jpeg', data)
        res.sendFile(__path+'/tmp/red.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/green', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://some-random-api.ml/canvas/green?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/green.jpeg', data)
        res.sendFile(__path+'/tmp/green.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/bloo', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://some-random-api.ml/canvas/blue?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/bloo.jpeg', data)
        res.sendFile(__path+'/tmp/bloo.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/blurple', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://some-random-api.ml/canvas/blurple?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/blurple.jpeg', data)
        res.sendFile(__path+'/tmp/blurple.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/delete', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://yx-apis.tk/api/canvas/delete?url=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/delete.jpeg', data)
        res.sendFile(__path+'/tmp/delete.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/blurple2', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://some-random-api.ml/canvas/blurple2?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/blurple2.jpeg', data)
        res.sendFile(__path+'/tmp/blurple2.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/gfx111', async(req, res, next) => {
  const apikey = req.query.apikey;
  const nama = req.query.nama;
  if(!nama) return res.json(loghandler.notnama)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://yx-apis.tk/api/canvas/gfx1?nama=${nama}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/gfx1.jpeg', data)
        res.sendFile(__path+'/tmp/gfx1.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/gfx24', async(req, res, next) => {
  const apikey = req.query.apikey;
  const nama = req.query.nama;
  if(!nama) return res.json(loghandler.notnama)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://yx-apis.tk/api/canvas/gfx2?nama=${nama}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/gfx2.jpeg', data)
        res.sendFile(__path+'/tmp/gfx2.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/gfx34', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  const text2 = req.query.text2;
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://yx-apis.tk/api/canvas/gfx3?text1=${text}&text2=${text2}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/gfx3.jpeg', data)
        res.sendFile(__path+'/tmp/gfx3.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/u', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  const text2 = req.query.text2;
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://yx-apis.tk/api/canvas/gfx4?text1=${text}&text2=${text2}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/gfx4.jpeg', data)
        res.sendFile(__path+'/tmp/gfx4.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/gura', async(req, res, next) => {
  const apikey = req.query.apikey;
  const nama = req.query.nama;
  if(!nama) return res.json(loghandler.notnama)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://yx-apis.tk/api/canvas/gura?nama=${nama}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/gura.jpeg', data)
        res.sendFile(__path+'/tmp/gura.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/pixelate', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://some-random-api.ml/canvas/pixelate?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/pixelate.jpeg', data)
        res.sendFile(__path+'/tmp/pixelate.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/blur', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://some-random-api.ml/canvas/blur?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/blur.jpeg', data)
        res.sendFile(__path+'/tmp/blur.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/yt-comment', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  const username = req.query.username;
  const comment = req.query.comment;
  if(!url) return res.json(loghandler.noturl)
  if(!username) return res.json(loghandler.notusername)
  if(!comment) return res.json(loghandler.notcomment)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://some-random-api.ml/canvas/youtube-comment?avatar=${url}&username=${username}&comment=${comment}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/yt-comment.jpeg', data)
        res.sendFile(__path+'/tmp/yt-comment.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/tweet', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
   const displayname = req.query.displayname;
  const username = req.query.username;
  const comment = req.query.comment;
  if(!url) return res.json(loghandler.noturl)
  if(!username) return res.json(loghandler.notusername)
  if(!displayname) return res.json(loghandler.notdisplayname)
  if(!comment) return res.json(loghandler.notcomment)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://some-random-api.ml/canvas/tweet?avatar=${url}&displayname=${displayname}&comment=${comment}&username=${username}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tweet.jpeg', data)
        res.sendFile(__path+'/tmp/tweet.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/stupid', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  const dog = req.query.dog;
  if(!url) return res.json(loghandler.noturl)
  if(!dog) return res.json(loghandler.notdog)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://some-random-api.ml/canvas/its-so-stupid?avatar=${url}&dog=${dog}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/stupid.jpeg', data)
        res.sendFile(__path+'/tmp/stupid.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/simpcard', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://some-random-api.ml/canvas/simpcard?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/simpcard.jpeg', data)
        res.sendFile(__path+'/tmp/simpcard.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/horny', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://some-random-api.ml/canvas/horny?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/horny.jpeg', data)
        res.sendFile(__path+'/tmp/horny.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/lolice', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://some-random-api.ml/canvas/lolice?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/lolice.jpeg', data)
        res.sendFile(__path+'/tmp/lolice.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/lgbt', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://some-random-api.ml/canvas/lgbt?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/lgbt.jpeg', data)
        res.sendFile(__path+'/tmp/lgbt.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/pansexual', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://some-random-api.ml/canvas/pansexual?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/pansexual.jpeg', data)
        res.sendFile(__path+'/tmp/pansexual.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/nonbinary', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://some-random-api.ml/canvas/nonbinary?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/nonbinary.jpeg', data)
        res.sendFile(__path+'/tmp/nonbinary.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/lesbian', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://some-random-api.ml/canvas/lesbian?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/lesbian.jpeg', data)
        res.sendFile(__path+'/tmp/lesbian.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/bisexual', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://some-random-api.ml/canvas/bisexual?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/bisexual.jpeg', data)
        res.sendFile(__path+'/tmp/bisexual.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/transs', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://some-random-api.ml/canvas/trans?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/transs.jpeg', data)
        res.sendFile(__path+'/tmp/transs.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/emoji2png', async(req, res, next) => {
  const apikey = req.query.apikey;
  const Emoji = req.query.text;
  
  if(!apikey) return jes.json(loghandler.notparam)
  if(!Emoji) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)) {

    emoji.get(Emoji)
    .then(img_emoji => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: img_emoji.images[0].url
      }
      res.json(result)
    })
  
    .catch((err) => {
      res.json(loghandler.error)
    })
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/random/katadilan', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var soal = JSON.parse(
            fs.readFileSync(__path + '/data/katadilan.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...kata[~~(Math.random() * kata.length)]
          })
    } else {
        res.sendFile(__path + '/views/apikey.html');
    }
})

router.get('/downloader/facebook', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api-aquabot.herokuapp.com/download/facebook?apikey=aquabot&url=${url}`))
    .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
               status: true,
               code: 200,
               creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
  } else {
    res.sendFile(__path + '/views/apikey.html');
  }
});

router.get('/download/gitclone', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.url
          var branch = req.query.branch
       	if(!apikey) return res.sendFile(__path + '/views/apikey.html')
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})
        if (!branch) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter branch"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://myhuman.herokuapp.com/api/gitclone?url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/views/invalid.html')
})
} else {
  res.sendFile(__path + '/views/404.html')
}
})

router.get('/web2plain-text', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://websitetextextraction.apifex.com/api/v1/extract?url=${url}`))
    .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
               status: true,
               code: 200,
               creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.sendFile(__path + '/views/apikey.html');
  }
});


router.get('/cekapikey', async(req, res, next) => {
  var apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)) {
    res.json({
      creator: 'Nekellalwayslus',
      status: 'true',
      apikey: `${apikey}`,
      message: 'Apikey Active~',
      exp: 'Limit~ Unlimited Limit & Request'
    })
 .catch(e => {
         	res.json(loghandler.keyinvalid)
})
} else {
    res.sendFile(__path + '/views/invalid.html');
  }
});
router.post('/addkey', async (req, res, next) => {
  const key = req.query.key;
  if(listkey.includes(key)) {
    res.json({
      message: 'apikey sudah terdaftar'
    });
  } else {
    listkey.push(key);
    res.json({
      status: 'succses',
      code: 200,
      message: `berhasil mendaftarkan ${key} Kedatabase apikey`
    });
  }
});

router.use(function (req, res) {

    res.status(404)
    .set("Content-Type", "text/html")
    .sendFile(__path + '/views/404.html');
});

module.exports = router

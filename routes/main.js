__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/docs', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})
router.get('/', (req, res) => {
    res.sendFile(__path + '/views/forgot.html')
})
router.get('/animanga', (req, res) => {
    res.sendFile(__path + '/docs/animanga.html')
})
router.get('/textpro', (req, res) => {
    res.sendFile(__path + '/docs/textpro.html')
})
router.get('/canvas', (req, res) => {
    res.sendFile(__path + '/docs/canvas.html')
})
router.get('/downloader', (req, res) => {
    res.sendFile(__path + '/docs/downloader.html')
})
router.get('/fun', (req, res) => {
    res.sendFile(__path + '/docs/game.html')
})
router.get('/islami', (req, res) => {
    res.sendFile(__path + '/docs/islam.html')
})
router.get('/asupannsfw', (req, res) => {
    res.sendFile(__path + '/docs/asupannsfw.html')
})
router.get('/wallpaper', (req, res) => {
    res.sendFile(__path + '/docs/wallpaper.html')
})
router.get('/cecan', (req, res) => {
    res.sendFile(__path + '/docs/cecan.html')
})
router.get('/searching', (req, res) => {
    res.sendFile(__path + '/docs/searching.html')
})
router.get('/stalking', (req, res) => {
    res.sendFile(__path + '/docs/stalking.html')
})
router.get('/text', (req, res) => {
    res.sendFile(__path + '/docs/randomtext.html')
})
router.get('/profile', (req, res) => {
    res.sendFile(__path + '/views/profile.html')
})
router.get('/game', (req, res) => {
    res.sendFile(__path + '/views/game.html')
})
router.get('/about', (req, res) => {
    res.sendFile(__path + '/views/about.html')
})
module.exports = router

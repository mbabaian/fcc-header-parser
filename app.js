// basic required imports for NodeJS
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
// easy parsing of user-agent for response
var useragent = require('express-useragent')
// create instance of app
var app = module.exports = express()

app.use(bodyParser.json())
app.use(cors())
app.use(useragent.express())

// API url 
var api = 'https://mbabaian-whoami.glitch.me/api/whoami'

app.get(api, function(req, res, next) {
    var language = req.acceptsLanguages()
    var software = "os: " + req.useragent.os + ", Browser: " + req.useragent.browser
    var ipAddress = req.ip

    res.json({'ipaddress': ipAddress, 'language': language[0], 'software': software})
    //console.log('App function is working, too!')
});

app.listen(3000, function() {
    console.log('App is working!')
});

    var express = require('express')
    var path = require('path')
    //var jade = require('jade')

    var app = express()  
    console.log(process.argv[3])
    //console.log( "Server path = "+path.join(__dirname, process.argv[2]))
    app.set('views', process.argv[3]) // 'templates'))
    app.set('view engine', 'jade')
    app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));
    app.get('/', function(req, res) {
      res.end('Hello World!')
    }).get('/home', function(req, res) {
      console.log("Server "+new Date().toDateString())
      res.render('index', {date: new Date().toDateString()})
    })
    //console.log(path)
    app.listen(process.argv[2])

/*
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var express = require('express')
    var app = express()
    app.set('view engine', 'jade')
    app.set('views', process.argv[3])
    app.get('/home', function(req, res) {
      res.render('index', {date: new Date().toDateString()})
    })
    app.listen(process.argv[2])
*/    
    var express = require('express')
    var path = require('path')

    var app = express()  
    //app.set('views', process.argv[3]) // 'templates'))
    app.set('view engine', 'jade')
    //app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

    //Handles post requests
    app.use(express.bodyParser());

    //console.log(path)
    app.listen(process.argv[2])
    
    
    app.post('/form', function(req, res){
      console.log("post received")
      //console.log(req.body)
      //res.end("Hello World")
      res.end(req.body.str.split('').reverse().join(''))
    })
    app.get('/', function(req, res) {
      res.end('Hello World!')
    }).get('/home', function(req, res) {
      console.log("Server "+new Date().toDateString())
      res.render('index', {date: new Date().toDateString()})
    }) 
    
    
//Here's the official solution in case you want to compare notes:
//
//────────────────────────────────────────────────────────────────────────────────
/*    var express = require('express')
    var bodyParser = require('body-parser')
    var app = express()
    
    app.use(bodyParser.urlencoded({extended: false}))
    
    app.post('/form', function(req, res) {
      res.send(req.body.str.split('').reverse().join(''))
    })
    
    app.listen(process.argv[2])
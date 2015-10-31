    var express = require('express')
    //var path    = require('path')
    //var stylus  = require('stylus')

    var app = express()  
    
    // this will point to the css file - main.styl 
    //app.use(require('stylus').middleware(process.argv[3]||path.join(__dirname, 'public')));
    
    //app.set('views', process.argv[3]) // 'templates'))
    //app.set('view engine', 'jade')
    
    // this is needed to serve up static files
    //app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

    //Handles post requests
    //app.use(express.bodyParser());

    //console.log(path)
    app.listen(process.argv[2])
    
    /*
    app.put('/message/:id', function(req, res){
      console.log("put received")
      console.log(req.params.id)
      var message_back =require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + req.params.id)
      .digest('hex')
      res.end(message_back)
    });*/
    
   /* 
    app.post('/form', function(req, res){
      console.log("post received")
      //console.log(req.body)
      //res.end("Hello World")
      res.end(req.body.str.split('').reverse().join(''))
    })
    */
    app.get('/search', function(req, res) {
      //
      // There seems to be an issue with expressworks depending on a specific version of express.
      // https://github.com/FreeCodeCamp/freecodecamp/issues/358 decribes the following way to correctly
      // pass this challenge. I am not sure if this is the correct way to do this or just what makes this
      // challenge pass.
      
      var query = require('url').parse(req.url,true).query;
      res.send(JSON.stringify(query));
    })
    
    /*.get('/home', function(req, res) {
      console.log("Server "+new Date().toDateString())
      res.render('index', {date: new Date().toDateString()})
    }) 
    */
    
//Here's the official solution in case you want to compare notes:
//
//────────────────────────────────────────────────────────────────────────────────
/*var express = require('express')
var app = express()

app.get('/search', function(req, res){
  var query = req.query
  res.send(query)
})

app.listen(process.argv[2])    
*/
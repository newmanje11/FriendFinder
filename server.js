var express = require("express");
var bodyParser = require('body-parser');
var app = express();

    app.get('/', function(req,res) {
        res.send("Hello World")
    })

    app.listen(8080);

    app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})
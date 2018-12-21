var express = require('express');
var app = express();

let fruit='bug.jpg'

app.use(express.static('assets'));

app.get('/', function(req, res){
    res.send("<html><img src='"+fruit+"' width='1200' height='800'/></html>");
 });

app.listen(8080);

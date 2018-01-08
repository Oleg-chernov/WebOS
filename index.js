var express = require("express");
var bodyParser = require("body-parser");
var colors = require('colors');
var fs = require('fs');

var app = express();

var urlencodedParser = bodyParser.urlencoded({extended: false});
 
app.use(express.static(__dirname + "/public"));

app.get("/", function(request, response){
     response.send("<h1>Главная страница</h1>");
});
 
app.listen(3000);
console.log('Сервер запущен по адресу http://localhost:3000');
console.log(' ');
console.log('--------------------------------------'.inverse);
console.log(' ');
console.log('Хотите внести вклад в разработку ? Мы не против: https://github.com/WebOS'.green);
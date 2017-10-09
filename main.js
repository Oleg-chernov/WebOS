/*
    Список всех запросов и их значения:
    /newProject - создаётся структура нового проекта.
*/

// берём Express
var express = require('express');
var bodyParser = require('body-parser')
var fs = require('fs');
//var httpR = require('./public/core/js/sys/http.js');

// создаём Express-приложение
var app = express();
//var httpR = new httpR.HttpR();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// создаём маршрут для главной страницы
// http://localhost:8080/
app.get('/', function(req, res) {
  res.sendfile('index.html');
});

app.post('/newProject',function(req,res){
    var text = req.body.text;
    fs.mkdir('public/app/' + text);
    fs.mkdir('public/app/' + text + '/css');
    fs.mkdir('public/app/' + text + '/js');
    fs.writeFile('public/app/' + text + 'index.html', '<p>Hello, world !</p>', function(e){});
    res.end("OK");
});

app.listen(8081);
console.log('Сервер стартовал!');
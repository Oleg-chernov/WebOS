var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs')

var app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function HttpR(){
    
    app.post('/newProject',function(req,res){
        var text = req.body.text;
        fs.mkdirSync('./public/app/'+text);
        console.log(text)
        res.end("yes");
    });
    
}
exports.HttpR =  HttpR;
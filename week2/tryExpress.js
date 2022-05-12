var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hi, My name is Tom.');
});

app.listen(8051, ()=>{
    console.log('Example app listening on port 8051.');
});

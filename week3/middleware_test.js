var express = require('express');
var app = express();
var port = 3000;

app.use(function(req, res, next) {
    console.log('requset time:' + new Date().toString());
    next();
});

app.use('/todos',function(req, res, next) {
    console.log("A todos request received at" + new Date().toString());
    next();
});

app.listen(port);
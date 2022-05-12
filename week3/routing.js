//week3
var express = require('express');
var bodyParser = require('body-parser');
var routing = express();
routing.use(express.json());

routing.get('/', function(req, res){
    res.send('這是主頁');
})
routing.get('/user/:id([0-9]{2,3}$)',function(req, res){
    res.send('我的ID : ' + req.params.id);
})
routing.get('/user/:name',function(req,res){
    res.send('我的名字 : ' + req.params.name);
})
routing.put('/movie/1',function(req,res){
    res.send("Put requset is served");
})
routing.delete('/movie/1',function(req,res){
    res.send("Delete requset is served");
})
routing.post('/movie/1', function(req, res){
    console.log("req.body");
    res.status(200).send("Post requset is served");
})

routing.listen(3000, function(){
    console.log('已連線上PORT:3000');
})

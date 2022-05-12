var express = require('express');
var app = express();
app.get('/', function(req, res){
    res.send('Welcome HI');
})
/*app.get('/user/:id([0-9]{2,3}$)', function(req, res){
    res.send('your id is : ' + req.params.id + '!');
})

app.put('/movie/1', function(req, res){
})

app.delete('/movie/1', function(req, res){
    res.send('your DELETE requesr is served')
})

app.post('/movie', function(req, res){
    res.status(200).send('your post request is served');
})*/

app.listen(3000, ()=>{
    console.log('in browser type http://localhost:3000/')
})



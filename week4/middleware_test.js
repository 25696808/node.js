var express = require('express');
var app = express();
var port = 3000;

app.use(function(req, res, next) { //目前看來use中有consolog 的會需要NEXT
    console.log('requset time:' + new Date().toString());
    next();
});

app.use('/todos',function(req, res, next) {  
    console.log("A todos request received at" + new Date().toString());
    next();
});

app.get('/todos', function(req, res,){  
    res.send([
            {'name':'cleaning','status':'none'},
            {'name':'reading','status':'nane'}
        ]);
});

app.use(function(req, res, next){   
    res.status(404).send('404 not found');
    next();
});

app.listen(port, function(){
    console.log('listening on port:3000');
});
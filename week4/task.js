var express = require('express');
var router = express.Router(); //建立路由模組供人使用
var data = require('./data');  //獲得data.js這個函式庫

router.get('/', function(req, res){
    res.send(data.tasks); //送tasks變數

})
router.get('/:id', function(req, res){
    id = req.params.id; //獲得id
    res.send(id);
})

module.exports = router //輸出模組


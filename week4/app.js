var express = require("express");
var logger = require("morgan"); //morgan日誌
var path = require('path');
var app = express();

var {users, tasks} = require('./data'); //獲得data.js
var tasksRouter = require('./task'); //獲得task.js

//如果現行中介軟體函數不會結束要求/回應循環，它必須呼叫 next()，以便將控制權傳遞給下一個中介軟體函數。否則，要求將會停擺。

app.use(logger('dev')); //morgan模組的顯示系統日誌 如GET /movies 304 32.514 ms - -

app.use((req,res,next)=>{
    console.log(" ");
    console.log(req.method + ":" + req.url +" " +new Date().toLocaleDateString());
    console.log(" ");
    next();    //要求 使用方法+ 要求 位址+ 目前時間
});

app.get("/movies", (req,res)=>{
    //res.send("Hello world")
    console.log(path.resolve(__dirname,"index.html"));  //轉換為絕對路徑 path.resolve
    console.log(" ");
    res.sendFile(path.resolve(__dirname,"index.html"));
});

app.use('/tasks', tasksRouter); //調用task.js路由模組 路徑為/tasks

app.get('/users', function(req, res) {
    res.json(users);  //回應 json格式的users from line6
});

app.get('*', function(req, res) {    //* 表示找不到路徑時
    res.status(404).send('404 not found.');
});

app.listen(3000,()=>{
    console.log("伺服器已開啟 http://localhost:3000");
});
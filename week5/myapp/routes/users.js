var express = require('express');
var router = express.Router();

const name = "Tom's world";
const task = ["task1","task2","task3"];
const message = `
      <ul>
        <li>本我</li>
        <li>主我</li>
        <li>超我</li>
      </ul>
`

/* GET users listing. */

router.get('/', function(req, res, next) {
  //res.send(`<h1>respond with a ${name} ${message} </h1>`);
  //const task = ["task1","task2","task3"];
  var message2 = "<ul>"
  for(let i=0;i<task.length ;i++) {
    message2 += `<li>  ${task[i]}  </li>`
  }
  message2 += "</ul>";
  res.send(`<h1>這裡是 ${name} ${message} ${message2}</h1>`);
  
});

module.exports = router;

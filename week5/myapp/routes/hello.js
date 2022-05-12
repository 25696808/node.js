var express = require('express');
var router = express.Router();

router.get('/', function(req, res,next) {
    res.render('hello', {    })
})
router.post('/', function(req, res, next) {
    console.log(req.body);
    res.send(req.body);
})

module.exports = router;
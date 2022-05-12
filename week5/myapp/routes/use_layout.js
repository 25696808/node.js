var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('use_layout',{

    })
})

module.exports = router

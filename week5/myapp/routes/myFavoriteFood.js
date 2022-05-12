var express = require("express");
var router = express.Router();

router.get('/', function(req, res) {
    res.render('myFavoriteFood', {
        title : 'This is Web by ',
        fruits : ['蘋果','香蕉','橘子']    
    })
})

module.exports = router;
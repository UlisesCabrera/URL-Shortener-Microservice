var express = require('express');
var router = express.Router();
var indexCtrl =  require("../controllers/indexController");
/* GET home page. */


router.get('/', indexCtrl.sendHomePage);

router.get('/new/:url(*)', indexCtrl.shortenerUrl);

router.get('/:id', indexCtrl.redirect);

module.exports = router;

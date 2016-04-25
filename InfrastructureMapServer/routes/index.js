var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Inframap.html');
});

router.get('/pro', function(req, res, next) {
  res.render('proactivemonitor.html');
});

module.exports = router;

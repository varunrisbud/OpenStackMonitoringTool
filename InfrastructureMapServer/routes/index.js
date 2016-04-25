var express = require('express');
var router = express.Router();
var later = require('later');
var proActiveWorkFlow = require('./proactiveWorkFlowTests.js')


/* GET home page. */
router.get('/', function(req, res, next) {
  proActiveWorkFlow.executeWorkFlowTests();
  res.render('Inframap.html');
});

module.exports = router;
/**
 * Created by sameer on 4/15/16.
 */

var express = require('express');
var router = express.Router();
var Client = require('node-rest-client').Client;
var request = require('request');

router.get('/', function (req, res, data) {
    res.render('report');
});

module.exports = router;
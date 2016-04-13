/**
 * Created by sameer on 4/9/16.
 */

var express = require('express');
var router = express.Router();
var Client = require('node-rest-client').Client;
var request = require('request');

router.get('/nova', function (req, res, data) {
    res.render('nova');
});

module.exports = router;
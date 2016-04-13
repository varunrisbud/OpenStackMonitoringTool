/**
 * Created by sameer on 3/22/16.
 */
var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/:componentIndex', function(req, res, data) {
    var index = req.params.componentIndex;

    var options = {
        uri: 'http://130.65.159.58:9200/'+ index + '/_search?pretty=true',
        headers : {
            'Content-Type' : 'application/json'
        }
    };

    request.post(options, function(err, httpResponse, body) {
        res.send(body);
    });
});

module.exports = router;
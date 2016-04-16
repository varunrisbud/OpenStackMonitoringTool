/**
 * Created by sameer on 3/22/16.
 */
var express = require('express');
var router = express.Router();
var Client = require('node-rest-client').Client;
var request = require('request');


router.get('/query', function (req, res, data) {

    var options = {
        uri: 'http://130.65.159.58:9200/glanceapi/_search',
        headers: {
            'Content-Type': 'application/json'
        },
        json: {
            query: {
                bool: {
                    must: [
                        {
                            match: {
                                message: "WARNING"
                            }
                        },
                        {
                            range: {
                                "@timestamp": {
                                    gte: "now-200d"
                                }
                            }
                        }
                    ]
                }
            }
        }
    };

    request.post(options, function (err, httpResponse, body) {
        res.send(body);
    });
});

router.get('/:componentIndex', function (req, res, data) {
    var index = req.params.componentIndex;

    var options = {
        uri: 'http://130.65.159.58:9200/' + index + '/_search?pretty=true',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    request.post(options, function (err, httpResponse, body) {
        res.send(body);
    });
});


module.exports = router;
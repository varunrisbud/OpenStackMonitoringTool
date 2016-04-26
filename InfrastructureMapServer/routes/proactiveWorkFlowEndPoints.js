/**
 * Created by alcohol on 4/25/16.
 */

var express = require('express');
var router = express.Router();
var Client = require('node-rest-client').Client;
var request = require('request');

router.get('/status', function (req, res, data) {
    var options = {
        uri: 'http://130.65.159.58:9200/proactivewf/_search',
        headers: {
            'Content-Type': 'application/json'
        },
        json: {
            "size" : 0,
            "aggs" : {
                "group" : {
                    "terms" : {
                        "field" : "message"
                    },
                    "aggs" : {
                        "group_docs" : {
                            "top_hits" : {
                                "size" : 1,
                                "sort" : [
                                    {
                                        "@timestamp" : {
                                            "order" : "desc"
                                        }
                                    }
                                ]
                            }
                        }
                    }
                }
            }
        }
    };

    request.post(options, function (err, httpResponse, body) {
        res.json(body);
    });
});


router.get('/', function (req, res, data) {
    res.render('proactivemonitor');
});

module.exports = router;
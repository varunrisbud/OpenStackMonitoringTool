/**
 * Created by alcohol on 4/23/16.
 */

var express = require('express');
var request = require('request');
var sleep = require('sleep');
var later = require('later');
var winston = require('winston');

var logger = new winston.Logger({
    transports: [
        new winston.transports.File({
            level: 'info',
            filename: '/var/log/proactiveWF/pawf.log',
            handleExceptions: false,
            json: true,
            maxsize: 5242880, //5MB
            maxFiles: 5,
            colorize: false
        }),
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false
});

var getAuthenticationToken = function(callback) {

    var options = {
        uri: 'http://130.65.159.58:5000/v2.0/tokens',
        headers: {
            'Content-Type': 'application/json'
        },
        json: true,
        body: {
            "auth": {
                "tenantName": "admin",
                "passwordCredentials": {
                    "username": "admin",
                    "password": "keystoneuseradmin"
                }
            }
        }
    };

    request.post(options, function (err, httpResponse, body) {

        var keyStoneAuthToken = body.access.token.id;

        callback(keyStoneAuthToken);
    });
}

var createServer = function(keyStoneAuthToken, callback) {
    var options = {
        uri: 'http://130.65.159.58:8774/v2.1/d6812e9d3572441b83bf79a8abac323e/servers',
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': keyStoneAuthToken,
            'Cache-Control': 'no-cache'
        },
        json: true,
        body: {
            "server": {
                "name": "new-server-test",
                "imageRef": "http://130.65.159.58:9292/images/c6fe6e17-8054-41c0-81b3-bd2ef8375497",
                "flavorRef": "http://130.65.159.58:9292/flavors/1",
                "networks": [{"uuid": "c39bedd0-1d41-4536-8b7c-9ef2ea8f06c9"}],
                "metadata": {
                    "My Server Name": "CurlTestServer"
                }
            }
        }
    };

    request.post(options, function (req, res, body) {
        callback(res);
    });
}

var checkServerStatus = function(keyStoneAuthToken, serverId, callback) {
    var options = {
        uri: 'http://130.65.159.58:8774/v2.1/d6812e9d3572441b83bf79a8abac323e/servers/' + serverId,
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': keyStoneAuthToken,
            'Cache-Control': 'no-cache'
        },
        method: 'GET'
    };

    request(options, function(req, res, body) {
        callback(body);
    });
}

var deleteServer = function (keyStoneAuthToken, serverId, callback) {

    sleep.sleep(30);

    var options = {
        uri: 'http://130.65.159.58:8774/v2.1/d6812e9d3572441b83bf79a8abac323e/servers/' + serverId,
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': keyStoneAuthToken,
            'Cache-Control': 'no-cache'
        },
        json: true,
        method: 'DELETE'
    };

    request(options, serverId, function (req, res, body) {
        callback(res);
    });
}

var testCreateVMWorkFlow = function() {
    getAuthenticationToken(function(keyStoneAuthToken) {
        createServer(keyStoneAuthToken, function (res) {
            if (res.statusCode == 202) {
                var serverID = res.body.server.id;
                logger.info('CreateServer', {'requestStatus' : 'successful', 'statusCode' : res.statusCode, 'error' : ''});
                sleep.sleep(10);

                checkServerStatus(keyStoneAuthToken, serverID, function (status1) {
                    var jsonBody = JSON.parse(status1);
                    logger.info('vmStatus', {'requestStatus' : 'successful', 'statusCode' : jsonBody.server.status, 'error' : jsonBody.server.fault.message});
                    deleteServer(keyStoneAuthToken, serverID, function (resp) {
                        logger.info('deleteVM', {'requestStatus' : 'successful', 'statusCode' : resp.statusCode, 'error' : ''});

                    });
                });
            }
            else {
                logger.info('CreateServer', {'requestStatus' : 'unsuccessful', 'statusCode' : res.statusCode, 'error' : res.body.forbidden.message});
            }
        });
    });
}

exports.executeWorkFlowTests = function() {
    var textSched = later.parse.text('every 1 min');
    var timer2 = later.setInterval(testCreateVMWorkFlow, textSched);
}
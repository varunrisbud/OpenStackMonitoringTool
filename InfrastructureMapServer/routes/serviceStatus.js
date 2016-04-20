/**
 * Created by sameer on 4/19/16.
 */

var express = require('express');
var router = express.Router();
var request = require('request');
var fs = require('fs');

router.get('/', function (req, res, next) {

    var KEYSTONE_STATUS = "N/A";
    var GLANCE_STATUS = "N/A";
    var NEUTRON_STATUS = "N/A";
    var NOVA_STATUS = "N/A";

    KEYSTONE_STATUS = fs.readFileSync('/var/log/ServiceStatus/KeystoneStatus.log');
    console.log(KEYSTONE_STATUS);

    GLANCE_STATUS = fs.readFileSync('/var/log/ServiceStatus/GlanceStatus.log');
    console.log(GLANCE_STATUS);

    NEUTRON_STATUS = fs.readFileSync('/var/log/ServiceStatus/NeutronStatus.log');
    console.log(NEUTRON_STATUS);

    NOVA_STATUS = fs.readFileSync('/var/log/ServiceStatus/NovaStatus.log');
    console.log(NOVA_STATUS);

    var response = '{ "status" : {' + KEYSTONE_STATUS + ',' + GLANCE_STATUS + ',' + NEUTRON_STATUS + ',' + NOVA_STATUS + '}}';
    //response = response.replace(/['"]+/g, '');
    res.send(response);
});

module.exports = router;

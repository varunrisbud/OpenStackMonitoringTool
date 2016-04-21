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
    res.send(response);
});


router.get('/hosthealth', function (req, res, next) {
    var CPU_CONTROLLER = "N/A";
    var CPU_COMPUTE = "N/A";

    var MEMORY_CONTROLLER = "N/A";
    var MEMORY_COMPUTE = "N/A";

    var DISK_READ_CONTROLLER = "N/A";
    var DISK_READ_COMPUTE = "N/A";

    var DISK_WRITE_CONTROLLER = "N/A";
    var DISK_WRITE_COMPUTE = "N/A";

    var CONTROLLER_HEALTH_STATUS = "Green";
    var COMPUTE_HEALTH_STATUS = "Green";

    CPU_CONTROLLER = fs.readFileSync('/var/log/ControllerHealth/CPUUsage.log');
//console.log("CPU_CONTROLLER" + CPU_CONTROLLER);

    MEMORY_CONTROLLER = fs.readFileSync('/var/log/ControllerHealth/MemoryUsage.log');
//console.log("MEMORY_CONTROLLER" + MEMORY_CONTROLLER);

    DISK_READ_CONTROLLER = fs.readFileSync('/var/log/ControllerHealth/DiskReadRate.log');
//console.log("DISK_READ_CONTROLLER" + DISK_READ_CONTROLLER);

    DISK_WRITE_CONTROLLER = fs.readFileSync('/var/log/ControllerHealth/DiskWriteRate.log');
//console.log("DISK_WRITE_CONTROLLER" + DISK_WRITE_CONTROLLER);

    CPU_COMPUTE = fs.readFileSync('/var/log/CPUUsage.log');
//console.log("CPU_COMPUTE" + CPU_COMPUTE);

    MEMORY_COMPUTE = fs.readFileSync('/var/log/MemoryUsage.log');
//console.log("MEMORY_COMPUTE" + MEMORY_COMPUTE);

    DISK_READ_COMPUTE = fs.readFileSync('/var/log/DiskReadRate.log');
//console.log("DISK_READ_COMPUTE" + DISK_READ_COMPUTE);

    DISK_WRITE_COMPUTE = fs.readFileSync('/var/log/DiskWriteRate.log');
//console.log("DISK_WRITE_COMPUTE" + DISK_WRITE_COMPUTE);

    if (parseInt(CPU_CONTROLLER) > 60 && parseInt(CPU_CONTROLLER) < 80) {
        CONTROLLER_HEALTH_STATUS = "Orange";
    }
    else {
        if (parseInt(CPU_CONTROLLER) >= 80) {
            CONTROLLER_HEALTH_STATUS = "Red";
        }
    }

    if (parseInt(CPU_COMPUTE) > 60 && parseInt(CPU_COMPUTE) < 80) {
        COMPUTE_HEALTH_STATUS = "Orange";
    }
    else {
        if (parseInt(CPU_COMPUTE) >= 80) {
            COMPUTE_HEALTH_STATUS = "Red";
        }
    }

    var response = '{ "health" : [' +
        '{"HOST_NAME":"Controller", "CONTROLLER_HEALTH_STATUS":"' + CONTROLLER_HEALTH_STATUS + '", "CPU_CONTROLLER":"' + CPU_CONTROLLER + '%", "MEMORY_CONTROLLER":"' + MEMORY_CONTROLLER + 'Mb", "DISK_READ_CONTROLLER":"' + DISK_READ_CONTROLLER + 'Mb/s", "DISK_WRITE_CONTROLLER":"' + DISK_WRITE_CONTROLLER + 'Mb/s"},' +
        '{"HOST_NAME":"Compute", "COMPUTE_HEALTH_STATUS":"' + COMPUTE_HEALTH_STATUS + '", "CPU_COMPUTE":"' + CPU_COMPUTE + '%", "MEMORY_COMPUTE":"' + MEMORY_COMPUTE + 'Mb", "DISK_READ_COMPUTE":"' + DISK_READ_COMPUTE + 'Mb/s", "DISK_WRITE_COMPUTE":"' + DISK_WRITE_COMPUTE + 'Mb/s"}]}';

    res.send(response);
});

module.exports = router;

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

	CPU_CONTROLLER = fs.readFileSync('/var/log/ControllerHealth/CPUUsage.log', 'utf8');
	var cpu_host_1 = CPU_CONTROLLER.split(" ", 60);
	var cpu_host_1_sum = 0;
	for(var i = 1; i < cpu_host_1.length; i++) {
		cpu_host_1_sum = cpu_host_1_sum + parseFloat(cpu_host_1[i]);
	}
	var cpu_host_1_avg = cpu_host_1_sum/(cpu_host_1.length-1);

	MEMORY_CONTROLLER = fs.readFileSync('/var/log/ControllerHealth/MemoryUsage.log', 'utf8');
	var memory_host_1 = MEMORY_CONTROLLER.split(" ", 60);
	var memory_host_1_sum = 0;
	for(var i = 1; i < memory_host_1.length; i++) {
		memory_host_1_sum = memory_host_1_sum + parseFloat(memory_host_1[i]);
	}
	var memory_host_1_avg = memory_host_1_sum/(memory_host_1.length-1);

	DISK_READ_CONTROLLER = fs.readFileSync('/var/log/ControllerHealth/DiskReadRate.log', 'utf8');
	var disk_read_host_1 = DISK_READ_CONTROLLER.split(" ", 60);
	var disk_read_host_1_sum = 0;
	for(var i = 1; i < disk_read_host_1.length; i++) {
		disk_read_host_1_sum = disk_read_host_1_sum + parseFloat(disk_read_host_1[i]);
	}
	var disk_read_host_1_avg = disk_read_host_1_sum/(disk_read_host_1.length-1);

	DISK_WRITE_CONTROLLER = fs.readFileSync('/var/log/ControllerHealth/DiskWriteRate.log', 'utf8');
	var disk_write_host_1 = DISK_WRITE_CONTROLLER.split(" ", 60);
	var disk_write_host_1_sum = 0;
	for(var i = 1; i < disk_write_host_1.length; i++) {
		disk_write_host_1_sum = disk_write_host_1_sum + parseFloat(disk_write_host_1[i]);
	}
	var disk_write_host_1_avg = disk_write_host_1_sum/(disk_write_host_1.length-1);

	CPU_COMPUTE = fs.readFileSync('/var/log/CPUUsage.log', 'utf8');
	var cpu_host_2 = CPU_COMPUTE.split(" ", 60);
	var cpu_host_2_sum = 0;
	for(var i = 1; i < cpu_host_2.length; i++) {
		cpu_host_2_sum = cpu_host_2_sum + parseFloat(cpu_host_2[i]);
//	console.log(CPU_COMPUTE);
	}
	var cpu_host_2_avg = cpu_host_2_sum/(cpu_host_2.length-1);

	MEMORY_COMPUTE = fs.readFileSync('/var/log/MemoryUsage.log', 'utf8');
	var memory_host_2 = MEMORY_COMPUTE.split(" ", 60);
	var memory_host_2_sum = 0;
	for(var i = 1; i < memory_host_2.length; i++) {
		memory_host_2_sum = memory_host_2_sum + parseFloat(memory_host_2[i]);
	}
	var memory_host_2_avg = memory_host_2_sum/(memory_host_2.length-1);

	DISK_READ_COMPUTE = fs.readFileSync('/var/log/DiskReadRate.log', 'utf8');
	var disk_read_host_2 = DISK_READ_COMPUTE.split(" ", 60);
	var disk_read_host_2_sum = 0;
	for(var i = 1; i < disk_read_host_2.length; i++) {
		disk_read_host_2_sum = disk_read_host_2_sum + parseFloat(disk_read_host_2[i]);
	}
	var disk_read_host_2_avg = disk_read_host_2_sum/(disk_read_host_2.length-1);

	DISK_WRITE_COMPUTE = fs.readFileSync('/var/log/DiskWriteRate.log', 'utf8');
	var disk_write_host_2 = DISK_WRITE_COMPUTE.split(" ", 60);
	var disk_write_host_2_sum = 0;
	for(var i = 1; i < disk_write_host_2.length; i++) {
		disk_write_host_2_sum = disk_write_host_2_sum + parseFloat(disk_write_host_2[i]);
	}
	var disk_write_host_2_avg = disk_write_host_2_sum/(disk_write_host_2.length-1);

	if(parseInt(cpu_host_1[0]) > 60 && parseInt(cpu_host_1[0]) < 80) {
		CONTROLLER_HEALTH_STATUS = "Orange";
	}
	else {
		if(parseInt(cpu_host_1[0]) >= 80) {
		 	CONTROLLER_HEALTH_STATUS = "Red";
		}
	}

	if(parseInt(cpu_host_2[0]) > 60 && parseInt(cpu_host_2[0]) < 80) {
        	COMPUTE_HEALTH_STATUS = "Orange";
	}
	else {
        	if(parseInt(cpu_host_2[0]) >= 80) {
                 	COMPUTE_HEALTH_STATUS = "Red";
	        }
	}

	var host1 = {
		hostName: "Controller",
		healthColorCode: CONTROLLER_HEALTH_STATUS,
		cpuUsage: cpu_host_1,
		lastHourAvgCpuUsage: cpu_host_1_avg,
		memoryUsage: memory_host_1,
		lastHourAvgMemoryUsage: memory_host_1_avg,
		diskReadRate: disk_read_host_1,
		lastHourAvgDiskReadRate: disk_read_host_1_avg,
		diskWriteRate: disk_write_host_1,
		lastHourAvgDiskWriteRate: disk_write_host_1_avg
	};

	var host2 = {
		hostName: "Compute",
		healthColorCode: COMPUTE_HEALTH_STATUS,
		cpuUsage: cpu_host_2,
		lastHourAvgCpuUsage: cpu_host_2_avg,
		memoryUsage: memory_host_2,
		lastHourAvgMemoryUsage: memory_host_2_avg,
		diskReadRate: disk_read_host_2,
		lastHourAvgDiskReadRate: disk_read_host_2_avg,
		diskWriteRate: disk_write_host_2,
		lastHourAvgDiskWriteRate: disk_write_host_2_avg
	};

	var response = [host1, host2];
	res.send(response);
});

module.exports = router;

fs = require('fs')

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

if(parseInt(CPU_CONTROLLER) > 60 && parseInt(CPU_CONTROLLER) < 80) {
	CONTROLLER_HEALTH_STATUS = "Orange";
}
else {
	if(parseInt(CPU_CONTROLLER) >= 80) {
		 CONTROLLER_HEALTH_STATUS = "Red";
	}
}

if(parseInt(CPU_COMPUTE) > 60 && parseInt(CPU_COMPUTE) < 80) {
        COMPUTE_HEALTH_STATUS = "Orange";
}
else {
        if(parseInt(CPU_COMPUTE) >= 80) {
                 COMPUTE_HEALTH_STATUS = "Red";
        }
}

var host1 = {
	hostName: "Controller",
	healthColorCode: CONTROLLER_HEALTH_STATUS,
	cpuUsage: CPU_CONTROLLER + " %",
	memoryUsage: MEMORY_CONTROLLER + " Mb",
	diskReadRate: DISK_READ_CONTROLLER + " Mb/sec",
	diskWriteRate: DISK_WRITE_CONTROLLER + " Mb/sec"
};

var host2 = {
	hostName: "Compute",
	healthColorCode: COMPUTE_HEALTH_STATUS,
	cpuUsage: CPU_COMPUTE + " %",
	memoryUsage: MEMORY_COMPUTE + " Mb",
	diskReadRate: DISK_READ_COMPUTE + " Mb/sec",
	diskWriteRate: DISK_WRITE_COMPUTE + " Mb/sec"
};

console.log(host1);
console.log(host2);


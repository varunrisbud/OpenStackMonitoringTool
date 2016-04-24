fs = require('fs')

var KEYSTONE_STATUS = "N/A";
var GLANCE_STATUS = "N/A";
var NEUTRON_STATUS = "N/A";
var NOVA_STATUS = "N/A";

KEYSTONE_STATUS = fs.readFileSync('/var/log/ServiceStatus/KeystoneStatus.log');
//console.log(KEYSTONE_STATUS);

GLANCE_STATUS = fs.readFileSync('/var/log/ServiceStatus/GlanceStatus.log');
//console.log(GLANCE_STATUS);

NEUTRON_STATUS = fs.readFileSync('/var/log/ServiceStatus/NeutronStatus.log');
//console.log(NEUTRON_STATUS);

NOVA_STATUS = fs.readFileSync('/var/log/ServiceStatus/NovaStatus.log'); 
//console.log(NOVA_STATUS);

var response = '{ "status" : {' + KEYSTONE_STATUS + ',' + GLANCE_STATUS + ',' + NEUTRON_STATUS + ',' + NOVA_STATUS + '}}';

console.log(response);


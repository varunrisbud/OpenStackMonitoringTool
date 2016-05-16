/**
 * Created by sameer on 5/7/16.
 */
angular.module('opsmonitor', [])
    .controller('hostMapController', function ($scope, $http) {
        $scope.myData = null;
        $http.get('http://130.65.159.170/status/hosthealth').success(function (res) {
            $scope.myData = res;
            console.log(res);

            $scope.cpu_controller = res[0].lastHourAvgCpuUsage;
            $scope.memory_controller = res[0].lastHourAvgMemoryUsage;
            $scope.disk_read_controller = res[0].lastHourAvgDiskReadRate;
            $scope.disk_write_controller = res[0].lastHourAvgDiskWriteRate;

            $scope.cpu_compute = res[1].lastHourAvgCpuUsage;
            $scope.memory_compute = res[1].lastHourAvgMemoryUsage;
            $scope.disk_read_compute = res[1].lastHourAvgDiskReadRate;
            $scope.disk_write_compute = res[1].lastHourAvgDiskWriteRate;

            var diskReadRateController = [];
            for (var i = 0; i < res[0].diskReadRate.length; i++) {
                diskReadRateController.push(parseFloat([res[0].diskReadRate[i]]));
            }

            var diskWriteRateController = [];
            for (var i = 0; i < res[0].diskReadRate.length; i++) {
                diskWriteRateController.push(parseFloat([res[0].diskWriteRate[i]]));
            }

            var cpuUsageController = [];
            for (var i = 0; i < res[0].diskReadRate.length; i++) {
                cpuUsageController.push(parseFloat([res[0].cpuUsage[i]]));
            }

            var memoryUsageController = [];
            for (var i = 0; i < res[0].diskReadRate.length; i++) {
                memoryUsageController.push(parseFloat([res[0].memoryUsage[i]]));
            }


            var diskReadRateCompute = [];
            for (var i = 0; i < res[0].diskReadRate.length; i++) {
                diskReadRateCompute.push(parseFloat([res[1].diskReadRate[i]]));
            }

            var diskWriteRateCompute = [];
            for (var i = 0; i < res[0].diskReadRate.length; i++) {
                diskWriteRateCompute.push(parseFloat([res[1].diskWriteRate[i]]));
            }

            var cpuUsageCompute = [];
            for (var i = 0; i < res[0].diskReadRate.length; i++) {
                cpuUsageCompute.push(parseFloat([res[1].cpuUsage[i]]));
            }

            var memoryUsageCompute = [];
            for (var i = 0; i < res[0].diskReadRate.length; i++) {
                memoryUsageCompute.push(parseFloat([res[1].memoryUsage[i]]));
            }


            $('#container1').highcharts({
                title: {
                    text: 'Host1 CPU/Memory',
                    x: 1 //center
                },

                xAxis: {
                    title: {
                        text: 'Time'
                    },
                    categories: ['1', '2', '3', '4', '5', '6', '7', '8', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '57', '58', '59', '60']
                },
                yAxis: {
                    title: {
                        text: 'Value'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: '°C'
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [{
                    name: 'CPU Usage',
                    data: cpuUsageController
                }, {
                    name: 'Memory',
                    data: memoryUsageController
                }]
            });

            $('#container2').highcharts({
                title: {
                    text: 'Host1 I/O',
                    x: 1 //center
                },

                xAxis: {
                    title: {
                        text: 'Time'
                    },
                    categories: ['1', '2', '3', '4', '5', '6', '7', '8', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '57', '58', '59', '60']
                },
                yAxis: {
                    title: {
                        text: 'Value'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: '°C'
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [{
                    name: 'Disk Read',
                    data: diskReadRateController
                }, {
                    name: 'Disk Write',
                    data: diskWriteRateController
                }]
            });

            $('#container3').highcharts({
                title: {
                    text: 'Host2 CPU/Memory',
                    x: 1 //center
                },

                xAxis: {
                    title: {
                        text: 'Time'
                    },
                    categories: ['1', '2', '3', '4', '5', '6', '7', '8', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '57', '58', '59', '60']
                },
                yAxis: {
                    title: {
                        text: 'Value'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: '°C'
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [{
                    name: 'CPU Usage',
                    data: cpuUsageCompute
                }, {
                    name: 'Memory',
                    data: memoryUsageCompute
                }]
            });

            $('#container4').highcharts({
                title: {
                    text: 'Host2 I/O',
                    x: 1 //center
                },

                xAxis: {
                    title: {
                        text: 'Time'
                    },
                    categories: ['1', '2', '3', '4', '5', '6', '7', '8', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '57', '58', '59', '60']
                },
                yAxis: {
                    title: {
                        text: 'Value'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: '°C'
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [{
                    name: 'Disk Read',
                    data: diskReadRateCompute
                }, {
                    name: 'Disk Write',
                    data: diskWriteRateCompute
                }]
            });
        });
    });
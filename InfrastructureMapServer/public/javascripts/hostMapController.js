/**
 * Created by sameer on 5/7/16.
 */
angular.module('opsmonitor', [])
    .controller('hostMapController', function ($scope, $http) {
        $scope.myData = null;
        $http.get('http://130.65.159.170/status/hosthealth').success(function (res) {
            $scope.myData = res;


            var cpuUsage = res[0].cpuUsage[0] + res[0].cpuUsage[1] + res[0].cpuUsage[2] + res[0].cpuUsage[3] + res[0].cpuUsage[4];
            var memoryusage = /*TODO*/

            $scope.host_name = res[0].hostName;
            $scope.cpu_controller = cpuUsage;
            $scope.memory_controller = res[0].memoryUsage[0];
            $scope.disk_read_controller = res[0].diskReadRate[0];
            $scope.disk_write_controller = res[0].diskWriteRate[0];
            //console.log(res.health[0].HOST_NAME);
            //
            //$scope.host2_name = res.health[1].HOST_NAME;
            //$scope.compute_health_status = res.health[1].COMPUTE_HEALTH_STATUS;
            //$scope.cpu_compute = res.health[1].CPU_COMPUTE;
            //$scope.memory_compute = res.health[1].MEMORY_COMPUTE;
            //$scope.disk_read_compute = res.health[1].DISK_READ_COMPUTE;
            //$scope.disk_write_compute = res.health[1].DISK_WRITE_COMPUTE;

        });
    });
/**
 * Created by sameer on 5/7/16.
 */
angular.module('opsmonitor', [])
    .controller('hostMapController', function ($scope, $http) {
        $scope.myData = null;
        $http.get('http://130.65.159.170/status/hosthealth').success(function (res) {
            $scope.myData = res;
            console.log("JS: " + res);


            $scope.host_name = res.health[0].HOST_NAME;
            $scope.controller_health_status = res.health[0].CONTROLLER_HEALTH_STATUS;
            $scope.cpu_controller = res.health[0].CPU_CONTROLLER;
            $scope.memory_controller = res.health[0].MEMORY_CONTROLLER;
            $scope.disk_read_controller = res.health[0].DISK_READ_CONTROLLER;
            $scope.disk_write_controller = res.health[0].DISK_WRITE_CONTROLLER;
            console.log(res.health[0].HOST_NAME);

            $scope.host2_name = res.health[1].HOST_NAME;
            $scope.compute_health_status = res.health[1].COMPUTE_HEALTH_STATUS;
            $scope.cpu_compute = res.health[1].CPU_COMPUTE;
            $scope.memory_compute = res.health[1].MEMORY_COMPUTE;
            $scope.disk_read_compute = res.health[1].DISK_READ_COMPUTE;
            $scope.disk_write_compute = res.health[1].DISK_WRITE_COMPUTE;

        });

    });

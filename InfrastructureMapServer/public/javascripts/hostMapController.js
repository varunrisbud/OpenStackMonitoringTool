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

        });
    });
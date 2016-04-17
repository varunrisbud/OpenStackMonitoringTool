/**
 * Created by sameer on 4/15/16.
 */

angular.module('opsmonitor', ['smart-table'])
    .controller('reportController', function ($scope, $http) {
        $scope.getValue = function(index) {
            console.log(index);
            var url = 'http://130.65.159.170/logs/warnings/' + index + '/';
            console.log(url);
            $http.get(url).success(function (res) {
                $scope.warningsCount = res.hits.total;
                $scope.rowCollection = res.hits.hits;
            });
        }
    });
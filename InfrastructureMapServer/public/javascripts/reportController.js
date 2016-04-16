/**
 * Created by sameer on 4/15/16.
 */

angular.module('opsmonitor', [])
    .controller('reportController', function ($scope, $http) {
        $http.get('http://130.65.159.170/logs/query').success(function (res) {
            var body = res.hits.hits;

            $scope.warningsCount = res.hits.total;

            console.log(body);
        });
    });
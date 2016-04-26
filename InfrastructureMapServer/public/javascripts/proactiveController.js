/**
 * Created by Sa4w0c9 on 4/25/2016.
 */
angular.module('opsmonitor', [])
    .controller('proactiveController', function ($scope, $http, $interval) {
        var counter = 0;

        $scope.getData = function () {
            var createVMStatus = 'none';
            var vmStatusStatus = 'none';
            var deleteVMStatus = 'none';

            $http.get('http://130.65.159.170/proactiveTests/status').success(function (res) {

                $scope.getGlyphiconForTest = function(testName) {
                    if(testName == 'createserver') return $scope.getGlyphicon(createVMStatus);

                    else if(testName == 'vmstatus') return $scope.getGlyphicon(vmStatusStatus);

                    else if(testName == 'deletevm') return $scope.getGlyphicon(deleteVMStatus);
                }

                $scope.getGlyphicon = function(error) {
                    if(error == 'none') return "glyphicon glyphicon-ok";

                    return "glyphicon glyphicon-remove";
                }

                angular.forEach(res.aggregations.group.buckets, function(value, key) {

                    if(value.key == 'createserver') createVMStatus = value.group_docs.hits.hits[0]._source.error;

                    else if(value.key == 'vmstatus') vmStatusStatus = value.group_docs.hits.hits[0]._source.error;

                    else if (value.key == 'deletevm') deleteVMStatus = value.group_docs.hits.hits[0]._source.error;

                    $scope.getGlyphiconForTest(value.key);
                });

            });
            console.log(++counter);
        };

        $interval(function() {
            console.log("inside Interval");
            $scope.getData();
        }, 65000);
    });
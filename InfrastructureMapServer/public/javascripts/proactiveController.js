/**
 * Created by Sa4w0c9 on 4/25/2016.
 */
angular.module('opsmonitor', [])
    .controller('proactiveController', function ($scope, $http) {
        $http.get('http://130.65.159.170/proactiveTests/status').success(function (res) {
            $scope.getGlyphiconCVM = function () {
                if (res.aggregations.group.buckets[0].group_docs.hits.hits[0]._source.error == 'none') {
                    return "glyphicon glyphicon-ok";
                }
                else {
                    return "glyphicon glyphicon-remove";
                }
            }

            $scope.getGlyphiconBVM = function () {
                if (res.aggregations.group.buckets[2].group_docs.hits.hits[0]._source.error == 'none') {
                    return "glyphicon glyphicon-ok";
                }
                else {
                    return "glyphicon glyphicon-remove";
                }

            }

            $scope.getGlyphiconDVM = function () {
                if (res.aggregations.group.buckets[1].group_docs.hits.hits[0]._source.error == 'none') {
                    return "glyphicon glyphicon-ok";
                }
                else {
                    return "glyphicon glyphicon-remove";
                }
            }
        });
    });
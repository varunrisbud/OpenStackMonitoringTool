/**
 * Created by Sa4w0c9 on 4/25/2016.
 */
angular.module('opsmonitor', [])
    .controller('proactiveController', function ($scope, $http) {
        var res = 'success';
        $scope.getGlyphicon = function (res) {
            if (res == 'success') {
                return "glyphicon glyphicon-remove";
            }
            else {
                return "glyphicon glyphicon-ok";
            }
        }
    });
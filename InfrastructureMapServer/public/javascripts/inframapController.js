/**
 * Created by sameer on 12/14/15.
 */
angular.module('opsmonitor', [])
    .controller('inframapController', function ($scope, $http) {
        $scope.myData = null;
        $http.get('http://130.65.159.170/auth').success(function (res) {
            $scope.myData = res;
            console.log("JS: " + res);
            $scope.type0 = res.services[0].type;
            $scope.type1 = res.services[1].type;
            $scope.type2 = res.services[2].type;
            $scope.type3 = res.services[3].type;

            $scope.ip0 = res.services[0].ipaddr;
            $scope.ip1 = res.services[1].ipaddr;
            $scope.ip2 = res.services[2].ipaddr;
            $scope.ip3 = res.services[3].ipaddr;

            $scope.port0 = res.services[0].port;
            $scope.port1 = res.services[1].port;
            $scope.port2 = res.services[2].port;
            $scope.port3 = res.services[3].port;
        });
        $http.get('http://130.65.159.170/status').success(function (res) {
            $scope.changeColor = function () {
                console.log(res);
                //var JsonObject= JSON.parse(res);
                console.log(res.status.Nova);
                // var Keystone = JsonObject.status.Keystone;
                var style1 = "green";
                var style2 = "red";
                var x = res.status.Nova;
                if (x == "Up")
                    return style1;
                if (x == "Down")
                    return style2;
            }

            $scope.changeKeystoneColor = function () {
                console.log(res);
                //var JsonObject= JSON.parse(res);
                console.log(res.status.Keystone);
                // var Keystone = JsonObject.status.Keystone;
                var style1 = "green";
                var style2 = "red";
                var x = res.status.Keystone;
                if (x == "Up")
                    return style1;
                if (x == "Down")
                    return style2;
            }

            $scope.changeNeutronColor = function () {
                console.log(res);
                //var JsonObject= JSON.parse(res);
                console.log(res.status.Neutron);
                // var Keystone = JonObject.status.Keystone;
                var style1 = "green";
                var style2 = "red";
                var x = res.status.Neutron;
                if (x == "Up")
                    return style1;
                if (x == "Down")
                    return style2;
            }

            $scope.changeGlanceColor = function () {
                console.log(res);
                //var JsonObject= JSON.parse(res);
                console.log(res.status.Glance);
                // var Keystone = JsonObject.status.Keystone;
                var style1 = "green";
                var style2 = "red";
                var x = res.status.Glance;
                if (x == "Up")
                    return style1;
                if (x == "Down")
                    return style2;
            }

        });
    });
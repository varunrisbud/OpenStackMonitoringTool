///**
// * Created by sameer on 4/22/16.
// */
//angular.module('opsmonitor', [])
//    .controller('mapController', function ($scope, $http) {
//        $scope.myData = null;
//        $http.get('http://130.65.159.170/logs/horizon/horizon-access').success(function (res) {
//            console.log(res.hits.hits);
//            var map;
//            function initMap(data) {
////                var xmlhttp = new XMLHttpRequest();
////                var url = "http://localhost:3000";
////                var myArr;
////                xmlhttp.onreadystatechange = function () {
////                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
////                        myArr = JSON.parse(xmlhttp.responseText);
////
////                        var locations = [
////                            [myArr.locations.location[0].latitude, myArr.locations.location[0].longitude, myArr.locations.location[0].id, 'green.png', myArr.locations.location[0].$revenue],
////                            [myArr.locations.location[1].latitude, myArr.locations.location[1].longitude, myArr.locations.location[1].id, 'green.png', myArr.locations.location[1].$revenue],
////                            [myArr.locations.location[2].latitude, myArr.locations.location[2].longitude, myArr.locations.location[2].id, 'green.png', myArr.locations.location[2].$revenue],
////                            [myArr.locations.location[3].latitude, myArr.locations.location[3].longitude, myArr.locations.location[3].id, 'green.png', myArr.locations.location[3].$revenue],
////                            [myArr.locations.location[4].latitude, myArr.locations.location[4].longitude, myArr.locations.location[4].id, 'green.png', myArr.locations.location[4].$revenue],
////                            [myArr.locations.location[5].latitude, myArr.locations.location[5].longitude, null, 'red.png', 'red.png'],
////                            [myArr.locations.location[6].latitude, myArr.locations.location[6].longitude, myArr.locations.location[6].id, 'green.png', myArr.locations.location[6].$revenue],
////                            [myArr.locations.location[7].latitude, myArr.locations.location[7].longitude, myArr.locations.location[7].id, 'green.png', myArr.locations.location[7].$revenue],
////                            [myArr.locations.location[8].latitude, myArr.locations.location[8].longitude, myArr.locations.location[8].id, 'green.png', myArr.locations.location[8].$revenue],
////                            [myArr.locations.location[9].latitude, myArr.locations.location[9].longitude, null, 'red.png', 'red.png'],
////                            [myArr.locations.location[10].latitude, myArr.locations.location[10].longitude, null, 'blue.png', 'blue.png'],
////                            [myArr.locations.location[11].latitude, myArr.locations.location[11].longitude, myArr.locations.location[11].id, 'green.png', myArr.locations.location[0].$revenue],
////                            [myArr.locations.location[12].latitude, myArr.locations.location[12].longitude, null, 'white.png', 'white.png'],
////                            [myArr.locations.location[13].latitude, myArr.locations.location[13].longitude, myArr.locations.location[12].id, 'green.png', myArr.locations.location[0].$revenue],
////                            [myArr.locations.location[14].latitude, myArr.locations.location[14].longitude, myArr.locations.location[13].id, 'green.png', myArr.locations.location[0].$revenue],
////                        ];
////
////                        console.log(locations[0][4]);
////
//                        var myLatLng = {
//                            lat: -73.8057,
//                            lng: 40.905
//                        };
////
//                        var map = new google.maps.Map(document.getElementById('map'), {
//                            zoom: 10,
//                            center: myLatLng
//                        });
////
////                        function getCircle(magnitude) {
////                            if (magnitude == 'blue.png' || magnitude == 'red.png' || magnitude == 'white.png') {
////                                return magnitude;
////                            }
////                            else {
////
////                                var circle = {
////                                    path: google.maps.SymbolPath.CIRCLE,
////                                    fillColor: 'red',
////                                    fillOpacity: .5,
////                                    scale: Math.pow(magnitude, 0.25) / 2,
////                                    strokeColor: 'white',
////                                    strokeWeight: .5
////                                };
////                                return circle;
////                            }
////                        }
////
////
////                        var infowindow = new google.maps.InfoWindow({});
////
////                        map.data.loadGeoJson('MyCo_CompanyLocations.json');
////
////
////                        var marker, i;
////                        for (i = 0; i < locations.length; i++) {
////                            marker = new google.maps.Marker({
////                                position: new google.maps.LatLng(locations[i][0], locations[i][1]),
////                                map: map,
//////                          icon: locations[i][3]
////                                icon: getCircle(locations[i][4])
////                            });
////
////
////                            google.maps.event.addListener(marker, 'click', (function (marker, i) {
////                                return function () {
////                                    infowindow.setContent("Location ID: " + locations[i][2]);
////                                    infowindow.open(map, marker);
////                                }
////                            })(marker, i));
////                        }
////
////                    }
////                };
////                xmlhttp.open("GET", url, true);
////                xmlhttp.send();
//            }
//        });
//    });
/**
 * Created by sameer on 4/9/16.
 */

angular.module('opsmonitor', ['ui.grid', 'ui.grid.edit', 'ui.grid.rowEdit', 'ui.grid.selection', 'ui.bootstrap'])
    .controller('novaController', function ($scope, $http) {

        $http.get('http://130.65.159.170/logs/novascheduler/').success(function (res) {
            $scope.gridOptions.data = res.hits.hits;
        });

        $scope.gridOptions = {
            enableCellEditOnFocus: true,
            enableFiltering: true
        };

        $scope.gridOptions.columnDefs = [
            {name: '_source.message', displayName: 'Message'},
            {name: '_source.@version', displayName: 'Version'},
            {name: '_source.@timestamp', displayName: 'Timestamp'},
            {name: '_source.path', displayName: 'Path'},
            {name: '_source.host', displayName: 'Host'},
            {name: '_source.logdate', displayName: 'Log Date'},
            {name: '_source.logtime', displayName: 'Log Time'},
            {name: '_source.processid', displayName: 'Process ID'},
            {name: '_source.loglevel', displayName: 'Log Level'},
            {name: '_source.name', displayName: 'Name'},
            {name: '_source.requestid[0]', displayName: 'Request ID'}
        ];

        $scope.addData = function () {
            $scope.gridOptions.data.length + 1;
            $scope.gridOptions.data.push({
                "_source.message": "",
                "_source.@version": "",
                "_source.@timestamp": "",
                "_source.path": "",
                "_source.host": "",
                "_source.logdate": "",
                "_source.logtime": "",
                "_source.processid": "",
                "_source.loglevel": "",
                "_source.name": "",
                "_source.requestid[0]": ""
            });
        }
    });
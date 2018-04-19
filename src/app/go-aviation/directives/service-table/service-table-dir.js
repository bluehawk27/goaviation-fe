/**
 * Test results table directive
 */
angular.module('go.aviation.app')

.directive('serviceTable',[

    function serviceTable () {
        'use strict';

        return {
            restrict: 'E',
            controller: 'ServiceTableDirCtrl',
            scope: {
                list: '=',
                headers: '=',
                completed: '=',
                startDate: '=',
                endDate: '='
            },
            templateUrl: 'go-aviation/directives/service-table/service-table.tpl.html',
            replace: false
        };
    }
]);

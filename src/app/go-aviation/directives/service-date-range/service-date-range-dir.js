/**
 * Service Date Range Directive
 */
angular.module('go.aviation.app')

.directive('serviceDateRange',[

    function serviceDateRange () {
        'use strict';

        return {
            restrict: 'E',
            controller: 'ServiceDateRangeDirCtrl',
            scope: {
                start: '=',
                end: '='
            },
            templateUrl: 'go-aviation/directives/service-date-range/service-date-range.tpl.html',
            replace: true
        };
    }
]);

/**
 * Service Date Range Directive Controller
 */
angular.module('go.aviation.app')


.controller('ServiceDateRangeDirCtrl',[
    '$scope',
    '$state',
    '$stateParams',
    'moment',
    function ServiceDateRangeDirCtrl ($scope, $state, $stateParams, moment) {
        'use strict';

        $scope.change_date = function () {

            var next_start = moment($scope.start).format('YYYY-MM-DD'),
                next_end = moment($scope.end).format('YYYY-MM-DD');

            $state.go($state.current.name, {start_date: next_start, end_date: next_end});
        };
    }
]);

/**
 * Alert Directive Controller
 */
angular.module('go.aviation.app')

.controller('GoAviationAlertDirCtrl',[
    '$scope',
    function GoAviationAlertDirCtrl ($scope) {
        'use strict';

        $scope.close_error = function () {
            $scope.error = null;
            $scope.counter = 0;
        };
    }
]);

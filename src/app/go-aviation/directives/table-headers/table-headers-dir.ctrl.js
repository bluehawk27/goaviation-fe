/**
 * Table Headers Directive Controller
 */
angular.module('go.aviation.app')

.controller('TableHeadersDirCtrl',[
    '$scope',
    function TableHeadersDirCtrl ($scope) {
        'use strict';

        $scope.sort_column = function (column) {
            if ($scope.column === column) {
                $scope.invert = !$scope.invert;
            } else {
                $scope.column = column;
            }
        };

    }
]);

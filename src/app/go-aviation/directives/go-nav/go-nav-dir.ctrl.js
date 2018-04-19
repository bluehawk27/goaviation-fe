/**
 * Nav Directive Controller
 */
angular.module('go.aviation.app')

.controller('GoNavDirCtrl',[
    '$rootScope',
    '$scope',

    function GoNavDirCtrl ($rootScope, $scope) {
        'use strict';

        $scope.logout = function () {
            $rootScope.$broadcast('log_out');
        };
    }
]);

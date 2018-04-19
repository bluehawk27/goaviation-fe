/**
 * Navigation directive
 */
angular.module('go.aviation.app')

.directive('goNav',[

    function goNav () {
        'use strict';

        return {
            restrict: 'E',
            controller: 'GoNavDirCtrl',
            templateUrl: 'go-aviation/directives/go-nav/go-nav.tpl.html',
            replace: true
        };
    }
]);

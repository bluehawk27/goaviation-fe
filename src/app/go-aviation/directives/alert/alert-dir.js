/**
 * Alert directive
 */
angular.module('go.aviation.app')

.directive('goAviationAlert',[

    function goAviationAlert () {
        'use strict';

        return {
            restrict: 'A',
            controller: 'GoAviationAlertDirCtrl',
            scope: {
                error: '=',
                counter: '='
            },
            link: function (scope, element) {
                scope.$watch('counter', function () {
                    if (scope.counter > 1) {
                        element.effect('shake');
                    }
                });
            },

            templateUrl: 'go-aviation/directives/alert/alert-dir.tpl.html',
            replace: false
        };
    }
]);

/**
 * Table Headers directive
 */
angular.module('go.aviation.app')

.directive('tableHeaders',[

    function tableHeaders () {
        'use strict';

        return {
            restrict: 'A',
            controller: 'TableHeadersDirCtrl',
            scope: {
                column: '=',
                list: '=',
                invert: '='
            },
            templateUrl: 'go-aviation/directives/table-headers/table-headers.tpl.html',
            replace: false
        };
    }
]);

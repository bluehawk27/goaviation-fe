/**
 * Profile Controller
 */
angular.module('go.aviation.app')

.controller('ProfileCtrl',[
    '$scope',
    '$rootScope',
    '$filter',
    '$uibModal',
    'GoResource',
    function ProfileCtrl ($scope, $rootScope, $filter, $uibModal, GoResource) {
        'use strict';

        $scope.profile = null;
        $scope.aircraft_list = null;

        GoResource.get_resource('aircraft/').then(function (result) {

            $scope.aircraft_list = result;
        });

        GoResource.get_resource('profiles/').then(function (result) {
            $scope.profile = $filter('filter')(result, {user: $rootScope.user.id})[0];
        });


        $scope.aircraft_modal = function (aircraft) {

            $uibModal.open({
                templateUrl: 'go-aviation/profile/aircraft-modal/aircraft-modal.tpl.html',
                controller: 'AircraftModalCtrl',
                resolve: {
                    aircraft: function () {
                        return aircraft;
                    },

                    parentCtrlScope: function () {
                        return $scope;
                    }
                }
            });
        };

    }
]);



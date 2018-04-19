/**
 * Aircraft-modal Controller
 */
angular.module('go.aviation.app')

.controller('AircraftModalCtrl',[
    '$scope',
    '$uibModalInstance',
    'GoResource',
    'aircraft',
    'parentCtrlScope',

    function AircraftModalCtrl ($scope, $uibModalInstance, GoResource, aircraft, parentCtrlScope) {
        'use strict';

        var edit_aircraft = aircraft ? true : false;

        $scope.modal_action = edit_aircraft ? 'Edit Aircraft' : 'Add Aircraft';

        $scope.aircraft_image = null;

        $scope.aircraft = aircraft ||
            {
                id: null,
                tail_number: null,
                aircraft_type: null,
                color: null,
                year: null,
                damage_notes: null,
                images: [],
                reported: false,
                reported_date: null,
                reported_to: null
            };

        $scope.edit = function () {
            $scope.update_aircraft = aircraft;
            $scope.edit_aircraft = true;
        };

        $scope.save_aircraft = function (aircraft) {

            var method = edit_aircraft ? GoResource.update_resource : GoResource.add_resource;

            method('aircraft/', $scope.aircraft).then(function (result) {
                aircraft = result;

                if (!edit_aircraft) {
                    parentCtrlScope.aircraft_list.push(aircraft);
                }

                $scope.close();
            });
        };

        $scope.close = function () {
            $uibModalInstance.dismiss('close');
        };
    }
]);

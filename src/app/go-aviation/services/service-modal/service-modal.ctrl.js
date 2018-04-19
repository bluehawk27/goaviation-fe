/**
 * Service-modal Controller
 */
angular.module('go.aviation.app')

.controller('ServiceModalCtrl',[
    '$scope',
    '$uibModalInstance',
    'GoResource',
    'service',
    'parentCtrlScope',

    function ServiceModalCtrl ($scope, $uibModalInstance, GoResource, service, parentCtrlScope) {
        'use strict';

        var edit_service = service ? true : false;

        $scope.modal_action = edit_service ? 'Edit Service' : 'Add Service';

        $scope.service = service ||
            {
                id: null,
                name: null,
                description: null,
                check_off_list: null
            };


        $scope.edit = function () {
            $scope.update_service = service;
            $scope.edit_service = true;
        };

        $scope.save_service = function (service) {

            var method = edit_service ? GoResource.update_resource : GoResource.add_resource;

            method('services/', service).then(function (result) {
                service = result;

                if (!edit_service) {
                    parentCtrlScope.services.push(service);
                }

                $scope.close();
            });
        };

        $scope.close = function () {
            $uibModalInstance.dismiss('close');
        };
    }
]);

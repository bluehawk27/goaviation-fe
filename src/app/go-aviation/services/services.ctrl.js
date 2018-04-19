/**
 * Admin Controller
 */
angular.module('go.aviation.app')

.controller('ServicesCtrl',[
    '$scope',
    '$filter',
    'GoResource',
    '$uibModal',
    function ServicesCtrl ($scope, $filter, GoResource, $uibModal) {
        'use strict';

        $scope.headers = [
            {
                title: 'Service',
                sort_key: 'name'
            },
            {
                title: 'Service Description',
                sort_key: 'description'
            },
            {
                title: '',
                sort_key: ''
            },
            {
                title: '',
                sort_key: ''
            }
        ];

        $scope.services_filter = '';

        $scope.add_service_error = null;

        GoResource.get_resource('services/').then(function (result) {
            $scope.services = result;
        });

        $scope.delete_service = function (service) {
            var service_index = $scope.services.indexOf(service);

            GoResource.delete_resource('services/', service).then(function () {
                $scope.services.splice(service_index, 1);
            });
        };

        $scope.service_modal = function (service) {

            $uibModal.open({
                templateUrl: 'go-aviation/services/service-modal/service-modal.tpl.html',
                controller: 'ServiceModalCtrl',
                resolve: {
                    service: function () {
                        return service;
                    },

                    parentCtrlScope: function () {
                        return $scope;
                    }
                }
            });
        };
    }
]);
/**
 * Check-off-item-modal Controller
 */
angular.module('go.aviation.app')

.controller('CheckOffItemModalCtrl',[
    '$scope',
    '$uibModalInstance',
    'GoResource',
    'item',
    'parentCtrlScope',

    function CheckOffItemModalCtrl ($scope, $uibModalInstance, GoResource, item, parentCtrlScope) {
        'use strict';

        var edit_item = item ? true : false;

        $scope.modal_action = edit_item ? 'Edit Check Off Item' : 'Add Check Off Item';

        $scope.item = item ||
            {
                id: null,
                name: null,
                items: []
            };

        $scope.edit = function () {
            $scope.update_item = item;
            $scope.edit_item = true;
        };

        $scope.save_item = function () {

            var method = edit_item ? GoResource.update_resource : GoResource.add_resource;

            method('checkoff-item/', $scope.item).then(function (result) {
                $scope.item = result;

                if (!edit_item) {
                    parentCtrlScope.available_items.push(result);
                }

                $scope.close();
            });
        };

        $scope.close = function () {
            $uibModalInstance.dismiss('close');
        };
    }
]);

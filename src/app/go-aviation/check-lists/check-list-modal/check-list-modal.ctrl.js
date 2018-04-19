/**
 * Check-list-modal Controller
 */
angular.module('go.aviation.app')

.controller('CheckListModalCtrl',[
    '$scope',
    '$uibModalInstance',
    '$uibModal',
    'GoResource',
    'list',
    'available_items',
    'parentCtrlScope',

    function CheckListModalCtrl ($scope, $uibModalInstance, $uibModal, GoResource, list, available_items, parentCtrlScope) {
        'use strict';

        var edit_list = list ? true : false;

        $scope.available_items = available_items;

        $scope.modal_action = edit_list ? 'Edit Check List' : 'Add Check List';

        $scope.list = list ||
            {
                id: null,
                name: null,
                items: []
            };

        $scope.item_to_add = null;

        $scope.remove_item = function (index) {

            $scope.list.items.splice(index,1);
        };

        $scope.add_item = function () {

            if ($scope.item_to_add &&
                $scope.list.items.indexOf($scope.item_to_add) < 0) {

                $scope.list.items.push($scope.item_to_add);
                $scope.item_to_add = null;
            }
        };

        $scope.edit = function () {
            $scope.update_list = list;
            $scope.edit_list = true;
        };

        $scope.save_list = function () {

            var method = edit_list ? GoResource.update_resource : GoResource.add_resource;

            method('checkoff-list-template/', $scope.list).then(function (result) {
                $scope.list = result;

                if (!edit_list) {
                    parentCtrlScope.list_list.push(list);
                }

                $scope.close();
            });
        };

        $scope.check_off_item_modal = function (item) {

            $uibModal.open({
                templateUrl: 'go-aviation/check-lists/check-list-modal/check-off-item-modal/check-off-item-modal.tpl.html',
                windowClass: 'check-off-item-modal',
                controller: 'CheckOffItemModalCtrl',
                resolve: {

                    item: function () {
                        return item;
                    },

                    parentCtrlScope: function () {
                        return $scope;
                    }
                }
            });
        };

        $scope.close = function () {
            $uibModalInstance.dismiss('close');
        };
    }
]);

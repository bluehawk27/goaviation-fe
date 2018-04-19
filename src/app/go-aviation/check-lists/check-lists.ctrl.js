/**
 * Admin Controller
 */
angular.module('go.aviation.app')

.controller('CheckListsCtrl',[
    '$scope',
    '$filter',
    'GoResource',
    '$uibModal',
    function CheckListsCtrl ($scope, $filter, GoResource, $uibModal) {
        'use strict';

        var available_items = null;

        GoResource.get_resource('checkoff-item/').then(function (result) {

            available_items = result;

        });

        $scope.headers = [
            {
                title: 'Check List',
                sort_key: 'name'
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

        $scope.lists_filter = '';

        $scope.add_list_error = null;

        GoResource.get_resource('checkoff-list-template/').then(function (result) {
            $scope.lists = result;
        });

        $scope.delete_list = function (list) {
            var list_index = $scope.lists.indexOf(list);

            GoResource.delete_resource('checkoff-list-template/', list).then(function () {
                $scope.lists.splice(list_index, 1);
            });
        };

        $scope.list_modal = function (list) {

            $uibModal.open({
                templateUrl: 'go-aviation/check-lists/check-list-modal/check-list-modal.tpl.html',
                controller: 'CheckListModalCtrl',
                resolve: {
                    list: function () {
                        return list;
                    },

                    available_items: function () {

                        return available_items;
                    },

                    parentCtrlScope: function () {
                        return $scope;
                    }
                }
            });
        };
    }
]);
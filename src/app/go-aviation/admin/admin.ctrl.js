/**
 * Admin Controller
 */
angular.module('go.aviation.app')

.controller('AdminStateCtrl',[
    '$scope',
    '$filter',
    '$uibModal',
    'GoResource',
    function AdminStateCtrl ($scope, $filter, $uibModal, GoResource) {
        'use strict';

        $scope.users_filter = '';

        $scope.new_user = {
            first_name: null,
            last_name: null,
            username: null,
            email: null,
            password: null
        };

        $scope.add_user_error = null;

        GoResource.get_resource('users/').then(function (result) {
            $scope.users = result;
        });

        $scope.promote_user = function (user) {
            user.is_admin = !user.is_admin;
            GoResource.update_resource('users/', user).then(function (result) {
                user = result;
            });
        };

        $scope.delete_user = function (user) {
            var user_index = $scope.users.indexOf(user);

            GoResource.delete_resource('users/', user).then(function () {
                $scope.users.splice(user_index, 1);
            });
        };

        $scope.add_user = function () {
            GoResource.add_resource('users/', $scope.new_user).then(function (result) {
                $scope.new_user.email = null;

                result.full_name = result.first_name && result.last_name ?
                    result.first_name + " " + result.last_name : result.email;

                $scope.users.push(result);
            }, function (error) {

                error = error.data.email[0];

                if (error.indexOf('already exists') > 0) {
                    $scope.add_user_error = error;
                } else {
                    $scope.add_user_error = 'Email is a required field';
                }
            });
        };

        $scope.user_modal = function (user) {
            $uibModal.open({
                templateUrl: 'go-aviation-app/admin/user-modal/user-modal.tpl.html',
                controller: 'UserModalCtrl',
                resolve: {
                    user: function () {
                        return user;
                    }
                }
            });
        };

    }
]);

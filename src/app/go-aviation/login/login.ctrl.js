/**
 * Login Controller
 */
angular.module('go.aviation.app')

.controller('LoginCtrl', [
    '$rootScope',
    '$scope',
    '$http',
    '$state',
    '$stateParams',
    'GoResource',
    function LoginCtrl ($rootScope, $scope, $http, $state, $stateParams, GoResource) {
        'use strict';

        $scope.credentials = {
            username: null,
            password: null
        };

        $scope.failed_logins = 0;

        $scope.login = function () {

            GoResource.add_resource('token-auth/', $scope.credentials).then(function (response) {
                $scope.login_error = null;
                $scope.failed_logins = 0;

                $rootScope.jwt = response.token;
                $rootScope.user = response.user;

                localStorage.setItem('go_aviation_jwt', response.token);
                localStorage.setItem('go_aviation_user', response.user);

                $rootScope.$broadcast('logged_in');

                if (typeof $rootScope.entry_state === 'undefined') {
                    $state.go('schedule');
                } else {
                    $state.go($rootScope.entry_state, $rootScope.entry_params);
                }
            }, function (error) { // jshint ignore:line

                $scope.failed_logins ++;
                $scope.login_error = "The login information you provided is incorrect. Try again?";
            });
        };
    }
]);

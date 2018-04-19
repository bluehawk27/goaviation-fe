'use strict';

var app;

app = angular.module('go.aviation.app.container', [
    'go.aviation.app',
    'ui.router',
    'templates-app'
])

.config([
    '$stateProvider',
    '$locationProvider',
    function ($stateProvider, $locationProvider) {

        $locationProvider.html5Mode(false);

        $stateProvider.state('parent', {
            url: "/",
            templateUrl: 'root.tpl.html'
        });
    }
])

.factory('lodash', ['$window', function ($window) {
    return $window._;
}])

.factory('containerConfig', function () {
    return JSON.parse('<%= containerConfig %>');
})

.controller('go.aviation.app.container.AppCtrl', [
    '$scope',
    '$rootScope',
    '$state',
    'lodash',
    function AppCtrl ($scope /*, $rootScope, $state, _*/) {
        console.log(':: init go.aviation.app.container.AppCtrl');
        $scope.title = 'Go Aviation';
    }
])

;

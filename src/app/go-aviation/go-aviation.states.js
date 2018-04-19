/**
 * go-aviation-app States
 */
angular.module('go.aviation.app')

.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
    "use strict";

    $stateProvider
        .state('login', {
            url: "/login",
            templateUrl: "go-aviation/login/login.tpl.html",
            controller: "LoginCtrl",
            data: {
                jwt_required: false
            }
        })
        .state('past-work', {
            url: '/past-work/?&start_date&end_date',
            templateUrl: 'go-aviation/jobs/past-work.tpl.html',
            controller: 'JobsCtrl',
            data: {
                jwt_required: true
            }
        })
        .state('schedule', {
            url: '/schedule/',
            templateUrl: 'go-aviation/schedule/schedule.tpl.html',
            controller: 'ScheduleCtrl',
            data: {
                jwt_required: true
            }
        })
        .state('future-work', {
            url: '/future-work/?&start_date&end_date',
            templateUrl: 'go-aviation/jobs/future-work.tpl.html',
            controller: 'JobsCtrl',
            data: {
                jwt_required: true
            }
        })
        .state('admin', {
            url: '/admin/',
            templateUrl: 'go-aviation/admin/admin.tpl.html',
            controller: 'AdminStateCtrl',
            data: {
                jwt_required: true,
                admin_required: false
            }
        })
        .state('profile', {
            url: '/profile/',
            templateUrl: 'go-aviation/profile/profile.tpl.html',
            controller: 'ProfileCtrl',
            data: {
                jwt_required: true
            }
        })
        .state('services', {
            url: '/services/',
            templateUrl: 'go-aviation/services/services.tpl.html',
            controller: 'ServicesCtrl',
            data: {
                jwt_required: true
            }
        })
        .state('check-lists', {
            url: '/check-lists/',
            templateUrl: 'go-aviation/check-lists/check-lists.tpl.html',
            controller: 'CheckListsCtrl',
            data: {
                jwt_required: true
            }
        })
        .state("otherwise", {
            url: "*path",
            templateUrl: 'go-aviation/schedule/schedule.tpl.html',
            controller: 'ScheduleCtrl',
            data: {
                jwt_required: true
            }
        });
}])

;

/**
 * Schedule Controller
 */
angular.module('go.aviation.app')

.controller('ScheduleCtrl',[
    '$state',
    '$http',
    '$scope',
    '$filter',
    'moment',
    'GoResource',
    function SchedulesCtrl ($state, $http, $scope, $filter, moment, GoResource) {
        'use strict';

        GoResource.get_resource('aircraft/').then(function (result) {

            $scope.available_aircraft = result;
        });

        GoResource.get_resource('services/').then(function (result) {

            $scope.available_services = result;
        });

        $scope.params = {
            request_start: null,
            request_end: null,
            aircraft: '',
            location: '',
            services: [],
            notes: ''
        };

        $scope.service_to_add = -1;

        $scope.today = moment();

        $scope.remove_service = function (index) {

            $scope.params.services.splice(index,1);
        };

        $scope.add_service = function () {
            if ($scope.service_to_add > -1 &&
                $scope.params.services.indexOf($scope.service_to_add) < 0) {

                $scope.params.services.push($scope.service_to_add);
                $scope.service_to_add = -1;
            }
        };

        $scope.post_service_request = function () {

            var params = $scope.params,
                valid = true,
                val = null;

            Object.keys(params).forEach(function (key) {

                val = params[key];

                if (key !== 'notes' && (val === null || val.length <= 0)) {
                    console.log(key + ' is required');
                    valid = false;
                }

            });

            if (valid === true) {

                GoResource.add_resource('job/', params);
            }

        };
    }
]);

/**
 * future-work Controller
 */
angular.module('go.aviation.app')

.controller('JobsCtrl',[
    '$scope',
    '$uibModal',
    '$state',
    '$stateParams',
    'GoResource',
    'moment',
    function JobsCtrl ($scope, $uibModal, $state, $stateParams, GoResource, moment) {
        'use strict';

        $scope.start_date = moment($stateParams.start_date, 'YYYY-MM-DD').toDate();
        $scope.end_date = moment($stateParams.end_date, 'YYYY-MM-DD').toDate();

        function _get_jobs () {
            var start_date = moment($scope.start_date).format('YYYY-MM-DD'),
                end_date = moment($scope.end_date).format('YYYY-MM-DD'),
                path = 'job/?';

            if (start_date !== 'Invalid date') {
                path = path + 'start_date=' + start_date + '&';
            }

            if (end_date !== 'Invalid date') {
                path = path + 'end_date=' + end_date;
            }


            GoResource.get_resource(path).then(function (result) {

                $scope.jobs = result;
            });
        }

        $scope.headers = [
            {
                title: 'Date',
                sort_key: $state.current.name === 'past-work' ? 'service_end' : 'service_start'
            },
            {
                title: 'Aircraft',
                sort_key: 'aircraft'
            },
            {
                title: 'Tail Number',
                sort_key: 'tail_number'
            },
            {
                title: 'Services',
                sort_key: 'services'
            },
            {
                title: 'Images',
                sort_key: 'images'
            },
            {
                title: 'Est. Time To Complete',
                sort_key: 'service_window'
            },
            {
                title: 'Location',
                sort_key: 'location'
            }
        ];

        $scope.$watch($scope.start_date, _get_jobs());

    }
]);

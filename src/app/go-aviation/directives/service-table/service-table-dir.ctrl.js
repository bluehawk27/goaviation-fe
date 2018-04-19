/**
 * Test Results Table Directive Controller
 */
angular.module('go.aviation.app')

.controller('ServiceTableDirCtrl',[
    '$scope',
    '$uibModal',
    'GoResource',
    function ServiceTableDirCtrl ($scope, $uibModal, GoResource) {
        'use strict';

        $scope.column = 'date';
        $scope.reverse_column = false;

        $scope.service_modal = function (job) {


            if (job.job_checkoff_list.length === 0 || !job.job_checkoff_list.length) {

                var params = {
                    job: job.id,
                    checkoff_json: null
                };

                job.services.forEach(function (service) {
                    params.checkoff_json = JSON.stringify(service.checkoff_template);
                    GoResource.add_resource('checkoff-list-instance/', params).then(function (result) {

                        job.job_checkoff_list.push(result);
                    });
                });
            }

            $uibModal.open({
                templateUrl: 'go-aviation/jobs/job-services-modal/job-services-modal.tpl.html',
                controller: 'JobServicesModalCtrl',
                resolve: {
                    job: function () {
                        return job;
                    }
                }
            });
        };

        $scope.images_modal = function (job) {

            $uibModal.open({
                templateUrl: 'go-aviation/jobs/job-images-modal/job-images-modal.tpl.html',
                controller: 'JobImagesModalCtrl',
                resolve: {
                    job: function () {
                        return job;
                    }
                }
            });
        };

        $scope.job_duration = function (timeToComplete) {

            var milliseconds = parseInt(timeToComplete,10) * 1000 * 0.5,
                seconds = Math.floor(milliseconds / 1000),
                days = Math.floor(seconds / 86400),
                hours = Math.floor(seconds % 86400 / 3600),
                minutes = Math.floor(seconds % 86400 % 3600 / 60),
                timeString = '';

            if (days > 0) {
                timeString += days > 1 ? days + " days " : days + " day ";
            }

            if (hours > 0) {
                timeString += hours > 1 ? hours + " hours " : hours + " hour ";
            }

            if (minutes > 0) {
                timeString += minutes > 1 ? minutes + " minutes " : minutes + " minute ";
            }

            return timeString;
        };
    }
]);

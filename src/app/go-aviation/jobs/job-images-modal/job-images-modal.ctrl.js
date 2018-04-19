/**
 * List-modal Controller
 */
angular.module('go.aviation.app')

.controller('JobImagesModalCtrl',[
    '$scope',
    '$uibModalInstance',
    'job',
    function JobImagesModalCtrl ($scope, $uibModalInstance, job) {
        'use strict';

        $scope.job = job;

        $scope.close = function () {
            $uibModalInstance.dismiss('close');
        };
    }
]);

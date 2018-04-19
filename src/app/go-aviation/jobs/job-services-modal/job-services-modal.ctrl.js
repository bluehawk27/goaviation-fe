/**
 * List-modal Controller
 */
angular.module('go.aviation.app')

.controller('JobServicesModalCtrl',[
    '$scope',
    '$uibModalInstance',
    '$filter',
    'job',
    'GoResource',
    function JobServicesModalCtrl ($scope, $uibModalInstance, $filter, job, GoResource) {
        'use strict';

        $scope.checkoff = [];
        $scope.visible_service = null;

        job.job_checkoff_list.forEach(function (item) {

            var checkoff_json = JSON.parse(item.checkoff_json);

            if (!checkoff_json.instance_id || !checkoff_json.job_id) {
                checkoff_json.instance_id = item.id;
                checkoff_json.job_id = item.job.id;
            }

            $scope.checkoff.push(checkoff_json);

        });

        $scope.update_checkoff_list = function (checkoff_list) {
            var params = {
                    id: checkoff_list.instance_id,
                    job: checkoff_list.job_id,
                    checkoff_json: JSON.stringify(checkoff_list)
                };

            GoResource.update_resource("checkoff-list-instance/", params).then(function (result) {
                var service = $filter('filter')(job.job_checkoff_list, {id: result.id})[0],
                    index = job.job_checkoff_list.indexOf(service);

                job.job_checkoff_list[index] = result;
            });
        };

        $scope.set_service = function (service_id) {

            $scope.visible_service = $scope.visible_service === service_id ? null : service_id;
        };

        $scope.close = function () {
            $uibModalInstance.dismiss('close');
        };
    }
]);

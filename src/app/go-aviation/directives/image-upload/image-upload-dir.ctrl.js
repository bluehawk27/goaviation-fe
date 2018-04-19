/**
 * Image Upload Directive Controller
 */
angular.module('go.aviation.app')

.controller('ImageUploadDirCtrl',[
    '$scope',
    '$filter',
    'GoResource',

    function ImageUploadDirCtrl ($scope, $filter, GoResource) {
        'use strict';

        $scope.upload_image = function () {

            var formData = new FormData();

            formData.append($scope.parentType, $scope.parentResource.id);
            formData.append($scope.imageName, document.getElementById($scope.imageId).files[0]);


            GoResource.add_image_resource($scope.resourcePath, formData).then(function (result) {
                    $scope.parentResource[$scope.arrayName].push(result);
                }
            );
        };

        $scope.remove_image = function (image) {

            $scope.parentResource[$scope.arrayName] = $filter('filter')($scope.parentResource[$scope.arrayName], {id: !image.id});


            GoResource.update_resource($scope.parentPath, $scope.parentResource);
            GoResource.delete_resource($scope.resourcePath, image);
        };
    }
]);

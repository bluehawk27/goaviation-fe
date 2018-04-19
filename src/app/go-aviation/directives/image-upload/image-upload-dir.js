/**
 * Image Upload directive
 */
angular.module('go.aviation.app')

.directive('imageUpload',[

    function imageUpload () {
        'use strict';

        return {
            restrict: 'E',
            controller: 'ImageUploadDirCtrl',
            templateUrl: 'go-aviation/directives/image-upload/image-upload.tpl.html',
            replace: true,
            scope: {
                resourcePath: '=',
                parentType: '=',
                imageName: '=',
                parentPath: '=',
                parentResource: '=',
                arrayName: '=',
                imageType: '=',
                imageId: '='
            }
        };
    }
]);

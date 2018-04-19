/**
 * Resource
 */
angular.module('go.aviation.app')

.service('GoResource', [
    '$http',
    '$rootScope',
    'api_url',
    function Resource ($http, $rootScope, api_url) {
        'use strict';

        function _success (path, response) {

            response = response.data;

            if (path === 'users/' || path === 'profiles/') {

                var user = null;

                for (var i = 0; i < response.length; i++) {
                    user = response[i];
                    user.full_name = user.first_name && user.last_name ?
                        user.first_name + " " + user.last_name : user.email;
                }
            }

            return response;
        }

        function _error (error) {

            if (error.status === 403) {
                $rootScope.$broadcast('log_out');
            }

            return error;
        }

        this.get_resource = function (path) {

            var request = {
                method: 'GET',
                dataType: 'json',
                url: api_url + path,
                crossDomain: true
            };

            if (path === 'token-auth/') {
                request.headers = {Authorization: undefined};
            }

            return $http(request).then(
                _success.bind(null, path),
                _error
            );
        };

        this.add_resource = function (path, resource) {

            return $http({
                method: 'POST',
                url: api_url + path,
                data: resource,
                crossDomain: true
            }).then(
                _success.bind(null, path),
                _error
            );
        };

        this.add_image_resource = function (path, resource) {

            return $http({
                method: 'POST',
                url: api_url + path,
                data: resource,
                allowedTypes: "jpg, jpeg, png, gif",
                multiple: true,
                processData : false,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': undefined
                },
                crossDomain: true
            }).then(
                _success.bind(null, path),
                _error
            );
        };

        this.update_resource = function (path, resource) {

            return $http({
                method: 'PATCH',
                url: api_url + path + resource.id + '/',
                crossDomain: true,
                data: resource

            }).then(
                _success.bind(null, path),
                _error
            );
        };

        this.delete_resource = function (path, resource) {
            return $http({
                method: 'DELETE',
                url: api_url + path + resource.id + '/',
                crossDomain: true
            }).then(
                _success.bind(null, path),
                _error
            );
        };
    }
]);

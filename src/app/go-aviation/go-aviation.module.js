/**
 * Module go-aviation
 */
angular.module('go.aviation.app', [
    'ui.router',
    'ui.bootstrap',
    'ui.sortable',
    'highcharts-ng',
    'ui.bootstrap.datetimepicker'
])
.constant('moment', (typeof global !== 'undefined' ? global : this).moment)
.constant('api_url', 'http://localhost:8000/api/')
.run(function ($http, $rootScope, $state) {
        "use strict";

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
            var jwt_required = toState.data.jwt_required,
                admin_required = toState.data.admin_required;

            $rootScope.user = $rootScope.user || localStorage.getItem('go_aviation_jwt');

            if (admin_required && !$rootScope.user.is_admin && toState.name === 'admin') {
                $state.go('schedule');
            }

            if (jwt_required && !$rootScope.jwt) {

                if (localStorage.getItem('go_aviation_jwt')) {
                    $rootScope.jwt = localStorage.getItem('go_aviation_jwt');
                    $rootScope.$broadcast('logged_in');
                } else {
                    event.preventDefault();
                    $rootScope.entry_params = toParams;
                    $rootScope.entry_state = toState.name === 'otherwise' ? 'schedule' : toState.name;
                    $state.go('login');
                }
            }
        });

        $rootScope.$on('logged_in', function () {
            $http.defaults.headers.common['Authorization'] = 'JWT ' + $rootScope.jwt;
        });

        $rootScope.$on('log_out', function () {
            localStorage.removeItem('go_aviation_jwt');
            localStorage.removeItem('go_aviation_user');
            $rootScope.jwt = localStorage.getItem('go_aviation_jwt');
            $rootScope.user = localStorage.getItem('go_aviation_user');
            $state.go('login');
        });
    });

Highcharts.setOptions({ // jshint ignore:line
    lang: {
        thousandsSep: ','
    }
});

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('root.tpl.html',
    '<go-nav></go-nav>\n' +
    '<div class="go-aviation-app-container-root">\n' +
    '    <div class="hero" tabindex="-1">\n' +
    '        <div class="container-fluid">\n' +
    '            <h1>{{title}} - root.tpl.html</h1>\n' +
    '            <p>Put whatever container specific stuff you want in here. Go hog wild, fiddle with your code -- nothing in container.js, container.less, or root.tpl.html will be included when this module is included in other applications.</p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="container-fluid">\n' +
    '        <div class="col-md-12">\n' +
    '            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet quis orci ut volutpat. Integer facilisis, velit id fermentum ornare, turpis purus fermentum sapien, nec pellentesque dui ipsum vitae urna. Sed finibus, neque vulputate facilisis maximus, eros dolor tristique orci, nec accumsan lorem tortor et massa. Integer porttitor nulla nisi, id finibus sem porta vitae. Morbi in leo nec diam efficitur faucibus et et lectus. Pellentesque pulvinar vel sapien eget viverra. Sed et justo est. Praesent egestas augue leo. Aenean blandit non leo nec tristique.</p>\n' +
    '            <p>Duis auctor ex eget erat scelerisque efficitur. Aliquam quis pellentesque nisl. Cras sit amet vehicula velit. Donec pulvinar tempus felis in cursus. Sed dapibus sem in neque feugiat, vel consequat ante semper. Morbi commodo libero ipsum, eget pretium risus finibus ac. Quisque ac sagittis turpis.</p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('go-aviation/go-aviation.tpl.html',
    '<div>\n' +
    '	<div ui-view></div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('go-aviation/admin/admin.tpl.html',
    '<go-nav></go-nav>\n' +
    '<div class="container-fluid">\n' +
    '    <h3  class="page-header">User Admin</h3>\n' +
    '    <form>\n' +
    '        <div class="row">\n' +
    '            <div class="col-sm-3">\n' +
    '                <h4>Add User</h4>\n' +
    '                <p class="input-group">\n' +
    '                    <input class="form-control" placeholder="First Name" ng-model="new_user.first_name">\n' +
    '                    <input class="form-control" placeholder="Last Name" ng-model="new_user.last_name">\n' +
    '                    <input class="form-control" placeholder="Username" ng-model="new_user.username">\n' +
    '                    <input type="email" class="form-control" placeholder="Email address" ng-model="new_user.email">\n' +
    '                    <input class="form-control" placeholder="Password" ng-model="new_user.password">\n' +
    '                </p>\n' +
    '                <p><button class="btn btn-primary" ng-click="add_user()">Add User</button></p>\n' +
    '                <div go-aviation-alert error="add_user_error" counter="0"></div>\n' +
    '            </div>\n' +
    '            <div class="col-sm-9">\n' +
    '\n' +
    '                <div class="row">\n' +
    '                    <div class="col-sm-6">\n' +
    '                        <h4>Users</h4>\n' +
    '                    </div>\n' +
    '                    <div class="col-sm-6 text-right">\n' +
    '                        <p class="input-group">\n' +
    '                            <span class="input-group-addon"><span class="fa fa-filter"></span></span>\n' +
    '                            <input type="text" class="form-control" placeholder="User name or email" ng-model="users_filter">\n' +
    '                        </p>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <table class="table table-striped table-hover">\n' +
    '                    <thead>\n' +
    '                        <tr>\n' +
    '                            <th>Name</th>\n' +
    '                            <th>Email</th>\n' +
    '                            <th>&nbsp;</th>\n' +
    '                            <th>&nbsp;</th>\n' +
    '                        </tr>\n' +
    '                    </thead>\n' +
    '                    <tbody>\n' +
    '                        <tr ng-repeat=\'user in users | filter:users_filter\'>\n' +
    '                            <td>{{user.full_name}} <small class="text-uppercase text-muted" ng-show="user.is_admin">&nbsp; Admin</small></td>\n' +
    '                            <td>{{user.email}}</td>\n' +
    '                            <td>\n' +
    '                                <a ng-click="promote_user(user)" class="action">\n' +
    '                                    <span class="fa fa-1" ng-class="user.is_admin ? \'fa-arrow-down\' : \'fa-arrow-up\'"></span>\n' +
    '                                     {{user.is_admin ? \'Demote\' : \'Promote\'}}\n' +
    '                                </a>\n' +
    '                            </td>\n' +
    '                            <td><a class="text-danger action" ng-click="delete_user(user)"><span class="fa fa-trash-o"></span> Delete</a></td>\n' +
    '                        </tr>\n' +
    '                    </tbody>\n' +
    '                </table>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </form>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('go-aviation/check-lists/check-lists.tpl.html',
    '<go-nav></go-nav>\n' +
    '<div class="container-fluid">\n' +
    '    <h3 class="page-header">Check Lists</h3>\n' +
    '    <div class="row">\n' +
    '        <button class="btn btn-primary" ng-click="list_modal(null)">Add Check List</button>\n' +
    '    </div>\n' +
    '    <div class="row">\n' +
    '        <table class="table table-striped table-hover needs-verticle-alignment">\n' +
    '        <thead table-headers column="column" list="headers" invert="reverse_column">\n' +
    '        </thead table-headers>\n' +
    '        <tbody>\n' +
    '            <tr ng-repeat=\'list in lists | orderBy:column:reverse_column\' id=\'lists-{{list.id}}\' class="go-tr">\n' +
    '                <td class="col-md-3">{{list.name}}</td>\n' +
    '\n' +
    '                <td class="col-md-2">\n' +
    '                    <button class="btn btn-sm btn-primary" ng-click="list_modal(list)">Edit Check List</button>\n' +
    '                </td>\n' +
    '                <td><a class="text-danger action" ng-click="delete_list(list)"><span class="fa fa-trash-o"></span> Delete</a></td>\n' +
    '            </tr>\n' +
    '        </tbody>\n' +
    '    </table>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('go-aviation/jobs/future-work.tpl.html',
    '<go-nav></go-nav>\n' +
    '<div class="container-fluid">\n' +
    '	<h3 class="page-header">Scheduled Services</h3>\n' +
    '	<div class="row">\n' +
    '		<service-table list="jobs.results" headers="headers" completed="false" start-date="start_date" end-date="end_date"></service-table>\n' +
    '	</div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('go-aviation/jobs/past-work.tpl.html',
    '<go-nav></go-nav>\n' +
    '<div class="container-fluid">\n' +
    '    <h3 class="page-header text-center">Work Completed</h3>\n' +
    '    <div class="row">\n' +
    '        <service-table list="jobs.results" headers="headers" completed="true"></service-table>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('go-aviation/login/login.tpl.html',
    '<div class="container-fluid">\n' +
    '    <div class="row" >\n' +
    '        <div class="col-md-12 col-md-offset-4">\n' +
    '            <div go-aviation-alert error="login_error" counter="failed_logins"></div>\n' +
    '            <form>\n' +
    '                <h3>Go Aviation</h3>\n' +
    '                <p class="input-group">\n' +
    '                    <input ng-model="credentials.username" id="inputUsername" class="form-control" placeholder="Email address" required autofocus>\n' +
    '                </p>\n' +
    '                <p class="input-group">\n' +
    '                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required ng-model="credentials.password" ng-model-options="{updateOn: \'keyup\'}">\n' +
    '                </p>\n' +
    '                <p><button ng-click="login()" class="btn btn-primary" type="submit">Sign in</button></p>\n' +
    '            </form>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div> <!-- /container -->\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('go-aviation/profile/profile.tpl.html',
    '<go-nav></go-nav>\n' +
    '<div class="container-fluid">\n' +
    '    <h3 class="page-header text-center">Profile</h3>\n' +
    '    <div class="row">\n' +
    '        <div class="col-sm-8 col-sm-offset-2">\n' +
    '            <div class="service-form-header"></div>\n' +
    '            <div class="well service-form">\n' +
    '                <div class="row">\n' +
    '                    <form class="form-horizontal">\n' +
    '                        <div class="form-group col-sm-10 col-sm-offset-1">\n' +
    '                            <label class="col-sm-4 control-label" for="companyName">Company Name</label>\n' +
    '                            <div class="col-sm-8">\n' +
    '                                <input class="form-control" id="companyName" ng-model="profile.company_name"></input>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '\n' +
    '                        <div class="form-group col-sm-10 col-sm-offset-1">\n' +
    '                            <label class="col-sm-4 control-label" for="companyAddress">Company Address</label>\n' +
    '                            <div class="col-sm-8">\n' +
    '                                <input class="form-control" id="companyAddress" ng-model="profile.company_address"></input>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '\n' +
    '                        <div class="form-group col-sm-10 col-sm-offset-1">\n' +
    '                            <label class="col-sm-4 control-label" for="companyPhone">Company Phone</label>\n' +
    '                            <div class="col-sm-8">\n' +
    '                                <input class="form-control" id="companyphone" ng-model="profile.company_phone"></input>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '\n' +
    '                        <div class="form-group col-sm-10 col-sm-offset-1">\n' +
    '                            <label class="col-sm-4 control-label" for="email">Email</label>\n' +
    '                            <div class="col-sm-8">\n' +
    '                                <input class="form-control" id="email" ng-model="profile.email"></input>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '\n' +
    '                        <div class="form-group col-sm-10 col-sm-offset-1">\n' +
    '                            <label class="col-sm-4 control-label" for="opsContactName">Ops Contact Name</label>\n' +
    '                            <div class="col-sm-8">\n' +
    '                                <input class="form-control" id="opsContactName" ng-model="profile.ops_contact_name"></input>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '\n' +
    '                        <div class="form-group col-sm-10 col-sm-offset-1">\n' +
    '                            <label class="col-sm-4 control-label" for="opsContactName">Ops Contact Number</label>\n' +
    '                            <div class="col-sm-8">\n' +
    '                                <input class="form-control" id="opsContactNumber" ng-model="profile.ops_contact_number"></input>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '\n' +
    '                        <div class="form-group col-sm-10 col-sm-offset-1">\n' +
    '                            <label class="col-sm-4 control-label" for="opsContactEmail">Ops Contact Email</label>\n' +
    '                            <div class="col-sm-8">\n' +
    '                                <input class="form-control" id="opsContactEmail" ng-model="profile.ops_contact_email"></input>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '\n' +
    '                        <div class="form-group col-sm-10 col-sm-offset-1">\n' +
    '                            <label class="col-sm-4 control-label" for="emergencyContactName">Emergency Contact Name</label>\n' +
    '                            <div class="col-sm-8">\n' +
    '                                <input class="form-control" id="emergencyContactName" ng-model="profile.emergency_contact_name"></input>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '\n' +
    '                        <div class="form-group col-sm-10 col-sm-offset-1">\n' +
    '                            <label class="col-sm-4 control-label" for="emergencyContactName">Emergency Contact Number</label>\n' +
    '                            <div class="col-sm-8">\n' +
    '                                <input class="form-control" id="emergencyContactNumber" ng-model="profile.emergency_contact_number"></input>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '\n' +
    '                        <div class="form-group col-sm-10 col-sm-offset-1">\n' +
    '                            <label class="col-sm-4 control-label" for="emergencyContactEmail">Emergency Contact Email</label>\n' +
    '                            <div class="col-sm-8">\n' +
    '                                <input class="form-control" id="emergencyContactEmail" ng-model="profile.emergency_contact_email"></input>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '\n' +
    '                        <div class="form-group col-sm-10 col-sm-offset-1">\n' +
    '                            <label class="col-sm-4 control-label">Aircraft</label>\n' +
    '                            <ul class="form-group col-sm-8 col-sm-offset-2 unstyled-list" >\n' +
    '                                <li class="col-sm-12" ng-repeat="aircraft in aircraft_list">\n' +
    '                                    <div class="col-sm-12">\n' +
    '                                        <a class="form-control" ng-click=aircraft_modal(aircraft)>{{aircraft.aircraft_type}} {{aircraft.tail_number}}</a>\n' +
    '                                    </div>\n' +
    '                                </li>\n' +
    '                                <li class="col-sm-12">\n' +
    '                                    <div class="col-sm-12">\n' +
    '                                        <button class="btn btn-primary btn-add-aircraft col-sm-12" ng-click="aircraft_modal(null)">\n' +
    '                                            Add Aircraft\n' +
    '                                        </button>\n' +
    '                                    </div>\n' +
    '                                </li>\n' +
    '                            </ul>\n' +
    '                        </div>\n' +
    '\n' +
    '\n' +
    '                        <div class="form-group">\n' +
    '                            <div class="col-sm-3 pull-right">\n' +
    '                                <button class="go-btn pull-right" ng-click="update_profile()"></button>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </form>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('go-aviation/schedule/schedule.tpl.html',
    '<go-nav></go-nav>\n' +
    '<div class="container-fluid">\n' +
    '	<h3 class="page-header">Aircraft Service Request</h3>\n' +
    '	<div class="row">\n' +
    '        <div class="col-sm-8 col-sm-offset-2">\n' +
    '            <div class="service-form-header"></div>\n' +
    '            <div class="well service-form">\n' +
    '                <div class="row">\n' +
    '                    <form class="form-horizontal">\n' +
    '\n' +
    '                        <div class="form-group col-sm-10 col-sm-offset-1">\n' +
    '                            <label class="col-sm-4 control-label" for="startDate">Start Date</label>\n' +
    '                            <div class="col-sm-8 schedule-date">\n' +
    '                                <datetimepicker id="startDate" ng-model="params.request_start" date-format="dd-MM-yyyy HH:mm a">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group col-sm-10 col-sm-offset-1">\n' +
    '                            <label class="col-sm-4 control-label" for="endDate">End Date</label>\n' +
    '                            <div class="col-sm-8 schedule-date">\n' +
    '                                <datetimepicker class="" id="endDate" ng-model="params.request_end" date-format="dd-MM-yyyy HH:mm a">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '\n' +
    '                        <div class="form-group col-sm-10 col-sm-offset-1">\n' +
    '                            <label class="col-sm-4 control-label" for="aircraftType">Tail</label>\n' +
    '                            <div class="col-sm-8">\n' +
    '                                <select class="form-control" id="aircraftType" ng-model="params.aircraft" ng-options="aircraft.id as aircraft.tail_number for aircraft in available_aircraft"></select>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '\n' +
    '                        <div class="form-group col-sm-10 col-sm-offset-1">\n' +
    '                            <label class="col-sm-4 control-label" for="aircraftLocation">Aircraft Location</label>\n' +
    '                            <div class="col-sm-8">\n' +
    '                                <input class="form-control" id="aircraftLocation" ng-model="params.location">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '\n' +
    '                        <div class="form-group col-sm-10 col-sm-offset-1" ng-repeat="service in params.services">\n' +
    '                            <label class="col-sm-4 control-label">Service Requested</label>\n' +
    '                            <div class="col-sm-8">\n' +
    '                                <div class="col-sm-11">\n' +
    '                                    <select class="form-control" ng-model="service" ng-options="option.id as option.name for option in available_services"></select>\n' +
    '                                </div>\n' +
    '                                <button class="btn btn-primary col-sm-1" ng-click="remove_service($index)">x</button>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '\n' +
    '                        <div class="form-group col-sm-10 col-sm-offset-1">\n' +
    '                            <label class="col-sm-4 control-label">Service Requested</label>\n' +
    '                            <div class="col-sm-8">\n' +
    '                                <select class="form-control"  ng-model="service_to_add" ng-options="option.id as option.name for option in available_services" ng-change="add_service()"></select>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '\n' +
    '                        <div class="form-group col-sm-10 col-sm-offset-1">\n' +
    '                            <label class="col-sm-4 control-label" for="notes">Special Service Notes/Requests</label>\n' +
    '                            <div class="col-sm-8">\n' +
    '                                <textarea class="form-control" id="notes" ng-model="params.notes"></textarea>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '\n' +
    '                        <div class="form-group">\n' +
    '                            <div class="col-sm-3 pull-right">\n' +
    '                                <button class="go-btn pull-right" ng-click="post_service_request()"></button>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </form>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '	</div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('go-aviation/services/services.tpl.html',
    '<go-nav></go-nav>\n' +
    '<div class="container-fluid">\n' +
    '    <h3 class="page-header">Services</h3>\n' +
    '    <div class="row">\n' +
    '        <button class="btn btn-primary" ng-click="service_modal(null)">Add Service</button>\n' +
    '    </div>\n' +
    '    <div class="row">\n' +
    '        <table class="table table-striped table-hover needs-verticle-alignment">\n' +
    '        <thead table-headers column="column" list="headers" invert="reverse_column">\n' +
    '        </thead table-headers>\n' +
    '        <tbody>\n' +
    '            <tr ng-repeat=\'service in services | orderBy:column:reverse_column\' id=\'services-{{service.id}}\' class="go-tr">\n' +
    '                <td class="col-md-3">{{service.name}}</td>\n' +
    '                <td class="col-md-3">\n' +
    '                    <div>\n' +
    '                        {{service.description}}\n' +
    '                    </div>\n' +
    '                </td>\n' +
    '\n' +
    '                <td class="col-md-2">\n' +
    '                    <button class="btn btn-sm btn-primary" ng-click="service_modal(service)">Edit Service</button>\n' +
    '                </td>\n' +
    '                <td><a class="text-danger action" ng-click="delete_service(service)"><span class="fa fa-trash-o"></span> Delete</a></td>\n' +
    '            </tr>\n' +
    '        </tbody>\n' +
    '    </table>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('go-aviation/check-lists/check-list-modal/check-list-modal.tpl.html',
    '<div class="modal-header">\n' +
    '    <h4 class="modal-title" id="checkListModalLabel">\n' +
    '        {{modal_action}}\n' +
    '    </h4>\n' +
    '\n' +
    '</div>\n' +
    '\n' +
    '<div class="modal-body">\n' +
    '    <form class="form-horizontal">\n' +
    '\n' +
    '        <div class="form-group col-sm-10 col-sm-offset-1">\n' +
    '            <label class="col-sm-4 control-label" for="listName">Check List Name</label>\n' +
    '            <div class="col-sm-8">\n' +
    '                <input class="form-control" id="listName" ng-model="list.name">\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '        <div class="col-sm-8 col-sm-offset-4">\n' +
    '            <div class="col-sm-12" ng-repeat="list_item in list.items | filter:item.id:id">\n' +
    '                <button class="btn btn-primary col-sm-2" ng-click="remove_item($index)">x</button> {{list_item.name}}\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '        <div class="form-group col-sm-10 col-sm-offset-1">\n' +
    '            <label class="col-sm-4 control-label">Check Off Item</label>\n' +
    '            <div class="col-sm-8">\n' +
    '                <select class="form-control"  ng-model="item_to_add" ng-options="option as option.name for option in available_items" ng-change="add_item()"></select>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="form-group">\n' +
    '            <div class="col-sm-3 pull-right">\n' +
    '                <button class="go-btn" ng-click="check_off_item_modal()">Add Check Off Item</button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="form-group">\n' +
    '            <div class="col-sm-3 pull-right">\n' +
    '                <button class="go-btn pull-right" ng-click="save_list()">Save</button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </form>\n' +
    '</div>\n' +
    '<div class="modal-footer">\n' +
    '    <button type="button" class="btn btn-primary" ng-click="close()">Close</button>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('go-aviation/directives/alert/alert-dir.tpl.html',
    '<div ng-if="error" class="alert alert-danger" role="alert">\n' +
    '	<button type="button" ng-click="close_error()" class="close" aria-label="Close"><span>&times;</span></button>\n' +
    '	{{error}}\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('go-aviation/directives/go-nav/go-nav.tpl.html',
    '<nav class="navbar navbar-default">\n' +
    '    <div class="container-fluid">\n' +
    '        <div class="navbar-header">\n' +
    '            <a class="navbar-brand brand-icon" ui-sref="schedule"></a>\n' +
    '        </div>\n' +
    '        <div id="navbar" class="pull-right">\n' +
    '            <ul class="nav navbar-nav navbar-right nav-options">\n' +
    '                <li><a ui-sref="schedule" title="Schedule">Schedule</a></li>\n' +
    '                <li><a ui-sref="past-work" title="Past Work">See Past Work</a></li>\n' +
    '                <li><a ui-sref="future-work" title="Scheduled Work">Scheduled Work</a></li>\n' +
    '                <li ng-if="!$root.user.is_admin"><a ui-sref="admin" title="Admin">Admin</a></li>\n' +
    '                <li ng-if="!$root.user.is_admin"><a ui-sref="services" title="Manage Services">Manage Services</a></li>\n' +
    '                <li ng-if="!$root.user.is_admin"><a ui-sref="check-lists" title="Manage Check Lists">Manage Check Lists</a></li>\n' +
    '                <li><a ui-sref="profile" title="Profile">Profile</a></li>\n' +
    '                <li><a ng-click="logout()" title="Log out" class="log-out">Log out</a></li>\n' +
    '            </ul>\n' +
    '            <div class="navbar-right left-triangle hidden-md hidden-sm hidden-xs"></div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</nav>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('go-aviation/directives/image-upload/image-upload.tpl.html',
    '<form>\n' +
    '    <div class="col-sm-12">\n' +
    '        <div class="col-sm-3 image-container form-group" ng-repeat="image in parentResource[arrayName]">\n' +
    '            <button class="image-delete" ng-click="remove_image(image)">X</button>\n' +
    '            <img class="col-sm-12" src="{{image[imageType]}}">\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '        <input type="file" name="img" id="{{imageId}}" multiple>\n' +
    '        <button class="pull-right" ng-click="upload_image()">Upload Image</button>\n' +
    '    </div>\n' +
    '</form>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('go-aviation/directives/service-date-range/service-date-range.tpl.html',
    '<form class="form-horizontal col-sm-6 col-sm-offset-3">\n' +
    '    <div class="form-group">\n' +
    '        <label class="col-sm-3 control-label" for="startDate">Start Date</label>\n' +
    '        <div class="col-sm-8">\n' +
    '            <input type="date" class="form-control" id="startDate" ng-model="start" ng-change="change_date()">\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '        <label class="col-sm-3 control-label" for="endDate">End Date</label>\n' +
    '        <div class="col-sm-8">\n' +
    '            <input type="date" class="form-control" id="endDate" ng-model="end" ng-change="change_date()">\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</form>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('go-aviation/directives/service-table/service-table.tpl.html',
    '<div class="col-sm-12 add-margin-bottom-20">\n' +
    '    <service-date-range start="startDate" end="endDate"></service-date-range>\n' +
    '</div>\n' +
    '<div id="job-report" class="col-sm-10 col-sm-offset-1 add-margin-bottom-40">\n' +
    '    <table class="table table-striped table-hover needs-verticle-alignment">\n' +
    '        <thead table-headers column="column" list="headers" invert="reverse_column">\n' +
    '        </thead table-headers>\n' +
    '        <tbody>\n' +
    '            <tr ng-repeat=\'job in list | filter:{completed: completed} | orderBy:column:reverse_column\' id=\'job-{{job.id}}\' ng-switch="completed" class="go-tr">\n' +
    '                <td class="col-md-3" ng-switch-when="true">{{job.service_end | date:\'MM/dd/yyyy\'}}</td>\n' +
    '                <td class="col-md-3" ng-switch-when="false">{{job.service_start | date:\'MM/dd/yyyy\'}}</td>\n' +
    '                <td class="col-md-1">{{job.aircraft.aircraft_type}}</td>\n' +
    '                <td class="col-md-2">{{job.aircraft.tail_number}}</td>\n' +
    '                <td class="col-md-2">\n' +
    '                    <button class="btn btn-sm btn-primary" ng-click="service_modal(job)">{{job.services.length}}</button>\n' +
    '                </td>\n' +
    '                <td class="col-md-2">\n' +
    '                    <button class="btn btn-sm btn-primary" ng-click="images_modal(job)">{{job.before_images.length+job.after_images.length}}</button>\n' +
    '                </td>\n' +
    '                <td class="col-md-1">{{job_duration(job.time_to_complete)}}</td>\n' +
    '                <td class="col-md-1">{{job.location}}</td>\n' +
    '            </tr>\n' +
    '        </tbody>\n' +
    '    </table>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('go-aviation/directives/table-headers/table-headers.tpl.html',
    '<tr>\n' +
    '  <th ng-repeat="header in list" class="column-header" ng-click="sort_column(header.sort_key)">{{header.title}}</th>\n' +
    '</tr>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('go-aviation/jobs/job-images-modal/job-images-modal.tpl.html',
    '<div class="modal-header">\n' +
    '    <h4 class="modal-title" id="serviceModalLabel">\n' +
    '        Job Images\n' +
    '    </h4>\n' +
    '</div>\n' +
    '\n' +
    '<div class="modal-body">\n' +
    '    <h5>Before Images</h5>\n' +
    '\n' +
    '    <image-upload resource-path="\'before-images/\'" parent-type="\'job\'" image-name="\'before_image\'" parent-path="\'job/\'" parent-resource="job" array-name="\'before_images\'" image-type="\'before_image\'" image-id="\'beforeImage\'"></image-upload>\n' +
    '\n' +
    '    <h5>After Images</h5>\n' +
    '    <image-upload resource-path="\'after-images/\'" parent-type="\'job\'" image-name="\'after_image\'" parent-path="\'job/\'" parent-resource="job" array-name="\'after_images\'" image-type="\'after_image\'" image-id="\'afterImage\'"></image-upload>\n' +
    '\n' +
    '</div>\n' +
    '<div class="modal-footer">\n' +
    '    <button type="button" class="btn btn-primary" ng-click="close()">Close</button>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('go-aviation/jobs/job-services-modal/job-services-modal.tpl.html',
    '<div class="modal-header">\n' +
    '    <h4 class="modal-title" id="serviceModalLabel">\n' +
    '        Job Services\n' +
    '    </h4>\n' +
    '</div>\n' +
    '\n' +
    '<div class="modal-body">\n' +
    '    <ul>\n' +
    '        <li ng-repeat="service in checkoff">\n' +
    '\n' +
    '            <button type="button" class="btn btn-primary" ng-click="set_service(service.instance_id)">\n' +
    '                {{service.name}}\n' +
    '            </button>\n' +
    '\n' +
    '            <ul ng-if="visible_service === service.instance_id" >\n' +
    '                <li ng-repeat="item in service.items">\n' +
    '                <label>{{item.name}}<input type="checkbox" ng-model="item.completed" ng-change="update_checkoff_list(service)"></label>\n' +
    '                </li>\n' +
    '            </ul>\n' +
    '        </li>\n' +
    '    </ul>\n' +
    '</div>\n' +
    '<div class="modal-footer">\n' +
    '    <button type="button" class="btn btn-primary" ng-click="close()">Close</button>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('go-aviation/profile/aircraft-modal/aircraft-modal.tpl.html',
    '<div class="modal-header">\n' +
    '    <h4 class="modal-title" id="serviceModalLabel">\n' +
    '        {{modal_action}}\n' +
    '    </h4>\n' +
    '\n' +
    '</div>\n' +
    '\n' +
    '<div class="modal-body">\n' +
    '    <form class="form-horizontal">\n' +
    '\n' +
    '        <div class="form-group col-sm-10 col-sm-offset-1">\n' +
    '            <label class="col-sm-4 control-label" for="tailNumber">Tail Number</label>\n' +
    '            <div class="col-sm-8">\n' +
    '                <input class="form-control" id="tailNumber" ng-model="aircraft.tail_number">\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="form-group col-sm-10 col-sm-offset-1">\n' +
    '            <label class="col-sm-4 control-label" for="aircraftType">Aircraft Type</label>\n' +
    '            <div class="col-sm-8">\n' +
    '                <input class="form-control" id="aircraftType" ng-model="aircraft.aircraft_type">\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="form-group col-sm-10 col-sm-offset-1">\n' +
    '            <label class="col-sm-4 control-label" for="aircraftColor">Color</label>\n' +
    '            <div class="col-sm-8">\n' +
    '                <input class="form-control" id="aircraftColor" ng-model="aircraft.color">\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="form-group col-sm-10 col-sm-offset-1">\n' +
    '            <label class="col-sm-4 control-label" for="aircraftYear">Model Year</label>\n' +
    '            <div class="col-sm-8">\n' +
    '                <input class="form-control" id="aircraftYear" ng-model="aircraft.year">\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '        <div class="form-group col-sm-10 col-sm-offset-1">\n' +
    '            <label class="col-sm-4 control-label" for="notes">Damage Notes</label>\n' +
    '            <div class="col-sm-8">\n' +
    '                <textarea class="form-control" id="notes" ng-model="aircraft.damage_notes"></textarea>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="form-group col-sm-10 col-sm-offset-1" ng-show="aircraft.reported">\n' +
    '            <label class="col-sm-4 control-label" for="reportedDate">Repored Date</label>\n' +
    '            <div class="col-sm-8">\n' +
    '                <input class="form-control" id="reportedDate" ng-model="aircraft.reported_date">\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="form-group col-sm-10 col-sm-offset-1" ng-show="aircraft.reported">\n' +
    '            <label class="col-sm-4 control-label" for="reportedTo">Repored To</label>\n' +
    '            <div class="col-sm-8">\n' +
    '                <input class="form-control" id="reportedTo" ng-model="aircraft.reported_to">\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '        <div class="form-group">\n' +
    '            <div class="col-sm-3 pull-right">\n' +
    '                <button class="pull-right" ng-click="save_aircraft()">Save</button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </form>\n' +
    '    <image-upload resource-path="\'aircraft-images/\'" parent-type="\'aircraft\'" image-name="\'aircraft_image\'" parent-path="\'aircraft/\'" parent-resource="aircraft" array-name="\'images\'" image-type="\'aircraft_image\'" image-id="\'aircraftImage\'"></image-upload>\n' +
    '</div>\n' +
    '<div class="modal-footer">\n' +
    '    <button type="button" class="btn btn-primary" ng-click="close()">Close</button>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('go-aviation/services/service-modal/service-modal.tpl.html',
    '<div class="modal-header">\n' +
    '    <h4 class="modal-title" id="serviceModalLabel">\n' +
    '        {{modal_action}}\n' +
    '    </h4>\n' +
    '\n' +
    '</div>\n' +
    '\n' +
    '<div class="modal-body">\n' +
    '    <form class="form-horizontal">\n' +
    '\n' +
    '        <div class="form-group col-sm-10 col-sm-offset-1">\n' +
    '            <label class="col-sm-4 control-label" for="serviceName">Service Name</label>\n' +
    '            <div class="col-sm-8">\n' +
    '                <input class="form-control" id="serviceName" ng-model="service.name">\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="form-group col-sm-10 col-sm-offset-1">\n' +
    '            <label class="col-sm-4 control-label" for="serviceDescription">Service Description</label>\n' +
    '            <div class="col-sm-8">\n' +
    '                <textarea class="form-control" id="serviceDescription" ng-model="service.description"></textarea>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="form-group">\n' +
    '            <div class="col-sm-3 pull-right">\n' +
    '                <button class="go-btn pull-right" ng-click="save_service(service)">Save</button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </form>\n' +
    '</div>\n' +
    '<div class="modal-footer">\n' +
    '    <button type="button" class="btn btn-primary" ng-click="close()">Close</button>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('go-aviation/check-lists/check-list-modal/check-off-item-modal/check-off-item-modal.tpl.html',
    '<div class="modal-header">\n' +
    '    <h4 class="modal-title" id="itemModalLabel">\n' +
    '        {{modal_action}}\n' +
    '    </h4>\n' +
    '\n' +
    '</div>\n' +
    '\n' +
    '<div class="modal-body">\n' +
    '    <form class="form-horizontal">\n' +
    '\n' +
    '        <div class="form-group col-sm-10 col-sm-offset-1">\n' +
    '            <label class="col-sm-4 control-label" for="itemName">Check Off Item Name</label>\n' +
    '            <div class="col-sm-8">\n' +
    '                <input class="form-control" id="itemName" ng-model="item.name">\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="form-group col-sm-10 col-sm-offset-1">\n' +
    '            <label class="col-sm-4 control-label" for="itemDescription">Check Off Item Description</label>\n' +
    '            <div class="col-sm-8">\n' +
    '                <textarea class="form-control" id="itemDescription" ng-model="item.description"></textarea>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="form-group">\n' +
    '            <div class="col-sm-3 pull-right">\n' +
    '                <button class="go-btn pull-right" ng-click="save_item()">Save</button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </form>\n' +
    '</div>\n' +
    '<div class="modal-footer">\n' +
    '    <button type="button" class="btn btn-primary" ng-click="close()">Close</button>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('blank.tpl.html',
    '');
}]);
})();

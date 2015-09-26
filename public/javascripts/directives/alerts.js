(function(window) {
    'use strict';

    /**
     * Display an alert message triggered from the
     * controller
     */
    angular.module('app')
        .directive('blAlerts', ['$timeout', function($timeout) {
            return {
                restrict: 'E',
                templateUrl: 'javascripts/directives/alerts.html',
                link: function(scope, elem, attrs, ngModelCtrl) {
                    scope.$on('alert', function(e, data) {
                        elem.show();
                        scope.alert = true;
                        scope.message = data.message;
                        scope.alertType = data.alertType;
                        scope.duration = data.duration;
                        $timeout(function() {
                            scope.alert = false;
                            elem.hide();
                        }, scope.duration || 2000);
                    });
                }
            };
        }]);
}(window));

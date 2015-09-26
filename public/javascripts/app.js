(function(window) {
    'use strict';
    angular.module('app', ['ui.router'])
        .config(routeConfig);
    // inject the shit
    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routeConfig($stateProvider, $urlRouteProvider) {

        $stateProvider.state('/', {
                url: '/',
                controller: 'mainCtrl',
                controllerAs: 'vm',
                templateUrl: 'views/main.html'
            })
            .state('register', {
                url: '/register',
                controller: 'registerCtrl',
                controllerAs: 'vm',
                templateUrl: 'views/admin/main.html'
            })
            .state('articles', {
                url: '/articles',
                controller: 'articlesCtrl',
                controllerAs: 'vm',
                templateUrl: 'views/articles/articles.tpl.html'
            })
            .state('articles/view', {
                url: '/articles/view/:id',
                templateUrl: 'views/articles/article.list.tpl.html',
                controller: "articleViewCtrl",
                controllerAs: 'vm'
            })
            .state('404', {
                templateUrl: 'view/404.html'
            });

        // $urlRouteProvider.otherwise('/404');
    }

}(window));

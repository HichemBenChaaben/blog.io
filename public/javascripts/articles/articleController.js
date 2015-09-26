(function(window) {
    'use strict';
    angular.module('app')
        .controller('articlesCtrl', articlesCtrl);
    articlesCtrl.$inject = ['$scope', 'article', '$timeout', '$state', '$location'];

    function articlesCtrl($scope, article, $timeout, $state, $location) {
        var vm = this;
        /**
         * List all the articles
         */
        vm.list = function() {
            article.getAll().then(function(res) {
                vm.articlesList = res;
            });
        };

        /**
         * View Article
         */
        vm.viewArticle = function(id) {
            $state.transitionTo('articles/view', {
                id: id
            });
        };

        /**
         * Adding article to the fucking database
         */
        vm.addArticle = function(arg) {
            // prepare the article to be saved
            var _article = {
                title: arg.name,
                author: 'hichem ben chaabene',
                body: arg.body,
            };
            article.addArticle(_article).then(function(res) {
                // broadcast the shit to the directive
                $scope.$broadcast('alert', {
                    message: res.message,
                    duration: 2000,
                    alertType: 'success'
                });
                $scope.content = {};
            });
        };
    }
}(window));

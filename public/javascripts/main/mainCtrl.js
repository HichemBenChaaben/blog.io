(function(window) {
    'use strict';
    angular.module('app')
        .controller('mainCtrl', mainCtrl);

    mainCtrl.$inject = ['$scope', 'article'];

    function mainCtrl($scope, article) {
        var vm = this;
        vm.getArticles = function() {
            article.getAll().then(function(res) {
                vm.articleList = res;
            });
        };
    }
}(window));

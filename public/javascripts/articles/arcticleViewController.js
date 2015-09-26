(function(window) {
    'use strict';
    angular.module('app')
        .controller('articleViewCtrl', articleViewCtrl);
    // inject all dependecies
    articleViewCtrl.$inject = ['$scope', '$state', '$stateParams', 'article'];

    function articleViewCtrl($scope, $state, $stateParams, article) {
        var vm = this;
        vm.list = function() {
            var id = $state.params.id;
            console.log('passing id to the service :: ', id);
            article.getArticle(id).then(function(res) {
                vm.article = res;
            });
        };
    }
}(window));

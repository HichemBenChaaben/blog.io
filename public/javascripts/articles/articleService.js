(function(window) {
    'use strict';
    angular.module('app').service('article', ['$q', '$http', function($q, $http) {
        return {
            getArticle: function(id) {
                var def = $q.defer();
                $http.get('/articles/' + id)
                    .success(function(data) {
                        console.log(data);
                        def.resolve(data);
                    })
                    .error(function(data) {
                        console.log(data);
                        def.reject(data);
                    });
                return def.promise;
            },
            getAll: function() {
                var def = $q.defer();
                $http.get('/articles')
                    .success(function(data) {
                        console.log(data);
                        def.resolve(data);
                    })
                    .error(function(data) {
                        console.log(data);
                        def.reject(data);
                    });
                return def.promise;
            },
            addArticle: function(data) {
                var deferred = $q.defer();
                $http.post('/articles/add', data)
                    .success(function(data) {
                        deferred.resolve(data);
                    }).error(function(data) {
                        deferred.reject(data);
                    });
                return deferred.promise;
            }
        };
    }])
}(window));

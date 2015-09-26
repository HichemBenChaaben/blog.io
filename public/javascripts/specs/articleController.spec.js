/**
 * Assemble / act / assert
 * 1- declaring which module we need to test
 * 2- the test has to access the scope
 **/
describe('app', function() {
    var ctrl;
    beforeEach(function() {
        module('app');
        inject(function($controller, $rootScope) {
            $scope = $rootScope.$new();
            ctrl = $controller('articlesCtrl', {
                $scope: $scope
            });
        })
    });

    // afterEach(function() {
    //     httpBackend.verifyNoOutstandingExpectation();
    //     httpBackend.verifyNoOutstandingRequest();
    // });

    it('should have a defined controller', function() {
        expect(ctrl).toBeDefined();
    });

    it('should have list function defined', function() {
        expect(ctrl.list).toBeDefined();
    });

    it('should have view Article defined', function() {
        expect(ctrl.viewArticle).toBeDefined();
    });

    it('should have a function addArticle', function() {
        expect(ctrl.addArticle).toBeDefined();
    });

});

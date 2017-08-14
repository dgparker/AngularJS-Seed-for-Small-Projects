angular.module('app', ['ngRoute']).
    config(['$routeProvider', function($routeProvider){
        $routeProvider
        .when('/viewOne', {
            templateUrl: 'views/viewOne.html'
        })
        .when('/viewTwo', {
            templateUrl: 'views/viewTwo.html'
        })
        .when('/viewThree', {
            templateUrl: 'views/viewThree.html'
        })
    }]);

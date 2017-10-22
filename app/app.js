angular.module("app", ["ngRoute"]).config([
  "$routeProvider",
  function($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "/app/views/home.html"
      })
      .when("/about", {
        templateUrl: "/app/views/about.html"
      })
      .when("/contact", {
        templateUrl: "/app/views/contact.html"
      });
  }
]);

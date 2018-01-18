// A main controller adds a nice base to the app
// making situations where you need to handle events
// or share data between views a lot easier.
function MainController() {
  var test = "test";
}
MainController.$inject = [];
angular.module("app").controller("MainController", MainController);

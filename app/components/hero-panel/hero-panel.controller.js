// The controller is where we contain the data or
// 'view model' for the component. This is where you
// should receive the data from your services. As well
// as any component specific logic that needs to be applied.
function HeroPanelController() {
  var vm = this;
}
HeroPanelController.$inject = [];
angular.module("app").controller("HeroPanelController", HeroPanelController);

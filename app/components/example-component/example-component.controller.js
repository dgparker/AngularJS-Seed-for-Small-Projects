// The controller is where we contain the data or
// 'view model' for the component. This is where you
// should receive the data from your services. As well
// as any component specific logic that needs to be applied.
function ExampleComponentController(ExampleComponentService) {
  var vm = this;

  vm.data = ExampleComponentService.getData();
}
ExampleComponentController.$inject = ["ExampleComponentService"];
angular
  .module("app")
  .controller("ExampleComponentController", ExampleComponentController);

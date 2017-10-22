// The controller is where we contain the data or
// 'view model' for the component. This is where you
// should receive the data from your services. As well
// as any component specific logic that needs to be applied.
function CollectionTableController(CollectionTableService) {
  var vm = this;

  vm.table = CollectionTableService.getTable();
}
CollectionTableController.$inject = ["CollectionTableService"];
angular
  .module("app")
  .controller("CollectionTableController", CollectionTableController);

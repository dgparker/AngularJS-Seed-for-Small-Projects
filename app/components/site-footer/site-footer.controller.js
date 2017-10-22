// The controller is where we contain the data or
// 'view model' for the component. This is where you
// should receive the data from your services. As well
// as any component specific logic that needs to be applied.
function SiteFooterController(HeaderFooterService) {
  var vm = this;

  vm.links = HeaderFooterService.getLinks();
}
SiteFooterController.$inject = ["HeaderFooterService"];
angular.module("app").controller("SiteFooterController", SiteFooterController);

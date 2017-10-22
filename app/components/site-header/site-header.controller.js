function SiteHeaderController(HeaderFooterService) {
  var vm = this;

  vm.links = HeaderFooterService.getLinks();
}
SiteHeaderController.$inject = ["HeaderFooterService"];
angular.module("app").controller("SiteHeaderController", SiteHeaderController);

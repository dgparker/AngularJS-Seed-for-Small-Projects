function siteHeader() {
  function link(scope, element, attrs) {}
  return {
    restrict: "A",
    scope: {},
    templateUrl: "/app/components/site-header/site-header.template.html",
    controller: "SiteHeaderController",
    controllerAs: "shc",
    link: link
  };
}
angular.module("app").directive("siteHeader", siteHeader);

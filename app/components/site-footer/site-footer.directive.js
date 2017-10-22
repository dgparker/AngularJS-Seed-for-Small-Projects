// The directive is how we define a 'component' within
// angularJS. We set the controller here as well as the
// templateUrl that make up the component. You can also
// do any DOM manipulation as well as styling effects here
// as well.
function siteFooter() {
  function link(scope, element, attrs) {}
  return {
    restrict: "A",
    scope: {},
    templateUrl: "/app/components/site-footer/site-footer.template.html",
    controller: "SiteFooterController",
    controllerAs: "sfc",
    link: link
  };
}
angular.module("app").directive("siteFooter", siteFooter);

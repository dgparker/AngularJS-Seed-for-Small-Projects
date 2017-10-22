// The directive is how we define a 'component' within
// angularJS. We set the controller here as well as the
// templateUrl that make up the component. You can also
// do any DOM manipulation as well as styling effects here
// as well.
function bragSpace() {
  function link(scope, element, attrs) {
    element.hide();
    element.fadeIn("slow");
  }
  return {
    restrict: "A",
    scope: {},
    templateUrl: "/app/components/brag-space/brag-space.template.html",
    controller: "BragSpaceController",
    controllerAs: "bsc",
    link: link
  };
}
angular.module("app").directive("bragSpace", bragSpace);

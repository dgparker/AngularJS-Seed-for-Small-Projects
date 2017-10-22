// The directive is how we define a 'component' within
// angularJS. We set the controller here as well as the
// templateUrl that make up the component. You can also
// do any DOM manipulation as well as styling effects here
// as well.
function heroPanel() {
  function link(scope, element, attrs) {
    element.hide();
    element.fadeIn("slow");
  }
  return {
    restrict: "A",
    scope: {},
    templateUrl: "/app/components/hero-panel/hero-panel.template.html",
    controller: "HeroPanelController",
    controllerAs: "hpc",
    link: link
  };
}
angular.module("app").directive("heroPanel", heroPanel);

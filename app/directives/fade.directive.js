function simpleFade() {
  function link(scope, element, attrs) {
    element.hide();
    element.fadeIn("slow");
  }
  return {
    restrict: "A",
    scope: {},
    link: link
  };
}
angular.module("app").directive("simpleFade", simpleFade);

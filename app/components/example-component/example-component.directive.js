// The directive is how we define a 'component' within
// angularJS. We set the controller here as well as the
// templateUrl that make up the component. You can also
// do any DOM manipulation as well as styling effects here
// as well.
function exampleComponent() {
  function link(scope, element, attrs) {
    element.hide();
    element.fadeIn("slow");
    setTimeout(function() {
      angular
        .element("#content")
        .append(
          "<p>You can also use directives to manipulate the DOM and add effects</p>"
        );
      angular.element("p").hide();
      angular.element("p").slideDown("slow");
    }, 1000);
  }
  return {
    restrict: "A",
    scope: {},
    templateUrl:
      "/app/components/example-component/example-component.template.html",
    controller: "ExampleComponentController",
    controllerAs: "ecc",
    link: link
  };
}
angular.module("app").directive("exampleComponent", exampleComponent);

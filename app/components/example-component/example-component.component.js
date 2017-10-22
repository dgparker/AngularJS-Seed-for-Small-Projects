// We set the controller here as well as the
// templateUrl that make up the component.
const exampleComponent = {
  templateUrl:
    "/app/components/example-component/example-component.template.html",
  controller: "ExampleComponentController",
  controllerAs: "ecc"
};
angular.module("app").component("exampleComponent", exampleComponent);

// The directive is how we define a 'component' within
// angularJS. We set the controller here as well as the
// templateUrl that make up the component. You can also
// do any DOM manipulation as well as styling effects here
// as well.
const exampleComponent = {
  templateUrl:
    "/app/components/example-component/example-component.template.html",
  controller: "ExampleComponentController",
  controllerAs: "ecc"
};
angular.module("app").component("exampleComponent", exampleComponent);

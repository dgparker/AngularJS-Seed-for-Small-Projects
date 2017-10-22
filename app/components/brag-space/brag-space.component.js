// We set the controller here as well as the
// templateUrl that make up the component.
const bragSpace = {
  templateUrl: "/app/components/brag-space/brag-space.template.html",
  controller: "BragSpaceController",
  controllerAs: "bsc"
};
angular.module("app").component("bragSpace", bragSpace);

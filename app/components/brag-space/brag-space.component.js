// The directive is how we define a 'component' within
// angularJS. We set the controller here as well as the
// templateUrl that make up the component. You can also
// do any DOM manipulation as well as styling effects here
// as well.
const bragSpace = {
  templateUrl: "/app/components/brag-space/brag-space.template.html",
  controller: "BragSpaceController",
  controllerAs: "bsc"
};
angular.module("app").component("bragSpace", bragSpace);

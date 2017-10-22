// The directive is how we define a 'component' within
// angularJS. We set the controller here as well as the
// templateUrl that make up the component. You can also
// do any DOM manipulation as well as styling effects here
// as well.
const heroPanel = {
  templateUrl: "/app/components/hero-panel/hero-panel.template.html",
  controller: "HeroPanelController",
  controllerAs: "hpc"
};
angular.module("app").component("heroPanel", heroPanel);

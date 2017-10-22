// We set the controller here as well as the
// templateUrl that make up the component.
const heroPanel = {
  templateUrl: "app/components/hero-panel/hero-panel.template.html",
  controller: "HeroPanelController",
  controllerAs: "hpc"
};
angular.module("app").component("heroPanel", heroPanel);

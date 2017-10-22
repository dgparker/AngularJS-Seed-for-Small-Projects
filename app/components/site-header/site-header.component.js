// We set the controller here as well as the
// templateUrl that make up the component.
const siteHeader = {
  templateUrl: "app/components/site-header/site-header.template.html",
  controller: "SiteHeaderController",
  controllerAs: "shc"
};
angular.module("app").component("siteHeader", siteHeader);

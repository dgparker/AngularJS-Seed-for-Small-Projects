const siteHeader = {
  templateUrl: "/app/components/site-header/site-header.template.html",
  controller: "SiteHeaderController",
  controllerAs: "shc"
};
angular.module("app").component("siteHeader", siteHeader);

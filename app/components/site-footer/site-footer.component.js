// We set the controller here as well as the
// templateUrl that make up the component.
const siteFooter = {
  templateUrl: "/app/components/site-footer/site-footer.template.html",
  controller: "SiteFooterController",
  controllerAs: "sfc"
};
angular.module("app").component("siteFooter", siteFooter);

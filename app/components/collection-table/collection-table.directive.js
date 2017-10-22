// The directive is how we define a 'component' within
// angularJS. We set the controller here as well as the
// templateUrl that make up the component. You can also
// do any DOM manipulation as well as styling effects here
// as well.
function collectionTable() {
  function link(scope, element, attrs) {
    element.hide();
    element.fadeIn("slow");
  }
  return {
    restrict: "A",
    scope: {},
    templateUrl:
      "/app/components/collection-table/collection-table.template.html",
    controller: "CollectionTableController",
    controllerAs: "ctc",
    link: link
  };
}
angular.module("app").directive("collectionTable", collectionTable);

// The directive is how we define a 'component' within
// angularJS. We set the controller here as well as the
// templateUrl that make up the component. You can also
// do any DOM manipulation as well as styling effects here
// as well.
const collectionTable = {
  templateUrl:
    "/app/components/collection-table/collection-table.template.html",
  controller: "CollectionTableController",
  controllerAs: "ctc"
};
angular.module("app").component("collectionTable", collectionTable);

// We set the controller here as well as the
// templateUrl that make up the component.
const collectionTable = {
  templateUrl:
    "/app/components/collection-table/collection-table.template.html",
  controller: "CollectionTableController",
  controllerAs: "ctc"
};
angular.module("app").component("collectionTable", collectionTable);

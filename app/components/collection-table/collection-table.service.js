// Component specific services add an additional
// layer of abstraction. Depending on how you structure
// your app and the API you're interacting with you can
// make API calls here as well or choose to only retrieve the data from
// a higher level service seperating your services by ones that
// interact with API's and ones that don't.
function CollectionTableService() {
  var tableData = [
    {
      Title: "Title 1",
      Image: "folder",
      LineOne: "This is the first line 1",
      LineTwo: "This is the second line 1",
      Link: "/"
    },
    {
      Title: "Title 2",
      Image: "insert_chart",
      LineOne: "This is the first line 2",
      LineTwo: "This is the second line 2",
      Link: "/"
    },
    {
      Title: "Title 3",
      Image: "play_arrow",
      LineOne: "This is the first line 3",
      LineTwo: "This is the second line 3",
      Link: "/"
    }
  ];

  this.getTable = function() {
    return tableData;
  };
}
angular.module("app").service("CollectionTableService", CollectionTableService);

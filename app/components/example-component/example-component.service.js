// Component specific services add an additional
// layer of abstraction. Depending on how you structure
// your app and the API you're interacting with you can
// make API calls here as well or only retrieve the data from
// a higher level service seperating your services by ones that
// interact with API's and ones that don't.
function ExampleComponentService() {
  var someData = {
    Title: "This is an example component with a service",
    SubHeader: "All this text is maintained by a service",
    ButtonText: "button"
  };

  this.getData = function() {
    return someData;
  };
}
angular
  .module("app")
  .service("ExampleComponentService", ExampleComponentService);

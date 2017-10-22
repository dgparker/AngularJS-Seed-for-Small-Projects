// services in the 'services' folder are generally used by multiple components.
// This is where API calls can be made and their data passed to respective components.
// To create another layer of abstraction create services here to handle major api calls
// and then pass the data to the components service to do any additional component specific
// data handling before passing it to the controller.
function HeaderFooterService() {
  var links = [
    {
      Name: "Home",
      Path: "/"
    },
    {
      Name: "About",
      Path: "#!/about"
    },
    {
      Name: "Contact",
      Path: "#!/contact"
    }
  ];

  this.getLinks = function() {
    return links;
  };
}
angular.module("app").service("HeaderFooterService", HeaderFooterService);

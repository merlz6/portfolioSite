const app = angular.module('Portfolio', [])

app.controller('MainController', function(){

  //----------Partials - Start on page view
  this.includePath = './partials/view.html';
  this.changeInclude = (path) => {
  this.includePath = './partials/'+ path +'.html';
}
// end partials





}) // END CONTROLLER

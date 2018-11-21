const app = angular.module('Portfolio', []);

app.controller('MainController', ['$http', function($http){

  this.showSkills = false;
  this.showProjects = false;
  this.showPicture = true;

  this.toggleShowSkills = function(){
    this.showSkills = true;
    this.showPicture = false;
    this.showProjects = false;
  }

  this.toggleShowProjects = function(){
    this.showProjects = true;
    this.showPicture = false;
    this.showSkills = false;
  }

  this.toggleShowPicture = function(){
    this.showPicture = true;
    this.showProjects =false;
    this.showSkills = false;
  }


}])

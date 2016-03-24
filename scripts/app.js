angular.module("todoListApp", [])
.controller('mainCtrl', function($scope, dataService) {
  $scope.helloConsole = dataService.helloConsole;
  
  $scope.learningNgChange = function() {
  console.log("an input changed");
  };
  
  $scope.todos = [
    {"name": "clean the house"},
    {"name": "water the dog"},
    {"name": "feed the lawn"},
    {"name": "pay the billz"},
    {"name": "run"},
    {"name": "swim"} 
  ]
})
.service('dataService', function() {

  this.helloConsole = function() {
   console.log('This is the hello Console Service!');
  }

});
angular.module("todoListApp", [])

.controller('mainCtrl', function($scope, dataService) {
  $scope.learningNgChange = function() {
  console.log("an input changed");
  };
  
  $scope.helloWorld = dataService.helloWorld;
  
  dataService.getTodos(function(response) {
     console.log(response.data);
     $scope.todos = response.data;
    });
  
  $scope.deleteTodo = function(todo) {
    dataService.deleteTodo(todo);                             
  };
  
    $scope.saveTodo = function(todo) {
    dataService.saveTodo(todo);                             
  };
})
.service('dataService', function($http) {
  this.helloWorld = function() {
   console.log("This is the data service's method!");
   };
  
  this.getTodos = function(callback) {
    $http.get('mock/todos.json')
    .then(callback)
  };
  
  this.deleteTodo = function(todo) {
   console.log("the " + todo.name + " has been deleted!")
  };
  
  this.saveTodo = function(todo) {
      console.log("the " + todo.name + " has been saved!")
  };
  
  
});
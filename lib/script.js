import angular from 'angular';

var app = angular.module('todo',[]);
app.controller('TodoCtrl', function($scope) {
  $scope.todos = [
  {
    title: 'AngularJS 공부하기',
    completed: false,
    createdAt : Date.now()
  },
  {
    title: 'git 공부하기',
    completed: true,
    createdAt : Date.now()
  },
  {
    title: 'flask 공부하기',
    completed: false,
    createdAt : Date.now()
  }
  ]
  $scope.remove = function(todo) {
    // find todo index in todos
	var idx = $scope.todos.findIndex(function (item) {
	return item == todo;
    });
    // remove from todos
    if (idx > -1) {
      $scope.todos.splice(idx, 1)
    }
  };
  $scope.add = function (newTodoTitle) {
    // create new todo
    var newTodo = {
      title : newTodoTitle,
      completed : false,
      createdAt : Date.now()
    };
    // push into todos
    $scope.todos.push(newTodo);
    // make form empty
    $scope.newTodoTitle = "";
  };
});

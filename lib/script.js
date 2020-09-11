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

app.directive('todoTitle', function(){
	return {
		template: '<h1> todo title </h1>'
	}
});

app.directive('todoItem', function() {
	return {
		templateUrl: 'todoItem.tpl.html' // template 파일명 분리해서 접근
		// template: 
		// 	'<input type="text" ng-model="todo.title">'
  //        	'<input type="checkbox" ng-model="todo.completed">'
  //         	'<span>'
  //           	'<button type="button" ng-click="remove(todo)"> Delete </button>'
  //         	'</span>'
	}
});
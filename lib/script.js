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
});
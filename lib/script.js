import angular from 'angular';

var app = angular.module('todo',[]);
app.controller('TodoCtrl', function($scope) {
  $scope.todo = {
    title: 'AngularJS 공부하기',
    completed: false,
    createdAt : Date.now()
  }
}]);
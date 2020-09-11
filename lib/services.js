import angular from 'angular';

angular.module('todo').factory('todoStorage', function() {
	var storage = {
		todos = [
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
		],

		get: function() {
			return storage.todos;
		}
	}
	return storage;
});


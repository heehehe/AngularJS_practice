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
		},

		remove: function(todo) {
			var idx = storage.todos.findIndex(function (item) {
				return item.id === todo.id;
			})
			if (idx > -1) {
				storage.todos.splice(idx, 1);
			}
		},
		add: function (newTodoTitle) {
		    // create new todo
		    var newTodo = {
		      title : newTodoTitle,
		      completed : false,
		      createdAt : Date.now()
		    };
		    // push into todos
		    storage.todos.push(newTodo);
		}
	}
	return storage;
});


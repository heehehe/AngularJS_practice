import angular from 'angular';

angular.module('todo').directive('todoTitle', function(){
	return {
		template: '<h1> todo title </h1>'
	}
});

angular.module('todo').directive('todoItem', function() {
	return {
		templateUrl: 'todoItem.tpl.html' // template 파일명 분리해서 접근
	}
});

angular.module('todo').directive('todoFilters', function() {
	return {
		templateUrl: 'todoFilters.tpl.html'
	}
});

angular.module('todo').directive('todoForm', function() {
	return {
		templateUrl: 'todoForm.tpl.html'
	}
});

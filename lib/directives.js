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

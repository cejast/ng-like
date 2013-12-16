var bar = angular.module('likebar', []);

bar.directive('likebar', [function(){
	return {
		restrict: 'E',
		scope: {
			width: '@',
			height: '@',
			likes: '=',
			lper: '@',
			rper: '@'
		},
		template: function(scope, element, attrs){
			return '<div style="width: {{width}}px; height:{{height}}px">' +
						'<div style="background: #279999; width:{{lper}}%; height: {{height}}px; float:left"></div>' +
						'<div style="background: #ccc; width:{{rper}}%; height:{{height}}px; float:right"></div>' +
					'</div>'
		},
		link: function(scope, element, attrs){

			scope.$watch('likes.up', function(newVal, oldVal) { scope.percentage(); });
			scope.$watch('likes.down', function(newVal, oldVal) { scope.percentage(); });

			scope.percentage = function(){
				var total = scope.likes.up + scope.likes.down;
				if(total){
					attrs.$set('lper', scope.likes.up/total*100);
					attrs.$set('rper', scope.likes.down/total*100);
				}
				else{
					attrs.$set('rper', 100);
				}
			}

		}
	}
}]);

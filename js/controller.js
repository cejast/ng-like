var controller = angular.module('controller', []);

controller.controller('bar-controller', ['$scope', function($scope){

$scope.likes = {
                    up: 0,
                    down: 0
               }

$scope.upvote = function(){
    $scope.likes.up++;
}

$scope.downvote = function(){
    $scope.likes.down++;
}

$scope.totalLikes = function(){ return $scope.likes.up + $scope.likes.down; }

}]);

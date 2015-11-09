let LikeController = function ($scope){

  $scope.likeCount = function(){

    $scope.like = $scope.like + 1 ;
  };  

  
};

LikeController.$inject = ['$scope'];

export default LikeController;

starter.controller('testController', ['$rootScope', '$ionicNavBarDelegate', '$sce', '$filter', '$scope', 'testService',  '$state', '$stateParams', '$cordovaDialogs',  function( $rootScope, $ionicNavBarDelegate, $sce, $filter, $scope, testService,  $state, $stateParams, $cordovaDialogs){

  $scope.conceptTest = {};

   $scope.conceptTest.testList = [{"name" : "test1", "questionId":"7", "marks":"20"}, {"name" : "test2", "questionId":"8", "marks":"21"}, {"name" : "test3", "questionId":"8", "marks":"21"}];
  //alert('coming here');
  $rootScope.$broadcast('$viewHistory.historyChange', {'showBack' : true});
  $scope.conceptTest.getTestList = function(){
      testService.getTestList().$promise.then(function(testList) {
        $scope.conceptTest.testList = testList;
      }, 
        function(){}
      );
  };

  if($state.current.name === "test.default" ){
  	//$ionicNavBarDelegate.setTitle("Concep");
    $scope.conceptTest.getTestList();
  }


   $scope.conceptTest.goBack = function(){
     $state.go('tab.conceptView');
  };
    

  if($state.current.name === "test.view"){
    var testId=$stateParams.testId;
    $scope.conceptTest.testToBeViwed = $filter('filter')(testService.testList, {'id': testId})[0];

  }
   
	
}]);

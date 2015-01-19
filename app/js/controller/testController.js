
starter.controller('testController', ['$ionicNavBarDelegate', '$sce', '$filter', '$scope', 'testService',  '$state', '$stateParams', '$cordovaDialogs',  function($ionicNavBarDelegate, $sce, $filter, $scope, testService,  $state, $stateParams, $cordovaDialogs){

  $scope.conceptTest = {};
  
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
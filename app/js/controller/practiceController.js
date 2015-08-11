
starter.controller('practiceController', ['$rootScope', '$ionicNavBarDelegate', '$sce', '$filter', '$scope', 'practiceService',  '$state', '$stateParams', '$cordovaDialogs',  function($rootScope, $ionicNavBarDelegate, $sce, $filter, $scope, practiceService,  $state, $stateParams, $cordovaDialogs){

  $scope.conceptPractice = {};
  $rootScope.$broadcast('$viewHistory.historyChange', {'showBack' : true});

  $scope.conceptPractice.goBack = function(){
     $state.go('tab.conceptView');
  };

  //$ionicNavBarDelegate.showBackButton(true);
  $scope.conceptPractice.getPracticeList = function(){
      practiceService.getPracticeList().$promise.then(function(practiceList) {
        $scope.conceptPractice.practiceList = practiceList;
      }, 
        function(){}
      );
  };


  if($state.current.name === "tab.conceptView.practice"){
  
      //$ionicNavBarDelegate.setTitle("Concep");
      $scope.conceptPractice.getPracticeList(); 
  }
   
	
}]);

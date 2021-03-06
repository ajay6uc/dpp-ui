
starter.controller('conceptController', ['$rootScope', '$ionicNavBarDelegate', '$sce', '$filter', '$scope', 'conceptService',  '$state', '$stateParams', '$cordovaDialogs',  function($rootScope, $ionicNavBarDelegate, $sce, $filter, $scope, conceptService,  $state, $stateParams, $cordovaDialogs){

  $scope.courseConcept = {};
  $rootScope.showTabs = false;
   $rootScope.$broadcast('$viewHistory.historyChange', {'showBack' : true});
  $scope.courseConcept.getConceptList = function(){
      conceptService.getConceptList().$promise.then(function(conceptList) {
        $scope.courseConcept.conceptList = conceptList;
      }, 
        function(){}
      );
  };

  if($state.current.name === "tab.concepts" ){
  	//$ionicNavBarDelegate.setTitle("Concep");
    $scope.courseConcept.getConceptList();
  }


  if($state.current.name === "tab.conceptView"){
    var conceptId=$stateParams.conceptId;

    $scope.courseConcept.conceptToBeViwed = $filter('filter')(conceptService.conceptList, {'id': conceptId})[0];

  }
   
	
}]);

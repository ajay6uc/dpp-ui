
starter.controller('conceptController', ['$ionicNavBarDelegate', '$sce', '$filter', '$scope', 'conceptService',  '$state', '$stateParams', '$cordovaDialogs',  function($ionicNavBarDelegate, $sce, $filter, $scope, conceptService,  $state, $stateParams, $cordovaDialogs){

  $scope.courseConcept = {};
  
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


  if($state.current.name === "concept.view"){
    var conceptId=$stateParams.conceptId;
    $scope.courseConcept.conceptToBeViwed = $filter('filter')(conceptService.conceptList, {'id': conceptId})[0];

  }
   
	
}]);

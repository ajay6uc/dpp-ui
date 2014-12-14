
starter.controller('dppController', ['$sce', '$filter', '$scope', 'dppService', 'dppSolutionService', '$state', '$stateParams', function($sce, $filter, $scope, dppService, dppSolutionService, $state, $stateParams){

  
  $scope.dpp = {};
  //alert('coming here');
  $scope.dpp.getDppList = function(){
      dppService.getDppList().$promise.then(function(dppList) {
        $scope.dpp.dppList = dppList;
      }, 
        function(){}
      );
  };

   $scope.dpp.getDppSolutionById = function(dppId){
      dppSolutionService.getDppSolutionById(dppId).$promise.then(function(dppSolution) {
        $scope.dpp.dppSolution = dppSolution;
      }, 
        function(){}
      );
  };

   $scope.dpp.getDppSolutionList = function(dppSolutionFilter){
      dppSolutionService.getDppSolutionList(dppSolutionFilter).$promise.then(function(dppSolutionList) {
        $scope.dpp.dppSolutionList = dppSolutionList;
        //$scope.dpp.dppSolution = dppSolutionList[0];
      }, 
        function(){}
      );
  };

   $scope.dpp.findDppSolution = function(dppSolutionFilter){
      dppSolutionService.findDppSolution(dppSolutionFilter).$promise.then(function(dppFindSolutionList) {
        $scope.dpp.dppSolution = dppFindSolutionList[0];
      }, 
        function(){}
      );
  };


 $scope.dpp.createDpp = function(){

      dppService.createUser().$promise.then(function(dppList) {

        $scope.dpp.dppList = dppList;
      }, 
        function(){}
      );
  };
 
  if($state.current.name === "tab.dpps"){
    $scope.dpp.getDppList();
  }

  if($state.current.name === "tab.viewSolution"){
     var dppId=$stateParams.dppId;
     $scope.dpp.findDppSolution({'dpp.id' : dppId});
  }

  if($state.current.name === "tab.view"){
    var dppId=$stateParams.dppId;
    $scope.dpp.dppToBeViwed = $filter('filter')(dppService.dppList, {'id': dppId})[0];
  }

	
}]);

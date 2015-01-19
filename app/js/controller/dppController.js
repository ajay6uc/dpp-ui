
starter.controller('dppController', ['$sce', '$filter', '$scope', 'dppService', 'dppSolutionService', '$state', '$stateParams', '$cordovaDialogs', '$ionicTabsDelegate',  function($sce, $filter, $scope, dppService, dppSolutionService, $state, $stateParams, $cordovaDialogs, $ionicTabsDelegate){

  //alert('coming ehre');
  $scope.dpp = {};
  //  $cordovaDialogs.confirm('Are you sure to upload', 'upload', ['Ok','Cancel']).then(function(buttonIndex) {
  //           // no button = 0, 'OK' = 1, 'Cancel' = 2
  //            var btnIndex = buttonIndex;
  //            alert('button index is ' + btnIndex);
  //        })
  
  // $scope.dpp.phoneNumber = starter.phoneNumber;
   //alert('dppphone number' +$scope.dpp.phoneNumber);
  //$scope.dpp.error.phoneNumber = starter.error.phoneNumber;
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


   $scope.dpp.goBack = function(){
     $state.go('tab.conceptView');
  };
    
 
  if($state.current.name === "tab.dash" || $state.current.name === "tab.dpps"){
    $scope.dpp.getDppList();
  }

  if($state.current.name === "dpp.view"){
    var dppId=$stateParams.dppId;
   // $scope.dpp.dppToBeViwed = $filter('filter')(dppService.dppList, {'id': dppId})[0];

    dppSolutionService.dppToBeViwed = $scope.dpp.dppToBeViwed ;
  }
   if($state.current.name === "dpp"){
     var dppId=$stateParams.dppId;
    $scope.dpp.dppToBeViwed = $filter('filter')(dppService.dppList, {'id': dppId})[0];
  }
  if($state.current.name === "dpp.solution"){
     var dppId=dppSolutionService.dppToBeViwed.id;

     $scope.dpp.findDppSolution({'dpp.id' : dppId});
  }

  if($state.current.name === "tab.view"){
    var dppId=$stateParams.dppId;
    $scope.dpp.dppToBeViwed = $filter('filter')(dppService.dppList, {'id': dppId})[0];
  }

	
}]);

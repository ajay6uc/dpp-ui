
starter.controller('topicController', ['$rootScope', '$ionicNavBarDelegate', '$sce', '$filter', '$scope', 'topicService',  '$state', '$stateParams', '$cordovaDialogs', 'appService', '$timeout',  function($rootScope, $ionicNavBarDelegate, $sce, $filter, $scope, topicService,  $state, $stateParams, $cordovaDialogs, appService,  $timeout){

  $scope.appService = appService;
  //var isButtonShown = $ionicNavBarDelegate.showBackButton(true);  
  //alert('inside topic ' + isButtonShown);
  //$rootScope.$broadcast('$viewHistory.historyChange', {'showBack' : true});
 
  $scope.appService.app.showTabs = 'tabs-item-hide';
  $scope.courseTopic = {};
  $scope.appService.app.showTopics = false; 

  $scope.courseTopic.goBack = function(){
     $state.go('tab.default', {}, {'reload': true});
  };
    
       
  $scope.courseTopic.getTopicList = function(){
      topicService.getTopicList().$promise.then(function(topicList) {
        $scope.courseTopic.topicList = topicList;
      }, 
        function(){}
      );
  };
 
  if($state.current.name === "tab.topics" ){
    //$ionicNavBarDelegate.setTitle('Topic');
    $scope.courseTopic.getTopicList();
  }

  if($state.current.name === "topic.view"){
    var topicId=$stateParams.topicId;
    $scope.courseTopic.topicToBeViwed = $filter('filter')(topicService.topicList, {'id': topicId})[0];

  }
   
	
}]);

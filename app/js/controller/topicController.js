
starter.controller('topicController', ['$ionicNavBarDelegate', '$sce', '$filter', '$scope', 'topicService',  '$state', '$stateParams', '$cordovaDialogs',  function($ionicNavBarDelegate, $sce, $filter, $scope, topicService,  $state, $stateParams, $cordovaDialogs){

  $scope.courseTopic = {};
  
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

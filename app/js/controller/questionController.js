
starter.controller('questionController', ['$sce', '$filter', '$scope', 'questionService',  '$state', '$stateParams', '$cordovaDialogs',  function($sce, $filter, $scope, questionService,  $state, $stateParams, $cordovaDialogs){

  $scope.courseQuestion = {};
  
  $scope.courseQuestion.getQuestionList = function(){
      questionService.getQuestionList().$promise.then(function(questionList) {
        $scope.courseQuestion.questionList = questionList;
      }, 
        function(){}
      );
  };

   $scope.courseQuestion.goBack = function(){
      $state.go('tab.topics.concepts');
  };
 	
  if($state.current.name === "tab.topics.concepts.questions" ){
    $scope.courseQuestion.getQuestionList();
  }


  if($state.current.name === "tab.topics.concepts.questions.questionView"){
    var questionId=$stateParams.questionId;
    $scope.courseQuestion.questionToBeViwed = $filter('filter')(questionService.questionList, {'id': questionId})[0];

  }
   
	
}]);

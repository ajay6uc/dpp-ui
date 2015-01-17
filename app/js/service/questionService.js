starter.service("questionService",  function($resource, REST_URL) {


	var question =  $resource(REST_URL+'marketplace/question/:questionId', {'name':'@name', 'question':'@question', 'questionName':'@questionName'},

			{
        		'update': { method:'PUT' },
        		'create': { method:'POST' },

    		}

		);

	this.getQuestionList = function(questionFilter) {

			this.questionList = 	question.query(questionFilter);
			return this.questionList;

	};

	this.getQuestionById = function(questionId) {
		
		return question.get({'questionId': questionId});

	};

});

starter.service("practiceService",  function($resource, REST_URL) {

	var practice =  $resource(REST_URL+'marketplace/question/:questionId', {'name':'@name', 'practice':'@practice', 'practiceName':'@practiceName'},

			{
        		'update': { method:'PUT' },
        		'create': { method:'POST' },

    		}

		);

	this.getPracticeList = function(practiceFilter) {

			this.practiceList = 	practice.query(practiceFilter);
			return this.practiceList;

	};

	this.getPracticeById = function(practiceId) {
		
		return practice.get({'practiceId': practiceId});

	};

});

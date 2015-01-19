starter.service("testService",  function($resource, REST_URL) {

	var test =  $resource(REST_URL+'marketplace/test/:testId', {'name':'@name', 'test':'@test', 'testName':'@testName'},

			{
        		'update': { method:'PUT' },
        		'create': { method:'POST' },

    		}

		);

	this.getTestList = function(testFilter) {

			this.testList = 	test.query(testFilter);
			return this.testList;

	};

	this.getTestById = function(testId) {
		
		return test.get({'testId': testId});

	};

});

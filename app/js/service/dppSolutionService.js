starter.service("dppSolutionService",  function($resource, REST_URL) {


	var DppSolution =  $resource(REST_URL+'marketplace/dppSolution/:DppSolutionId', {'name':'@name', 'dpp.id':'@dppId', 'DppName':'@DppName'},

			{
        		'update': { method:'PUT' },
        		'create': { method:'POST' },
        		'find': { method:'GET', 
        				  url : REST_URL+'marketplace/dppSolution/find',
            			  isArray : true
        				}

    		}

		);

	this.getDppSolutionList = function(DppSolutionFilter) {
				this.dppSolutionList = 	DppSolution.query(DppSolutionFilter);
				return this.dppSolutionList;

	};

	this.findDppSolution = function(DppSolutionFilter) {
				this.dppFindSolutionList = 	DppSolution.find(DppSolutionFilter);
				return this.dppFindSolutionList;

	};

	this.getDppSolutionById = function(DppSolutionId) {
	
				return DppSolution.get({'DppSolutionId': DppSolutionId});

	};

});

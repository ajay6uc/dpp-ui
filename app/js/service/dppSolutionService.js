starter.service("dppSolutionService", function($resource) {


	var DppSolution =  $resource('http://192.168.1.2/marketplace/dppSolution/:DppSolutionId', {'name':'@name', 'dpp.id':'@dppId', 'DppName':'@DppName'},

			{
        		'update': { method:'PUT' },
        		'create': { method:'POST' },
        		'find': { method:'GET', 
        				  url : 'http://192.168.1.2/marketplace/dppSolution/find',
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

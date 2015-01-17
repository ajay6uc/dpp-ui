starter.service("conceptService",  function($resource, REST_URL) {


	var concept =  $resource(REST_URL+'marketplace/concept/:conceptId', {'name':'@name', 'concept':'@concept', 'conceptName':'@conceptName'},

			{
        		'update': { method:'PUT' },
        		'create': { method:'POST' },

    		}

		);

	this.getConceptList = function(conceptFilter) {

			this.conceptList = 	concept.query(conceptFilter);
			return this.conceptList;

	};

	this.getConceptById = function(conceptId) {
		
		return concept.get({'conceptId': conceptId});

	};

});

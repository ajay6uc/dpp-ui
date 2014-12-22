starter.service("dppService",  function($resource, REST_URL) {


	var Dpp =  $resource(REST_URL+'marketplace/dpp/:DppId', {'name':'@name', 'concept':'@concept', 'DppName':'@DppName'},

			{
        		'update': { method:'PUT' },
        		'create': { method:'POST' },

    		}

		);

	this.getDppList = function(DppFilter) {
				this.dppList = 	Dpp.query(DppFilter);
				return this.dppList;

	};

	this.getDppById = function(DppId) {
	
				return Dpp.get({'DppId': DppId});

	};

});

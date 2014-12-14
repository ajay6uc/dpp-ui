starter.service("dppService", function($resource) {


	var Dpp =  $resource('http://192.168.1.2/marketplace/dpp/:DppId', {'name':'@name', 'concept':'@concept', 'DppName':'@DppName'},

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

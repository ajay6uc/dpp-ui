starter.service("topicService",  function($resource, REST_URL) {


	var topic =  $resource(REST_URL+'marketplace/topic/:topicId', {'name':'@name', 'concept':'@concept', 'topicName':'@topicName'},

			{
        		'update': { method:'PUT' },
        		'create': { method:'POST' },

    		}

		);

	this.getTopicList = function(topicFilter) {

			this.topicList = 	topic.query(topicFilter);
			return this.topicList;

	};

	this.getTopicById = function(topicId) {
		
		return topic.get({'topicId': topicId});

	};

});

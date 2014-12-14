marketPlace.service("userService", function($resource) {


	var User =  $resource('/marketplace/user/:userId', {'name':'@name', 'email':'@email', 'userName':'@userName'},

			{
        		'update': { method:'PUT' },
        		'create': { method:'POST' },

    		}

		);

	this.getUserList = function(UserFilter) {
	
				return User.query(UserFilter);

	};

	this.getUserById = function(UserId) {
	
				return User.get({'UserId': UserId});

	};


	this.updateUser = function(UserId, User) {
	
				return User.update({'UserId': UserId}, User);

	};

	this.createUser = function(User) {
	
				return User.create({}, User);

	};

	this.deleteUser = function(User) {
	
				return User.delete({'UserId': UserId});

	};


});

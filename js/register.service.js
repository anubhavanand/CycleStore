(function () {
    'use strict';

	    angular
	        .module('CycleStoreApp')
	        .controller('RegisterController', RegisterController);

	    function RegisterController(RegistrationService, $scope) {
	    	var self = this;
			self.register = register;
			self.reset = reset;

	    	function register() {
				var newUserDetails = {
					"id": self.mobileNumber,
					"email": self.email,
					"mobileNumber": self.mobileNumber,
					"password": self.password,
					"name": {
						"firstName": self.firstName,
						"lastName": self.lastName
					},					
					"address": self.address
				};
				RegistrationService.Register(newUserDetails, function (response) {
					if (response.success) {
						self.reset();
						$scope.$parent.ctrl.registrationSuccess = true;
					} else {
						self.errorMessage = response.message;
					}
            	});
	    	};

			function reset() {
				self.email = "";
				self.mobileNumber = "";
				self.password = "";
				self.firstName = "";
				self.lastName = "";
				self.address = "";
			};
	    }

	}

)();
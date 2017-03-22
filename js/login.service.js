(function () {
    var cycleStoreApp = angular.module("CycleStoreApp");
    cycleStoreApp.controller('LoginController', LoginController);

    function LoginController($http){
        var self = this;

        self.login = function() {
			return $http.get('http://localhost:3000/users/' + self.username)
			.then(function(response) {
				if(response.data != null && response.data.password == self.password) {
					
				} else {
					self.errorMessage = true;
				}
			});
		}
    }
})();
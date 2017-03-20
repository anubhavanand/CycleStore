(function () {
    var cycleStoreApp = angular.module("CycleStoreApp");
    function getUserData($http) {
        var self = this;
        self.getUsers = function () {
            var promise1 = $http.get('http://localhost:3000/users/');
            var promise2 = promise1.then(function (response) {
                return response.data;
            });
            return promise2;
        }

        
    }
    cycleStoreApp.service("LoginSvc", getUserData);
})();
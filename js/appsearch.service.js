(function () {
    var cycleStoreApp = angular.module("CycleStoreApp");
    function searchData($http) {
         var self = this;
        self.getBikes = function () {
            var promise1 = $http.get('http://localhost:3000/bikes/');
            var promise2 = promise1.then(function (response) {
                return response.data;
            });
            return promise2;
        }

        
    }
    cycleStoreApp.service("SearchDataSvc", searchData);
})();


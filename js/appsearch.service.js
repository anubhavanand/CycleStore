(function () {
    var cycleStoreApp = angular.module("CycleStoreApp");
    cycleStoreApp.controller('SearchController', SearchController);
    function SearchController($http){
        var self = this;
        var promise1 = $http.get('http://localhost:3000/bikes/');
        var promise2 = promise1.then(function (response) {
                return response.data;
        });
        promise2.then(function(data){
            self.bikes = data;
        });
    }


/*   function searchData($http) {
         var self = this;
        self.getBikes = function () {
            var promise1 = $http.get('http://localhost:3000/bikes/');
            var promise2 = promise1.then(function (response) {
                return response.data;
            });
            return promise2;
        }
    }
    cycleStoreApp.service("SearchDataSvc", searchData);*/
})();


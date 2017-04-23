(function () {
    var cycleStoreApp = angular.module("CycleStoreApp");
    function searchData($http) {
        var self = this;
        self.getSearchedData = function (criteria) {
            //alert(criteria);
            var promise1 = $http.get('http://localhost:3000/' + criteria);
            var promise2 = promise1.then(function (response) {
                return response.data;
            });
            return promise2;
        }
    }
    cycleStoreApp.service("SearchDataSvc", searchData);
})();


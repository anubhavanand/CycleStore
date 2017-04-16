(function () {
    var cycleStoreApp = angular.module("CycleStoreApp");

    cycleStoreApp.filter('startFrom', function () {
        return function (input, start) {
            if (input) {
                start = +start;
                return input.slice(start);
            }
            return [];
        };
    });


    function searchData($http, filterFilter) {
        var self = this;

        // create empty search model (object) to trigger $watch on update
        self.search = {};

        self.resetFilters = function () {
            // needs to be a function or it won't trigger a $watch
            self.search = {};
        };

        self.getBikes = function (criteria) {
            //alert(criteria);
            var promise1 = $http.get('http://localhost:3000/' + criteria);
            var promise2 = promise1.then(function (response) {
                return response.data;
            });
            return promise2;
        }

        self.startFiltering = function ($scope) {
            // pagination controls
            // $scope.currentPage = 1;
            // $scope.totalItems = $scope.$parent.ctrl.bikes.length;
            // $scope.entryLimit = 4; // items per page
            // $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
            $scope.filtered = [];
            // $watch search to update pagination
            $scope.$watch('search', function (newVal, oldVal) {
                self.tempFilteredData = filterFilter($scope.$parent.ctrl.bikes, newVal);
                angular.forEach(self.tempFilteredData, function (value, index) {
                    var i = $scope.filtered.indexOf(value);
                    if (i < 0) {
                        $scope.filtered.push(value);
                    } 
                });

                // $scope.totalItems = $scope.filtered.length;
                // $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
                // $scope.currentPage = 1;
            }, true);
        }

        // self.filterMaleFemale = function ($scope, gender) {
        //     alert(gender);
        //     self.search.gender = gender;
        //     self.startFiltering($scope);
        // }


    }

    cycleStoreApp.service("SearchDataSvc", searchData);
})();


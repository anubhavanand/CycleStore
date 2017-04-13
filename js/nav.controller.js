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


    cycleStoreApp.controller('NavController', NavController);
    function NavController(SearchDataSvc, $scope, filterFilter) {
        var self = this;

        // create empty search model (object) to trigger $watch on update
        $scope.search = {};
        $scope.genderFilter = [];
        $scope.resetFilters = function () {
            // needs to be a function or it won't trigger a $watch
            $scope.search = {};
        };

        self.showSearchPage = function (criteria) {
            //clear previous data before making a new search
            $scope.$parent.ctrl.bikes = [];
            self.setSearchedBanner(criteria);
            $scope.$parent.ctrl.showSearchPage();
            var promise = SearchDataSvc.getBikes(criteria);
            promise.then(function (data) {
                $scope.$parent.ctrl.bikes = data;
                self.doFiltering();
            });
        }
        self.setSearchedBanner = function (criteria) {
            if (criteria === 'roadbikes') {
                $scope.$parent.ctrl.searchCategory = "Road Bikes";
            } else if (criteria === 'mountainbikes') {
                $scope.$parent.ctrl.searchCategory = "Mountain Bikes";
            } else if (criteria === 'kidsbikes') {
                $scope.$parent.ctrl.searchCategory = "Kids Bikes";
            } else if (criteria === 'bmxbikes') {
                $scope.$parent.ctrl.searchCategory = "BMX Bikes";
            } else if (criteria === 'hybridbikes') {
                $scope.$parent.ctrl.searchCategory = "Hybrid Bikes";
            } else if (criteria === 'vintagebikes') {
                $scope.$parent.ctrl.searchCategory = "Vintage Bikes";
            }
        }

        self.doFiltering = function () {
            // pagination controls
            $scope.currentPage = 1;
            $scope.totalItems = $scope.$parent.ctrl.bikes.length;
            $scope.entryLimit = 4; // items per page
            $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);

            // $watch search to update pagination
            $scope.$watch('search', function (newVal, oldVal) {
                $scope.filtered = filterFilter($scope.$parent.ctrl.bikes, newVal);
                $scope.totalItems = $scope.filtered.length;
                $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
                $scope.currentPage = 1;
            }, true);
        }

        $scope.selectMaleFemale = function (gender) {
            alert(gender);
            var i = $.inArray(gender, $scope.genderFilter);
            if (i > -1) {
                $scope.genderFilter.splice(i, 1);
            } else {
                $scope.genderFilter.push(gender);
            }

            angular.forEach($scope.genderFilter, function (value, index) {
                alert(value);
            });
        };
    }

})();
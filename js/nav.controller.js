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

        self.showSearchPage = function (criteria) {
            //clear previous data before making a new search
            $scope.$parent.ctrl.bikes = [];
            $scope.$parent.ctrl.brands = [];
            self.setSearchedBanner(criteria);
            $scope.$parent.ctrl.showSearchPage();
            var promise = SearchDataSvc.getBikes(criteria);
            promise.then(function (data) {
                $scope.$parent.ctrl.bikes = data;
                angular.forEach(data, function (value, index) {
                    var i = $scope.$parent.ctrl.brands.indexOf(value.make);
                    if (i < 0) {
                        $scope.$parent.ctrl.brands.push(value.make);
                    }
                });
                self.startFiltering();
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
            } else if (criteria === 'helmets') {
                $scope.$parent.ctrl.searchCategory = "Helmets";
            } else if (criteria === 'bells&locks') {
                $scope.$parent.ctrl.searchCategory = "Bells & Locks";
            } else if (criteria === 'pumps') {
                $scope.$parent.ctrl.searchCategory = "Pumps";
            } else if (criteria === 'tyres&tubes') {
                $scope.$parent.ctrl.searchCategory = "Tyres & Tubes";
            }
        }


        //Below code will ultimately go to nested controller search controller
        // create empty search model (object) to trigger $watch on update
        self.search = {};

        self.genderFilter = [];

        self.filtered = [];

        self.resetFilters = function () {
            // needs to be a function or it won't trigger a $watch
            self.search = {};
        };


        self.startFiltering = function () {
            // pagination controls
            // $scope.currentPage = 1;
            // $scope.totalItems = $scope.$parent.ctrl.bikes.length;
            // $scope.entryLimit = 4; // items per page
            // $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
            // $scope.filtered = [];
            // $watch search to update pagination
            $scope.$watch('search', function (newVal, oldVal) {
                self.tempFilteredData = filterFilter($scope.$parent.ctrl.bikes, newVal);
                angular.forEach(self.tempFilteredData, function (value, index) {
                    var i = self.filtered.indexOf(value);
                    if (i < 0) {
                        self.filtered.push(value);
                    }
                });

                // $scope.totalItems = $scope.filtered.length;
                // $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
                // $scope.currentPage = 1;
            }, true);
        }

        self.filterMaleFemale = function (gender) {
            var i = self.genderFilter.indexOf(gender);
            if (i > -1) {
                self.genderFilter.splice(i, 1);
            } else {
                self.genderFilter.push(gender);
            }
        }

    }

})();
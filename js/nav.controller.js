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
        self.unfilteredData = [];
        self.searchedData = [];
        self.brands = [];
        self.showSearchPage = function (criteria) {
            //clear previous data before making a new search
            self.searchedData = [];
            self.brands = [];
            self.setSearchedBanner(criteria);
            $scope.$parent.ctrl.showSearchPage();
            var promise = SearchDataSvc.getSearchedData(criteria);
            promise.then(function (data) {
                self.unfilteredData = data;
                self.searchedData = data;
                angular.forEach(data, function (value, index) {
                    var i = self.brands.indexOf(value.make);
                    if (i < 0) {
                        self.brands.push(value.make);
                    }
                });
                self.startFiltering();
            });
        }
        self.setSearchedBanner = function (criteria) {
            if (criteria === 'roadbikes') {
                self.searchCategory = "Road Bikes";
            } else if (criteria === 'mountainbikes') {
                self.searchCategory = "Mountain Bikes";
            } else if (criteria === 'kidsbikes') {
                self.searchCategory = "Kids Bikes";
            } else if (criteria === 'bmxbikes') {
                self.searchCategory = "BMX Bikes";
            } else if (criteria === 'hybridbikes') {
                self.searchCategory = "Hybrid Bikes";
            } else if (criteria === 'vintagebikes') {
                self.searchCategory = "Vintage Bikes";
            } else if (criteria === 'helmets') {
                self.searchCategory = "Helmets";
            } else if (criteria === 'bells&locks') {
                self.searchCategory = "Bells & Locks";
            } else if (criteria === 'pumps') {
                self.searchCategory = "Pumps";
            } else if (criteria === 'tyres&tubes') {
                self.searchCategory = "Tyres & Tubes";
            }
        }


        //Below code will ultimately go to nested controller search controller
        // create empty search model (object) to trigger $watch on update
        self.search = {};

        self.filters = [];

        self.filtered = [];

        self.resetFilters = function () {
            // needs to be a function or it won't trigger a $watch
            self.search = {};
        };


        self.startFiltering = function () {
            // pagination controls
            // $scope.currentPage = 1;
            // $scope.totalItems = self.length;
            // $scope.entryLimit = 4; // items per page
            // $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
            // $scope.filtered = [];
            // $watch search to update pagination
            $scope.$watch('search', function (newVal, oldVal) {
                self.tempFilteredData = filterFilter(self.searchedData, newVal);
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
        self.filterData = function (filterToApply, filterType) {
            self.tempList = [];
            var i = self.filters.indexOf(filterToApply);
            if (i > -1) {
                self.filters.splice(i, 1);
            } else {
                self.filters.push(filterToApply);
            }
            angular.forEach(self.filters, function (filterValue, index) {
                self.tempList.push.apply(self.tempList, self.unfilteredData.filter(function (data) {
                    if (filterType === 'gender') {
                        return data.gender === filterValue;
                    } else if (filterType === 'brands') {
                        return data.make === filterValue;
                    } else {
                        return false;
                    }

                }));
            });
            if (self.filters.length === 0) {
                self.searchedData = self.unfilteredData;
            } else {
                self.searchedData = self.tempList;
            }
        }

        self.showProductDetailPage = function (product) {
            //clear previous data before making a new search
            self.productDetail = {};
            self.productDetail = product;
            $scope.$parent.ctrl.showProductDetailPage();
        }

        self.showformatedPrice = function (price) {
            formattedPrice = (price).replaceAll(("(?<=\d)(?=(\d\d\d)+(?!\d))"),",");
            return formattedPrice;
        }
        self.selectedTabId = "tab_default_1";
        self.selectedTab = function(tabId){
            self.selectedTabId = tabId;
        }
    }

})();
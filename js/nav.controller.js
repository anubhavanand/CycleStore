(function () {
    var cycleStoreApp = angular.module("CycleStoreApp");


    cycleStoreApp.controller('NavController', NavController);
    function NavController(SearchDataSvc, $scope) {
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
                SearchDataSvc.startFiltering($scope);
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
    }

})();
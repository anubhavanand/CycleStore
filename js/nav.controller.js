(function () {
    var cycleStoreApp = angular.module("CycleStoreApp");
    cycleStoreApp.controller('NavController', NavController);
    function NavController(SearchDataSvc, $scope) {
        var self = this;
        self.showSearchPage = function (criteria) {
            //clear previous data before making a new search
            $scope.$parent.ctrl.bikes = [];
            self.setSearchedBanner(criteria);
            $scope.$parent.ctrl.showImage = false;
            $scope.$parent.ctrl.enableLoginPage = false;
            $scope.$parent.ctrl.enableSearchPage = true;
            var promise =SearchDataSvc.getBikes(criteria);
            promise.then(function(data){
                $scope.$parent.ctrl.bikes = data;
            });
        }
        self.setSearchedBanner = function(criteria){
             if (criteria === 'roadbikes') {
                $scope.$parent.ctrl.searchCategory = "Road Bikes";
             } else if (criteria === 'mountainbikes'){
                 $scope.$parent.ctrl.searchCategory = "Mountain Bikes";
             } else if (criteria === 'kidsbikes'){
                 $scope.$parent.ctrl.searchCategory = "Kids Bikes";
             } else if (criteria === 'bmxbikes'){
                 $scope.$parent.ctrl.searchCategory = "BMX Bikes";
             } else if (criteria === 'hybridbikes'){
                 $scope.$parent.ctrl.searchCategory = "Hybrid Bikes";
             } else if (criteria === 'vintagebikes'){
                 $scope.$parent.ctrl.searchCategory = "Vintage Bikes";
             }
        }
    }

})();
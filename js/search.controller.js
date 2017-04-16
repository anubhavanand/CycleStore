(function () {
    'use strict';

    var cycleStoreApp = angular.module("CycleStoreApp");


    cycleStoreApp.controller('SearchController', SearchController);

    function SearchController(SearchDataSvc, $scope) {
        var self = this;
        // self.genderFilter = [];
        // self.selectMaleFemale = function (gender) {
        //     var i = self.genderFilter.indexOf(gender);
        //     if (i > -1) {
        //         self.genderFilter.splice(i, 1);
        //     } else {
        //         self.genderFilter.push(gender);
        //     }
        //     angular.forEach(self.genderFilter, function (value, index) {
        //         SearchDataSvc.filterMaleFemale($scope, value);
        //     });
        // };

    }



})();

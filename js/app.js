var cycleStoreApp = angular.module('CycleStoreApp', ['ngAnimate']);
cycleStoreApp.controller('CycleStoreController', CycleStoreController);
function CycleStoreController(SliderImageSvc, SearchDataSvc) {
    this.images = SliderImageSvc.images;
    this.showImage = true;
    this.toggleShowImage = function () {
        this.showImage = false;
    }
}
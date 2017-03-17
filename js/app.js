var cycleStoreApp = angular.module('CycleStoreApp', ['ngAnimate']);
cycleStoreApp.controller('CycleStoreController', CycleStoreController);
function CycleStoreController(SliderImageSvc) {
    this.images = SliderImageSvc.images;
    this.showImage = true;

    this.toggleShowImage = function () {
    	this.showImage = false;
    }

    this.showHomePage = function () {
    	this.showImage = true;
    }
}
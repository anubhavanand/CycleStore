var cycleStoreApp = angular.module('CycleStoreApp', ['ngAnimate']);

cycleStoreApp.controller('CycleStoreController', CycleStoreController);

function CycleStoreController(SliderImageSvc) {
    this.images = SliderImageSvc.images;
    var self = this;

    this.showImage = true;
    this.enableSearchPage = false;
    this.enableLoginPage = false;

    this.toggleShowImage = function () {
        this.showImage = false;
    }

    this.showHomePage = function () {
        this.enableSearchPage = false;
        this.enableLoginPage = false;
        this.showImage = true;
    }

    this.showSearchPage = function () {
        this.showImage = false;
        this.enableLoginPage = false;
        this.enableSearchPage = true;
    }

    this.showLoginPage = function () {
        this.showImage = false;
        this.enableSearchPage = false;
        this.enableLoginPage = true;
    }
}

var cycleStoreApp = angular.module('CycleStoreApp', ['ngAnimate']);

cycleStoreApp.controller('CycleStoreController', CycleStoreController);

function CycleStoreController(SliderImageSvc) {
    this.images = SliderImageSvc.images;
    var self = this;
    this.bikes = [];
    this.showImage = true;
    this.enableSearchPage = false;
    this.enableLoginPage = false;

    this.loginName = "";
    this.searchCategory = "";

    this.toggleShowImage = function () {
        this.showImage = false;
    }

    this.showHomePage = function () {
        this.enableSearchPage = false;
        this.enableLoginPage = false;
        this.showImage = true;
    }

    this.showLoginPage = function () {
        this.showImage = false;
        this.enableSearchPage = false;
        this.enableLoginPage = true;
    }
}

var cycleStoreApp = angular.module('CycleStoreApp', ['ngAnimate']);

cycleStoreApp.controller('CycleStoreController', CycleStoreController);

function CycleStoreController(SliderImageSvc) {
    var self = this;

    this.images = SliderImageSvc.images;

    this.showImage = true;
    this.enableSearchPage = false;
    this.enableLoginPage = false;
    this.enableRegistrationPage = false;
    this.registrationSuccess = false;

    this.showHomePage = function () {
        this.enableSearchPage = false;
        this.enableLoginPage = false;
        this.showImage = true;
        this.enableRegistrationPage = false;
    }

    this.showLoginPage = function () {
        this.showImage = false;
        this.enableSearchPage = false;
        this.enableLoginPage = true;
        this.enableRegistrationPage = false;
    }

    this.showRegistrationPage = function () {
        this.showImage = false;
        this.enableSearchPage = false;
        this.enableLoginPage = false;
        this.enableRegistrationPage = true;
        this.registrationSuccess = false;
    }
}

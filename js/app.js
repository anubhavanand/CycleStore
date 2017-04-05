var cycleStoreApp = angular.module('CycleStoreApp', ['ngAnimate', 'ngRoute', 'ngCookies', 'ngBreadCrumb', 'ui.router']);

cycleStoreApp.controller('CycleStoreController', CycleStoreController);

function CycleStoreController($rootScope, $cookies, $http) {
    var self = this;

    //this.images = SliderImageSvc.images;
    this.signOut = signOut;

    $rootScope.globals = $cookies.getObject('globals') || {};
    if ($rootScope.globals.currentUser) {
        console.log('called on refresh ' + $rootScope.globals.currentUser.username);
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        self.loginName = $rootScope.globals.currentUser.username;
    }

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
        this.registrationSuccess = false;
    }

    this.showLoginPage = function () {
        this.showImage = false;
        this.enableSearchPage = false;
        this.enableLoginPage = true;
        this.enableRegistrationPage = false;
        this.registrationSuccess = false;
    }

    this.showRegistrationPage = function () {
        this.showImage = false;
        this.enableSearchPage = false;
        this.enableLoginPage = false;
        this.enableRegistrationPage = true;
        this.registrationSuccess = false;
    }

    this.showSearchPage = function () {
        this.showImage = false;
        this.enableSearchPage = true;
        this.enableLoginPage = false;
        this.enableRegistrationPage = false;
        this.registrationSuccess = false;
    }

    function signOut() {
        $rootScope.globals = {};
        $cookies.remove('globals');
        $http.defaults.headers.common.Authorization = 'Basic';
        self.loginName = "";
    }
}

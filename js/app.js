var cycleStoreApp = angular.module('CycleStoreApp', ['ngAnimate', 'ngRoute', 'ngCookies', 'ngBreadCrumb', 'ui.router']);

cycleStoreApp.controller('CycleStoreController', CycleStoreController);

function CycleStoreController($rootScope, $cookies, $http) {
    var self = this;
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
    this.enableProductDetailPage = false;
    this.enableShoppingCartPage = false;

    this.showHomePage = function () {
        this.enableSearchPage = false;
        this.enableLoginPage = false;
        this.showImage = true;
        this.enableRegistrationPage = false;
        this.registrationSuccess = false;
        this.enableProductDetailPage = false;
        this.enableShoppingCartPage = false;
    }

    this.showLoginPage = function () {
        this.showImage = false;
        this.enableSearchPage = false;
        this.enableLoginPage = true;
        this.enableRegistrationPage = false;
        this.registrationSuccess = false;
        this.enableProductDetailPage = false;
        this.enableShoppingCartPage = false;
    }

    this.showRegistrationPage = function () {
        this.showImage = false;
        this.enableSearchPage = false;
        this.enableLoginPage = false;
        this.enableRegistrationPage = true;
        this.registrationSuccess = false;
        this.enableProductDetailPage = false;
        this.enableShoppingCartPage = false;
    }

    this.showSearchPage = function () {
        this.showImage = false;
        this.enableSearchPage = true;
        this.enableLoginPage = false;
        this.enableRegistrationPage = false;
        this.registrationSuccess = false;
        this.enableProductDetailPage = false;
        this.enableShoppingCartPage = false;
    }

    this.showProductDetailPage = function () {
        this.showImage = false;
        this.enableSearchPage = false;
        this.enableLoginPage = false;
        this.enableRegistrationPage = false;
        this.registrationSuccess = false;
        this.enableShoppingCartPage = false;
        this.enableProductDetailPage = true;
    }

    this.showShoppingCartPage = function () {
        this.showImage = false;
        this.enableSearchPage = false;
        this.enableLoginPage = false;
        this.enableRegistrationPage = false;
        this.registrationSuccess = false;
        this.enableProductDetailPage = false;
        this.enableShoppingCartPage = true;
    }

    function signOut() {
        $rootScope.globals = {};
        $cookies.remove('globals');
        $http.defaults.headers.common.Authorization = 'Basic';
        self.loginName = "";
    }
}

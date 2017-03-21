var cycleStoreApp = angular.module('CycleStoreApp', ['ngAnimate']);

cycleStoreApp.controller('CycleStoreController', CycleStoreController);
cycleStoreApp.controller('LoginController', LoginController);

function CycleStoreController(SliderImageSvc, SearchDataSvc) {
    this.images = SliderImageSvc.images;
    var self = this;

    var promiseBikes = SearchDataSvc.getBikes();
    promiseBikes.then(function (data) {
        self.bikes = data;
    });

    this.showImage = true;
    this.toggleShowImage = function () {
        this.showImage = false;
    }

    this.showHomePage = function () {
        this.enableSearchPage = false;
        this.enableLoginPage = false;
        this.showImage = true;
    }
    this.enableSearchPage = false;
    this.showSearchPage = function () {
        this.showImage = false;
        this.enableLoginPage = false;
        this.enableSearchPage = true;
    }
    this.enableLoginPage = false;
    this.showLoginPage = function () {
        this.showImage = false;
        this.enableSearchPage = false;
        this.enableLoginPage = true;
    }
}

function LoginController() {
   /* var self = this;

    var usersData = LoginSvc.getUserData();
    usersData.then(function (data) {
        self.users = data;
    });*/
}

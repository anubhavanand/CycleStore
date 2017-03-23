(function () {
    'use strict';

    angular
        .module('CycleStoreApp')
        .controller('LoginController', LoginController);

    function LoginController(AuthenticationService, $scope) {
        var self = this;

        self.login = login;

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        function login() {
            AuthenticationService.Login(self.username, self.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(self.username, self.password);
                    $scope.$parent.ctrl.showHomePage();
                    $scope.$parent.ctrl.loginName = response.loginName;
                    console.log($scope.$parent.ctrl.loginName);
                } else {
                    self.errorMessage = true;
                }
            });
        };
    }

})();

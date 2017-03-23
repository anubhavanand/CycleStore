(function () {
    'use strict';

    angular
        .module('CycleStoreApp')
        .controller('LoginController', LoginController);

    function LoginController(AuthenticationService, $rootScope) {
        var self = this;

        self.login = login;

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        function login() {
            AuthenticationService.Login(self.username, self.password, function (response) {
                if (response.success) {
                	console.log("Logged in");
                    AuthenticationService.SetCredentials(self.username, self.password);
                    $rootScope.$emit("CallShowHomePage", {});
                } else {
                    self.errorMessage = true;
                }
            });
        };
    }

})();

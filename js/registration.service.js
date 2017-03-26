(function () {
    'use strict';

    angular
        .module('CycleStoreApp')
        .factory('RegistrationService', RegistrationService);

    function RegistrationService($timeout, UserService) {
        var service = {};
        service.Register = Register;
        return service;

        function Register(newUserDetails, callback) {
            $timeout(function () {
                var response;
                UserService.RegisterUser(newUserDetails)
                    .then(function (result) {
                        if (result !== null && result.status == 201 && result.statusText == "Created") {
                            response = { success: true };
                        } else {
                            response = { success: false, message: 'Registraion failed. Please contact admin.' };
                        }
                        callback(response);
                    });
            }, 1000);
        }
    }

})();
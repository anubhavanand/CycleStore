(function () {
    'use strict';

    angular
        .module('CycleStoreApp')
        .factory('UserService', UserService);

    function UserService($http) {
        var service = {};
        service.GetByUsername = GetByUsername;
        service.RegisterUser = RegisterUser;

        return service;

        function GetByUsername(username) {
            return $http.get('http://localhost:3000/users/' + username).then(handleSuccess, handleError('Error getting user by username'));
        }

        function RegisterUser(UserDetails) {
            return $http.post('http://localhost:3000/users/', UserDetails).then({success: true}, handleError('Registraion failed. Please contact admin.'));
        }

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }

})();
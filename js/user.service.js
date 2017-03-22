(function () {
    'use strict';

    angular
        .module('app')
        .factory('UserService', UserService);

    function UserService($http) {
        var service = {};
        service.GetByUsername = GetByUsername;

        return service;

        function GetByUsername(username) {
            return $http.get('http://localhost:3000/users/' + username).then(handleSuccess, handleError('Error getting user by username'));
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
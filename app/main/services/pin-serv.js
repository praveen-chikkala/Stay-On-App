'use strict';

angular.module('main')
    .factory('PinServ',
        function($http, LocationServ, Config) {
            var BASE_URL = Config.ENV.SERVER_URL,
                pinData,
                coordinates = LocationServ.getLocation();
            var params = {
                "screenwidth": window.screen.width,
                "screenheight": window.screen.height,
                "latitude": coordinates.lat,
                "longitude": coordinates.lng,
                "player_onoff": "Yes"
            };

            return {
                getPin: function() {
                    var promise = $http.post(BASE_URL + "device/save", params).then(function(response) {
                        return response.data;
                    }, function(error) {
                        //error
                    })
                    return promise;
                }
            }
        }
    );

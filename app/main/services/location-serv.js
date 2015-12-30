'use strict';
angular.module('main')
    .service('LocationServ', function() {

        this.location = {
            lat: null,
            lng: null
        };

        this.setLocation = function(lat, lng) {
            this.location.lat = lat;
            this.location.lng = lng;
        };

        this.getLocation = function() {
            return this.location;
        }

    });

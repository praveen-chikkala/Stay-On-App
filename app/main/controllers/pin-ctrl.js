'use strict';
angular.module('main')
    .controller('PinCtrl', function($log, $cordovaGeolocation, $state, LocationServ, PinServ, Main, Config) {

        $log.log('Hello from your Controller: PinCtrl in module main:. This is your controller:', this);

        //Initialize variables
        this.pin = null;
        this.pinData = null;
        this.didGetPin = false;


        var posOptions = {
            timeout: 10000,
            enableHighAccuracy: false
        };

        //Get device location
        $cordovaGeolocation
            .getCurrentPosition(posOptions)
            .then(function(position) {
                //Set location coordinates
                LocationServ.setLocation(position.coords.latitude, position.coords.longitude);
                this.getPin();
            }.bind(this), function(err) {
                // error
                throw {
                    name: "Location error",
                    message: err.message,
                };
            });

        this.getPin = function() {
            PinServ.getPin().then(function(data) {
                this.pinData = data;
                this.pin = data.random_key;
                this.didGetPin = true;
            }.bind(this));
        }

        //Display layout
        this.displayLayout = function() {
            // alert("Displaying layout now");
            $state.go('layouts.layout4');
        }
    });

'use strict';
angular.module('main')
    .controller('PinCtrl', function ($log, $cordovaGeolocation, $state, LocationServ, PinServ, Main, Config, $localStorage) {

        $log.log('Hello from your Controller: PinCtrl in module main:. This is your controller:', this);

        //Initialize variables
        this.pin = null;
        this.pinData = null;
        this.didGetPin = false;
        var status = false;
        if($localStorage.random_key_status){
            status = false;
        }else{
            status = true;
            $localStorage.random_key_status = true;
        }

        var posOptions = {
            timeout: 10000,
            enableHighAccuracy: false
        };
        if (status) {
            PinServ.getPin().then(function (data) {
                if(data){
                    this.pinData = data;
                    this.pin = data.random_key;
                    this.didGetPin = true;
                    $localStorage.pin = data.random_key;
                }else{
                    alert("error");
                }
            }.bind(this));
        }else{
            this.pin = $localStorage.pin;
            this.didGetPin = true;
            console.log("Random_key already generated" + this.pin);
        }

//        this.getPin();
//        navigator.geolocation.getCurrentPosition(function(position) {
//            alert(position);
//            LocationServ.setLocation(position.coords.latitude, position.coords.longitude);
//            this.getPin();
//        });
        //Get device location
//        $cordovaGeolocation
//            .getCurrentPosition(posOptions)
//            .then(function (position){
//            //Set location coordinates
//            console.log(position.coords.latitude, position.coords.longitude);
//            LocationServ.setLocation(position.coords.latitude, position.coords.longitude);
//            this.getPin();
//        }.bind(this), function (err) {
//                // error
//                throw {
//                    name: "Location error",
//                    message: err.message
//                };
//            });
//
//        this.getPin = function () {
//            PinServ.getPin().then(function (data) {
//                this.pinData = data;
//                this.pin = data.random_key;
//                this.didGetPin = true;
//            }.bind(this));
//        }


        //Display layout
        this.displayLayout = function () {
            // alert("Displaying layout now");
            $state.go('layouts.layout4');
        }
    });

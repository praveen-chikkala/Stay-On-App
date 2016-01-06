'use strict';
angular.module('main')
    .controller('layout4Ctrl', function ($scope, $log, $state, LocationServ, PinServ, Main, Config, $timeout, $localStorage, $http, $sce) {

        $log.log('Hello from your Controller: layout4Ctrl in module main:. This is your controller:', this);
        //Initialize variables
        var images = [
            {
                "path": "https://stay-on.s3.amazonaws.com/b26dcc37-7a92-4cd0-9c15-525092cb8e71.mp4",
                "delayTime": 120000,
                "type": "video"
            },
            {
                "path": "https://stay-on.s3.amazonaws.com/6c0ac074-7e3e-47ec-ac55-9763047b5702.JPG",
                "delayTime": 6000,
                "type": "image"
            },
            {
                "path": "https://stay-on.s3.amazonaws.com/78b465da-ab92-4bdb-ba66-c8eec0e9c712.png",
                "delayTime": 1000,
                "type": "image"
            },
            {
                "path": "https://stay-on.s3.amazonaws.com/8c4fe4cc-7159-4172-882a-9415cea4caf6.png",
                "delayTime": 1000,
                "type": "image"
            },
            {
                "path": "https://stay-on.s3.amazonaws.com/5bfca466-173a-406a-b22d-ab80f68ef702.mp4",
                "delayTime": 60000,
                "type": "video"
            }

        ];
        $localStorage.images = images;

        console.log($localStorage.images.length);
        $scope.image = $localStorage.images[0];
//        $http.get($scope.image.path, {responseType:'blob'})
//            .then(function(results){
//                var data = results.data;
//                var blob = new Blob(
//                    [data],
//                    {type: "image/png",path:"/"}
//                );
//                saveAs(blob, "myFilename.png");
//            });
        var index = 1;
        animateImages(index);
        function animateImages(index) {
            $timeout(function () {
                $scope.image = $localStorage.images[index];
                index++;
                if (index !== $localStorage.images.length) {
                    animateImages(index);
                }
            }, $scope.image.delayTime);
        }

        $scope.setUrl = function (url) {

            return $sce.trustAsResourceUrl(url);
        }

    });

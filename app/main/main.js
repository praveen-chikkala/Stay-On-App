'use strict';
angular.module('main', [
        'ionic',
        'ngCordova',
        'ui.router',
        'ngStorage'
        // TODO: load other modules selected during generation
    ])
    .config(function ($stateProvider, $urlRouterProvider) {

        // ROUTING with ui.router
        $urlRouterProvider.otherwise('/app/pin');
        $stateProvider
            // this state is placed in the <ion-nav-view> in the index.html
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'main/templates/app.html'
            })
            .state('app.pin', {
                url: '/pin',
                views: {
                    'tab-pin': {
                        templateUrl: 'main/templates/pin.html',
                        controller: 'PinCtrl as ctrl'
                    }
                }
            })
            .state('main', {
                url: '/main',
                abstract: true,
                templateUrl: 'main/templates/tabs.html'
            })
            .state('main.list', {
                url: '/list',
                views: {
                    'tab-list': {
                        templateUrl: 'main/templates/list.html',
                        // controller: 'SomeCtrl as ctrl'
                    }
                }
            })
            .state('main.listDetail', {
                url: '/list/detail',
                views: {
                    'tab-list': {
                        templateUrl: 'main/templates/list-detail.html',
                        // controller: 'SomeCtrl as ctrl'
                    }
                }
            })
            .state('main.debug', {
                url: '/debug',
                views: {
                    'tab-debug': {
                        templateUrl: 'main/templates/debug.html',
                        controller: 'DebugCtrl as ctrl'
                    }
                }
            }).state('main.stayon', {
                url: '/stayon',
                views: {
                    'tab-stayon': {
                        templateUrl: 'main/templates/stayon.html',
                        controller: 'StayonCtrl as ctrl'
                    }
                }
            }).state('layouts', {
                url: '/layouts',
                abstract: true,
                templateUrl: 'main/templates/layouts/layouts.html'
            }).state('layouts.layout1', {
                url: '/layout1',
                views: {
                    'tab-layout1': {
                        templateUrl: 'main/templates/layouts/layout-1.html',
                        // controller: 'StayonCtrl as ctrl'
                    }
                }
            }).state('layouts.layout2', {
                url: '/layout2',
                views: {
                    'tab-layout2': {
                        templateUrl: 'main/templates/layouts/layout-2.html',
                        // controller: 'StayonCtrl as ctrl'
                    }
                }
            }).state('layouts.layout3', {
                url: '/layout3',
                views: {
                    'tab-layout3': {
                        templateUrl: 'main/templates/layouts/layout-3.html',
                        // controller: 'StayonCtrl as ctrl'
                    }
                }
            }).state('layouts.layout4', {
                url: '/layout4',
                views: {
                    'tab-layout4': {
                        templateUrl: 'main/templates/layouts/layout-4.html',
                        controller: 'layout4Ctrl'
                        // controller: 'StayonCtrl as ctrl'
                    }
                }
            }).state('layouts.layout5', {
                url: '/layout5',
                views: {
                    'tab-layout5': {
                        templateUrl: 'main/templates/layouts/layout-5.html',
                        // controller: 'StayonCtrl as ctrl'
                    }
                }
            });
    });

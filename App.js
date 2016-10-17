angular.module('App', ["App.controllers", "App.services", "App.directives", "App.filters", 'ngAnimate', "ngRoute", "ngResource", 'ui.bootstrap'])
    .config(function($routeProvider) {

        $routeProvider
            .when('/home', {
                templateUrl: 'view/home.html',
                controller: 'HomeController'
            })
            .when('/cadastros', {
                templateUrl: 'view/cadastros.html',
                controller: 'CadastrosController'
            })
            .when('/consultas', {
                templateUrl: 'view/consultas.html',
                controller: 'ConsultasController'
            })
            .when('/pedidos', {
                templateUrl: 'view/pedidos.html',
                controller: 'PedidosController'
            })
            .otherwise({ redirectTo: 'home' });
    });

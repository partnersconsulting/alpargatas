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
            .when('/cotacoes', {
                templateUrl: 'view/cotacoes.html',
                controller: 'CotacoesController'
            })
            .when('/pedido1', {
                templateUrl: 'view/pedido1.html',
                controller: 'PedidosController'
            })
            .when('/cadastro1', {
                templateUrl: 'view/cadastro1.html',
                controller: 'CadastrosController'
            })
            .when('/cadastro2', {
                templateUrl: 'view/cadastro2.html',
                controller: 'CadastrosController'
            })
            .when('/cadastro3', {
                templateUrl: 'view/cadastro3.html',
                controller: 'CadastrosController'
            })
            .when('/cadastro4', {
                templateUrl: 'view/cadastro4.html',
                controller: 'CadastrosController'
            })
            .when('/cadastro5', {
                templateUrl: 'view/cadastro5.html',
                controller: 'CadastrosController'
            })

            .otherwise({ redirectTo: 'home' });

    });

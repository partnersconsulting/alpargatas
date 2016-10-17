angular.module("App.controllers", [])
    .controller("HomeController", ["$scope", function($scope) {
        $scope.links = [{
            title: "Cadastros",
            icon: "fa-user",
            text: "Gerenciador de Cadastros Alpargatas",
            link: "/cadastros"
        }, {
            title: "Consultas",
            icon: "fa-search",
            text: "Consultar Pedidos Alpargatas",
            link: "/consultas"
        }, {
            title: "Gerenciar Pedidos",
            icon: "fa-pencil-square-o",
            text: "Gerenciador de Pedidos Alpargatas",
            link: "/pedidos"
        }];
    }])
    .controller("CadastrosController", ["$scope", function($scope) {
        $scope.links = [{
            title: "Estrutura comercial",
            icon: "fa-building-o",
            text: "Gerenciador de Cadastros Alpargatas",
            link: "/cadastros"
        }, {
            title: "Clientes",
            icon: "fa-users",
            text: "Consultar Pedidos Alpargatas",
            link: "/consultas"
        }, {
            title: "Produtos",
            icon: "fa-laptop",
            text: "Gerenciador de Pedidos Alpargatas",
            link: "/pedidos"
        }, {
            title: "Plano de vendas",
            icon: "fa-gift",
            text: "Gerenciador de Pedidos Alpargatas",
            link: "/pedidos"
        }, {
            title: "Cotas de vendas",
            icon: "fa-pie-chart",
            text: "Gerenciador de Pedidos Alpargatas",
            link: "/pedidos"
        }, {
            title: "Disponibilidade",
            icon: "fa-th",
            text: "Gerenciador de Pedidos Alpargatas",
            link: "/pedidos"
        }];
    }])
    .controller("ConsultasController", ["$scope", function($scope) {
    	$scope.links = [{
            title: "Consulta 1",
            icon: "fa-search",
            text: "Consultar Pedidos",
            link: "/consultas"
        },{
            title: "Consulta 2",
            icon: "fa-search",
            text: "Consultar Pedidos Alpargatas",
            link: "/consultas"
        }];

    }])
    .controller("PedidosController", ["$scope", function($scope) {
        $scope.links = [{
            title: "Cadastro sem limite",
            icon: "fa-plus-circle",
            text: "Cadastro de pedido Alpargatas",
            link: "/cadastros"
        }, {
            title: "Cadastro com limite de material",
            icon: "fa-plus-circle",
            text: "Cadastro de pedido Alpargatas",
            link: "/cadastros"
        }, {
            title: "Cadastro com limite de tipo",
            icon: "fa-plus-circle",
            text: "Cadastro de pedido Alpargatas",
            link: "/cadastros"
        }];
    }]);

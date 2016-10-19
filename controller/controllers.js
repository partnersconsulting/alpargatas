angular.module("App.controllers", [])
    .controller("MainController", function($scope, $rootScope, $filter) {


        $rootScope.products = [{
            code: '400001',
            name: 'Chaveiro',
            cotaLivre: true,
            zona: '190000',
            gnv: '110000',
            grv: '20000',
            opcoes: [{ tamanho: '001', cor: '1001', value: 0 }]
        }, {
            code: '400002',
            name: 'Havaianas Retro',
            cotaLivre: false,
            zona: '99000',
            gnv: '19000',
            grv: '10000',
            opcoes: [{ tamanho: '334', cor: '1002' }, { tamanho: '356', cor: '1002' }, { tamanho: '378', cor: '1002' }, { tamanho: '390', cor: '1002' }, { tamanho: '412', cor: '1002' }, { tamanho: '434', cor: '1002' }]
        }, {
            code: '400003',
            name: 'Havaianas tradicional',
            cotaLivre: true,
            zona: '80000',
            gnv: '50000',
            grv: '5000',
            opcoes: [{ tamanho: '334', cor: '1002' }, { tamanho: '356', cor: '1002' }, { tamanho: '378', cor: '1002' }, { tamanho: '390', cor: '1002' }, { tamanho: '412', cor: '1002' }, { tamanho: '434', cor: '1002' }, { tamanho: '334', cor: '1003' }, { tamanho: '356', cor: '1003' }, { tamanho: '378', cor: '1003' }, { tamanho: '390', cor: '1003' }, { tamanho: '412', cor: '1003' }, { tamanho: '434', cor: '1003' }]
        }, {
            code: '400004',
            name: 'Havaianas Color',
            cotaLivre: false,
            zona: '800000',
            gnv: '50000',
            grv: '3000',
            opcoes: [{ tamanho: '334', cor: '1002' }, { tamanho: '356', cor: '1002' }, { tamanho: '378', cor: '1002' }, { tamanho: '390', cor: '1002' }, { tamanho: '412', cor: '1002' }, { tamanho: '434', cor: '1002' }]
        }, {
            code: '700005',
            name: 'Havaianas Simpsons',
            cotaLivre: true,
            zona: '1800000',
            gnv: '770000',
            grv: '33000',
            opcoes: [{ tamanho: 'I21', cor: '1002' }, { tamanho: 'F33', cor: '1002' }]
        }];

        $rootScope.itemPedido = {};
        $rootScope.totalTamanhos = 0;
        $rootScope.itensPedido = [];


        $rootScope.selectProduct = function(code) {
            $rootScope.selectedProduct = $filter('filter')($rootScope.products, { code: code })[0];

            $rootScope.clear();

            $rootScope.cores = {};
            angular.forEach($rootScope.selectedProduct.opcoes, function(opcao, i) {
                $rootScope.cores[opcao.cor] = opcao.cor;
            });

            $rootScope.tamanhos = {};
            angular.forEach($rootScope.selectedProduct.opcoes, function(opcao, i) {
                $rootScope.tamanhos[opcao.tamanho] = opcao.tamanho;
            });


            /*for (cor in $rootScope.cores) {
                for (tamanho in $rootScope.tamanhos) {
                    var itemColor = $rootScope.itemPedido[cor] = {};
                    var itemTamanho = itemColor[tamanho] = {};
                }
            }*/



        }

        $rootScope.onChange = function() {

            //console.log($rootScope.itemPedido['1002']['434']);

            $rootScope.totalTamanhos = 0;
            for (itemColor in $rootScope.itemPedido) {
                if (itemColor != 'code') {


                    for (itemTamanho in $rootScope.itemPedido[itemColor]) {
                        $rootScope.totalTamanhos += $rootScope.itemPedido[itemColor][itemTamanho].value;
                        //console.log('>> ' + $rootScope.itemPedido[itemColor][itemTamanho].value);
                    }

                }
                /*for (itemTamanho in itemColor) {

                console.log('itemTamanho: ' + itemTamanho +' : '+ itemTamanho.value);
                }*/
            }
        }

        $rootScope.clear = function() {
            $rootScope.itemPedido = {};
            $rootScope.itemPedido.code = $rootScope.selectedProduct.code;
            $rootScope.totalTamanhos = 0;
        }

        $rootScope.addItem = function() {
            $rootScope.itemPedido.total = $rootScope.totalTamanhos;
            $rootScope.itensPedido.push($rootScope.itemPedido);

            $rootScope.clear();
        }



        $rootScope.selectProduct($rootScope.products[2].code);

    })
    .controller("HomeController", function($scope, $rootScope) {
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
            title: "Criar Pedidos",
            icon: "fa-pencil-square-o",
            text: "Gerar novo Pedido Alpargatas",
            link: "/pedido1"
        }];

    })
    .controller("CadastrosController", function($scope, $rootScope) {

        $scope.isCollapsed = true;

        $scope.newProduct = {};
        $scope.newColorProduct = {};
        $scope.newSizeProduct = {};

        $scope.tamanhosProdutos = [];
        $scope.coresProdutos = [];



        $scope.salvarTamanhoProduto = function() {
            $scope.tamanhosProdutos.push($scope.newSizeProduct);
            $scope.newSizeProduct = {};
        }
        $scope.salvarCorProduto = function() {
            $scope.coresProdutos.push($scope.newColorProduct);
            $scope.newColorProduct = {};

        }
        $scope.salvarProduto = function() {
            var opcoes = [];
            //opcoes: [{ tamanho: 'I21', cor: '1002' }, { tamanho: 'F33', cor: '1002' }]

            for (var i = $scope.coresProdutos.length - 1; i >= 0; i--) {
                var cor = $scope.coresProdutos[i].code;
                for (var j = $scope.tamanhosProdutos.length - 1; j >= 0; j--) {
                    var item = {};
                    item.cor = cor;
                    item.tamanho = $scope.tamanhosProdutos[j].tamanho;
                    opcoes.push(item);
                }
            }



            $scope.newProduct.opcoes = opcoes;
            $rootScope.products.push($scope.newProduct);
            $scope.newProduct = {};

            $scope.isCollapsed = false;
        }

        $scope.links = [{
            title: "Estrutura comercial",
            icon: "fa-building-o",
            text: "Gerenciador de Cadastros Alpargatas",
            link: "/cadastro1"
        }, {
            title: "Clientes",
            icon: "fa-users",
            text: "Consultar Pedidos Alpargatas",
            link: "/cadastro1"
        }, {
            title: "Produtos",
            icon: "fa-laptop",
            text: "Gerenciador de Pedidos Alpargatas",
            link: "/cadastro1"
        }, {
            title: "Plano de vendas",
            icon: "fa-gift",
            text: "Gerenciador de Pedidos Alpargatas",
            link: "/cadastro1"
        }, {
            title: "Cotas de vendas",
            icon: "fa-pie-chart",
            text: "Gerenciador de Pedidos Alpargatas",
            link: "/cadastro1"
        }, {
            title: "Disponibilidade",
            icon: "fa-th",
            text: "Gerenciador de Pedidos Alpargatas",
            link: "/cadastro1"
        }];
    })
    .controller("ConsultasController", function($scope, $rootScope) {
        $scope.links = [{
            title: "Consulta 1",
            icon: "fa-search",
            text: "Consultar Pedidos",
            link: "/consultas"
        }, {
            title: "Consulta 2",
            icon: "fa-search",
            text: "Consultar Pedidos Alpargatas",
            link: "/consultas"
        }];

    })
    .controller("PedidosController", function($scope, $rootScope) {
        $scope.links = [{
            title: "Pedido sem limite",
            icon: "fa-plus-circle",
            text: "Cadastro de pedido Alpargatas",
            link: "/pedido1"
        }, {
            title: "Pedido com limite de material",
            icon: "fa-plus-circle",
            text: "Cadastro de pedido Alpargatas",
            link: "/pedido2"
        }, {
            title: "Pedido com limite de tipo",
            icon: "fa-plus-circle",
            text: "Cadastro de pedido Alpargatas",
            link: "/pedido3"
        }];


        $scope.materiais = ["d1", "d2", "d3"];


    });

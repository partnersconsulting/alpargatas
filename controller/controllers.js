angular.module("App.controllers", [])
    .controller("MainController", function($scope, $rootScope, $filter) {






        $rootScope.listaGNV = [

            { code: 'AC60', name: '' }
        ];
        $rootScope.listaGRV = [
            { code: '610', name: '' },
            { code: '610', name: '' },
            { code: '620', name: '' },
            { code: '630', name: '' }
        ];
        $rootScope.listaZONA = [
            { code: '600610', name: '' },
            { code: '600611', name: '' },
            { code: '600620', name: '' },
            { code: '600630', name: '' }
        ];
        $rootScope.listaCLIENTE = [
            { code: '100001', name: '' },
            { code: '100002', name: '' },
            { code: '100003', name: '' },
            { code: '100004', name: '' }
        ];

        $rootScope.listaBloqueio = [
            { code: 'gnv', name: '' },
            { code: 'grv', name: '' },
            { code: 'zona', name: '' }

        ];

        $rootScope.listaEstoque = [
            { code: 'geral', name: '' },
            { code: 'produto', name: '' },
            { code: 'cor', name: '' }

        ];
        $rootScope.listaFotos = [
            { code: 'hava1.jpg', name: '' },
            { code: 'hava2.jpg', name: '' },
            { code: 'hava3.jpg', name: '' }

        ];


        $rootScope.selectedGNV = '';
        $rootScope.selectedGRV = '';
        $rootScope.selectedZONA = '';
        $rootScope.selectedCLIENTE = 'teste';






        $rootScope.products = [{
            code: '400001',
            name: 'Chaveiro',
            cotaLivre: true,
            tipoBloqueio: 'gnv',
            tipoEstoque: 'geral',
            estoque: '100000',
            gnv: '110000',
            grv: '20000',
            zona: '1900',

            data: '20/11/2016',
            foto: 'chaveiro.jpg',
            valor: 10.5,
            opcoes: [{ tamanho: '001', cor: '1001', value: 0 }]
        }, {
            code: '400002',
            name: 'Havaianas Retro',
            cotaLivre: true,
            tipoBloqueio: 'grv',
            tipoEstoque: 'geral',
            estoque: '20000',
            gnv: '19000',
            grv: '10000',
            zona: '990',
            data: '10/06/2016',
            foto: 'retro.jpg',
            valor: 18.5,
            opcoes: [{ tamanho: '334', cor: '1002' }, { tamanho: '356', cor: '1002' }, { tamanho: '378', cor: '1002' }, { tamanho: '390', cor: '1002' }, { tamanho: '412', cor: '1002' }, { tamanho: '434', cor: '1002' }]
        }, {
            code: '400003',
            name: 'Havaianas tradicional',
            cotaLivre: false,
            tipoBloqueio: 'gnv',
            tipoEstoque: 'produto',
            estoque: '20000',
            gnv: '50000',
            grv: '5000',
            zona: '800',
            data: '5/12/2016',
            foto: 'tradicional.jpg',
            valor: 16.5,
            opcoes: [{ tamanho: '334', cor: '1002' }, { tamanho: '356', cor: '1002' }, { tamanho: '378', cor: '1002' }, { tamanho: '390', cor: '1002' }, { tamanho: '412', cor: '1002' }, { tamanho: '434', cor: '1002' }, { tamanho: '334', cor: '1003' }, { tamanho: '356', cor: '1003' }, { tamanho: '378', cor: '1003' }, { tamanho: '390', cor: '1003' }, { tamanho: '412', cor: '1003' }, { tamanho: '434', cor: '1003' }]
        }, {
            code: '400004',
            name: 'Havaianas Color',
            cotaLivre: false,
            tipoBloqueio: 'zona',
            tipoEstoque: 'cor',
            estoque: '53800',
            gnv: '50000',
            grv: '3000',
            zona: '800',
            data: '10/12/2016',
            foto: 'color.jpg',
            valor: 20.0,
            opcoes: [{ tamanho: '334', cor: '1002' }, { tamanho: '356', cor: '1002' }, { tamanho: '378', cor: '1002' }, { tamanho: '390', cor: '1002' }, { tamanho: '412', cor: '1002' }, { tamanho: '434', cor: '1002' }]
        }, {
            code: '700005',
            name: 'Havaianas Simpsons',
            cotaLivre: true,
            tipoBloqueio: 'gnv',
            tipoEstoque: 'geral',
            estoque: '600800',
            gnv: '770000',
            grv: '33000',
            zona: '1800',
            tipo: 'grade',
            data: '10/01/2017',
            foto: 'simpsons.jpg',
            valor: 25.0,
            opcoes: [{
                tamanho: 'I21',
                cor: '1002',
                grade: [
                    { tamanho: "212", value: 1 },
                    { tamanho: "234", value: 2 },
                    { tamanho: "256", value: 3 },
                    { tamanho: "278", value: 3 },
                    { tamanho: "290", value: 2 },
                    { tamanho: "312", value: 1 }
                ]
            }, {
                tamanho: 'F33',
                cor: '1002',
                grade: [
                    { tamanho: "334", value: 1 },
                    { tamanho: "356", value: 2 },
                    { tamanho: "378", value: 3 },
                    { tamanho: "390", value: 3 },
                    { tamanho: "412", value: 2 },
                    { tamanho: "434", value: 1 }
                ]
            }]
        }];

        $rootScope.itemPedido = {};
        $rootScope.totalTamanhos = 0;
        $rootScope.itensPedido = [];
        $rootScope.totalValorPedido = 0;


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
            $rootScope.totalTamanhos = 0;
        }

        $rootScope.addItem = function() {
            $rootScope.itemPedido.total = $rootScope.totalTamanhos;


            for (itemColor in $rootScope.itemPedido) {

                for (itemTamanho in $rootScope.itemPedido[itemColor]) {
                    var itemLista = {};
                    itemLista.produto = $rootScope.selectedProduct;
                    itemLista.tamanho = itemTamanho;
                    itemLista.grade = '-';
                    itemLista.value = $rootScope.itemPedido[itemColor][itemTamanho].value;



                    if ($rootScope.selectedProduct.tipo == 'grade') {


                        for (var i = $rootScope.selectedProduct.opcoes.length - 1; i >= 0; i--) {


                            if ($rootScope.selectedProduct.opcoes[i].tamanho == itemTamanho) {
                                var grade = $rootScope.selectedProduct.opcoes[i].grade
                                for (var j = grade.length - 1; j >= 0; j--) {

                                    var itemGrade = {};
                                    itemGrade.produto = $rootScope.selectedProduct;
                                    itemGrade.tamanho = grade[j].tamanho;
                                    itemGrade.grade = itemTamanho;
                                    itemGrade.value = itemLista.value * grade[j].value;


                                    $rootScope.itensPedido.push(itemGrade);

                                    $rootScope.totalValorPedido += (itemGrade.value * itemLista.produto.valor);
                                }

                            }

                        }


                    } else {

                        if (itemLista.value > 0) {
                            $rootScope.totalValorPedido += (itemLista.value * itemLista.produto.valor);
                            $rootScope.itensPedido.push(itemLista);

                        }
                    }

                }

            }

            // $rootScope.itemPedido.produto = $rootScope.selectedProduct;
            //$rootScope.itensPedido.push($rootScope.itemPedido);

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
        $scope.newProduct.data = '20/11/2016';
        $scope.newColorProduct = {};
        $scope.newSizeProduct = {};

        $scope.tamanhosProdutos = [];
        $scope.coresProdutos = [];


        $scope.open2 = function() {
            $scope.popup2.opened = true;
        };

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
            $scope.tamanhosProdutos = [];
            $scope.coresProdutos = [];

            $scope.isCollapsed = !$scope.isCollapsed;
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

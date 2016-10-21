angular.module("App.controllers", [])
    .controller("MainController", function($scope, $rootScope, $filter, $uibModal, $document, $location) {


        var today = new Date();

        $rootScope.dataPedido = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
        $rootScope.itemPedido = {};
        $rootScope.totalTamanhos = 0;
        $rootScope.itensPedido = [];
        $rootScope.totalValorPedido = 0;
        $rootScope.estourouCota = false;
        $rootScope.estourouEstoque = false;


        $rootScope.pedido = {};
        $rootScope.listaPedidos = [{ "escritorio": { "code": "AC60", "anterior": "" }, "equipe": { "code": "610", "anterior": "AC60" }, "regiao": { "code": "600610", "anterior": "610" }, "cliente": { "code": "100001", "anterior": "600610" }, "code": 316906, "itensPedido": [{ "produto": { "code": "400003", "name": "Havaianas tradicional", "cotaLivre": false, "tipoBloqueio": "gnv", "tipoEstoque": "cor", "estoque": "20000", "gnv": "50000", "grv": "5000", "zona": "800", "data": "2016-12-05T02:00:00.000Z", "foto": "tradicional.jpg", "valor": 16.5, "opcoes": [{ "tamanho": "334", "cor": "1002", "estoque": "2000" }, { "tamanho": "356", "cor": "1002", "estoque": "2000" }, { "tamanho": "378", "cor": "1002", "estoque": "2000" }, { "tamanho": "390", "cor": "1002", "estoque": "2000" }, { "tamanho": "412", "cor": "1002", "estoque": "2000" }, { "tamanho": "434", "cor": "1002", "estoque": "2000" }, { "tamanho": "334", "cor": "1003", "estoque": "2000" }, { "tamanho": "356", "cor": "1003", "estoque": "2000" }, { "tamanho": "378", "cor": "1003", "estoque": "2000" }, { "tamanho": "390", "cor": "1003", "estoque": "1500" }, { "tamanho": "412", "cor": "1003", "estoque": "250" }, { "tamanho": "434", "cor": "1003", "estoque": "250" }] }, "tamanho": "356", "grade": "-", "value": 33 }, { "produto": { "code": "400003", "name": "Havaianas tradicional", "cotaLivre": false, "tipoBloqueio": "gnv", "tipoEstoque": "cor", "estoque": "20000", "gnv": "50000", "grv": "5000", "zona": "800", "data": "2016-12-05T02:00:00.000Z", "foto": "tradicional.jpg", "valor": 16.5, "opcoes": [{ "tamanho": "334", "cor": "1002", "estoque": "2000" }, { "tamanho": "356", "cor": "1002", "estoque": "2000" }, { "tamanho": "378", "cor": "1002", "estoque": "2000" }, { "tamanho": "390", "cor": "1002", "estoque": "2000" }, { "tamanho": "412", "cor": "1002", "estoque": "2000" }, { "tamanho": "434", "cor": "1002", "estoque": "2000" }, { "tamanho": "334", "cor": "1003", "estoque": "2000" }, { "tamanho": "356", "cor": "1003", "estoque": "2000" }, { "tamanho": "378", "cor": "1003", "estoque": "2000" }, { "tamanho": "390", "cor": "1003", "estoque": "1500" }, { "tamanho": "412", "cor": "1003", "estoque": "250" }, { "tamanho": "434", "cor": "1003", "estoque": "250" }] }, "tamanho": "378", "grade": "-", "value": 33 }], "dataPrevista": "5/12/2016", "data": "10/10/2016", "valorTotal": 1089 }, { "escritorio": { "code": "AC60", "anterior": "" }, "equipe": { "code": "620", "anterior": "AC60" }, "regiao": { "code": "600620", "anterior": "620" }, "cliente": { "code": "100003", "anterior": "600620" }, "code": 238047, "itensPedido": [{ "produto": { "code": "700005", "name": "Havaianas Simpsons", "cotaLivre": true, "tipoBloqueio": "gnv", "tipoEstoque": "geral", "estoque": "600800", "gnv": "770000", "grv": "33000", "zona": "1800", "tipo": "grade", "data": "2017-01-10T02:00:00.000Z", "foto": "simpsons.jpg", "valor": 25, "opcoes": [{ "tamanho": "I21", "cor": "1002", "estoque": "15000", "grade": [{ "tamanho": "212", "value": 1 }, { "tamanho": "234", "value": 2 }, { "tamanho": "256", "value": 3 }, { "tamanho": "278", "value": 3 }, { "tamanho": "290", "value": 2 }, { "tamanho": "312", "value": 1 }] }, { "tamanho": "F33", "cor": "1002", "estoque": "15000", "grade": [{ "tamanho": "334", "value": 1 }, { "tamanho": "356", "value": 2 }, { "tamanho": "378", "value": 3 }, { "tamanho": "390", "value": 3 }, { "tamanho": "412", "value": 2 }, { "tamanho": "434", "value": 1 }] }] }, "tamanho": "312", "grade": "I21", "value": 10 }, { "produto": { "code": "700005", "name": "Havaianas Simpsons", "cotaLivre": true, "tipoBloqueio": "gnv", "tipoEstoque": "geral", "estoque": "600800", "gnv": "770000", "grv": "33000", "zona": "1800", "tipo": "grade", "data": "2017-01-10T02:00:00.000Z", "foto": "simpsons.jpg", "valor": 25, "opcoes": [{ "tamanho": "I21", "cor": "1002", "estoque": "15000", "grade": [{ "tamanho": "212", "value": 1 }, { "tamanho": "234", "value": 2 }, { "tamanho": "256", "value": 3 }, { "tamanho": "278", "value": 3 }, { "tamanho": "290", "value": 2 }, { "tamanho": "312", "value": 1 }] }, { "tamanho": "F33", "cor": "1002", "estoque": "15000", "grade": [{ "tamanho": "334", "value": 1 }, { "tamanho": "356", "value": 2 }, { "tamanho": "378", "value": 3 }, { "tamanho": "390", "value": 3 }, { "tamanho": "412", "value": 2 }, { "tamanho": "434", "value": 1 }] }] }, "tamanho": "290", "grade": "I21", "value": 20 }, { "produto": { "code": "700005", "name": "Havaianas Simpsons", "cotaLivre": true, "tipoBloqueio": "gnv", "tipoEstoque": "geral", "estoque": "600800", "gnv": "770000", "grv": "33000", "zona": "1800", "tipo": "grade", "data": "2017-01-10T02:00:00.000Z", "foto": "simpsons.jpg", "valor": 25, "opcoes": [{ "tamanho": "I21", "cor": "1002", "estoque": "15000", "grade": [{ "tamanho": "212", "value": 1 }, { "tamanho": "234", "value": 2 }, { "tamanho": "256", "value": 3 }, { "tamanho": "278", "value": 3 }, { "tamanho": "290", "value": 2 }, { "tamanho": "312", "value": 1 }] }, { "tamanho": "F33", "cor": "1002", "estoque": "15000", "grade": [{ "tamanho": "334", "value": 1 }, { "tamanho": "356", "value": 2 }, { "tamanho": "378", "value": 3 }, { "tamanho": "390", "value": 3 }, { "tamanho": "412", "value": 2 }, { "tamanho": "434", "value": 1 }] }] }, "tamanho": "278", "grade": "I21", "value": 30 }, { "produto": { "code": "700005", "name": "Havaianas Simpsons", "cotaLivre": true, "tipoBloqueio": "gnv", "tipoEstoque": "geral", "estoque": "600800", "gnv": "770000", "grv": "33000", "zona": "1800", "tipo": "grade", "data": "2017-01-10T02:00:00.000Z", "foto": "simpsons.jpg", "valor": 25, "opcoes": [{ "tamanho": "I21", "cor": "1002", "estoque": "15000", "grade": [{ "tamanho": "212", "value": 1 }, { "tamanho": "234", "value": 2 }, { "tamanho": "256", "value": 3 }, { "tamanho": "278", "value": 3 }, { "tamanho": "290", "value": 2 }, { "tamanho": "312", "value": 1 }] }, { "tamanho": "F33", "cor": "1002", "estoque": "15000", "grade": [{ "tamanho": "334", "value": 1 }, { "tamanho": "356", "value": 2 }, { "tamanho": "378", "value": 3 }, { "tamanho": "390", "value": 3 }, { "tamanho": "412", "value": 2 }, { "tamanho": "434", "value": 1 }] }] }, "tamanho": "256", "grade": "I21", "value": 30 }, { "produto": { "code": "700005", "name": "Havaianas Simpsons", "cotaLivre": true, "tipoBloqueio": "gnv", "tipoEstoque": "geral", "estoque": "600800", "gnv": "770000", "grv": "33000", "zona": "1800", "tipo": "grade", "data": "2017-01-10T02:00:00.000Z", "foto": "simpsons.jpg", "valor": 25, "opcoes": [{ "tamanho": "I21", "cor": "1002", "estoque": "15000", "grade": [{ "tamanho": "212", "value": 1 }, { "tamanho": "234", "value": 2 }, { "tamanho": "256", "value": 3 }, { "tamanho": "278", "value": 3 }, { "tamanho": "290", "value": 2 }, { "tamanho": "312", "value": 1 }] }, { "tamanho": "F33", "cor": "1002", "estoque": "15000", "grade": [{ "tamanho": "334", "value": 1 }, { "tamanho": "356", "value": 2 }, { "tamanho": "378", "value": 3 }, { "tamanho": "390", "value": 3 }, { "tamanho": "412", "value": 2 }, { "tamanho": "434", "value": 1 }] }] }, "tamanho": "234", "grade": "I21", "value": 20 }, { "produto": { "code": "700005", "name": "Havaianas Simpsons", "cotaLivre": true, "tipoBloqueio": "gnv", "tipoEstoque": "geral", "estoque": "600800", "gnv": "770000", "grv": "33000", "zona": "1800", "tipo": "grade", "data": "2017-01-10T02:00:00.000Z", "foto": "simpsons.jpg", "valor": 25, "opcoes": [{ "tamanho": "I21", "cor": "1002", "estoque": "15000", "grade": [{ "tamanho": "212", "value": 1 }, { "tamanho": "234", "value": 2 }, { "tamanho": "256", "value": 3 }, { "tamanho": "278", "value": 3 }, { "tamanho": "290", "value": 2 }, { "tamanho": "312", "value": 1 }] }, { "tamanho": "F33", "cor": "1002", "estoque": "15000", "grade": [{ "tamanho": "334", "value": 1 }, { "tamanho": "356", "value": 2 }, { "tamanho": "378", "value": 3 }, { "tamanho": "390", "value": 3 }, { "tamanho": "412", "value": 2 }, { "tamanho": "434", "value": 1 }] }] }, "tamanho": "212", "grade": "I21", "value": 10 }], "dataPrevista": "10/1/2017", "data": "11/10/2016", "valorTotal": 4089 }, { "escritorio": { "code": "AC60", "anterior": "" }, "equipe": { "code": "620", "anterior": "AC60" }, "regiao": { "code": "600620", "anterior": "620" }, "cliente": { "code": "100003", "anterior": "600620" }, "code": 841381, "itensPedido": [{ "produto": { "code": "400001", "name": "Chaveiro", "cotaLivre": true, "tipoBloqueio": "gnv", "tipoEstoque": "geral", "estoque": "100000", "gnv": "110000", "grv": "20000", "zona": "1900", "data": "2016-11-20T02:00:00.000Z", "foto": "chaveiro.jpg", "valor": 10.5, "opcoes": [{ "tamanho": "001", "cor": "1001", "value": 0 }] }, "tamanho": "001", "grade": "-", "value": 10 }, { "produto": { "code": "400004", "name": "Havaianas Color", "cotaLivre": false, "tipoBloqueio": "zona", "tipoEstoque": "tamanho", "estoque": "60000", "gnv": "50000", "grv": "3000", "zona": "800", "data": "2016-12-10T02:00:00.000Z", "foto": "color.jpg", "valor": 20, "opcoes": [{ "tamanho": "334", "cor": "1002", "estoque": "15000" }, { "tamanho": "356", "cor": "1002", "estoque": "10000" }, { "tamanho": "378", "cor": "1002", "estoque": "5000" }, { "tamanho": "390", "cor": "1002", "estoque": "20000" }, { "tamanho": "412", "cor": "1002", "estoque": "7000" }, { "tamanho": "434", "cor": "1002", "estoque": "3000" }] }, "tamanho": "378", "grade": "-", "value": 333 }], "dataPrevista": "10/1/2017", "data": "13/10/2016", "valorTotal": 10854 }, { "escritorio": { "code": "AC60", "anterior": "" }, "equipe": { "code": "610", "anterior": "AC60" }, "regiao": { "code": "600610", "anterior": "610" }, "cliente": { "code": "100001", "anterior": "600610" }, "code": 307500, "itensPedido": [{ "produto": { "code": "400003", "name": "Havaianas tradicional", "cotaLivre": false, "tipoBloqueio": "gnv", "tipoEstoque": "cor", "estoque": "20000", "gnv": "50000", "grv": "5000", "zona": "800", "data": "2016-12-05T02:00:00.000Z", "foto": "tradicional.jpg", "valor": 16.5, "opcoes": [{ "tamanho": "334", "cor": "1002", "estoque": "2000" }, { "tamanho": "356", "cor": "1002", "estoque": "2000" }, { "tamanho": "378", "cor": "1002", "estoque": "2000" }, { "tamanho": "390", "cor": "1002", "estoque": "2000" }, { "tamanho": "412", "cor": "1002", "estoque": "2000" }, { "tamanho": "434", "cor": "1002", "estoque": "2000" }, { "tamanho": "334", "cor": "1003", "estoque": "2000" }, { "tamanho": "356", "cor": "1003", "estoque": "2000" }, { "tamanho": "378", "cor": "1003", "estoque": "2000" }, { "tamanho": "390", "cor": "1003", "estoque": "1500" }, { "tamanho": "412", "cor": "1003", "estoque": "250" }, { "tamanho": "434", "cor": "1003", "estoque": "250" }] }, "tamanho": "378", "grade": "-", "value": 22 }, { "produto": { "code": "400003", "name": "Havaianas tradicional", "cotaLivre": false, "tipoBloqueio": "gnv", "tipoEstoque": "cor", "estoque": "20000", "gnv": "50000", "grv": "5000", "zona": "800", "data": "2016-12-05T02:00:00.000Z", "foto": "tradicional.jpg", "valor": 16.5, "opcoes": [{ "tamanho": "334", "cor": "1002", "estoque": "2000" }, { "tamanho": "356", "cor": "1002", "estoque": "2000" }, { "tamanho": "378", "cor": "1002", "estoque": "2000" }, { "tamanho": "390", "cor": "1002", "estoque": "2000" }, { "tamanho": "412", "cor": "1002", "estoque": "2000" }, { "tamanho": "434", "cor": "1002", "estoque": "2000" }, { "tamanho": "334", "cor": "1003", "estoque": "2000" }, { "tamanho": "356", "cor": "1003", "estoque": "2000" }, { "tamanho": "378", "cor": "1003", "estoque": "2000" }, { "tamanho": "390", "cor": "1003", "estoque": "1500" }, { "tamanho": "412", "cor": "1003", "estoque": "250" }, { "tamanho": "434", "cor": "1003", "estoque": "250" }] }, "tamanho": "412", "grade": "-", "value": 22 }, { "produto": { "code": "400003", "name": "Havaianas tradicional", "cotaLivre": false, "tipoBloqueio": "gnv", "tipoEstoque": "cor", "estoque": "20000", "gnv": "50000", "grv": "5000", "zona": "800", "data": "2016-12-05T02:00:00.000Z", "foto": "tradicional.jpg", "valor": 16.5, "opcoes": [{ "tamanho": "334", "cor": "1002", "estoque": "2000" }, { "tamanho": "356", "cor": "1002", "estoque": "2000" }, { "tamanho": "378", "cor": "1002", "estoque": "2000" }, { "tamanho": "390", "cor": "1002", "estoque": "2000" }, { "tamanho": "412", "cor": "1002", "estoque": "2000" }, { "tamanho": "434", "cor": "1002", "estoque": "2000" }, { "tamanho": "334", "cor": "1003", "estoque": "2000" }, { "tamanho": "356", "cor": "1003", "estoque": "2000" }, { "tamanho": "378", "cor": "1003", "estoque": "2000" }, { "tamanho": "390", "cor": "1003", "estoque": "1500" }, { "tamanho": "412", "cor": "1003", "estoque": "250" }, { "tamanho": "434", "cor": "1003", "estoque": "250" }] }, "tamanho": "378", "grade": "-", "value": 22 }, { "produto": { "code": "400003", "name": "Havaianas tradicional", "cotaLivre": false, "tipoBloqueio": "gnv", "tipoEstoque": "cor", "estoque": "20000", "gnv": "50000", "grv": "5000", "zona": "800", "data": "2016-12-05T02:00:00.000Z", "foto": "tradicional.jpg", "valor": 16.5, "opcoes": [{ "tamanho": "334", "cor": "1002", "estoque": "2000" }, { "tamanho": "356", "cor": "1002", "estoque": "2000" }, { "tamanho": "378", "cor": "1002", "estoque": "2000" }, { "tamanho": "390", "cor": "1002", "estoque": "2000" }, { "tamanho": "412", "cor": "1002", "estoque": "2000" }, { "tamanho": "434", "cor": "1002", "estoque": "2000" }, { "tamanho": "334", "cor": "1003", "estoque": "2000" }, { "tamanho": "356", "cor": "1003", "estoque": "2000" }, { "tamanho": "378", "cor": "1003", "estoque": "2000" }, { "tamanho": "390", "cor": "1003", "estoque": "1500" }, { "tamanho": "412", "cor": "1003", "estoque": "250" }, { "tamanho": "434", "cor": "1003", "estoque": "250" }] }, "tamanho": "390", "grade": "-", "value": 22 }], "dataPrevista": "10/1/2017", "data": "13/10/2016", "valorTotal": 12306 }, { "escritorio": { "code": "AC60", "anterior": "" }, "equipe": { "code": "630", "anterior": "AC60" }, "regiao": { "code": "600630", "anterior": "630" }, "cliente": { "code": "100004", "anterior": "600630" }, "code": 336138, "itensPedido": [{ "produto": { "code": "400002", "name": "Havaianas Retro", "cotaLivre": true, "tipoBloqueio": "grv", "tipoEstoque": "geral", "estoque": "20000", "gnv": "19000", "grv": "10000", "zona": "990", "data": "2016-06-10T03:00:00.000Z", "foto": "retro.jpg", "valor": 18.5, "opcoes": [{ "tamanho": "334", "cor": "1002" }, { "tamanho": "356", "cor": "1002" }, { "tamanho": "378", "cor": "1002" }, { "tamanho": "390", "cor": "1002" }, { "tamanho": "412", "cor": "1002" }, { "tamanho": "434", "cor": "1002" }] }, "tamanho": "356", "grade": "-", "value": 222 }, { "produto": { "code": "400002", "name": "Havaianas Retro", "cotaLivre": true, "tipoBloqueio": "grv", "tipoEstoque": "geral", "estoque": "20000", "gnv": "19000", "grv": "10000", "zona": "990", "data": "2016-06-10T03:00:00.000Z", "foto": "retro.jpg", "valor": 18.5, "opcoes": [{ "tamanho": "334", "cor": "1002" }, { "tamanho": "356", "cor": "1002" }, { "tamanho": "378", "cor": "1002" }, { "tamanho": "390", "cor": "1002" }, { "tamanho": "412", "cor": "1002" }, { "tamanho": "434", "cor": "1002" }] }, "tamanho": "378", "grade": "-", "value": 2 }, { "produto": { "code": "400002", "name": "Havaianas Retro", "cotaLivre": true, "tipoBloqueio": "grv", "tipoEstoque": "geral", "estoque": "20000", "gnv": "19000", "grv": "10000", "zona": "990", "data": "2016-06-10T03:00:00.000Z", "foto": "retro.jpg", "valor": 18.5, "opcoes": [{ "tamanho": "334", "cor": "1002" }, { "tamanho": "356", "cor": "1002" }, { "tamanho": "378", "cor": "1002" }, { "tamanho": "390", "cor": "1002" }, { "tamanho": "412", "cor": "1002" }, { "tamanho": "434", "cor": "1002" }] }, "tamanho": "390", "grade": "-", "value": 2 }, { "produto": { "code": "400002", "name": "Havaianas Retro", "cotaLivre": true, "tipoBloqueio": "grv", "tipoEstoque": "geral", "estoque": "20000", "gnv": "19000", "grv": "10000", "zona": "990", "data": "2016-06-10T03:00:00.000Z", "foto": "retro.jpg", "valor": 18.5, "opcoes": [{ "tamanho": "334", "cor": "1002" }, { "tamanho": "356", "cor": "1002" }, { "tamanho": "378", "cor": "1002" }, { "tamanho": "390", "cor": "1002" }, { "tamanho": "412", "cor": "1002" }, { "tamanho": "434", "cor": "1002" }] }, "tamanho": "412", "grade": "-", "value": 2 }], "dataPrevista": "10/1/2017", "data": "17/10/2016", "valorTotal": 16524 }, { "escritorio": { "code": "AC60", "anterior": "" }, "equipe": { "code": "610", "anterior": "AC60" }, "regiao": { "code": "600610", "anterior": "610" }, "cliente": { "code": "100001", "anterior": "600610" }, "code": 172002, "itensPedido": [{ "produto": { "code": "400002", "name": "Havaianas Retro", "cotaLivre": true, "tipoBloqueio": "grv", "tipoEstoque": "geral", "estoque": "20000", "gnv": "19000", "grv": "10000", "zona": "990", "data": "2016-06-10T03:00:00.000Z", "foto": "retro.jpg", "valor": 18.5, "opcoes": [{ "tamanho": "334", "cor": "1002" }, { "tamanho": "356", "cor": "1002" }, { "tamanho": "378", "cor": "1002" }, { "tamanho": "390", "cor": "1002" }, { "tamanho": "412", "cor": "1002" }, { "tamanho": "434", "cor": "1002" }] }, "tamanho": "334", "grade": "-", "value": 2 }, { "produto": { "code": "400002", "name": "Havaianas Retro", "cotaLivre": true, "tipoBloqueio": "grv", "tipoEstoque": "geral", "estoque": "20000", "gnv": "19000", "grv": "10000", "zona": "990", "data": "2016-06-10T03:00:00.000Z", "foto": "retro.jpg", "valor": 18.5, "opcoes": [{ "tamanho": "334", "cor": "1002" }, { "tamanho": "356", "cor": "1002" }, { "tamanho": "378", "cor": "1002" }, { "tamanho": "390", "cor": "1002" }, { "tamanho": "412", "cor": "1002" }, { "tamanho": "434", "cor": "1002" }] }, "tamanho": "356", "grade": "-", "value": 2 }, { "produto": { "code": "400002", "name": "Havaianas Retro", "cotaLivre": true, "tipoBloqueio": "grv", "tipoEstoque": "geral", "estoque": "20000", "gnv": "19000", "grv": "10000", "zona": "990", "data": "2016-06-10T03:00:00.000Z", "foto": "retro.jpg", "valor": 18.5, "opcoes": [{ "tamanho": "334", "cor": "1002" }, { "tamanho": "356", "cor": "1002" }, { "tamanho": "378", "cor": "1002" }, { "tamanho": "390", "cor": "1002" }, { "tamanho": "412", "cor": "1002" }, { "tamanho": "434", "cor": "1002" }] }, "tamanho": "378", "grade": "-", "value": 2 }, { "produto": { "code": "400002", "name": "Havaianas Retro", "cotaLivre": true, "tipoBloqueio": "grv", "tipoEstoque": "geral", "estoque": "20000", "gnv": "19000", "grv": "10000", "zona": "990", "data": "2016-06-10T03:00:00.000Z", "foto": "retro.jpg", "valor": 18.5, "opcoes": [{ "tamanho": "334", "cor": "1002" }, { "tamanho": "356", "cor": "1002" }, { "tamanho": "378", "cor": "1002" }, { "tamanho": "390", "cor": "1002" }, { "tamanho": "412", "cor": "1002" }, { "tamanho": "434", "cor": "1002" }] }, "tamanho": "390", "grade": "-", "value": 2 }, { "produto": { "code": "400002", "name": "Havaianas Retro", "cotaLivre": true, "tipoBloqueio": "grv", "tipoEstoque": "geral", "estoque": "20000", "gnv": "19000", "grv": "10000", "zona": "990", "data": "2016-06-10T03:00:00.000Z", "foto": "retro.jpg", "valor": 18.5, "opcoes": [{ "tamanho": "334", "cor": "1002" }, { "tamanho": "356", "cor": "1002" }, { "tamanho": "378", "cor": "1002" }, { "tamanho": "390", "cor": "1002" }, { "tamanho": "412", "cor": "1002" }, { "tamanho": "434", "cor": "1002" }] }, "tamanho": "412", "grade": "-", "value": 2 }, { "produto": { "code": "400002", "name": "Havaianas Retro", "cotaLivre": true, "tipoBloqueio": "grv", "tipoEstoque": "geral", "estoque": "20000", "gnv": "19000", "grv": "10000", "zona": "990", "data": "2016-06-10T03:00:00.000Z", "foto": "retro.jpg", "valor": 18.5, "opcoes": [{ "tamanho": "334", "cor": "1002" }, { "tamanho": "356", "cor": "1002" }, { "tamanho": "378", "cor": "1002" }, { "tamanho": "390", "cor": "1002" }, { "tamanho": "412", "cor": "1002" }, { "tamanho": "434", "cor": "1002" }] }, "tamanho": "356", "grade": "-", "value": 3333 }], "dataPrevista": "10/1/2017", "data": "17/10/2016", "valorTotal": 78369.5 }, { "escritorio": { "code": "AC60", "anterior": "" }, "equipe": { "code": "610", "anterior": "AC60" }, "regiao": { "code": "600611", "anterior": "610" }, "cliente": { "code": "100002", "anterior": "600611" }, "code": 411899, "itensPedido": [{ "produto": { "code": "400004", "name": "Havaianas Color", "cotaLivre": false, "tipoBloqueio": "zona", "tipoEstoque": "tamanho", "estoque": "60000", "gnv": "50000", "grv": "3000", "zona": "800", "data": "2016-12-10T02:00:00.000Z", "foto": "color.jpg", "valor": 20, "opcoes": [{ "tamanho": "334", "cor": "1002", "estoque": "15000" }, { "tamanho": "356", "cor": "1002", "estoque": "10000" }, { "tamanho": "378", "cor": "1002", "estoque": "5000" }, { "tamanho": "390", "cor": "1002", "estoque": "20000" }, { "tamanho": "412", "cor": "1002", "estoque": "7000" }, { "tamanho": "434", "cor": "1002", "estoque": "3000" }] }, "tamanho": "334", "grade": "-", "value": 22 }, { "produto": { "code": "400004", "name": "Havaianas Color", "cotaLivre": false, "tipoBloqueio": "zona", "tipoEstoque": "tamanho", "estoque": "60000", "gnv": "50000", "grv": "3000", "zona": "800", "data": "2016-12-10T02:00:00.000Z", "foto": "color.jpg", "valor": 20, "opcoes": [{ "tamanho": "334", "cor": "1002", "estoque": "15000" }, { "tamanho": "356", "cor": "1002", "estoque": "10000" }, { "tamanho": "378", "cor": "1002", "estoque": "5000" }, { "tamanho": "390", "cor": "1002", "estoque": "20000" }, { "tamanho": "412", "cor": "1002", "estoque": "7000" }, { "tamanho": "434", "cor": "1002", "estoque": "3000" }] }, "tamanho": "356", "grade": "-", "value": 22 }, { "produto": { "code": "400004", "name": "Havaianas Color", "cotaLivre": false, "tipoBloqueio": "zona", "tipoEstoque": "tamanho", "estoque": "60000", "gnv": "50000", "grv": "3000", "zona": "800", "data": "2016-12-10T02:00:00.000Z", "foto": "color.jpg", "valor": 20, "opcoes": [{ "tamanho": "334", "cor": "1002", "estoque": "15000" }, { "tamanho": "356", "cor": "1002", "estoque": "10000" }, { "tamanho": "378", "cor": "1002", "estoque": "5000" }, { "tamanho": "390", "cor": "1002", "estoque": "20000" }, { "tamanho": "412", "cor": "1002", "estoque": "7000" }, { "tamanho": "434", "cor": "1002", "estoque": "3000" }] }, "tamanho": "378", "grade": "-", "value": 22 }, { "produto": { "code": "400004", "name": "Havaianas Color", "cotaLivre": false, "tipoBloqueio": "zona", "tipoEstoque": "tamanho", "estoque": "60000", "gnv": "50000", "grv": "3000", "zona": "800", "data": "2016-12-10T02:00:00.000Z", "foto": "color.jpg", "valor": 20, "opcoes": [{ "tamanho": "334", "cor": "1002", "estoque": "15000" }, { "tamanho": "356", "cor": "1002", "estoque": "10000" }, { "tamanho": "378", "cor": "1002", "estoque": "5000" }, { "tamanho": "390", "cor": "1002", "estoque": "20000" }, { "tamanho": "412", "cor": "1002", "estoque": "7000" }, { "tamanho": "434", "cor": "1002", "estoque": "3000" }] }, "tamanho": "390", "grade": "-", "value": 22 }], "dataPrevista": "10/1/2017", "data": "18/10/2016", "valorTotal": 80129.5 }];
        $rootScope.listaCotacoes = [{ "escritorio": { "code": "AC60", "anterior": "" }, "equipe": { "code": "610", "anterior": "AC60" }, "regiao": { "code": "600610", "anterior": "610" }, "cliente": { "code": "100001", "anterior": "600610" }, "code": 260704, "itensPedido": [{ "produto": { "code": "400003", "name": "Havaianas tradicional", "cotaLivre": false, "tipoBloqueio": "gnv", "tipoEstoque": "cor", "estoque": "20000", "gnv": "50000", "grv": "5000", "zona": "800", "data": "2016-12-05T02:00:00.000Z", "foto": "tradicional.jpg", "valor": 16.5, "opcoes": [{ "tamanho": "334", "cor": "1002", "estoque": "2000" }, { "tamanho": "356", "cor": "1002", "estoque": "2000" }, { "tamanho": "378", "cor": "1002", "estoque": "2000" }, { "tamanho": "390", "cor": "1002", "estoque": "2000" }, { "tamanho": "412", "cor": "1002", "estoque": "2000" }, { "tamanho": "434", "cor": "1002", "estoque": "2000" }, { "tamanho": "334", "cor": "1003", "estoque": "2000" }, { "tamanho": "356", "cor": "1003", "estoque": "2000" }, { "tamanho": "378", "cor": "1003", "estoque": "2000" }, { "tamanho": "390", "cor": "1003", "estoque": "1500" }, { "tamanho": "412", "cor": "1003", "estoque": "250" }, { "tamanho": "434", "cor": "1003", "estoque": "250" }] }, "tamanho": "334", "grade": "-", "value": 33 }, { "produto": { "code": "400003", "name": "Havaianas tradicional", "cotaLivre": false, "tipoBloqueio": "gnv", "tipoEstoque": "cor", "estoque": "20000", "gnv": "50000", "grv": "5000", "zona": "800", "data": "2016-12-05T02:00:00.000Z", "foto": "tradicional.jpg", "valor": 16.5, "opcoes": [{ "tamanho": "334", "cor": "1002", "estoque": "2000" }, { "tamanho": "356", "cor": "1002", "estoque": "2000" }, { "tamanho": "378", "cor": "1002", "estoque": "2000" }, { "tamanho": "390", "cor": "1002", "estoque": "2000" }, { "tamanho": "412", "cor": "1002", "estoque": "2000" }, { "tamanho": "434", "cor": "1002", "estoque": "2000" }, { "tamanho": "334", "cor": "1003", "estoque": "2000" }, { "tamanho": "356", "cor": "1003", "estoque": "2000" }, { "tamanho": "378", "cor": "1003", "estoque": "2000" }, { "tamanho": "390", "cor": "1003", "estoque": "1500" }, { "tamanho": "412", "cor": "1003", "estoque": "250" }, { "tamanho": "434", "cor": "1003", "estoque": "250" }] }, "tamanho": "356", "grade": "-", "value": 44 }, { "produto": { "code": "400004", "name": "Havaianas Color", "cotaLivre": false, "tipoBloqueio": "zona", "tipoEstoque": "tamanho", "estoque": "60000", "gnv": "50000", "grv": "3000", "zona": "800", "data": "2016-12-10T02:00:00.000Z", "foto": "color.jpg", "valor": 20, "opcoes": [{ "tamanho": "334", "cor": "1002", "estoque": "15000" }, { "tamanho": "356", "cor": "1002", "estoque": "10000" }, { "tamanho": "378", "cor": "1002", "estoque": "5000" }, { "tamanho": "390", "cor": "1002", "estoque": "20000" }, { "tamanho": "412", "cor": "1002", "estoque": "7000" }, { "tamanho": "434", "cor": "1002", "estoque": "3000" }] }, "tamanho": "378", "grade": "-", "value": 33 }], "dataPrevista": "10/12/2016", "data": "17/10/2016", "valorTotal": 1930.5 }, { "escritorio": { "code": "AC60", "anterior": "" }, "equipe": { "code": "610", "anterior": "AC60" }, "regiao": { "code": "600610", "anterior": "610" }, "cliente": { "code": "100001", "anterior": "600610" }, "code": 297214, "itensPedido": [{ "produto": { "code": "400001", "name": "Chaveiro", "cotaLivre": true, "tipoBloqueio": "gnv", "tipoEstoque": "geral", "estoque": "100000", "gnv": "110000", "grv": "20000", "zona": "1900", "data": "2016-11-20T02:00:00.000Z", "foto": "chaveiro.jpg", "valor": 10.5, "opcoes": [{ "tamanho": "001", "cor": "1001", "value": 0 }] }, "tamanho": "001", "grade": "-", "value": 1000 }], "dataPrevista": "10/12/2016", "data": "18/10/2016", "valorTotal": 12430.5 }, { "escritorio": { "code": "AC60", "anterior": "" }, "equipe": { "code": "630", "anterior": "AC60" }, "regiao": { "code": "600630", "anterior": "630" }, "cliente": { "code": "100004", "anterior": "600630" }, "code": 522164, "itensPedido": [{ "produto": { "code": "400004", "name": "Havaianas Color", "cotaLivre": false, "tipoBloqueio": "zona", "tipoEstoque": "tamanho", "estoque": "60000", "gnv": "50000", "grv": "3000", "zona": "800", "data": "2016-12-10T02:00:00.000Z", "foto": "color.jpg", "valor": 20, "opcoes": [{ "tamanho": "334", "cor": "1002", "estoque": "15000" }, { "tamanho": "356", "cor": "1002", "estoque": "10000" }, { "tamanho": "378", "cor": "1002", "estoque": "5000" }, { "tamanho": "390", "cor": "1002", "estoque": "20000" }, { "tamanho": "412", "cor": "1002", "estoque": "7000" }, { "tamanho": "434", "cor": "1002", "estoque": "3000" }] }, "tamanho": "378", "grade": "-", "value": 44 }, { "produto": { "code": "400002", "name": "Havaianas Retro", "cotaLivre": true, "tipoBloqueio": "grv", "tipoEstoque": "geral", "estoque": "20000", "gnv": "19000", "grv": "10000", "zona": "990", "data": "2016-06-10T03:00:00.000Z", "foto": "retro.jpg", "valor": 18.5, "opcoes": [{ "tamanho": "334", "cor": "1002" }, { "tamanho": "356", "cor": "1002" }, { "tamanho": "378", "cor": "1002" }, { "tamanho": "390", "cor": "1002" }, { "tamanho": "412", "cor": "1002" }, { "tamanho": "434", "cor": "1002" }] }, "tamanho": "390", "grade": "-", "value": 44 }, { "produto": { "code": "400003", "name": "Havaianas tradicional", "cotaLivre": false, "tipoBloqueio": "gnv", "tipoEstoque": "cor", "estoque": "20000", "gnv": "50000", "grv": "5000", "zona": "800", "data": "2016-12-05T02:00:00.000Z", "foto": "tradicional.jpg", "valor": 16.5, "opcoes": [{ "tamanho": "334", "cor": "1002", "estoque": "2000" }, { "tamanho": "356", "cor": "1002", "estoque": "2000" }, { "tamanho": "378", "cor": "1002", "estoque": "2000" }, { "tamanho": "390", "cor": "1002", "estoque": "2000" }, { "tamanho": "412", "cor": "1002", "estoque": "2000" }, { "tamanho": "434", "cor": "1002", "estoque": "2000" }, { "tamanho": "334", "cor": "1003", "estoque": "2000" }, { "tamanho": "356", "cor": "1003", "estoque": "2000" }, { "tamanho": "378", "cor": "1003", "estoque": "2000" }, { "tamanho": "390", "cor": "1003", "estoque": "1500" }, { "tamanho": "412", "cor": "1003", "estoque": "250" }, { "tamanho": "434", "cor": "1003", "estoque": "250" }] }, "tamanho": "390", "grade": "-", "value": 4 }, { "produto": { "code": "400003", "name": "Havaianas tradicional", "cotaLivre": false, "tipoBloqueio": "gnv", "tipoEstoque": "cor", "estoque": "20000", "gnv": "50000", "grv": "5000", "zona": "800", "data": "2016-12-05T02:00:00.000Z", "foto": "tradicional.jpg", "valor": 16.5, "opcoes": [{ "tamanho": "334", "cor": "1002", "estoque": "2000" }, { "tamanho": "356", "cor": "1002", "estoque": "2000" }, { "tamanho": "378", "cor": "1002", "estoque": "2000" }, { "tamanho": "390", "cor": "1002", "estoque": "2000" }, { "tamanho": "412", "cor": "1002", "estoque": "2000" }, { "tamanho": "434", "cor": "1002", "estoque": "2000" }, { "tamanho": "334", "cor": "1003", "estoque": "2000" }, { "tamanho": "356", "cor": "1003", "estoque": "2000" }, { "tamanho": "378", "cor": "1003", "estoque": "2000" }, { "tamanho": "390", "cor": "1003", "estoque": "1500" }, { "tamanho": "412", "cor": "1003", "estoque": "250" }, { "tamanho": "434", "cor": "1003", "estoque": "250" }] }, "tamanho": "390", "grade": "-", "value": 4 }, { "produto": { "code": "400003", "name": "Havaianas tradicional", "cotaLivre": false, "tipoBloqueio": "gnv", "tipoEstoque": "cor", "estoque": "20000", "gnv": "50000", "grv": "5000", "zona": "800", "data": "2016-12-05T02:00:00.000Z", "foto": "tradicional.jpg", "valor": 16.5, "opcoes": [{ "tamanho": "334", "cor": "1002", "estoque": "2000" }, { "tamanho": "356", "cor": "1002", "estoque": "2000" }, { "tamanho": "378", "cor": "1002", "estoque": "2000" }, { "tamanho": "390", "cor": "1002", "estoque": "2000" }, { "tamanho": "412", "cor": "1002", "estoque": "2000" }, { "tamanho": "434", "cor": "1002", "estoque": "2000" }, { "tamanho": "334", "cor": "1003", "estoque": "2000" }, { "tamanho": "356", "cor": "1003", "estoque": "2000" }, { "tamanho": "378", "cor": "1003", "estoque": "2000" }, { "tamanho": "390", "cor": "1003", "estoque": "1500" }, { "tamanho": "412", "cor": "1003", "estoque": "250" }, { "tamanho": "434", "cor": "1003", "estoque": "250" }] }, "tamanho": "412", "grade": "-", "value": 4 }], "dataPrevista": "10/12/2016", "data": "19/10/2016", "valorTotal": 14322.5 }];

        $rootScope.maiorData = '';


        $rootScope.listaGNV = [
            { code: 'AC60', anterior: '' }
        ];
        $rootScope.listaGRV = [
            { code: '610', anterior: 'AC60' },
            { code: '620', anterior: 'AC60' },
            { code: '630', anterior: 'AC60' }
        ];
        $rootScope.listaZONA = [
            { code: '600610', anterior: '610' },
            { code: '600611', anterior: '610' },
            { code: '600620', anterior: '620' },
            { code: '600630', anterior: '630' }
        ];
        $rootScope.listaCLIENTE = [
            { code: '100001', anterior: '600610' },
            { code: '100002', anterior: '600611' },
            { code: '100003', anterior: '600620' },
            { code: '100004', anterior: '600630' }
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
            { code: 'hava1.jpg' },
            { code: 'hava2.jpg' },
            { code: 'hava3.jpg' }

        ];


        $rootScope.selectedGNV = '';
        $rootScope.selectedGRV = '';
        $rootScope.selectedZONA = '';
        $rootScope.selectedCLIENTE = '';



         $rootScope.listaFotos = [



        ];

        Nível 1 Descrição   Nível 2 Descrição   Nível 3 Descrição
        {nivel1:'AC60', desc1:'Havaianas', nivel2:'610',desc2:'Regional Sudeste', nivel3:'600610',desc3:'Olavo Rodrigues'}
        {nivel1:'AC60', desc1:'Havaianas', nivel2:'610',desc2:'Regional Sudeste    600611  Jane Gonçalves
        {nivel1:'AC60', desc1:'Havaianas', nivel2:'620',desc2:'Regional Nordeste   600620  José Renan Silva
        {nivel1:'AC60', desc1:'Havaianas', nivel2:'630',desc2:'Regional Norte  600630  Hudson Medeiros




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

            data: new Date('11/20/2016'),
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
            data: new Date('06/10/2016'),
            foto: 'retro.jpg',
            valor: 18.5,
            opcoes: [{ tamanho: '334', cor: '1002' }, { tamanho: '356', cor: '1002' }, { tamanho: '378', cor: '1002' }, { tamanho: '390', cor: '1002' }, { tamanho: '412', cor: '1002' }, { tamanho: '434', cor: '1002' }]
        }, {
            code: '400003',
            name: 'Havaianas tradicional',
            cotaLivre: false,
            tipoBloqueio: 'gnv',
            tipoEstoque: 'cor',
            estoque: '20000',
            gnv: '50000',
            grv: '5000',
            zona: '800',
            data: new Date('12/5/2016'),
            foto: 'tradicional.jpg',
            valor: 16.5,
            opcoes: [
                { tamanho: '334', cor: '1002', estoque: '2000' },
                { tamanho: '356', cor: '1002', estoque: '2000' },
                { tamanho: '378', cor: '1002', estoque: '2000' },
                { tamanho: '390', cor: '1002', estoque: '2000' },
                { tamanho: '412', cor: '1002', estoque: '2000' },
                { tamanho: '434', cor: '1002', estoque: '2000' },
                { tamanho: '334', cor: '1003', estoque: '2000' },
                { tamanho: '356', cor: '1003', estoque: '2000' },
                { tamanho: '378', cor: '1003', estoque: '2000' },
                { tamanho: '390', cor: '1003', estoque: '1500' },
                { tamanho: '412', cor: '1003', estoque: '250' },
                { tamanho: '434', cor: '1003', estoque: '250' }
            ]
        }, {
            code: '400004',
            name: 'Havaianas Color',
            cotaLivre: false,
            tipoBloqueio: 'zona',
            tipoEstoque: 'tamanho',
            estoque: '60000',
            gnv: '50000',
            grv: '3000',
            zona: '800',
            data: new Date('12/10/2016'),
            foto: 'color.jpg',
            valor: 20.0,
            opcoes: [
                { tamanho: '334', cor: '1002', estoque: '15000' },
                { tamanho: '356', cor: '1002', estoque: '10000' },
                { tamanho: '378', cor: '1002', estoque: '5000' },
                { tamanho: '390', cor: '1002', estoque: '20000' },
                { tamanho: '412', cor: '1002', estoque: '7000' },
                { tamanho: '434', cor: '1002', estoque: '3000' }
            ]
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
            data: new Date('01/10/2017'),
            foto: 'simpsons.jpg',
            valor: 25.0,
            opcoes: [{
                tamanho: 'I21',
                cor: '1002',
                estoque: '15000',
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
                estoque: '15000',
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




        $rootScope.selectProduct = function(code) {
            $rootScope.selectedProduct = $filter('filter')($rootScope.products, { code: code })[0];

            $rootScope.clear();

            $rootScope.cores = {};
            angular.forEach($rootScope.selectedProduct.opcoes, function(opcao, i) {
                $rootScope.cores[opcao.cor] = opcao;
            });

            $rootScope.tamanhos = {};
            angular.forEach($rootScope.selectedProduct.opcoes, function(opcao, i) {
                $rootScope.tamanhos[opcao.tamanho] = opcao;
            });


            /*for (cor in $rootScope.cores) {
                for (tamanho in $rootScope.tamanhos) {
                    var itemColor = $rootScope.itemPedido[cor] = {};
                    var itemTamanho = itemColor[tamanho] = {};
                }
            }*/



        }

        $rootScope.onChange = function() {
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



            var limiteCota = $rootScope.selectedProduct[$rootScope.selectedProduct.tipoBloqueio];
            var limiteEstoque = $rootScope.selectedProduct.estoque;

            if (!$rootScope.selectedProduct.cotaLivre) {

                //if (limiteCota > limiteEstoque) {
                $rootScope.estourouCota = $rootScope.totalTamanhos > limiteCota;
                // /}
                $rootScope.estourouEstoque = $rootScope.totalTamanhos > limiteEstoque;
            } else {
                $rootScope.estourouEstoque = $rootScope.totalTamanhos > limiteEstoque;
            }

            $rootScope.estourouEstoque = isNaN($rootScope.totalTamanhos)
        }

        $rootScope.clearPedido = function() {
            $rootScope.pedido = {};
            $rootScope.itensPedido = [];
            $rootScope.clear();
        }
        $rootScope.clear = function() {
            $rootScope.estourouCota = false;
            $rootScope.estourouEstoque = false;
            $rootScope.itemPedido = {};
            $rootScope.totalTamanhos = 0;
        }

        $rootScope.addItem = function() {
            $rootScope.itemPedido.total = $rootScope.totalTamanhos;



            var date = $rootScope.selectedProduct.data;


            if ($rootScope.maiorData == '') {
                $rootScope.maiorData = date;
            } else {
                if (date > $rootScope.maiorData) {
                    $rootScope.maiorData = date;
                }
            }

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

        $scope.limparCarrinho = function() {
            $rootScope.itensPedido = [];
        }
        $scope.fecharPedido = function() {
            $scope.gerarPedido();
            $rootScope.listaPedidos.push($rootScope.pedido);
            $scope.open('lg', '', 'view/modal/pedido.html', 'pedido');
        }

        $scope.fecharCotacao = function() {
            $scope.gerarPedido();
            $rootScope.listaCotacoes.push($rootScope.pedido);
            $scope.open('lg', '', 'view/modal/cotacao.html', 'cotacao');
        }

        $scope.gerarPedido = function() {
            $rootScope.pedido.code = getRandomIntInclusive();
            $rootScope.pedido.itensPedido = $rootScope.itensPedido;

            $rootScope.pedido.dataPrevista = $rootScope.maiorData.getDate() + '/' + ($rootScope.maiorData.getMonth() + 1) + '/' + $rootScope.maiorData.getFullYear();




            $rootScope.pedido.data = $rootScope.dataPedido;
            $rootScope.pedido.valorTotal = $rootScope.totalValorPedido;
        }

        function getRandomIntInclusive() {
            min = Math.ceil(100000);
            max = Math.floor(900000);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }



        $scope.open = function(size, parentSelector, page, tipo) {
            var parentElem = parentSelector ?
                angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: page,
                controller: 'ModalInstanceCtrl',
                controllerAs: '$ctrl',
                size: size,
                appendTo: parentElem,
                resolve: {
                    items: function() {
                        return [];
                    }
                }
            });

            modalInstance.result.then(function(selectedItem) {

                console.log('true ' + tipo);

                $rootScope.clearPedido();

                /* console.log('>> ' + $rootScope.itensPedido.length);

                if (tipo == 'cotacao') {
                    $location.path( "/cotacao" );
                } else if (tipo == 'pedido') {
                    $location.path( "/pedidos" );
                }
*/
            }, function() {
                if (tipo == 'cotacao') {
                    $location.path("/cotacoes");
                } else if (tipo == 'pedido') {
                    $location.path("/pedidos");
                }
                $rootScope.clearPedido();
            });
        };



        $rootScope.selectProduct($rootScope.products[2].code);

    })
    .controller("ModalInstanceCtrl", function($scope, $rootScope, $uibModalInstance) {
        $scope.ok = function() {
            $uibModalInstance.close();
        };

        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
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
            text: "Cadastros Alpargatas",
            link: "/cadastro2"
        }, {
            title: "Clientes",
            icon: "fa-users",
            text: "Cadastros Alpargatas",

            link: "/cadastro3"
        }, {
            title: "Produtos/Cotas",
            icon: "fa-laptop",
            text: "Cadastros Alpargatas",

            link: "/cadastro1"
        }, {
            title: "Plano de vendas",
            icon: "fa-gift",
            text: "Cadastros Alpargatas",
            link: "/cadastro4"
        }, {
            title: "Disponibilidade",
            icon: "fa-th",
            text: "Cadastros Alpargatas",

            link: "/cadastro5"
        }];
    })
    .controller("ConsultasController", function($scope, $rootScope) {
        $scope.links = [{
            title: "Pedidos",
            icon: "fa-search",
            text: "Consultar Lista Pedidos",
            link: "/pedidos"
        }, {
            title: "Cotações",
            icon: "fa-search",
            text: "Consultar Lista Cotações",
            link: "/cotacoes"
        }];

    })
    .controller("CotacoesController", function($scope, $rootScope) {})
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

        $scope.updateDates = function() {
            // dat.setDate(dat.getDate() + days);
        }


    });

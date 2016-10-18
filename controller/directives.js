angular.module('App.directives', [])
    .directive('panel', function() {
        var ddo = {}; //sempre retorna

        ddo.restrict = 'E'; //Atribute or element

        ddo.scope = {
            title: '@title',
            linkback: '@linkback',
            type: '@type'
        }

        ddo.transclude = true;

        var r = '?n=' + Math.random();

        ddo.templateUrl = 'view/directives/panel.html' + r;
        return ddo;
    })
    /*
    .directive('footerAbril', function() {
        var ddo = {};

        ddo.restrict = 'E';

        ddo.transclude = false;

        ddo.templateUrl = 'view/directives/footer-abril.html';
        return ddo;
    })
 
    .directive('headerAssine', function() {
        var ddo = {};

        ddo.restrict = 'E';

        ddo.transclude = false;

        ddo.templateUrl = 'view/directives/assine/header-assine.html';
        return ddo;
    }).directive('footerAssine', function() {
        var ddo = {};

        ddo.restrict = 'E';

        ddo.transclude = false;

        ddo.templateUrl = 'view/directives/assine/footer-assine.html';
        return ddo;
    }).directive('headerClube', function() {
        var ddo = {};

        ddo.restrict = 'E';

        ddo.transclude = false;

        ddo.templateUrl = 'view/directives/clube/header-clube.html';
        return ddo;
    }).directive('footerClube', function() {
        var ddo = {};

        ddo.restrict = 'E';

        ddo.transclude = false;

        ddo.templateUrl = 'view/directives/clube/footer-clube.html';
        return ddo;
    })*/

/*
.directive('meusTitulos', function() {
        var ddo = {};
        ddo.restrict = 'E';
        ddo.template = '<ul><li ng-repeat="titulo in titulos">{{titulo}}</li></ul>';
        ddo.controller = function($scope, recursoFoto) {
            recursoFoto.query(function(fotos) {
                $scope.titulos = fotos.map(function(foto) {
                    return foto.titulo;
                });    
            });
        };
        return ddo;
    });
*/

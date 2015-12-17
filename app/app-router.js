angular.module('app').config(['$routeProvider', function(routeProvider){
    routeProvider.when(
        '/',
        {
            templateUrl:'app/splash/splash.html',
            controller:'SplashControl'
        })
        .otherwise({redirectTo:'/'});
}])
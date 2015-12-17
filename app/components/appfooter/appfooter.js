angular.module('app').directive('appfooter',function(){
    var sidebar = {
        controller:function(scope,location){

        },
        templateUrl:'/app/components/appfooter/appfooter.html',
        replace:true,
        restrict:'E'
    }

    sidebar.controller.$inject = ['$scope','$location'];

    return sidebar;
});

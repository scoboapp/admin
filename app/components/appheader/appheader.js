angular.module('app').directive('appheader',function(){
    var sidebar = {
        controller:function(scope,location){

        },
        templateUrl:'/app/components/appheader/appheader.html',
        replace:true,
        restrict:'E'
    }

    sidebar.controller.$inject = ['$scope','$location'];

    return sidebar;
});

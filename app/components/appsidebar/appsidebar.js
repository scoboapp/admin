angular.module('app').directive('appsidebar',function(){
    var sidebar = {
        controller:function(scope,location){

        },
        templateUrl:'/app/components/appsidebar/appsidebar.html',
        replace:true,
        restrict:'E'
    }

    sidebar.controller.$inject = ['$scope','$location'];

    return sidebar;
});

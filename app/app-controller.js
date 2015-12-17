angular.module('app').controller('app',['$scope','$window','$location','AppTitle',function($scope,$window,$location,Title){
    $scope.page_title = Title.title();
}]);//app controller
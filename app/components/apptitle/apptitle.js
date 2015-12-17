angular.module('app').factory('AppTitle',function(){
    var title = "Default";
    var factory = {
        title: function(){return title;},
        setTitle: function(newTitle){title=newTitle;}
    };

    return factory;
});

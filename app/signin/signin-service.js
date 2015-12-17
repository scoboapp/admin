app.factory('SignInService',['$resource','$window','$location','$http','voSettings',function(resource,$window,location,http,settings){
    var service = resource(settings.API_LOCATION + 'auth/ ',{},{
        //list of service functions
        'login':{
            method:'POST',
            cache:false,
            timeout:1500,
            withCredentials:false,
            interceptor: {
                response:function(response){
                    $window.sessionStorage.token = response.data.token;
                    if (response.config.data.remember){
                        $window.localStorage.token = response.data.token;
                    }
                    location.path('/dashboard');
                    return true;
                },
                responseError: function(response){
                    $window.sessionStorage.token = null;
                    location.path('/sign-in');
                    return false;
                }
            }//interceptors

        },//login function

        'checkToken':{
            method:'GET',
            url:settings.API_LOCATION + 'token/refresh/ ',
            cache:false,
            timeout:1500,
            withCredentials:true,
            interceptor: {
                response:function(response){
                    $window.sessionStorage.token = response.data.token;
                    $window.localStorage.token = response.data.token;
                },
                responseError: function(response){
                    $window.localStorage.removeItem('token');
                }
            }

        }
    },{
        stripTrailingSlashes :false
    });//service

    return service;

}]);//login service factory
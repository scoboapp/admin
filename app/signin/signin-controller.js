app.controller('SigninControl',
    ['$scope','$location','AppTitle','SignInService',
        function(scope,$loc,Title,SignIn){
            Title.setTitle('app | sign in');

            scope.user = {remember:true}


            //local functions ie var name = function

            //public functions ie scope.functionname

            scope.submitLogin = function(login){
                var loggedIn = SignIn.login({username:scope.user.email,password:scope.user.password,remember:scope.user.remember});
            };//login


        }//control function
    ]
);//controller
angular.module('app').controller('SplashControl',
    ['$scope','$location',
        function(scope,$loc){
            var self = this;
            scope.page = {
                title:'classtarter |the incentive app'
            }

            scope.first_team = [];
            scope.first_team_score = 0;
            scope.second_team = [];
            scope.second_team_score = 0;
            //local functions ie var name = function

            //public functions ie scope.functionname
            scope.filterValue = function($event){
                if(isNaN(String.fromCharCode($event.keyCode))){
                    $event.preventDefault();
                }
            };


        }//control function
    ]
);//controller
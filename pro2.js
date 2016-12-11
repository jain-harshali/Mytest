
          var app = angular.module("mySongList", []); 
          
          app.controller("myCtrl", function($scope)
           {
               $scope.lists = ["Song1", "Song2", "Song3"];
               $scope.addSong = function () 
              {
                $scope.error = "";

                if (!$scope.addMe) 
                  return;

                if ($scope.lists.indexOf($scope.addMe) == -1)
                {
                   $scope.lists.push($scope.addMe);
                }

                else 
                {
                    $scope.error = "This song is already in your  list.";
                }

              }
    
                $scope.removeSong = function (x) 
              {
                  $scope.error = "";    
                  $scope.lists.splice(x, 1);
              }

           }
);

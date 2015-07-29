angular.module('sample', [
  'ui.router',
  'ui.bootstrap',
  'ui.bootstrap.tabs',
  'ct.ui.router.extras'
])

.config(
  ['$stateProvider', '$urlRouterProvider', '$stickyStateProvider',
    function ($stateProvider,   $urlRouterProvider, $stickyStateProvider) {
        
        //let's start debuggin'
        $stickyStateProvider.enableDebug(true);
        $urlRouterProvider
          .otherwise('/');
        
        $stateProvider
        
   //cv is the general view
        .state("cv", {
            url:'',
            templateUrl: './views/nestedView.html'
        })
   //cv.first is a view inside cv and it is a second level view
        .state('cv.first', {  
            url:'/first',            
            sticky:true,            
            deepStateRedirect: true,
            views: {
                "": {
                    templateUrl: './views/deeperNestedView.html',
                    controller: function($scope, $state) {
                        $scope.$state = $state;
                    }
                }
            }
            
        })      
   //cv.first.pledge is inside cv.first, and it is a third level view
        .state("cv.first.pledge1", {
            url:"/pledge1",
            template:"this is my pledge 1"
        })  
        .state("cv.first.pledge2", {
            url:"/pledge2",
            template:"this is my pledge 2"
        })
        .state("cv.first.pledge3", {
            url:"/pledge3",
            template:"this is my plaedge 3"
        })
        
        .state('cv.second', {  
            url:'/second',
            template: '<h1>Second content and stuff</h1>'            
        })
        
        .state("cv.third", {
            url: "/third",
            "template":"<h1>Third content and stuff</h1>"
        });
}]);
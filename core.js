angular.module('sample', [
  'ui.router',
  'ui.bootstrap',
  'ui.bootstrap.tabs'
])

.config(
  ['$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {
	  
	    $urlRouterProvider
	      .otherwise('/');
	    
	    $stateProvider
		
		.state("cv", {
			url:'',
            templateUrl: 'nestedView.html'
		})
							
		.state('cv.first', {  
            url:'/first',
            templateUrl: 'deeperNestedView.html'            
        })		
		.state("cv.first.pledge1", {
			url:"/pledge1",
			template:"this is my plaedge 1"
		})	
		.state("cv.first.pledge2", {
			url:"/pledge2",
			template:"this is my plaedge 2"
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
//.run( ['$rootScope', '$state', '$stateParams',
//	function ($rootScope,   $state,   $stateParams) {
//		$rootScope.$state = $state;
//		$rootScope.$stateParams = $stateParams;
//	}
//])
//  
//.config(
//  ['$stateProvider', '$urlRouterProvider',
//    function ($stateProvider,   $urlRouterProvider) {
//	  
//	    $urlRouterProvider
//	      .otherwise('/start');
//	    
//	    $stateProvider
//		.state("main", {
//			url: "/",
//			"template":"<h1>Main view</h1>",
//			controller: ['$scope', '$state', '$stateParams', 'indoors', 'calculator',
//              function (  $scope,   $state, $stateParams, indoors, calculator) {
//              }
//            ]
//		})
//						
//        .state('start', {  
//            url:'/start/a',
//            template: 'Start',
//            controller: ['$scope', '$state', '$stateParams', 'indoors', 'calculator',
//              function (  $scope,   $state, $stateParams, indoors, calculator) {
//              }
//            ]
//        })
//        
//        .state('step1', {  
//            url:'/start/b',
//            template: 'Step 1',
//            controller: ['$scope', '$state', '$stateParams', 'indoors', 'calculator',
//              function (  $scope,   $state, $stateParams, indoors, calculator) {
//              }
//            ]
//        })
//        
//        .state('step2', {  
//            url:'/start/c/d/e',
//            template: 'Step 2',
//            controller: ['$scope', '$state', '$stateParams', 'indoors', 'calculator',
//              function (  $scope,   $state, $stateParams, indoors, calculator) {
//              }
//            ]
//        })
//        
//        .state('step3', {  
//            url:'/step3/hello',
//            template: 'Step 3',
//            controller: ['$scope', '$state', '$stateParams', 'indoors', 'calculator',
//              function (  $scope,   $state, $stateParams, indoors, calculator) {
//              }
//            ]
//        })
//        
//        .state('step4', {  
//            url:'/start/bcd',
//            template: 'Step 4',
//            controller: ['$scope', '$state', '$stateParams', 'indoors', 'calculator',
//              function (  $scope,   $state, $stateParams, indoors, calculator) {
//              }
//            ]
//        })
//        
//        .state('end', {  
//            url:'/end',
//            template: 'End',
//            controller: ['$scope', '$state', '$stateParams', 'indoors', 'calculator',
//              function (  $scope,   $state, $stateParams, indoors, calculator) {
//              }
//            ]
//        });
//        
//    }]);
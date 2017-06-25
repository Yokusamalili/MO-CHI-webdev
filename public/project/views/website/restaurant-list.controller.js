/**
 * Created by moira on 6/24/17.
 */
(function(){
    angular
        .module("WebAppMaker")
        .controller("RestaurantListController", RestaurantListController);

    function RestaurantListController($routeParams, WaitlessService ) {
        var vm = this;

        vm.userId = parseInt($routeParams['uid']);
        vm.restId = parseInt($routeParams['rid']);

        function init() {
            vm.websites = WaitlessService.allRest();
        }
        init();
    }
})();

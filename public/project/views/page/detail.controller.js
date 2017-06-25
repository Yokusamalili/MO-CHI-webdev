/**
 * Created by moira on 6/24/17.
 */

(function () {
    angular
        .module("WebAppMaker")
        .controller("DetailController", DetailController);

    function DetailController($routeParams, DetailService) {
        var vm = this;

        vm.userId = parseInt($routeParams.uid);
        vm.restId = parseInt($routeParams.rid);

        function  init() {
            vm.details = DetailService.findDetailByRestId(vm.restId);
        }
        init();
    }
})();

/**
 * Created by Moira on 6/20/2017.
 */

(function () {
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController);

    function PageListController($routeParams, PageService) {
        var vm = this;

        vm.userId = parseInt($routeParams.uid);
        vm.websiteId = parseInt($routeParams.wid);

        function  init() {
            vm.pages = PageService.findPageByWebsiteId(vm.websiteId);
        }
        init();
    }
})();


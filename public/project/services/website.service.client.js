(function(){
    angular
        .module("WebAppMaker")
        .factory("WaitlessService", WaitlessService);

    function WaitlessService() {
        var rest = [
            {_id: 1, name: "Toro", locat: "1704 Washington St, Boston, MA 02118", type: "Spanish", uid: 000},
            {_id: 1, name: "Toro", locat: "1704 Washington St, Boston, MA 02118", type: "Spanish", uid: 000},
            {_id: 1, name: "Toro", locat: "1704 Washington St, Boston, MA 02118", type: "Spanish", uid: 000},
            {_id: 1, name: "Toro", locat: "1704 Washington St, Boston, MA 02118", type: "Spanish", uid: 000},
            {_id: 1, name: "Toro", locat: "1704 Washington St, Boston, MA 02118", type: "Spanish", uid: 000}
        ];

        var api = {
            findWebsitesForUser: findWebsitesForUser,
            findWebsiteById: findWebsiteById,
            createWebsite: createWebsite,
            updateWebsite:updateWebsite,
            removeWebsite:removeWebsite
        };
        return api;


        function createWebsite(website) {
            websites.push(website);
        }

        function findWebsiteById(wid) {
            for (var w in websites) {
                if (websites[w]._id === wid) {
                    return websites[w];
                }
            }
            return null;
        }

        function findWebsitesForUser(uid) {
            var result = [];
            for(var w in websites) {
                if(websites[w].uid === uid) {
                    result.push(websites[w]);
                }
            }
            return result;
        }
        function removeWebsite(wid) {
            for (var w in websites) {
                if(websites[w]._id === wid) {
                    websites.splice(w, 1);
                }
            }
        }
        
        function updateWebsite(website) {
            for (var w in websites) {
                if(websites[w]._id === website._id) {
                    websites[w] = website;
                }
            }
        }

    }
})();
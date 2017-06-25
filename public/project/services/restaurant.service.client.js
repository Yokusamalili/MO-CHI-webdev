/**
 * Created by moira on 6/24/17.
 */
(function(){
    angular
        .module("WebAppMaker")
        .factory("WaitlessService", WaitlessService);

    function WaitlessService() {
        var rests = [
            {_id: 1, name: "Toro", locat: "1704 Washington St, Boston, MA 02118", type: "Spanish", uid: 000},
            {_id: 2, name: "Sushi Cafe", locat: "1704 Washington St, Boston, MA 02118", type: "Japanese", uid: 000},
            {_id: 3, name: "La Cantina", locat: "1704 Washington St, Boston, MA 02118", type: "Italian", uid: 000},
            {_id: 4, name: "Leagal Seafood", locat: "1704 Washington St, Boston, MA 02118", type: "American", uid: 000},
            {_id: 5, name: "Beijing Tokyo", locat: "1704 Washington St, Boston, MA 02118", type: "Chinese", uid: 000}
        ];
        var api = {
            allRests: allRests,
            findWebsitesForUser: findWebsitesForUser,
            findWebsiteById: findWebsiteById,
            createWebsite: createWebsite,
            updateWebsite:updateWebsite,
            removeWebsite:removeWebsite
        };
        return api;

        function allRests() {
            for (var r in rests) {
                    return rests[r];
            }
        }

    }
})();

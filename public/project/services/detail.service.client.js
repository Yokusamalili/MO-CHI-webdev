/**
 * Created by moira on 6/24/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .factory("DetailService", DetailService);

    function DetailService() {
        var Details = [
            {
                "_id": 1,
                "name": "Toro",
                "restId": 1,
                locat: "1704 Washington St, Boston, MA 02118",
                type: "Spanish",
                uid: 000,
                contact: "(617) 536-4300",
                Hours: "4:30PM - 1AM"
            },
            {
                "_id": 2,
                "name": "Sushi Cafe",
                "restId": 2,
                locat: "1704 Washington St, Boston, MA 02118",
                type: "Japanese",
                uid: 000,
                contact: "(617) 536-4300",
                Hours: "4:30PM - 1AM"
            },
            {
                "_id": 3,
                "name": "La Cantina",
                "restId": 3,
                locat: "1704 Washington St, Boston, MA 02118",
                type: "Italian",
                uid: 000,
                contact: "(617) 536-4300",
                Hours: "4:30PM - 1AM"

            },
            {
                "_id": 4,
                "name": "Leagal Seafood",
                "restId": 4,
                locat: "1704 Washington St, Boston, MA 02118",
                type: "American",
                uid: 000,
                contact: "(617) 536-4300",
                Hours: "4:30PM - 1AM"
            },
            {
                "_id": 5,
                "name": "Beijing Tokyo",
                "restId": 5,
                locat: "1704 Washington St, Boston, MA 02118",
                type: "Chinese",
                uid: 000,
                contact: "(617) 536-4300",
                Hours: "4:30PM - 1AM"
            }

        ];

        var api = {
            findDetailByRestId: findDetailByRestId,
            findPageByWebsiteId: findPageByWebsiteId,
            createPage: createPage,
            findPageById: findPageById,
            updatePage: updatePage,
            deletePage: deletePage
        };

        return api;

        function deletePage(pid) {
            for (var p in pages) {
                if (pages[p]._id === pid) {
                    pages.splice(p, 1);
                }
            }
        }

        function updatePage(page) {
            for (var p in pages) {
                if (pages[p]._id === page._id) {
                    pages[p] = page;
                }
            }
        }

        function findPageById(pid) {
            for (var p in pages) {
                if (parseInt(pages[p]._id) === pid) {
                    return pages[p];
                }
            }
            return null;
        }

        //function find pages by website Id
        function findPageByWebsiteId(wid) {
            var result = [];
            for (var p in pages) {
                if (pages[p].websiteId === wid) {
                    result.push(pages[p]);
                }
            }
            return result;
        }


        //fuction create new page
        function createPage(page) {
            pages.push(page);
        }

        function findDetailByRestId(rid){
            var result = [];
            for (var p in details) {
                if (details[p].restId === rid) {
                    result.push(details[p]);
                }
            }
            return result;
        }


    }
})();
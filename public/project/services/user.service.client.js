/**
 * Created by Moira on 6/20/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);
    
    function UserService() {
        var users = [
            {username:"alice", password:"alice", _id:"111", first:"Alice", last:"wonderland", emailaddress:"aaa@gmail.com"},
            {username:"bob", password:"bob" ,_id:"222", first:"bob", last:"delen", emailaddress:"bbb@gmail.com"},
            {username:"dd", password:"dd", _id:"000", first:"John", last:"Wick", emailaddress:"wick.j@gmail.com"}
        ];

        var api = {
            findUserByCredentials: findUserByCredentials,
            findUserById: findUserById,
            createUser:createUser,
            allUsers:allUsers,
            findUserByUsername:findUserByUsername,
            updateUser:updateUser,
            deleteUser:deleteUser

        };
        return api;

        function deleteUser(uid) {
            for (var u in users) {
                if(users[u]._id === uid) {
                    users.splice(u, 1);
                }
            }
        }


        function updateUser(user) {
            for (var u in users) {
                if(users[u]._id === user._id) {
                    users[u] = user;
                }
            }
        }

        function findUserByUsername(username) {
            for(var u in users) {
                var user = users[u];
                if(user.username === username) {
                    return user;
                }
            }
            return null;
        }

        function allUsers() {
            return users;
        }


        function createUser(user) {
            users.push(user);
        }

        function findUserById(userId) {
            for(var u in users) {
                var user = users[u];
                if(user._id === userId) {
                    return user;
                }
            }
            return null;
        }


        function findUserByCredentials(username, password) {
            for(var u in users) {
                var user = users[u];
                if(user.username === username
                    && user.password === password) {
                    return user;
                }
            }
            return null;
        }
    }
})();
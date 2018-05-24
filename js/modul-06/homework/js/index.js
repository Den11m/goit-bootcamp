"use strict";

const initialUsers = [
    {id: "-s19a6hqce", login: "mangozedog@mail.com", password: "qwe123zv", isActive: true},
    {id: "-qkpzenjxe", login: "polysweet@skynet.ze", password: "123zxc78", isActive: true},
    {id: "-e51cpd4di", login: "ajax2k@change.ua", password: "ert234qw", isActive: false}
];

const initialPosts = {
    "-s19a6hqce": [
        {id: "-5sgljaskg", text: "post #1", likes: 3},
        {id: "-199hb6igr", text: "post #2", likes: 5},
        {id: "-hy0eyw5qo", text: "post #3", likes: 13}
    ],
    "-qkpzenjxe": [
        {id: "-5tu69g5rf", text: "post #1", likes: 8},
        {id: "-bje766393", text: "post #2", likes: 15}
    ],
    "-e51cpd4di": [
        {id: "-9y6nkmlj4", text: "post #1", likes: 18},
        {id: "-i03pbhy3s", text: "post #2", likes: 45}
    ],
};

function SocialBook(users = [], posts = {}) {
    this.users = users;
    this.posts = posts;
    this.getAllUsers = function () {
        return this.users;
    };
    this.getUserByLogin = function (login) {
        for (let obj of this.users) {
            if (obj['login'] === login) {
                return obj
            }
        }
    };
    this.getUserStatus = function (userId) {
        for (let obj of this.users) {
            if (obj['id'] === userId && obj['isActive'] === false) {
                return 'active'
                } else if (obj['id'] === userId && obj['isActive'] === true)
                    return 'inactive'
                }
    };
    this.addUser = function (user) {
        user['id'] = '-' + Math.random().toString(36).substr(2, 9);
        this.users.push(user);
        // return this.getAllUsers();
        return this.users;
    };
    this.removeUserById = function (userId) {
        for (let obj of this.users) {
            if (obj.id === userId) {
                this.users.splice(this.users.indexOf(obj), 1);
            }
        }
        return this.users;
    };
    this.getUsersCount = function () {
        return this.users.length
    };
    this.getUserPosts = function (userId) {
        return this.posts[userId];
    };
    this.addPost = function (userId, post) {
        let defaultPostObject = {id: "", text: post, likes: 0};
        defaultPostObject.id = '-' + Math.random().toString(36).substr(2, 9);
        this.posts[userId].push(defaultPostObject);
        return this.posts;
    };
    this.removePost = function (userId, postId) {
        this.posts[userId] = this.posts[userId].filter(item => item.id !== postId);
        console.log(this.posts);
        // for (let item of this.posts[userId]) {
        //     if (item.id === postId) {
        //         this.posts[userId].splice(this.posts[userId].indexOf(item), 1);
        //     }
        // }
        // return this.posts;
    };
    this.getAllLike = function (userId) {
        let sum = 0;
         for (let item of this.posts[userId]) {
             sum += item["likes"];
         }
        return sum
    };
    this.addPostLike = function (userId, postId) {
        for (let obj of this.posts[userId]) {
            if (obj['id'] === postId) {
                obj['likes'] += 1
            }
        }
        return this.posts;
    };
    this.getPostsCount = function (userId) {
        return this.posts[userId].length
    }

}

let acountManager = new SocialBook(initialUsers, initialPosts);
console.log(acountManager);
console.log(acountManager.getAllUsers());
console.log(acountManager.getUserByLogin('polysweet@skynet.ze'));
console.log(acountManager.getUserStatus("-qkpzenjxe"));
console.log(acountManager.getUserStatus("-e51cpd4di"));
console.log(acountManager.addUser({id: "", login: "qwerty.ua", password: "qwerty", isActive: false}));
console.log(acountManager.removeUserById("-e51cpd4di"));
console.log(acountManager.getUsersCount());
console.log(acountManager.getUserPosts('-qkpzenjxe'));
console.log(acountManager.addPost('-qkpzenjxe', 'tehdflgldafg'));
console.log(acountManager.removePost('-e51cpd4di', '-9y6nkmlj4'));
console.log(acountManager.getAllLike('-qkpzenjxe'));
console.log(acountManager.addPostLike('-qkpzenjxe', '-bje766393'));
console.log(acountManager.getAllLike('-qkpzenjxe'));
console.log(acountManager.getPostsCount('-qkpzenjxe'));
var db = require("../models");
var seeds = [{
    title: "hello",
    body: "world",
    category: "personal"
},{
    title: "hello1",
    body: "world1",
    category: "sports"
},{
    title: "hello2",
    body: "world2",
    category: "miscellaneous"
},{
    title: "hello3",
    body: "world3",
    category: "fashion"
},{
    title: "hello4",
    body: "world4",
    category: "politics"
},{
    title: "hello5",
    body: "world5",
    category: "media"
},{
    title: "hello6",
    body: "world6",
    category: "personal"
},{
    title: "hello7",
    body: "world7",
    category: "personal"
}];
db.sequelize.sync({ force: true }).then(function () {
    for (var i = 0; i < seeds.length; i++) {
        db.Blog.create(seeds[i])
        .then(function (dbBlog) {
            console.log('We made: ', dbBlog);
        });
    }
});
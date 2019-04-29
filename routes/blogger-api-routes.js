var db = require("../models");

module.exports = function(app) {

  app.get("/api/posts/", function(req, res) {
    db.Blog.findAll({})
      .then(function(dbBlog) {
        res.json(dbBlog);
      });
  });

  // Get route for returning posts of a specific category
  app.get("/api/posts/category/:category", function(req, res) {
    db.Blog.findAll({
      where: {
        category: req.params.category
      }
    })
      .then(function(dbBlog) {
        res.json(dbBlog);
      });
  });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function(req, res) {
    db.Blog.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbBlog) {
        res.json(dbBlog);
      });
  });

  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    console.log(req.body);
    db.Blog.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    })
      .then(function(dbBlog) {
        res.json(dbBlog);
      });
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    db.Blog.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbBlog) {
        res.json(dbBlog);
      });
  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    db.Blog.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbBlog) {
        res.json(dbBlog);
      });
  });
};

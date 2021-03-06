var express = require('express');

var router = express.Router();

var db = require('../models');

  router.get("/api/saved", (req,res)=>{
    db.Blog.findAll({})
        // .sort({date: -1})
        .then(blogs => {
          if (blogs) {
            res.json({ success: true, blogs });
          } else {
            res.status(404).json({ success: false, error: "blogs not found." });
          }
        });
 });

 router.get("/api/saved/:category", (req,res)=>{
   db.Blog.findAll({
     where: {
       category: req.params.category
     }
   })
       // .sort({date: -1})
       .then(blogs => {
         if (blogs) {
           res.json({ success: true, blogs });
         } else {
           res.status(404).json({ success: false, error: "blogs not found." });
         }
       });
});

 router.post("/api/post", function(req, res) {
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

  router.delete("/api/posts/:id", function(req, res) {
    db.Blog.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbBlog) {
        res.json(dbBlog);
      });
  });

  router.put("/api/posts", function(req, res) {
    db.Post.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
 

module.exports = router;
var express = require('express');

var router = express.Router();

var db = require('../models');

router.get('/', function(req, res){
    db.Post.findAll({}).then(function (data){
        var hbsObject = {hbsObject: data};
        res.render('index', hbsObject)
        console.log("'/' router working for index");
    }).catch(function (err){
        console.log(err);
    });
});

module.exports = router;
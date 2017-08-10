/**************************************************
 File: home.js
 Name: Home
 Explain: Home Page
****************************************By QQBoxy*/
/*jshint node: true, esversion: 6 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Blog = require('./schema');

router.get('/', function(req, res) {
    res.render('home');
});

router.post('/api/blog', function (req, res) {
    var blog = new Blog({
        name: req.body.name,
        url: req.body.url
    });

    blog.save(function (err, result) {
        if (err) {
            console.log(err);
        } else {
            let blog = {
                _id: result._id,
                name: result.name,
                url: result.url
            };
            res.send(JSON.stringify(blog, null, 2));
        }
    });
});

router.get('/api/blog', function (req, res) {
    Blog.find({
        name: "School"
    }, "_id name url", {}, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            let bloglist = result.map(function(blog) {
                return {
                    id: blog._id,
                    name: blog.name,
                    url: blog.url
                }
            });
            res.send(JSON.stringify(bloglist, null, 2));
        }
    });
});

// router.get('/api/blog', function (req, res) {
//     const bloglist = [
//         {
//             id: 0,
//             name: "QQBoxy",
//             url: "http://qqboxy.blogspot.com/"
//         },
//         {
//             id: 1,
//             name: "CCUBoxy",
//             url: "http://ccuboxy.blogspot.com/"
//         },
//         {
//             id: 2,
//             name: "CodeBoxy",
//             url: "http://codeboxy.blogspot.com/"
//         }
//     ];
//     //res.set('Content-Type', 'application/json;charset=utf-8');
//     res.send(JSON.stringify(bloglist, null, 2));
// });

module.exports = router;
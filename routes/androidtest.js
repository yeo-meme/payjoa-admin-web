
var express = require('express');
var routes = express.Router();

routes.get('/', function (req, res, next) {
    res.render('androidtest');

});

module.exports = routes;

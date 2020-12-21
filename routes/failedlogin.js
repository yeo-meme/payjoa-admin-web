var express = require('express');
var routes = express.Router();

routes.get('/', function(req, res, next) {
    res.render('failedlogin', { title: 'failedlogin' });
});
// router.get('/', function (req,res,next) {
//     res.render('failedlogin')
// });
module.exports = routes;
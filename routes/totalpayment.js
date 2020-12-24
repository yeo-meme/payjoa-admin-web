var express = require('express');
var routes = express.Router();

routes.get('/', function (req, res, next) {

    let type = res.param('TYPE');
    let paymethod = res.param('PAYMETHOD');
    let certtype = res.param('CERTTYPE');
    let cpid = res.param('CPID');
    let orderno = res.param('ORDERNO');
    let producttype = res.param('PRODUCTTYPE');
    let amount = res.param('AMOUNT');
    let productname = res.param('PRODUCTNAME');
    let productcode = res.param('PRODUCTCODE');
    let userid = res.param('USERID');
    let billtype = res.param('BILLTYPE');

    console.log("아이디 :" + ct);

    res.render('totalpayment', {
        TYPE: type,
        PAYMETHOD : paymethod,
        CERTTYPE: certtype,
        CPID: cpid,
        ORDERNO: orderno,
        PRODUCTTYPE: producttype,
        AMOUNT: amount,
        PRODUCTNAME: productname,
        PRODUCTCODE: productcode,
        USERID: userid,
        BILLTYPE: billtype,
    });

});



module.exports = routes;

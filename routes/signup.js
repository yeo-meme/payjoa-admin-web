var express = require('express');
var router = express.Router();


router.get('/', function (req,res,next) {
    res.render('signup')
});

// const db = new Firestore({
//     projectId: 'care-android-5da7f',
//     keyFilename: 'serviceAccountKey.json',
// });
//
// const aTuringRef = db.collection('users').doc('aturing');
//
// router.post('/', function (req, res, next) {
// aTuringRef.set({
//     'email': req.body.email,
//       'password': req.body.password,
//       'name': req.body.name,
//       'adminCode': req.body.adminCode
// });
// });
module.exports = router;

// const admin = require('firebase-admin');
// const functions = require('firebase-functions');
//
// admin.initializeApp(functions.config().firebase);

// const Firestore = require('@google-cloud/firestore');
//
// const db = new Firestore({
//     projectId: 'care-android-5da7f',
//     keyFilename: 'serviceAccountKey.json',
// });
//
// router.get('/signup', function(req, res, next) {
//     res.render('signup', { page: 'signup' });
// });
//
//
// const aTuringRef = db.collection('users').doc('aturing');
//
//
// router.post("/signup", (req,res,next)=> {
//     aTuringRef.set({
//         'email': req.body.email,
//         'password': req.body.password,
//         'name': req.body.name,
//         'adminCode': req.body.adminCode
//     });
// })

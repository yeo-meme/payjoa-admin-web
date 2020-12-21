var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//회원가입
// router.get('/signup',(req,res) => res.render("signup", {page: "signup"}));
// router.get("/login", (req, res) => res.render("login", {page: "login"}));


const Firestore = require('@google-cloud/firestore');

const db = new Firestore({
  projectId: 'care-android-5da7f',
  keyFilename: 'serviceAccountKey.json',
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { page: 'signup' });
});
router.get('/payment', function(req, res) {
    res.render('payment', { title: 'Hello, World!' })
});



const aTuringRef = db.collection('users').doc('aturing');

router.post('/signup', function (req, res, next) {
    aTuringRef.set({
        'email': req.body.email,
        'password': req.body.password,
        'name': req.body.name,
        'adminCode': req.body.adminCode
    });
    res.redirect("/");
});

// router.get('/login', function (req,res,next) {
//   res.render('login', {page : 'login'});
// });

router.post('/', (req, res) => {
    let id = req.body.user_id;
    let pwd = req.body.password;
    duplicate(req, res, id, pwd);
});


function duplicate(req, res, uid, upwd) {

    let inputPass = upwd;
    let email = uid;
    console.log('pass' + inputPass + 'email :' + email);

    db.collection('users')
        .where('email', '==',  email)
        .where('password', '==', inputPass)
        .get()
        .then((snapshot) => {
            if (snapshot.size > 0) {
                snapshot.forEach((doc) => {
                    console.log(doc.id, '=> mamamoo~~ ', doc.data());
                    // res.redirect("/adminboard");
                    var user = [{name: '진우', age: 30}, {name: '미미', age:22}];
                    res.render('adminboard', {title: '미미 안뇽', user: user});
                });
            } else {
                // res.render('index',{title:'로그인 조회', pass: false});
                // res.send('<script type="text/javascript">alert("이메일 or 비밀번호가 맞지 않습니다");</script>');
                res.redirect("/failedlogin");
            }
        })
        .catch((err) => {

            console.log('Error getting documents', err);
        });
}


// router.post('/admin', async function(req,res,next) {
//
//   let body = req.body;
//
//   let inputPass = body.password;
//   let email = body.email;
//
//   db.collection('users').get()
//       .where('email',email)
//       .where('password', inputPass)
//       .then((snapshot) => {
//         snapshot.forEach((doc) => {
//           console.log(doc.id, '=> mamamoo~~ ', doc.data());
//           res.redirect("/admin");
//         });
//       })
//       .catch((err) => {
//         console.log('Error getting documents', err);
//       });
// })



module.exports = router;

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var bodyParser = require('body-parser');

// page required
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/adminboard');
var signupRouter = require('./routes/signup');
var failed_loginRouter = require('./routes/failedlogin');
var paymentRouter = require('./routes/payment');
var testboardRouter = require('./routes/testboard');
var paymentResultRouter = require('./routes/paymentresult');

var app = express();


// const Firestore = require('@google-cloud/firestore');

const Firestore = require('@google-cloud/firestore');

const db = new Firestore({
  projectId: 'care-android-5da7f',
  keyFilename: 'serviceAccountKey.json',
});

//
const aTuringRef = db.collection('users').doc('aturing');

//
// aTuringRef.set({
//   'first': 'Alan',
//   'middle': 'Mathison',
//   'last': 'Turing',
//   'born': 1912
// });
//
// await docRef.set({
//   first: 'Ada',
//   last: 'Lovelace',
//   born: 1815
// });


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());


//page route
app.use('/', indexRouter);
app.use('/signup', signupRouter);
app.use('/users', usersRouter);
app.use('/adminboard', adminRouter);
app.use('/failedlogin', failed_loginRouter);
app.use('/payment', paymentRouter);
app.use('/testboard', testboardRouter);
app.use('/paymentresult', paymentResultRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// app.post('/', (req, res) => {
//   let id = req.body.user_id;
//   let pwd = req.body.password;
//   duplicate(req, res, id, pwd);
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// function duplicate(req, res, uid, upwd) {
//   let body = req.body;
//
//   let inputPass = uid;
//   let email = upwd;
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
// }


module.exports = app;

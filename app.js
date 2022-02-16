var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const cors = require('cors');
var bodyParser = require('body-parser')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
const {sequelize}  = require('./models');
const models = require('./models'); 
const users = require('./DBS/users')(models.Users);
const tokens = require('./DBS/tokens')(models.Tokens);
sequelize.sync({ force: false })
    .then(() => {
        console.log('데이터베이스 연결 성공');
    })
    .catch((err) => {
        console.error(err);
    });

//oauth
const oAuthService = require("./auth/tokenService")(users,tokens);
var oauthserver = require('oauth2-server');
//oauth 
app.oauth = new oauthserver({  
  model: oAuthService,
	accessTokenLifetime: 60 * 60,
	allowBearerTokensInQueryString: true
});


//auth submit 
const authenicator = require("./auth/authenticator")(app.oauth);
const authroutes = require("./auth/routes")(
  express.Router(),  
  authenicator
);


//var users = require('./DBS/users')(sequelize.users);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth',authroutes);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

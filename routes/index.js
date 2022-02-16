var express = require('express');
var router = express.Router();

const models = require('./../models');

var users = require('./../DBS/users')(models.Users);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/get', function(req, res, next) {
  //console.log(models)
  //console.log(models.Users)
 
  users.getUserPromise('idtest','12')
  .then(data => console.log('seccus ' ,data )
  ).catch(err => console.log(err));
});

router.get('/gettest', function(req, res, next) {
  //console.log(models)
  //console.log(models.Users)
 
  users.registerPromise('idtest','12','testuser')
  .then(data => console.log('seccus ' ,data )
  ).catch(err => console.log(err));
});
module.exports = router;
 
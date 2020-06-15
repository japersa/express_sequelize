var express = require('express');
var router = express.Router();
var controller = require('../controllers/user.js');

router.get('/', function(req, res) {
  controller.list(req, res);
});

router.post('/', function(req, res){
  controller.create(req, res);
});

module.exports = router;

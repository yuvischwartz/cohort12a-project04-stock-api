var express = require('express');
var router = express.Router();

/* GET home page. */
//Placeholder route
router.get('/', function(req, res, next) {
  res.send('This is the API router')
});

module.exports = router;

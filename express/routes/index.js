var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join('F:/node/expressdeneme/views/main.html'));
});

module.exports = router;

var express = require('express');
var router = express.Router();
var paiza_io = require('paiza-io');

/* GET home page. */
router.get('/', function(req, res, next) {

  var key=Math.random().toString(36).slice(-8);
  console.log(key);
  paiza_io('ruby', 'puts "Hello, Ruby World!"', '', function (error, result) {
    if (error) throw error;
    console.log('ruby result:');
    console.log(result.stdout); //=> Hello, Ruby World!
    console.log(key);
  });


  res.render('index', { title: 'Express' });
});

module.exports = router;

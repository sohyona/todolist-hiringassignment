var express = require ('express');
var router = express.Router ();
var {users, todolist} = require ('../db');

/* GET home page. */
router.get ('/', function (req, res, next) {
  res.render ('index', {title: 'Express'});
});

router.get ('/users', (req, res) => {
  users.findAll ().then (result => res.send (result));
});

module.exports = router;

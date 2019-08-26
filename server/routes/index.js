var express = require ('express');
var router = express.Router ();
var {users, todolist} = require ('../db');

/* GET home page. */
router.get ('/', function (req, res, next) {
  res.render ('index', {title: 'Express'});
});

router.get ('/users', (req, res) => {
  res.setHeader ('Access-Control-Allow-Origin', '*');
  res.setHeader (
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  ); // If needed
  res.setHeader (
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  ); // If needed
  res.setHeader ('Access-Control-Allow-Credentials', true); // If needed

  users.findAll ().then (result => {
    // console.log ('######', result.length);
    res.send (result);
  });
});

router.get ('/todolist', (req, res) => {
  todolist.findAll ().then (result => res.send (result));
});

module.exports = router;

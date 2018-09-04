var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contacto', { title: 'Contactenos', mnuOption: "4", status: "0" });
});

module.exports = router;

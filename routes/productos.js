var express = require('express');
var router = express.Router();

//-Agrego el módulo de mysql
var mysql = require('mysql');
//-Configuro la base de datos
var client = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database : 'basefinalnode'
});

/* GET home page. */
router.get('/', function(req, res, next) {
	client.query('SELECT id, nombre, descripcion, precio, imagen FROM productos;',
			function selectCb(err, results, fields) {
				if (err) {
					throw err;					
				}

				res.render('productos', { title: 'Productos', mnuOption: "3", productos: results });
			}
		);
});

module.exports = router;

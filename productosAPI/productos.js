var express    = require('express');
var app        = express(); 
var cors = require('cors')
var port = process.env.APP_PORT || 3000;

app.use(cors());
app.listen(port);
console.log('Iniciado servicio en el puerto: ' + port);
console.log('Conectandose con la base de datos...');

var pool = require('./conexionbd')
console.log( pool != null ? "Conexión Exitosa" : "Error en la conexión");

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get("/productos", (req, res, next) => {
	console.log("Consultando todos los productos");
	pool.query("SELECT * FROM producto")
  	.then(rows => {
		res.json(rows);
  		})
  .catch(err => {
	return
  });

});

app.get("/productos/:idProducto", (req, res, next) => {
	console.log("Consultando el producto con id="+req.params.idProducto);
	pool.query("SELECT * FROM producto where id= ?", [req.params.idProducto])
  	.then(rows => {	
		res.json(rows);
  		})
  .catch(err => {
	return
  });

});
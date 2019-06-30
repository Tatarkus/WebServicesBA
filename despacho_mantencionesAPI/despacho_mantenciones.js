var express    = require('express');
var app        = express(); 
var cors = require('cors')
var port = process.env.PORT || 3001;

app.use(cors());
app.listen(port);
console.log('Iniciado servicio en el puerto: ' + port);
console.log('Conectandose con la base de datos...');

var db = require('./conexionbd');
console.log( db != null ? "Conexión Exitosa" : "Error en la conexión");

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get("/mantenciones", (req, res, next) => {
    db.serialize(() => {
        db.all(`SELECT * FROM mantencion`, (err, rows) => {
          if (err) {
            console.error(err.message);
          }
          res.json(rows);
        });
     
      });
       
      

});

app.get("/mantenciones/:idUsuario", (req, res, next) => {
	db.serialize(() => {
        db.all(`SELECT * FROM mantencion where id_usuario=?`,[req.params.idUsuario], (err, rows) => {
          if (err) {
            console.error(err.message);
          }
          res.json(rows);
        });

    });

	

});

app.get("/despachos", (req, res, next) => {
  db.serialize(() => {
      db.all(`SELECT * FROM despacho`, (err, rows) => {
        if (err) {
          console.error(err.message);
        }
        res.json(rows);
      });
   
    });
     
    

});

app.get("/despachos/:idUsuario", (req, res, next) => {
	db.serialize(() => {
        db.all(`SELECT * FROM despacho where id_usuario=?`,[req.params.idUsuario], (err, rows) => {
          if (err) {
            console.error(err.message);
          }
          res.json(rows);
        });

    });
  
});

app.get("/despachos/user/:idUsuario/product/:idProducto", (req, res, next) => {
  const usuario = req.params.idUsuario;
  const producto = req.params.idProducto;
  db.serialize(() => {
    db.all(`SELECT * FROM despacho where id_usuario=? and id_producto=?`,usuario, producto, (err, rows) => {
      if (err) {
        console.error(err.message);
      }
      res.json(rows);
    });

});
 
});
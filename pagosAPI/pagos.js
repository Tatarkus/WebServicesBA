var express    = require('express');
var app        = express();
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

var mercadopago = require('mercadopago');
var port = process.env.PORT || 3002;

app.listen(port);
console.log('Iniciado servicio en el puerto: ' + port);
console.log('Escuchando...');



app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/', (req, res) => {
  return res.send('Recibido un GET HTTP');
});

app.post('/pagar', (req, res) => {
  console.log("Se ha efectuado un pago");
  console.log("Titular : "+ req.body.cardholder.name);
  console.log("Monto : "+ req.body.montoPago);
  console.log("Fecha : "+ req.body.date_created);
  console.log("Ultimos 4 digitos de tarjeta : "+ req.body.last_four_digits);
  return res.send('Recibido un POST HTTP');
});

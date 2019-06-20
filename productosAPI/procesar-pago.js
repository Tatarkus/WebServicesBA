var express    = require('express');
var mercadopago = require('mercadopago');


var app = express();



mercadopago.configure({
  sandbox:true,
  access_token:'TEST-5563858955026571-061918-41dc6ec81b93529ae8dceec1a9a33b3f-324603240'
})



app.listen(3000, () => {
  console.log("El servidor está inicializado en el puerto 3000");
 });



app.post('/procesar-pago',function(req,res){

  const token = body.token;
  const payment_method_id = req.body.payment_method_id;
  const installments = req.body.installments;
  const issuer_id = req.body.issuer_id;



  var payment_data = {
    transaction_amount: 188,
    token: token,
    description: 'Lightweight Leather Pants',
    installments: installments,
    payment_method_id: payment_method_id,
    issuer_id: issuer_id,
    payer: {
      email: 'jimmie.dickens@gmail.com'
    }
  };

  mercadopago.payment.save(payment).then(function (data) {
    // ...    
    // Imprime el estado del pago
    console.log(data);

  }).catch(function (error) {
    // ...
  });
  
  

});
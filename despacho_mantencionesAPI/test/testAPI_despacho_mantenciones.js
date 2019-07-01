var supertest = require("supertest");

let chai = require('chai');

let should = chai.should();
var expect = require('chai').expect;
var assert = require('assert');


var server = supertest.agent("http://localhost:3001");


describe("Pruebas unitarias para API despacho_mantenciones",function(){



  it("Deberia acceder al recurso de la API sin problemas ",function(done){
    server
    .get("/")
    .expect("Content-type",/json/)
    .expect(200)     
    .end(function(err,res){  
      res.status.should.equal(200);      
      done();
    });

  });



  it('Deberia retornar el body en formato json', function(done){
   server.get('/despachos')   
   .expect('Content-Type', /json/)
   .expect(200, done);
  });



  it('Deberia acceder al recurso de mantenciones con exito', function(done){
   server.get('/mantenciones')
   .expect('Content-Type', /json/)
   .expect(200, done);
  });

  it('El recurso de despachos debe entregar un array', function(){
    //Se hace un get a un despacho especifico
  usuario=0;
  producto=1;
 server.get('/despachos/')   
 .end(function(err,res){  
  expect(res.body).to.be.an('array');
    });
  });


 it('El tamaño del arreglo de mantenciones debe ser 0 porque el codigo de usuario no existe', function(){
  usuarioInexistente="AWASD1345";
 server.get('/mantenciones/'+usuarioInexistente)   
 .end(function(err,res){
  assert.equal(res.body.length,0); 
    });
  });








});


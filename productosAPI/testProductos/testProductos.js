var supertest = require("supertest");
let chai = require('chai');
let should = chai.should();
var expect = require('chai').expect;
var assert = require('assert');


var server = supertest.agent("http://localhost:3000");


describe("Pruebas unitarias para API de productos",function(){



  it('Deberia retornar la lista de productos con exito', function(done){ 
    server.get('/productos')   
    .expect('Content-Type', /json/)
    .expect(200, done);
    });

  it('Deberia retornar un arreglo /productos', function(){   
        server.get('/productos/')   
        .end(function(err,res){  
        expect(res.body).to.be.an('array');
        });
 });

  it('Deberia retornar solo un registro de la tabla productos', function(){
      codProd=1;
      server.get('/productos/'+codProd)
      .end(function(err,res){   
      assert.equal(res.body.length,1); 
    });
  });


 


 it('El tamaño del arreglo de productos debe ser 0, el cod de producto no existe', function(){
  productoInexistente="e3e3D1345";
 server.get('/productos/'+productoInexistente)   
 .end(function(err,res){
  assert.equal(res.body.length,0); 
    });
  });








});


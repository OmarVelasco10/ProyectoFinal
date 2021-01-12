var express = require('express');
var jugadorController=require('../controllers/jugadorController');
var router = require('express').Router()
const mysqlConnection=require('../bd/database');

router.get('/',function(req,res) {
    jugadorController.listar();
})

router.post('/agregar', function(req,res){
    jugadorController.agregar();
})

router.put('/actualizar/:id', function(req,res) {
    jugadorController.actualizar();
}) 

router.delete('/eliminar/:id', function(req,res){
    jugadorController.eliminar();
})
module.exports = router
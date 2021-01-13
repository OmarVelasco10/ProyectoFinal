var express = require('express');
var jugadorController=require('../controllers/jugadorController');
var router = require('express').Router()


router.get('/',function(req,res) {
    jugadorController.listar(req,res);
})

router.post('/agregar', function(req,res){
    jugadorController.agregar(req,res);
})

router.put('/actualizar/:id', function(req,res) {
    jugadorController.actualizar(req,res);
}) 

router.delete('/eliminar/:id', function(req,res){
    jugadorController.eliminar(req,res);
})
module.exports = router
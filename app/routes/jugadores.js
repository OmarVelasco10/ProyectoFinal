var express = require('express');
var jugadorController=require('../controllers/jugadorController');
var router = require('express').Router()
const mysqlConnection=require('../database');

router.get('/', jugadorController.listar);

router.post('/agregar', jugadorController.agregar);

router.put('/actualizar/:id', jugadorController.actualizar);

router.delete('/eliminar/:id', jugadorController.eliminar);
module.exports = router
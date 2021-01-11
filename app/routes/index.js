var router = require('express').Router()
 
var jugadores = require('./jugadores')
router.use('/jugadores', jugadores)

 
router.get('/', function (req, res) {
  res.status(200).json({ message: 'Estás conectado a nuestra API' })
})
//localhost:1339/api
module.exports = router
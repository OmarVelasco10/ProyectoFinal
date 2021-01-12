/*var express = require('express') //llamamos a Express
var app = express()       
var bodyParser = require('body-parser')     

 
var port = process.env.PORT || 3050 // establecemos nuestro puerto
 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())   
app.use(express.json())         
 
// nuestra ruta irá en http://localhost:8080/api
// es bueno que haya un prefijo, sobre todo por el tema de versiones de la API
var router = require('./app/routes')
app.use('/torneo', router)
 
//arrancamos el servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)*/
const express=require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app=express();
/*importación de las rutas*/
const jugadores=require('./app/routes/jugadores');
/*configuracion*/
app.set('port', process.env.PORT || 8000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'))
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'ADMIN',
    port: 3306,
    database: 'torneo'
}, 'single'));
app.use(express.urlencoded({ extended: false }));
//routes
app.use('/', jugadores);

//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//Correr server
app.listen(app.get('port'), () => {
    console.log('El servidor esta corriendo en el puerto ' + app.get('port'));
});
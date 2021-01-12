const mysqlConnection=require('../bd/database');
var router = require('express').Router()
const controller={};

module.exports={
    controller.listar = (req,res) => {
        res.getConnection((err,conn)=> {
            if(err) {
                res.json(err);
            } else {
                conn.query('select * from jugadores'),(err,jugadores) => {
                    res.redirect('/');
                }
            }
        });
    },

    controller.agregar = (req,res) => {
        const datos = req.body;
        req.getConnection((err,conn)=> {
            if(err) {
                res.json(err);
            } else {
                conn.query('insert into jugadores set ?',[datos], (err,jugadores) => {
                    res.redirect('/');
                });
            }
        });
    }, 
    controller.eliminar = (req,res) => {
        const {id} = req.params;
        req.getConnection((err,conn) =>{
            conn.query('delete from jugadores where id = ?',[id],(err,jugadores) =>{
                res.redirect('/');
            })
        });
    },
    controller.actualizar = (req,res) =>{
        const {id} = req.params;
        const datos = req.body;
        req.getConnection((err,conn) => {
            conn.query('update jugadores set ? where id= ?',[datos,id], (err,jugadores) =>{
                res.redirect('/');
            });
        });
    }
};
module.exports=JugadorController



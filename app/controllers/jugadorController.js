const mysqlConnection=require('../../bd/database');
const express=require('express');
var router = require('express').Router()
const jugadorController = require('jugadorController');
//const controller={};

module.exports={
    listar:(req,res) => {
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

    agregar: (req,res) => {
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
    eliminar : (req,res) => {
        const {id} = req.params;
        req.getConnection((err,conn) =>{
            conn.query('delete from jugadores where id = ?',[id],(err,jugadores) =>{
                res.redirect('/');
            })
        });
    },
    actualizar : (req,res) =>{
        const {id} = req.params;
        const datos = req.body;
        req.getConnection((err,conn) => {
            conn.query('update jugadores set ? where id= ?',[datos,id], (err,jugadores) =>{
                res.redirect('/');
            });
        });
    }
};
module.exports=jugadorController



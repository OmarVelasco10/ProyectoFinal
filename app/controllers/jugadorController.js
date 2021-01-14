const mysql=require('../../bd/database');


//const controller={};

module.exports={
    listar:(req,res) => {

        mysql.query('select * from jugadores',(err,rows,fields)=>{
            if(!err){
                res.json(rows);
            } else{
                res.json(err);
            }
        })
        /*res.getConnection((err,conn)=> {
            if(err) {
                res.json(err);
            } else {
                conn.query('select * from jugadores'),(err,jugadores) => {
                    res.redirect('/');
                }
            }
        });*/
    },

    agregar: (req,res) => {
        console.log(req.body);
        mysql.query('insert into jugadores SET ?',req.body,(err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                res.json(err);
            }
        })
       /* const datos = req.body;
        req.getConnection((err,conn)=> {
            if(err) {
                res.json(err);
            } else {
                conn.query('insert into jugadores set ?',[datos], (err,jugadores) => {
                    res.redirect('/');
                });
            }
        });*/
    }, 
    eliminar : (req,res) => {
        const {id} = req.params;
        mysql.query('delete from jugadores where id = ?',[id],(err,rows,fields) =>{
            if(!err){
                res.json(rows);
            }else{
                res.json(err);
            }
        
        })
        /*  const {id} = req.params;
        req.getConnection((err,conn) =>{
            conn.query('delete from jugadores where id = ?',[id],(err,jugadores) =>{
                res.redirect('/');
            })
        });*/
    },
    actualizar : (req,res) =>{
        const {id} = req.params;
        const datos = req.body;
        mysql.query('update jugadores set ? where id = ?',[datos,id],(err,rows,fields) =>{
            if(!err){
                res.json(rows);
            }else{
                res.json(err);
            }
        })
                /* const {id} = req.params;
        const datos = req.body;
        req.getConnection((err,conn) => {
            conn.query('update jugadores set ? where id= ?',[datos,id], (err,jugadores) =>{
                res.redirect('/');
            });
        });*/
    }
};




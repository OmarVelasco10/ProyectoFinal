/*boton de registrar*/
const btnAdd=document.getElementById('btnRegistrar');
btnAdd.addEventListener('click',(e)=>{
    
    let nombred, posiciond, nacionalidadd,id_equiposd;
    nombred=document.getElementById("nombre").value;
    posiciond=document.getElementById("posicion").value;
    nacionalidadd=document.getElementById("nacionalidad").value;
    id_equiposd=document.getElementById("id_equipos").value;
 
    var data = { nombre:nombred,posicion:posiciond,nacionalidad:nacionalidadd,id_equipos:id_equiposd};
 
    fetch('http://localhost:3050/torneo/jugadores/agregar', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(res => console.log(res.json()))
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
})

/*boton de actualizar*/
const btnAdd=document.getElementById('btnActualizar');
btnAdd.addEventListener('click',(e)=>{
    let idd= req.params.id;
    let nombred, posiciond, nacionalidadd,id_equiposd;
    nombred=document.getElementById("nombre").value;
    posiciond=document.getElementById("posicion").value;
    nacionalidadd=document.getElementById("nacionalidad").value;
    id_equiposd=document.getElementById("id_equipos").value;
 
    var data = { nombre:nombred,posicion:posiciond,nacionalidad:nacionalidadd,id_equipos:id_equiposd};
 
    fetch('http://localhost:3050/torneo/jugadores/actualizar/:id', {
        method: 'PUT', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(res => console.log(res.json()))
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
})
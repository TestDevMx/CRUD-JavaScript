// import { obtenerChiste } from "./js/http-provider";





// obtenerChiste()
//     .then( console.log );

// ! Chistes html 
// import { init } from "./js/chistes-page";
// init();


// ! Usuarios

// import { obtenerUsuarios } from "./js/http-provider";
// obtenerUsuarios()
//     .then(console.log)

// import { init } from "./js/usuarios-page";
// init();



// ! CRUD

import * as CRUD from "./js/crud-provider";
// GET
// CRUD.getUsuario(1).then(console.log)

// POST
// CRUD.crearUsuario({
//     name: 'Nuevo usuario',
//     job: 'Chingon'
// }).then(console.log); 

// PUT
// CRUD.actualizarUsuario({
//     id: 2,
//     name: 'Nuevo usuario actualizado',
//     job: 'Chingon'
// }).then(console.log); 


// DELETE
CRUD.borrarUsuario(2)
    .then(console.log);
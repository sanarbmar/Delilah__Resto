const express = require('express');

const usuarios = express.Router();

let usuariosArray =
{
    nombre: '',
    direccion: ''
};

let respuesta = {
    error: false,
    codigo: 200,
    mensaje: ''
};


usuarios.get('/', (req, res) => {
    //Inicializamos la respuesta
    respuesta = {
        error: false,
        codigo: 200,
        mensaje: ''
    };

    if (usuariosArray.nombre === '' || usuariosArray.direccion === '') {
         //Si el usuario NO exite modificamos la respuesta
        respuesta = {
            error: true,
            codigo: 501,
            mensaje: 'El usuario no ha sido creado'
        };
    } else {
        //Si el usuariosArray SI existe generamos la respuesta
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: 'usuario existente',
            respuesta: usuariosArray
        };
    }
    res.send(respuesta);
});

usuarios.post('/', (req, res) => {
    console.log('nombre: ', req.body.nombre);
    console.log('direccion: ', req.body.direccion);
    if (!req.body.nombre || !req.body.direccion) {
        respuesta = {
            error: true,
            codigo: 502,
            mensaje: 'El campo nombre y direccion son requeridos'
        };
    } else {
        if (usuariosArray.nombre !== '' || usuariosArray.direccion !== '') {
            respuesta = {
                error: true,
                codigo: 503,
                mensaje: 'El usuario ya fue creado'
            };
        } else {

            //Si el usuariosArray NO existe, lo creamos y generamos la respuesta
            usuariosArray = {
                nombre: req.body.nombre,
                direccion: req.body.direccion
            };
            respuesta = {
                error: false,
                codigo: 200,
                mensaje: 'usuariosArray creado',
                respuesta: usuariosArray
            };
        }
    }

    res.send(respuesta);
});

usuarios.put('/', (req,res) => {
    if (!req.body.nombre || !req.body.direccion) {
        respuesta = {
            error: true,
            codigo: 502,
            mensaje: 'El campo nombre y direccion son requeridos'
        };
    } else {
        //Si NO tenemos un usuariosArray creado para modificar
        if (usuariosArray.nombre === '' || usuariosArray.direccion === '') {
            respuesta = {
                error: true,
                codigo: 501,
                mensaje: 'El usuario no ha sido creado'
            };
        } else {
            //Si el usuariosArray SI existe, lo actualizamos y generamos la respuesta
            usuariosArray = {
                nombre: req.body.nombre,
                direccion: req.body.direccion
            };
            respuesta = {
                error: false,
                codigo: 200,
                mensaje: 'usuario actualizado',
                respuesta: usuariosArray
            };
        }
    }
    //Imrpimimos respuesta
    res.send(respuesta);
});

usuarios.delete('/', (req,res) => {
    //si no existe el usuario 
    if (usuariosArray.nombre === '' || usuariosArray.direccion === '') {
        respuesta = {
            error: true,
            codigo: 501,
            mensaje: 'El usuariosArray no ha sido creado'
        };
    } else {
        //Si hay un usuario creado, lo eliminamos
        usuariosArray = {
            nombre: '',
            direccion: ''
        };
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: 'usuario eliminado'
        };
    }
    //Imrpimimos respuesta
    res.send(respuesta);
})

module.exports = usuarios;
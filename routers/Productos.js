const express = require('express');

const productos = express.Router();


let productosArray =
{
    nombre: '',
    estado: ''
};

let respuesta = {
    error: false,
    codigo: 200,
    mensaje: ''
};
productos.get('/', (req, res) => {
    //Creamos la respuesta
    respuesta = {
        error: true,
        codigo: 404,
        mensaje: 'Punto de inicio'
    };
    res.status(404);
    res.json(respuesta);
});

productos.get('/productos', (req, res) => {
    //Inicializamos la respuesta
    respuesta = {
        error: false,
        codigo: 200,
        mensaje: ''
    };

    if (productosArray.nombre === '' || productosArray.estado === '') {
         //Si el producto NO exite modificamos la respuesta
        respuesta = {
            error: true,
            codigo: 501,
            mensaje: 'El producto no ha sido creado'
        };
    } else {
        //Si el productosArray SI existe generamos la respuesta
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: 'producto existente',
            respuesta: productosArray
        };
    }
    res.send(respuesta);
});

productos.post('/productos', (req, res) => {
    console.log('nombre: ', req.body.nombre);
    console.log('estado: ', req.body.estado);
    if (!req.body.nombre || !req.body.estado) {
        respuesta = {
            error: true,
            codigo: 502,
            mensaje: 'El campo nombre y estado son requeridos'
        };
    } else {
        if (productosArray.nombre !== '' || productosArray.estado !== '') {
            respuesta = {
                error: true,
                codigo: 503,
                mensaje: 'El producto ya fue creado'
            };
        } else {

            //Si el productosArray NO existe, lo creamos y generamos la respuesta
            productosArray = {
                nombre: req.body.nombre,
                estado: req.body.estado
            };
            respuesta = {
                error: false,
                codigo: 200,
                mensaje: 'producto creado',
                respuesta: productosArray
            };
        }
    }

    res.send(respuesta);
});

productos.put('/productos', (req,res) => {
    if (!req.body.nombre || !req.body.estado) {
        respuesta = {
            error: true,
            codigo: 502,
            mensaje: 'El campo nombre y estado son requeridos'
        };
    } else {
        //Si NO tenemos un productosArray creado para modificar
        if (productosArray.nombre === '' || productosArray.estado === '') {
            respuesta = {
                error: true,
                codigo: 501,
                mensaje: 'El producto no ha sido creado'
            };
        } else {
            //Si el productosArray SI existe, lo actualizamos y generamos la respuesta
            productosArray = {
                nombre: req.body.nombre,
                estado: req.body.estado
            };
            respuesta = {
                error: false,
                codigo: 200,
                mensaje: 'producto actualizado',
                respuesta: productosArray
            };
        }
    }
    //Imrpimimos respuesta
    res.send(respuesta);
});

productos.delete('/productos', (req,res) => {
    //si no existe el producto 
    if (productosArray.nombre === '' || productosArray.estado === '') {
        respuesta = {
            error: true,
            codigo: 501,
            mensaje: 'El productosArray no ha sido creado'
        };
    } else {
        //Si hay un producto creado, lo eliminamos
        productosArray = {
            nombre: '',
            estado: ''
        };
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: 'producto eliminado'
        };
    }
    //Imrpimimos respuesta
    res.send(respuesta);
})

module.exports = productos;
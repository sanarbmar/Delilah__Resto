const express = require('express');

const pedidos = express.Router();


let pedidosArray =
{
    nombre: '',
    total: ''
};

let respuesta = {
    error: false,
    codigo: 200,
    mensaje: ''
};
pedidos.get('/', (req, res) => {
    //Creamos la respuesta
    respuesta = {
        error: true,
        codigo: 404,
        mensaje: 'Punto de inicio'
    };
    res.status(404);
    res.json(respuesta);
});

pedidos.get('/pedidos', (req, res) => {
    //Inicializamos la respuesta
    respuesta = {
        error: false,
        codigo: 200,
        mensaje: ''
    };

    if (pedidosArray.nombre === '' || pedidosArray.total === '') {
         //Si el pedido NO exite modificamos la respuesta
        respuesta = {
            error: true,
            codigo: 501,
            mensaje: 'El pedido no ha sido creado'
        };
    } else {
        //Si el pedidosArray SI existe generamos la respuesta
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: 'pedido existente',
            respuesta: pedidosArray
        };
    }
    res.send(respuesta);
});

pedidos.post('/pedidos', (req, res) => {
    console.log('nombre: ', req.body.nombre);
    console.log('total: ', req.body.total);
    if (!req.body.nombre || !req.body.total) {
        respuesta = {
            error: true,
            codigo: 502,
            mensaje: 'El campo nombre y total son requeridos'
        };
    } else {
        if (pedidosArray.nombre !== '' || pedidosArray.total !== '') {
            respuesta = {
                error: true,
                codigo: 503,
                mensaje: 'El pedido ya fue creado'
            };
        } else {

            //Si el pedidosArray NO existe, lo creamos y generamos la respuesta
            pedidosArray = {
                nombre: req.body.nombre,
                total: req.body.total
            };
            respuesta = {
                error: false,
                codigo: 200,
                mensaje: 'pedido creado',
                respuesta: pedidosArray
            };
        }
    }

    res.send(respuesta);
});

pedidos.put('/pedidos', (req,res) => {
    if (!req.body.nombre || !req.body.total) {
        respuesta = {
            error: true,
            codigo: 502,
            mensaje: 'El campo nombre y total son requeridos'
        };
    } else {
        //Si NO tenemos un pedidosArray creado para modificar
        if (pedidosArray.nombre === '' || pedidosArray.total === '') {
            respuesta = {
                error: true,
                codigo: 501,
                mensaje: 'El pedido no ha sido creado'
            };
        } else {
            //Si el pedidosArray SI existe, lo actualizamos y generamos la respuesta
            pedidosArray = {
                nombre: req.body.nombre,
                total: req.body.total
            };
            respuesta = {
                error: false,
                codigo: 200,
                mensaje: 'pedido actualizado',
                respuesta: pedidosArray
            };
        }
    }
    //Imrpimimos respuesta
    res.send(respuesta);
});

pedidos.delete('/pedidos', (req,res) => {
    //si no existe el pedido 
    if (pedidosArray.nombre === '' || pedidosArray.total === '') {
        respuesta = {
            error: true,
            codigo: 501,
            mensaje: 'El pedidosArray no ha sido creado'
        };
    } else {
        //Si hay un pedido creado, lo eliminamos
        pedidosArray = {
            nombre: '',
            total: ''
        };
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: 'pedido eliminado'
        };
    }
    //Imrpimimos respuesta
    res.send(respuesta);
})

module.exports = pedidos;
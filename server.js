const express = require('express');
const bodyParser = require('body-parser');/**borrar de todos los endpoint */
const usuarios = require('./routers/Usuarios');
const productos = require('./routers/Productos');
const pedidos = require('./routers/Pedidos');
const appServer = express();
appServer.use(bodyParser.urlencoded({ extended: false }));
appServer.use(bodyParser.json());

appServer.listen(2500, () => {
    console.log("Esta Conectado al Servidor");
});
/**ENDOPINT USUARIOS */
appServer.get('/usuarios', usuarios);
appServer.post('/usuarios',usuarios);
appServer.put('/usuarios', usuarios);
appServer.delete('/usuarios', usuarios);
/**ENDPOINT PRODUCTOS  */
appServer.get('/productos', productos);
appServer.post('/productos',productos);
appServer.put('/productos', productos);
appServer.delete('/productos', productos);
/**ENDPOINT PEDIDOS */
appServer.get('/pedidos', pedidos);
appServer.post('/pedidos',pedidos);
appServer.put('/pedidos', pedidos);
appServer.delete('/pedidos', pedidos);
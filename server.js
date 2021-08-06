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

appServer.use('/usuarios',usuarios);
/**ENDPOINT PRODUCTOS  */

appServer.use('/productos',productos);
/**ENDPOINT PEDIDOS */

appServer.use('/pedidos',pedidos);
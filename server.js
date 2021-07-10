const express = require('express');
const bodyParser = require('body-parser');
const appServer = express();
const usuarios = require('./routers/Usuarios');
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
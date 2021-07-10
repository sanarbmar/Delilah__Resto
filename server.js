const express = require('express');
const bodyParser = require('body-parser');
const appServer = express();
appServer.use(bodyParser.urlencoded({ extended: false }));
appServer.use(bodyParser.json());

appServer.listen(2000, () => {
    console.log("Esta Conectado al Servidor");
});
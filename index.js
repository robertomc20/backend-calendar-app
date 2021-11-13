

const express = require('express');
require('dotenv').config(); // npm i dotenv
const cors = require('cors');

const { dbConnection } = require('./database/config');

// Data del env
// console.log(process.env)

// Creacion de servidor express
const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors());

// Directorio publico
// el use en express es conocido como un middleware, que no es mas que una funcion que se 
// ejecuta en el momento que alguien hace una peticion al servidor
app.use(express.static('public'));

// Lectura y parseo del body
// aca, simplemente pasamos las peticiones por otro middleware, y definimos el express.json(),
// que en resumen, las peticiones que vengan en formato json, las vamos a procesar y extraer el contenido
app.use(express.json());


// Rutas
// TODO: auth // crear, login, renew
// En la linea de abajo, basicamente, el require es el archivo a importar, y lo va habilitar en la ruta senalada
app.use('/api/auth', require('./routes/auth'));
// TODO: crud: eventos


// Escuchamos las peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
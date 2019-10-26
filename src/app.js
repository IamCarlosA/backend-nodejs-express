//sirve para crear el servidor
const express = require('express');
const app = express();
const cors = require('cors');
//sirve para configurar el servidor en el puerto 4000
app.set('port', process.env.PORT || 4000);
//cors permite que dos servidores se cambien entre ellos
app.use(cors());
app.use(express.json());
//rutas
app.use('/api/users', require('./routes/users'))
app.use('/api/notes', require('./routes/notes'))

module.exports = app;
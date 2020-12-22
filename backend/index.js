const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

// crear el servidor
const app = express();

// Conectar a la base de datos
conectarDB();

// habilitar cors
app.use(cors());

// Habilitar express.json
app.use( express.json({ extended: true }));

// puerto de la app
const port = process.env.PORT || 4000;

// Importar rutas
app.use('/api/reclutadores', require('./routes/reclutadores'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/candidatos', require('./routes/candidatos'));

// arrancar la app
app.listen(port,  () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});
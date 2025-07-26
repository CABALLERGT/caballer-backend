// index.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conexión a MongoDB exitosa!'))
.catch((err) => console.error('Error de conexión a MongoDB:', err));

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('Bienvenido al backend de CABALLER!');
});

// Aquí agregarás tus rutas, modelos y controladores

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor CABALLER ejecutándose en el puerto ${PORT}`);
});

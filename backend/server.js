const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const path = require('path');

const postRoutes = require('./routes/postRoutes'); // Importa las rutas de posts
const eventRoutes = require('./routes/eventRoutes'); // Importa las rutas de eventos

// Usa CORS como middleware
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Ruta de ejemplo
app.get('/', (req, res) => {
    res.send('Welcome to Venado Connect Backend!');
});

// Usar las rutas de posts
app.use('/api', postRoutes);
// Usar las rutas de events
app.use('/api', eventRoutes);

// Configurar la carpeta 'uploads' como estática
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Escuchar el servidor
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

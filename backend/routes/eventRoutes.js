const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/event', (req, res) => {
    const query =
        `
        SELECT *
        FROM eventos
        `;
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});


router.get('/eventos', (req, res) => {
    const query =
        `
        SELECT eventos.*, carreras.nombre_carrera 
        FROM eventos 
        JOIN carreras ON eventos.id_carrera = carreras.id_carrera
        `;
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

/* ---------------------------------------------------------- */
const multer = require('multer');
const path = require('path');

// Configuración de multer para manejar la carga de imágenes
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Carpeta donde se guardarán las imágenes
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Nombre único para cada imagen
    }
});

const upload = multer({ storage: storage });

router.post('/eventos', upload.single('imagen'), (req, res) => {
    const { nombre_evento, descripcion, fecha, id_carrera } = req.body;
    const imagen = req.file ? req.file.path : null;



    const query = 'INSERT INTO eventos (nombre_evento, descripcion, fecha, id_carrera, imagen) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [nombre_evento, descripcion, fecha, id_carrera, imagen], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Evento creado exitosamente', eventoId: result.insertId });
    });
});





module.exports = router;
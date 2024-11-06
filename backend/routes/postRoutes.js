const express = require('express');
const router = express.Router();
const db = require('../config/db');
const { re } = require('mathjs');

// Ruta para obtener todos los posts
router.get('/posts', (req, res) => {
    const query = 'SELECT * FROM post';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Ruta para agregar o insertar un post
router.post('/posts', (req, res) => {
    const { post_content } = req.body;
    const query = 'INSERT INTO post (post_content) VALUES (?)';
    db.query(query, [post_content], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'El post fue creado exitantemente', postId: result.insertId })
    });
}


);

//Ruta para hacer una actualizacion de un post // put
router.put('/posts/:id', (req, res) => {
    const { id } = req.params;
    const { post_content } = req.body;
    const query = 'UPDATE post SET post_content = ? WHERE id_post = ?';
    db.query(query, [post_content, id], (err, result) => {

        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'El post se actualizo exitantemente' })

    })

})


// Ruta DELETE para eliminar un post
router.delete('/posts/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM post WHERE id_post = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Se borro el post hjeje que mal' });
    });
});









module.exports = router;

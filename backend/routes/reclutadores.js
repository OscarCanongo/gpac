// Rutas para crear reclutadores
const express = require('express');
const router = express.Router();
const reclutadorController = require('../controllers/reclutadorController');
const { check } = require('express-validator');

// Crea un reclutador
// api/reclutador
router.post('/', 
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'Agrega un email válido').isEmail(),
        check('password', 'El password debe ser minimo de 6 caracteres').isLength({ min: 6})
    ],
    reclutadorController.createReclutador
);


module.exports = router;
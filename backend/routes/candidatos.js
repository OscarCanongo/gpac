const express = require('express');
const router = express.Router();
const candidatoController = require('../controllers/candidatoController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');


// Crea candidatos
// api/candidatos
router.post('/', 
    auth,
    [
        check('nombre', 'El nombre del candidato es obligatorio').not().isEmpty(),
        check('reclutador', 'El reclutador es obligatorio').not().isEmpty(),
        check('industria', 'La industria del candidato es obligatoria').not().isEmpty(),
        check('posicion', 'La posición del candidato es obligatorio').not().isEmpty(),
        check('telefono', 'El telefono del candidato es obligatorio').not().isEmpty(),
        check('salario', 'El salario del candidato es obligatorio').not().isEmpty(),
        check('ubicacion', 'La ubicacion del candidato es obligatorio').not().isEmpty()
    ],
    candidatoController.createCandidato
);

// Obtener todos los candidatos
router.get('/', 
    auth,
    candidatoController.getCandidatos
)

// Eliminar un candidato
router.delete('/:id', 
    auth,
    candidatoController.deleteCandidato
);

module.exports = router;
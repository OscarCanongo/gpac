const express = require('express');
const router = express.Router();
const candidatoController = require('../controllers/candidatoController');
const auth = require('../middleware/auth');
//const { check } = require('express-validator');


// Crea candidatos
// api/candidatos
router.post('/', 
    auth,
    //[
      //  check('nombre', 'El nombre del candidato es obligatoio').not().isEmpty()
    //],
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
const Candidato = require('../models/Candidato');
const { validationResult } = require('express-validator');

exports.createCandidato = async (req, res) => {

    // Revisar si hay errores
    const errores = validationResult(req);
    if( !errores.isEmpty() ) {
        return res.status(400).json({errores: errores.array() })
    }


    try {
        // Crear un nuevo candidato
        const candidato = new Candidato(req.body);

        // Guardar el reclutador via JWT
        candidato.reclutador = req.reclutador.id;

        // guardamos el candidato
        candidato.save();
        res.json(candidato);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

// Obtiene todos los candidatos del reclutador actual
exports.getCandidatos = async (req, res) => {
    try {
        const candidatos = await Candidato.find({ reclutador: req.reclutador.id }).sort({ registro: -1 });
        res.json({ candidatos });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

// Elimina un candidato por su id
exports.deleteCandidato = async (req, res ) => {
    try {
        // revisar el ID 
        let candidato = await Candidato.findById(req.params.id);

        // si el candidato existe o no
        if(!candidato) {
            return res.status(404).json({msg: 'Candidato no encontrado'})
        }

        // verificar el reclutador del candidato
        if(candidato.reclutador.toString() !== req.reclutador.id ) {
            return res.status(401).json({msg: 'No Autorizado'});
        }

        // Eliminar el candidato
        await Candidato.findOneAndRemove({ _id : req.params.id });
        res.json({ msg: 'Candidato eliminado '})

    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor')
    }
}

const Reclutador = require('../models/Reclutador');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.autenticarUsuario = async (req, res) => {
    // revisar si hay errores
    const errores = validationResult(req);
    if( !errores.isEmpty() ) {
        return res.status(400).json({errores: errores.array() })
    }

    // extraer el email y password
    const { email, password } = req.body;

    try {
        // Revisar que sea un reclutador registrado
        let reclutador = await Reclutador.findOne({ email });
        if(!reclutador) {
            return res.status(400).json({msg: 'El reclutador no existe'});
        }

        // Revisar el password
        const passCorrecto = await bcryptjs.compare(password, reclutador.password);
        if(!passCorrecto) {
            return res.status(400).json({msg: 'Password Incorrecto' })
        }

        // Si todo es correcto Crear y firmar el JWT
         const payload = {
            reclutador: {
                id: reclutador.id
            }
        };

        // firmar el JWT
        jwt.sign(payload, process.env.SECRETA, {
            expiresIn: 3600 // 1 hora
        }, (error, token) => {
            if(error) throw error;

            // Mensaje de confirmación
            res.json({ token  });
        });

    } catch (error) {
        console.log(error);
    }
}


// Obtiene que reclutador esta autenticado
exports.usuarioAutenticado = async (req, res) => {
    try {
        const reclutador = await Reclutador.findById(req.reclutador.id).select('-password');
        res.json({reclutador});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Hubo un error'});
    }
}
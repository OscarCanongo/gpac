const mongoose = require('mongoose');

const CandidatoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    reclutador: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Reclutador'
    },
    industria: {
        type: String,
        required: true,
        trim: true
    },
    posicion: {
        type: String,
        required: true,
        trim: true
    },
    telefono: {
        type: Number,
        required: true,
    },
    salario: {
        type: Number,
        required: true,
    },
    ubicacion: {
        type: String,
        required: true,
        trim: true
    },
    registro: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Candidato', CandidatoSchema);
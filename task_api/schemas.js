const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  nombreTarea: {
    type: String,
    required: true
  },
  nombreCurso: {
    type: String,
    required: true
  },
  nombreProfesor: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    enum: ['activado', 'desactivado'],
    default: 'activado'
  },
  descripcion: {
    type: String,
    required: true
  },
  fechaInicio: {
    type: Date,
    required: true
  },
  fechaFinal: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Task', taskSchema);

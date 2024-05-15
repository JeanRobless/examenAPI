const mongoose = require('mongoose');
const { taskSchema } = require('./schemas'); // Suponiendo que tienes un archivo llamado 'schemas.js' donde defines el esquema de la tarea

const Task = mongoose.model('Task', taskSchema);

module.exports = { Task };

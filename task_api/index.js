
const express = require("express");
const mongoose = require('mongoose');
const { Task } = require('./models'); // Suponiendo que tienes un archivo llamado 'models.js' donde has exportado el modelo de Tarea (Task)

const uri = 'mongodb+srv://jeandeyjean:YAF3FnyTZIquneo1@cluster0.oyjepip.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // URI de conexión a tu base de datos MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(express.json());

const port = 8080;

app.get('/', (req, res) => {
  res.send("API de gestión de tareas");
});

// Obtener todas las tareas
app.get('/tareas', async (req, res) => {
  try {
    const tareas = await Task.find({});
    res.json(tareas);
  } catch (error) {
    console.error('Error al obtener las tareas:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

// Obtener una tarea por su ID
app.get('/tareas/:id', async (req, res) => {
  try {
    const tarea = await Task.findById(req.params.id);
    if (!tarea) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    res.json(tarea);
  } catch (error) {
    console.error('Error al obtener la tarea:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

// Crear una nueva tarea
app.post('/tareas', async (req, res) => {
  try {
    const nuevaTarea = req.body;
    const tarea = new Task(nuevaTarea);
    const resultado = await tarea.save();
    res.status(201).json(resultado);
  } catch (error) {
    console.error('Error al crear la tarea:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

app.listen(port, () => {
  console.log(`Servidor de la API de gestión de tareas escuchando en el puerto ${port}`);
});




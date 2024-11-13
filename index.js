// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Almacenamiento en memoria
let users = [
  { id_usuario: 1, nombre: 'Juan', email: 'juan@example.com' }
];
let expenses = [];

// Rutas de Usuarios
app.get('/users', (req, res) => {
  res.json(users);
});

// Rutas de Gastos
app.post('/expenses', (req, res) => {
  const { id_usuario, categoria, monto } = req.body;
  const newExpense = {
    id_gasto: expenses.length + 1,
    id_usuario,
    categoria,
    monto,
    fecha: new Date().toISOString()
  };
  expenses.push(newExpense);
  res.status(201).json(newExpense);
});

app.get('/expenses', (req, res) => {
  res.json(expenses);
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Define a porta do servidor

// Middleware para tratar requisições JSON
app.use(express.json());

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

// Inicie o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

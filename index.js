const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || 'development';

// Configuração de CORS (Segurança)
app.use(cors());
app.use(express.json());

// Rota obrigatória do desafio
app.get('/status', (req, res) => {
  res.status(200).json({
    status: 'ok',
    environment: ENV,
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Rota raiz de verificação
app.get('/', (req, res) => {
  res.send('API Lacrei Saúde ativa!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT} no ambiente de ${ENV}`);
});
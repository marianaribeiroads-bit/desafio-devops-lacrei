const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rota /status solicitada no desafio
app.get('/status', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Aplicação Lacrei Saúde rodando com sucesso!'
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
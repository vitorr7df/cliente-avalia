const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
//import { connect } from 'database.js';

const port = process.env.PORT || 3000;

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/img', express.static(path.join(__dirname, 'img')));
app.use('/js', express.static(path.join(__dirname, 'js')));

app.use(express.json());

app.get('/', (req, res) => {
    const indexPath = path.join(__dirname, 'index.html');
    res.sendFile(indexPath);
});

// Rota para receber e salvar os dados da pesquisa no banco de dados do Neon
app.post('/enviarPesquisa', async (req, res) => {
    try {
        // Faça uma requisição POST ao Neon com os dados da pesquisa
        const response = await axios.post('https://api.neon.tech/v1/data/satisfacao', req.body, {
            headers: {
                Authorization: 'cliente-avalia',
            },
        });

        console.log('Dados da pesquisa enviados com sucesso:', response.data);
        res.status(200).json({ message: 'Dados da pesquisa enviados com sucesso!' });
    } catch (error) {
        console.error('Erro ao enviar dados da pesquisa:', error.message);
        res.status(500).json({ error: 'Erro ao enviar dados da pesquisa.' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

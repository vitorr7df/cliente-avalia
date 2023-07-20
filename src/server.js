const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const { connect } = require('./database');

const port = process.env.PORT || 3000;


app.use('/css', express.static(path.join(__dirname, '../css')));
app.use('/img', express.static(path.join(__dirname, '../img')));
app.use('/js', express.static(path.join(__dirname, '../js')));

app.use(express.json());

app.get('/', (req, res) => {
    const indexPath = path.join(__dirname, '../index.html');
    res.sendFile(indexPath);
});

// Rota para receber e salvar os dados da pesquisa no banco de dados do Neon
app.post('/enviarPesquisa', (req, res) => {
    try {
        // Chama a função connect para salvar os dados no banco de dados
        connect(req.body);
        // console.log(formData)
        // Envia uma resposta de sucesso ao cliente
        res.status(200).json({ message: 'Dados da pesquisa enviados com sucesso!' });

    } catch (error) {
        console.error('Erro ao enviar dados da pesquisa:', error.message);
        res.status(500).json({ error: 'Erro ao enviar dados da pesquisa.' });
    }
});


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
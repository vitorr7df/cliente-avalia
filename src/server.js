// server.js
const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const { prismaClient } = require('./database');

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
app.post('/enviarPesquisa', async (req, res) => {
    try {
        // Salva os dados no banco de dados usando o Prisma
        await prismaClient.satisfacao.create({
            data: {
                pergunta_um: req.body.p1,
                pergunta_dois: req.body.p2,
                pergunta_tres: req.body.p3,
                pergunta_quatro: req.body.p4,
                pergunta_cinco: req.body.p5,
                obs: req.body.obs,
                nome: req.body.nome,
            },
        });

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

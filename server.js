const express = require('express');
const app = express();
const path = require('path'); // Importe o módulo 'path'

const port = 3000;

// Define os diretórios que contêm arquivos estáticos (CSS, imagens, scripts)
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/img', express.static(path.join(__dirname, 'img')));
app.use('/js', express.static(path.join(__dirname, 'js')));

app.get('/', (req, res) => {
    // Use a função 'path.join' para construir o caminho completo do arquivo index.html
    const indexPath = path.join(__dirname, 'index.html');

    // Envie o arquivo index.html como resposta
    res.sendFile(indexPath);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

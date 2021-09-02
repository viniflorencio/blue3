const express = require('express');
const app = express();
app.use(express.json());


const Conn = require('./models/conn/conn');

Conn("localhost", 27017, "Filmes");

const port = 3002;

const filme = require ('./routers/filmes.routes');
app.use('/filmes', filme);













app.listen(port,() =>{
    console.info(`rodando na porta ${port}`);
});

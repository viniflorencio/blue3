const express = require('express')
const app = express ();
app.use(express.json());


const Conn  = require('./models/conn/conn')

Conn("localhost", 27017, "musicas");

const port = 3000;

const musica = require('./routers/musicas.rote');
app.use('/musicas', musicas);









app.listen(port, ()=>{
    console.log('funcionando')
});

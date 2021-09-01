const express = require('express');
const router = express.Router();
const Musica = require('../models/musicas');

router.post("/add", async (req, res) => {
    await Musica.create(req.body)
    .then(() =>{
        res.status(200).send("musica adicionada")
    }).catch((err) =>{
        res.status(400).send('algo errado com a musica')
    })
});

router.get('/', (req, res) => {
    res.send("rota ok / musica");
});

router.put("/update", (req, res) => {
    res.send("rota /update musica");
});

router.delete("/delete", (req, res) => {
    res.send("rota /delete musica");
});


module.exports = router;
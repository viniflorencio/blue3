const express = require('express');
const router = express.Router();
const Filme = require('../models/filmes');




router.post("/add", async (req,res) =>{
    await Filme.create(req.body)
    .then(() =>{
        res.status(200).send("Filme adicionado");
    })
    .catch((err) =>{
        res.status(400).send("tente novamente");
        console.log(err);
    })
});

router.get("/", async (req, res) =>{
    await Filme.find({})
    .then((filmes) =>{
        res.status(200).send(filmes);
    })
    .catch((err) =>{
        res.status(400).send("tente novamente");
        console.log(err);
    })
});

router.put("/update/:id", async (req,res) =>{
    await Filme.updateOne({id: req.params.id}, req.body)
    .then(() =>{
        res.status(200).send('atualizado');
    })
    .catch((err) =>{
        res.status(400).send("tente novamente");
        console.log(err);
    })
});

router.delete("/delete/:id", async (req,res) =>{
    await Filme.deleteOne({id: req.params.id})
    .then(() =>{
        res.status(200).send('deletado');
    })
    .catch((err)=>{
        res.status(400).send('tente novamente');
        console.log(err)
    });
});


module.exports = router;



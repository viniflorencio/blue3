const mongoose = require('mongoose');

const filmeModel = new mongoose.Schema({
    nome: {type: String, required: true},
    descricao: {type: String, required: true},
    imagem: {type: String, required: true},
});

const Filme = mongoose.model("Filmes", filmeModel);

module.exports = Filme;
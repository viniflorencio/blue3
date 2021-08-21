
//EXERCICIO EXTRA{ concessionária

//lista1 modeloCarro  (onix, uno, toro)
//lista2 tipo do carro (SUV, Sedan, Hatch)
//lista3 tipo de combustível do carro (alcool, gasolina, flex, diesel)
//lista4 marca (chevrolet, fiat, citroen)
//lista5 ano do carro (1970, 2005, 2015)

//Criar um Endpoint para cada lista e CRUD respectivamente
//}



const express = require('express');
const { send } = require('process');
const app = express();


const port = 3002;

app.use(express.json());


const modeloCarro = [
    'onix',
    'uno',
    'toro',
];

const tipoCarro = [
    'SUV',
    'Sedan',
    'Hatch',
];

const combustivel = [
    'alcool',
    'gasolina',
    'flex',
    'diesel',
];

const marcaCarro = [
    'chevrolet',
    'fiat',
    'citroen',
];

const anoCarro = [
    '1970',
    '2005',
    '2015',
];


app.get('/', (req,res) =>{
    res.send ('Bem Vindo a concessionaria');
});

//CRUD MOODELO

app.get('/modelo', (req,res) =>{
    res.send(modeloCarro);

});

app.post('/modelo', (req,res)=>{
    const newModelo = req.body.newModelo;
    const id = modeloCarro.length;
    modeloCarro.push(newModelo);

    res.send(`modelo ${newModelo} adicionado com sucesso. o id do modelo é: ${id}`);
})

app.put('/modelo/:id', (req,res)=>{
    const id = req.params.id -1;
    const modelo = req.body.modelo;
    const modeloAnterior = modeloCarro[id];
    modeloCarro[id] = modelo;

    res.send(`Modelo ${modeloAnterior}, atualizado para ${modelo}`);

});

app.delete('/modelo/:id',(req,res)=>{
    const id = req.params.id - 1;
    const modelo = modeloCarro[id];
    if(!modelo){
        res.send('modelo nao encontrado');
    }
    delete modeloCarro[id];
    res.send("modelo excluido com sucesso");

});



//CRUD TIPO

app.get('/tipo', (req,res)=>{
    res.send(tipoCarro);

});

app.post('/tipo',(req,res)=>{
    const newTipo = req.body.newTipo;
    const id = tipoCarro.length;
    tipoCarro.push(newTipo);

    res.send(`tipo ${newTipo} adicionado com sucesso, id do tipo é ${id}`);
});

app.put('/tipo/:id', (req,res)=>{
    const id = req.params.id - 1;
    const tipo = req.body.tipo;
    const tipoAnterior = tipoCarro[id];
    tipoCarro[id] = tipo;

    res.send(`o tipo ${tipoAnterior} foi atualizado para ${tipo}`);

});

app.delete('/tipo/:id', (req,res)=>{
    const id = req.params.id -1;
    const tipo = tipoCarro[id];
    if(!tipo){
        res.send('tipo nao encontrado')
    }
    delete tipoCarro[id];
    res.send("Tipo excluido com sucesso");
});



//CRUD COMBUSTIVEL

app.get('/combustivel',(req,res) =>{
    res.send(combustivel);
});


//CRUD MARCA
app.get('/marca',(req, res)=>{
    res.send(marcaCarro);
});

//CRUD ANO

app.get('/ano',(req,res)=>{
    res.send(anoCarro);
});




app.listen(port, () =>{
    console.info(`App esta rodando em: http://localhost:${port}`);
}); 
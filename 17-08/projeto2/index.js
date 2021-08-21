
const express = require('express');
const app = express();


const port = 3001;

app.use(express.json());

const jogos = [
    'Counter-Strike',
    'League of Legends',
    'Xadrez',
    'Tibia',
]


app.get('/', (req,res) =>{
    res.send ('Bem Vindo ao site, lista de jogos');
});

app.get('/jogos', (req,res)=>{
    res.send(jogos);
});

app.get ('/jogos/:id',(req,res)=>{
    const id = req.params.id -1;
    const jogo = jogos[id];
    if(!jogo) {
        res.send('Jogo não Encontrado');
      }
      res.send(jogo);
    });


    // rota que cadastra um novo jogo.
// READ - GET
// CRIAR - POST
// UPDATE - PUT
// DELETE - DELETE

app.post('/jogos', (req, res) => {
  const jogo = req.body.jogo; 
  const id = jogos.length;
  jogos.push(jogo);

  res.send(`Jogo adicionado com sucesso: ${jogo}. 
  O ID do jogo é ${id}`)
});

app.put('/jogos/:id', (req, res) => {
  const id = req.params.id -1;
  const jogo = req.body.jogo;
  const nomeAnterior = jogos[id];
  jogos[id] = jogo;
  res.send(`jogo anterior: ${nomeAnterior}, atualizado com sucesso para: ${jogo}.`)
});

app.delete('/jogos/:id', (req, res) => {
  const id = req.params.id -1;
  const jogo = jogos[id];
  if(!jogo) {
    res.send('Jogo não Encontrado');
  }
  delete jogos[id];
  res.send("Jogo excluido com sucesso");
});

app.listen(port, () =>{
    console.info(`App esta rodando em: http://localhost:${port}`);
}); 
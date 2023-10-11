const MongoClient = require('mongodb').MongoClient;

var express = require('express')
const bodyParser = require('body-parser');
var app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', './views')

var db;

app.get("/", async (req, res) => {

    const ret = await db.collection('passagens').find().toArray();

    res.render('index', { viagens: ret })
})

app.post("/pesquisar", async (req, res) => {
    const origem = req.body.origem;
    const destino = req.body.destino;
    const valorde = req.body.valorde;
    const valorate = req.body.valorate;
    const datade = req.body.datade;
    const dataate = req.body.dataate;
    console.log(req.body);
    res.render('index', { viagens: viagens })
})

app.post("/cadastrar", async (req, res) => {

    const origem = req.body.origem;
    const destino = req.body.destino;
    const valor = req.body.valor;
    const data = req.body.data;

    const ret = await db.collection('passagens').insertOne({
        origem: origem,
        destino: destino,
        valor: valor,
        data: new Date(data)
    })

    console.log(ret);

    const novo = await db.collection('passagens').find().toArray();

    res.render('index', { viagens: novo })

})

app.get("/editar", async (req, res) => {

    const id = req.params._id;

    res.render('index', { viagens: viagens })

})

app.put("/editar", async (req, res) => {

    const id = req.params._id;

    res.render('index', { viagens: viagens })

})

app.get("/excluir", async (req, res) => {

    const id = req.params._id;
    res.render('index', { viagens: viagens })

})

const start = async () => {
    const url = 'mongodb+srv://teste:teste@cluster0.wnbdk2i.mongodb.net/?retryWrites=true&w=majority';
    let client = new MongoClient(url);
    await client.connect();
    console.log('Conectado mongodb');
    db = client.db('agencia-viagem');
    app.listen(8000, () => {
        console.log('Servidor iniciado porta 8000')
    });

}

start();
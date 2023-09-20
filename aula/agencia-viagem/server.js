var express = require('express')
const bodyParser = require('body-parser');
var app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', './views')


const viagens = [
    {
        _id: "650af68d7fcdb46fe08e36b4",
        origem: 'SP',
        destino: 'RJ',
        valor: '1000',
        data: new Date("2023-03-01T00:00:00.000Z")
    },
    {
        _id: "650b1cbf6ad28dfcf969bcc0",
        origem: 'SP',
        destino: 'MG',
        valor: '300',
        data: new Date("2023-10-02T00:00:00.000Z")
    },
    {
        _id: "650b2129dd28fa1137968aba",
        origem: 'MG',
        destino: 'RJ',
        valor: '200',
        data: new Date("2023-05-01T00:00:00.000Z")
    },
    {
        _id: "650b21632a36f18df4659a8b",
        origem: 'MG',
        destino: 'BA',
        valor: '340',
        data: new Date("2023-07-15T00:00:00.000Z")
    }
];

app.get("/", async (req, res) => {
    res.render('index', { viagens: viagens })
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

    res.render('index', { viagens: viagens })

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

    app.listen(8000, () => {
        console.log('Servidor iniciado porta 8000')
    });

}

start();
var express = require('express')
var app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', './views')

app.get("/", (req, res) => {
    res.render('index', { senhaAtual: 100, fila: "" })
})

app.get("/proximo", (req, res) => {
    res.status(200).send('Ok');
})

app.get("/retirar", (req, res) => {
    res.status(200).send('Ok');
})

app.listen(8000, () => {
    console.log('Servidor iniciado porta 8000')
});


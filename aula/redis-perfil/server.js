const redis = require('redis');
const jwt = require('jsonwebtoken');
var express = require('express')
const cookie = require('cookie-parser');
var app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(cookie())

// Cliente redis
const cli = redis.createClient({
    password: 'CHquhpuKvEiJVCZcJtjTRCPVJJCtnyXx',
    socket: {
        host: 'redis-16356.c92.us-east-1-3.ec2.cloud.redislabs.com',
        port: 16356
    }
});

app.get("/", (req, res) => {
    res.status(200).send('Ok');
})

app.post("/login", async (req, res) => {
    const username = req.body.username
    const senha = req.body.senha
    // verificar no redis se o usuario e valido
    const senhaUsuarioRedis = await cli.get('username:' + username);
    if (senhaUsuarioRedis && senhaUsuarioRedis === senha) {
        const token = jwt.sign({ username: username }, 'segredo')
        await cli.hSet(token, ['corfrente', '-', 'corfundo', '-'])
        res.cookie('token', token)
        res.sendFile(__dirname + "/public/perfil.html");
    } else {
        res.status(401).send('Usuario invalido');
    }
})

app.post("/perfil", async (req, res) => {
    const corFrente = req.body.corfrente
    const corFundo = req.body.corfundo
    // ler cookie para obter o token
    const token = req.cookies.token
    // persistir token mais corfrente e corfundo no redis
    await cli.hSet(token, ['corfrente', corFrente, 'corfundo', corFundo])
    res.status(200).send(corFrente + " - " + corFundo);
})

app.get("/setup", (req, res) => {
    cli.set('username:joao', '123')
    cli.set('username:edson', 'edson')
    res.status(200).send('Ok');
})

async function start() {
    await cli.connect() // aguarda ate que a conexao ao Redis seja estabelecida
    console.log('Conectado ao redis')
    app.listen(8888, () => {
        console.log('Servidor iniciado porta 8888')
    });
}

// inicia o servidor chamando a funcao start
start()

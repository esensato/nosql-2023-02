const MongoClient = require('mongodb').MongoClient;

async function test() {

    const url = 'mongodb+srv://teste:teste@cluster0.wnbdk2i.mongodb.net/?retryWrites=true&w=majority';

    let client = new MongoClient(url);

    await client.connect();

    const collection = client.db('imobiliaria').collection('imovel');

    const ret = await collection.insertOne({ tipo: "Apartamento", endereco: "Rua X, 123" });

    console.log(ret);


}

test();